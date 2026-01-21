/**
 * The Upgrade AI - Marketing Hub
 * Main application logic
 */

class MarketingHub {
    constructor() {
        this.currentProgram = 'all-programs';
        this.currentType = 'linkedin';
        this.searchTerm = '';
        this.selectedCategory = '';
        this.showInDev = false;
        
        this.init();
    }

    init() {
        this.renderFeatured();
        this.renderPrograms();
        this.renderContent();
        this.bindEvents();
        this.updateStats();
    }

    // ==========================================
    // Featured Section
    // ==========================================

    renderFeatured() {
        if (typeof FEATURED === 'undefined') return;

        const grid = document.getElementById('featuredGrid');
        const title = document.getElementById('featuredTitle');
        const subtitle = document.getElementById('featuredSubtitle');

        if (title) title.textContent = FEATURED.title;
        if (subtitle) subtitle.textContent = FEATURED.subtitle;

        if (!grid) return;
        grid.innerHTML = '';

        FEATURED.items.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'featured-card';
            card.dataset.number = item.number;
            card.dataset.type = item.type;
            card.dataset.program = FEATURED.program;

            card.innerHTML = `
                <div class="featured-card-title">${this.escapeHtml(item.title)}</div>
                <div class="featured-card-preview">${this.escapeHtml(item.preview)}</div>
                <div class="featured-card-actions">
                    <button class="btn btn-ghost featured-copy" title="Copy to clipboard">
                        <i class="fas fa-copy"></i>
                        <span>Copy</span>
                    </button>
                    <button class="btn btn-secondary featured-view" title="View full post">
                        <i class="fas fa-expand"></i>
                        <span>View</span>
                    </button>
                </div>
            `;

            grid.appendChild(card);
        });
    }

    // ==========================================
    // Rendering
    // ==========================================

    renderPrograms() {
        const container = document.getElementById('programList');
        container.innerHTML = '';

        const priorityOrder = ['all-programs', 'pr-comms', 'creative-pros', 'journalists', 'sales-leaders'];
        const rank = (k) => {
            const i = priorityOrder.indexOf(k);
            return i === -1 ? 1000 : i;
        };
        const visiblePrograms = Object.entries(PROGRAMS)
            .filter(([key, program]) => this.showInDev || program.status !== 'in-development')
            .sort((a, b) => rank(a[0]) - rank(b[0]));

        // Ensure current program is visible
        if (!visiblePrograms.some(([k]) => k === this.currentProgram)) {
            this.currentProgram = visiblePrograms[0]?.[0] || this.currentProgram;
        }

        visiblePrograms.forEach(([key, program]) => {
            const item = document.createElement('div');
            item.className = `program-item ${key === this.currentProgram ? 'active' : ''}`;
            item.dataset.program = key;
            
            const contentCount = this.getContentCount(key);
            
            item.innerHTML = `
                <div class="program-icon ${program.color}">
                    <i class="${program.icon}"></i>
                </div>
                <div class="program-info">
                    <div class="program-name">${program.name}</div>
                    <div class="program-count">${contentCount} items</div>
                </div>
            `;
            
            container.appendChild(item);
        });
    }

    renderContent() {
        const container = document.getElementById('contentGrid');
        const content = this.getFilteredContent();
        
        if (content.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-inbox"></i>
                    <h3>No content found</h3>
                    <p>Try adjusting your search or filters</p>
                </div>
            `;
            return;
        }

        container.innerHTML = '';
        
        content.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'content-card';
            card.dataset.index = index;
            
            card.innerHTML = `
                <div class="card-header">
                    <span class="card-category">${item.category || this.currentType}</span>
                    <span class="card-number">#${item.number || index + 1}</span>
                </div>
                <div class="card-body">
                    <h3 class="card-title">${this.escapeHtml(item.title)}</h3>
                    <p class="card-preview">${this.escapeHtml(item.preview)}</p>
                </div>
                <div class="card-footer">
                    <div class="card-meta">
                        <i class="fas fa-text-height"></i>
                        <span>${item.wordCount || 0} words</span>
                    </div>
                    <div class="card-actions">
                        <button class="card-action copy-btn" data-index="${index}" title="Copy">
                            <i class="fas fa-copy"></i>
                        </button>
                    </div>
                </div>
            `;
            
            container.appendChild(card);
        });

        // Update category filter options
        this.updateCategoryFilter(content);
    }

    updateCategoryFilter(content) {
        const filter = document.getElementById('categoryFilter');
        const categories = [...new Set(content.map(item => item.category).filter(Boolean))];
        
        filter.innerHTML = '<option value="">All Categories</option>';
        categories.forEach(cat => {
            filter.innerHTML += `<option value="${cat}">${cat}</option>`;
        });
    }

    updateStats() {
        // Stats are static for now, could be dynamic if needed
    }

    // ==========================================
    // Data Helpers
    // ==========================================

    getContentCount(program) {
        const data = CONTENT_DATA[program];
        if (!data) return 0;
        
        let count = 0;
        Object.values(data).forEach(typeContent => {
            if (Array.isArray(typeContent)) {
                count += typeContent.length;
            }
        });
        return count;
    }

    getFilteredContent() {
        const data = CONTENT_DATA[this.currentProgram];
        if (!data) return [];

        let content = data[this.currentType] || [];
        
        // Apply search filter
        if (this.searchTerm) {
            const term = this.searchTerm.toLowerCase();
            content = content.filter(item => 
                (item.title && item.title.toLowerCase().includes(term)) ||
                (item.content && item.content.toLowerCase().includes(term)) ||
                (item.preview && item.preview.toLowerCase().includes(term))
            );
        }

        // Apply category filter
        if (this.selectedCategory) {
            content = content.filter(item => item.category === this.selectedCategory);
        }

        return content;
    }

    getCurrentContent() {
        return this.getFilteredContent();
    }

    // ==========================================
    // Event Handlers
    // ==========================================

    bindEvents() {
        // Program selection
        document.getElementById('programList').addEventListener('click', (e) => {
            const item = e.target.closest('.program-item');
            if (item) {
                this.currentProgram = item.dataset.program;
                this.renderPrograms();
                this.renderContent();
            }
        });

        // Tab selection
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                this.currentType = tab.dataset.type;
                this.renderContent();
            });
        });

        // Search
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.searchTerm = e.target.value;
            this.debounce(() => this.renderContent(), 300);
        });

        // Category filter
        document.getElementById('categoryFilter').addEventListener('change', (e) => {
            this.selectedCategory = e.target.value;
            this.renderContent();
        });

        // In-development toggle
        const showInDevEl = document.getElementById('showInDev');
        if (showInDevEl) {
            showInDevEl.addEventListener('change', (e) => {
                this.showInDev = e.target.checked;
                this.renderPrograms();
                this.renderContent();
            });
        }

        // Featured section events
        document.getElementById('featuredGrid')?.addEventListener('click', (e) => {
            const card = e.target.closest('.featured-card');
            if (!card) return;

            const copyBtn = e.target.closest('.featured-copy');
            const viewBtn = e.target.closest('.featured-view');

            if (copyBtn) {
                this.copyFeaturedItem(card);
            } else if (viewBtn || !e.target.closest('button')) {
                this.viewFeaturedItem(card);
            }
        });

        document.getElementById('viewAllFeatured')?.addEventListener('click', () => {
            if (typeof FEATURED !== 'undefined') {
                this.currentProgram = FEATURED.program;
                this.currentType = 'linkedin';
                this.renderPrograms();
                this.renderContent();
                document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
            }
        });

// Stats toggle
        document.getElementById('contractorBtn')?.addEventListener('click', () => {
            document.getElementById('contractorModal')?.classList.add('visible');
        });
        document.getElementById('contractorClose')?.addEventListener('click', () => {
            document.getElementById('contractorModal')?.classList.remove('visible');
        });
        document.querySelector('#contractorModal .modal-backdrop')?.addEventListener('click', () => {
            document.getElementById('contractorModal')?.classList.remove('visible');
        });
        document.getElementById('contractorCopy')?.addEventListener('click', async () => {
            const text = document.getElementById('contractorBrief')?.innerText || '';
            if (!text) return;
            await navigator.clipboard.writeText(text);
            this.showToast('Copied to clipboard!');
        });

        document.getElementById('statsBtn').addEventListener('click', () => {
            document.getElementById('statsPanel').classList.toggle('visible');
        });

        // Card click - preview
        document.getElementById('contentGrid').addEventListener('click', (e) => {
            // Handle copy button
            const copyBtn = e.target.closest('.copy-btn');
            if (copyBtn) {
                e.stopPropagation();
                const index = parseInt(copyBtn.dataset.index);
                this.copyContent(index);
                return;
            }

            // Handle card click - show preview
            const card = e.target.closest('.content-card');
            if (card) {
                const index = parseInt(card.dataset.index);
                this.showPreview(index);
            }
        });

        // Copy all button
        document.getElementById('copyAllBtn').addEventListener('click', () => {
            this.copyAllContent();
        });

        // Modal close
        document.getElementById('modalClose').addEventListener('click', () => {
            this.closeModal('previewModal');
        });

        document.getElementById('exportModalClose').addEventListener('click', () => {
            this.closeModal('exportModal');
        });

        // Modal backdrop click
        document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
            backdrop.addEventListener('click', () => {
                this.closeModal('previewModal');
                this.closeModal('exportModal');
            });
        });

        // Modal copy button
        document.getElementById('modalCopy').addEventListener('click', () => {
            const content = this.currentPreviewContent;
            if (content) {
                this.copyToClipboard(content);
            }
        });

        // Modal export button
        document.getElementById('modalExport').addEventListener('click', () => {
            this.closeModal('previewModal');
            this.showExportModal();
        });

        // Export options
        document.querySelectorAll('.export-option').forEach(option => {
            option.addEventListener('click', () => {
                const format = option.dataset.format;
                this.exportContent(format);
                this.closeModal('exportModal');
            });
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal('previewModal');
                this.closeModal('exportModal');
            }
        });
    }

    // ==========================================
    // Actions
    // ==========================================

    showPreview(index) {
        const content = this.getCurrentContent()[index];
        if (!content) return;

        const modal = document.getElementById('previewModal');
        document.getElementById('modalTitle').textContent = content.title || 'Content Preview';
        document.getElementById('modalBody').innerHTML = `<pre>${this.escapeHtml(content.content || content.preview)}</pre>`;
        
        this.currentPreviewContent = content.content || content.preview;
        modal.classList.add('visible');
    }

    closeModal(modalId) {
        document.getElementById(modalId).classList.remove('visible');
    }

    showExportModal() {
        document.getElementById('exportModal').classList.add('visible');
    }

    copyContent(index) {
        const content = this.getCurrentContent()[index];
        if (content) {
            this.copyToClipboard(content.content || content.preview);
        }
    }

    copyAllContent() {
        const content = this.getCurrentContent();
        const allText = content.map((item, i) => 
            `--- ${i + 1}. ${item.title || 'Untitled'} ---\n\n${item.content || item.preview}`
        ).join('\n\n');
        
        this.copyToClipboard(allText);
    }

    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            this.showToast('Copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy:', err);
            this.showToast('Failed to copy', 'error');
        });
    }

    showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        document.getElementById('toastMessage').textContent = message;
        toast.classList.add('visible');
        
        setTimeout(() => {
            toast.classList.remove('visible');
        }, 2500);
    }

    exportContent(format) {
        const content = this.getCurrentContent();
        const program = PROGRAMS[this.currentProgram];
        let data, filename, mimeType;

        switch (format) {
            case 'buffer':
                data = this.toBufferCSV(content);
                filename = `${this.currentProgram}-${this.currentType}-buffer.csv`;
                mimeType = 'text/csv';
                break;
            case 'beehiiv':
                data = this.toBeehiivJSON(content);
                filename = `${this.currentProgram}-${this.currentType}-beehiiv.json`;
                mimeType = 'application/json';
                break;
            case 'markdown':
                data = this.toMarkdown(content, program);
                filename = `${this.currentProgram}-${this.currentType}.md`;
                mimeType = 'text/markdown';
                break;
            case 'json':
            default:
                data = JSON.stringify(content, null, 2);
                filename = `${this.currentProgram}-${this.currentType}.json`;
                mimeType = 'application/json';
        }

        this.downloadFile(data, filename, mimeType);
        this.showToast(`Exported as ${format.toUpperCase()}`);
    }

    toBufferCSV(content) {
        const headers = ['Text', 'Category'];
        const rows = content.map(item => [
            `"${(item.content || item.preview || '').replace(/"/g, '""')}"`,
            `"${item.category || this.currentType}"`
        ]);
        return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    }

    toBeehiivJSON(content) {
        return JSON.stringify(content.map((item, i) => ({
            emailNumber: i + 1,
            subject: item.title || `Email ${i + 1}`,
            timing: item.timing || '+1 day',
            bodyHtml: `<p>${(item.content || item.preview || '').replace(/\n/g, '</p><p>')}</p>`,
            bodyPlainText: item.content || item.preview || ''
        })), null, 2);
    }

    toMarkdown(content, program) {
        const header = `# ${program.name} - ${this.currentType.charAt(0).toUpperCase() + this.currentType.slice(1)}\n\n`;
        const body = content.map((item, i) => 
            `## ${i + 1}. ${item.title || 'Untitled'}\n\n${item.content || item.preview}\n\n---\n`
        ).join('\n');
        return header + body;
    }

    downloadFile(data, filename, mimeType) {
        const blob = new Blob([data], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // ==========================================
    // Featured Section Helpers
    // ==========================================

    copyFeaturedItem(card) {
        const number = parseInt(card.dataset.number);
        const type = card.dataset.type;
        const program = card.dataset.program;

        const content = CONTENT_DATA[program]?.[type]?.find(item => item.number === number);
        if (content) {
            navigator.clipboard.writeText(content.content || content.preview || '');
            this.showToast('Copied to clipboard!');
        }
    }

    viewFeaturedItem(card) {
        const number = parseInt(card.dataset.number);
        const type = card.dataset.type;
        const program = card.dataset.program;

        const content = CONTENT_DATA[program]?.[type]?.find(item => item.number === number);
        if (content) {
            const modal = document.getElementById('previewModal');
            document.getElementById('modalTitle').textContent = content.title || 'Content Preview';
            document.getElementById('modalBody').innerHTML = `<pre>${this.escapeHtml(content.content || content.preview)}</pre>`;
            this.currentPreviewContent = content.content || content.preview;
            modal.classList.add('visible');
        }
    }

    // ==========================================
    // Utilities
    // ==========================================

    escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    debounce(fn, delay) {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(fn, delay);
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    window.marketingHub = new MarketingHub();
});
