/**
 * Modular Data Loader
 *
 * Loads 52 JSON files and assigns to global scope.
 * Replaces monolithic 31K-line data.js with modular architecture.
 *
 * Benefits:
 * - Smaller files (largest: 79KB vs 1.2MB)
 * - Better git diffs (edit only what changed)
 * - Parallel loading (faster)
 * - Schema validation possible
 *
 * Backward Compatibility:
 * Exposes same global variables as old data.js:
 * - window.PROGRAMS
 * - window.FEATURED
 * - window.PROGRAM_ORDER
 * - window.LAST_UPDATED
 * - window.CONTENT_DATA
 */

class DataLoader {
    constructor() {
        this.programs = null;
        this.featured = null;
        this.programOrder = null;
        this.metadata = null;
        this.contentData = {};
        this.loadingStartTime = Date.now();
    }

    async loadConfigs() {
        console.log('Loading configurations...');

        try {
            const configs = await Promise.all([
                fetch('data/config/programs.json').then(r => r.json()),
                fetch('data/config/featured.json').then(r => r.json()),
                fetch('data/config/program-order.json').then(r => r.json()),
                fetch('data/config/metadata.json').then(r => r.json())
            ]);

            [this.programs, this.featured, this.programOrder, this.metadata] = configs;

            // Assign to global scope for backward compatibility
            window.PROGRAMS = this.programs;
            window.FEATURED = this.featured;
            window.PROGRAM_ORDER = this.programOrder;
            window.LAST_UPDATED = this.metadata.LAST_UPDATED;

            console.log(`  ✅ Loaded ${Object.keys(this.programs).length} program definitions`);

        } catch (error) {
            console.error('Error loading configs:', error);
            throw error;
        }
    }

    async loadProgram(programKey) {
        const contentTypes = ['linkedin', 'quotes', 'emails', 'stories', 'playbook', 'images'];
        const programData = {};

        const promises = contentTypes.map(async (type) => {
            try {
                const response = await fetch(`data/programs/${programKey}/${type}.json`);
                if (response.ok) {
                    programData[type] = await response.json();
                } else {
                    programData[type] = []; // Empty if file missing or 404
                }
            } catch (e) {
                programData[type] = []; // Empty on error
            }
        });

        await Promise.all(promises);
        return programData;
    }

    async loadAllPrograms() {
        console.log('Loading program content...');

        const programKeys = this.programOrder;

        // Load all programs in parallel for speed
        const promises = programKeys.map(async (key) => {
            const data = await this.loadProgram(key);
            this.contentData[key] = data;

            // Count items
            const totalItems = Object.values(data).reduce((sum, items) => {
                return sum + (Array.isArray(items) ? items.length : 0);
            }, 0);

            console.log(`  ✅ ${key}: ${totalItems} items`);
        });

        await Promise.all(promises);

        // Assign to global scope
        window.CONTENT_DATA = this.contentData;

        console.log(`  ✅ Loaded ${programKeys.length} programs`);
    }

    async init() {
        console.log('🚀 Initializing Marketing Hub Data...');
        console.log();

        try {
            // Load configurations first
            await this.loadConfigs();

            // Then load all program content
            await this.loadAllPrograms();

            const loadTime = Date.now() - this.loadingStartTime;
            console.log();
            console.log(`✅ Data loaded successfully in ${loadTime}ms`);
            console.log(`   52 JSON files | ${Object.keys(this.contentData).length} programs`);
            console.log();

            // Signal that data is ready
            window.dataLoaded = true;
            window.dispatchEvent(new Event('dataready'));

        } catch (error) {
            console.error('❌ Fatal error loading data:', error);
            console.error('The marketing hub cannot function without data.');
            throw error;
        }
    }
}

// Auto-initialize when script loads
const loader = new DataLoader();
loader.init();
