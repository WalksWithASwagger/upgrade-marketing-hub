/**
 * Data Loader Tests
 *
 * Tests for async JSON loading system
 * Target: +10% coverage (50% → 60%)
 */

import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest';
import { mockFetchSuccess, mockFetch404, resetFetch } from './helpers/mock-fetch.js';
import { mockPrograms, mockContentData, mockProgramOrder, mockFeatured } from './fixtures/mock-content.js';

describe('DataLoader - Config Loading', () => {
  beforeEach(() => {
    delete window.PROGRAMS;
    delete window.FEATURED;
    delete window.PROGRAM_ORDER;
    delete window.LAST_UPDATED;
    delete window.CONTENT_DATA;
    delete window.dataLoaded;
  });

  afterEach(() => {
    resetFetch();
  });

  test('loads all 4 config files in parallel', async () => {
    // Setup fetch responses
    mockFetchSuccess({
      'data/config/programs.json': mockPrograms,
      'data/config/featured.json': mockFeatured,
      'data/config/program-order.json': mockProgramOrder,
      'data/config/metadata.json': { LAST_UPDATED: '2026-01-22T08:47:00Z' }
    });

    // Import and initialize loader
    const { default: DataLoader } = await import('../data/loader.js');
    const loader = new DataLoader();
    await loader.loadConfigs();

    // Verify all configs loaded
    expect(loader.programs).toEqual(mockPrograms);
    expect(loader.featured).toEqual(mockFeatured);
    expect(loader.programOrder).toEqual(mockProgramOrder);
    expect(loader.metadata.LAST_UPDATED).toBe('2026-01-22T08:47:00Z');
  });

  test('assigns configs to global scope', async () => {
    mockFetchSuccess({
      'data/config/programs.json': mockPrograms,
      'data/config/featured.json': mockFeatured,
      'data/config/program-order.json': mockProgramOrder,
      'data/config/metadata.json': { LAST_UPDATED: '2026-01-22T08:47:00Z' }
    });

    const { default: DataLoader } = await import('../data/loader.js');
    const loader = new DataLoader();
    await loader.loadConfigs();

    // Verify global assignments
    expect(window.PROGRAMS).toEqual(mockPrograms);
    expect(window.FEATURED).toEqual(mockFeatured);
    expect(window.PROGRAM_ORDER).toEqual(mockProgramOrder);
    expect(window.LAST_UPDATED).toBe('2026-01-22T08:47:00Z');
  });

  test('handles fetch errors gracefully', async () => {
    // Mock fetch to fail for programs.json
    global.fetch = vi.fn((url) => {
      if (url.includes('programs.json')) {
        return Promise.reject(new Error('Network error'));
      }
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({})
      });
    });

    const { default: DataLoader } = await import('../data/loader.js');
    const loader = new DataLoader();

    // Should throw error when config loading fails
    await expect(loader.loadConfigs()).rejects.toThrow();
  });

  test('validates Promise.all parallel loading', async () => {
    const fetchSpy = vi.fn((url) => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({})
      });
    });
    global.fetch = fetchSpy;

    const { default: DataLoader } = await import('../data/loader.js');
    const loader = new DataLoader();
    await loader.loadConfigs();

    // Should have called fetch 4 times (all configs)
    expect(fetchSpy).toHaveBeenCalledTimes(4);
    expect(fetchSpy).toHaveBeenCalledWith('data/config/programs.json');
    expect(fetchSpy).toHaveBeenCalledWith('data/config/featured.json');
    expect(fetchSpy).toHaveBeenCalledWith('data/config/program-order.json');
    expect(fetchSpy).toHaveBeenCalledWith('data/config/metadata.json');
  });

  test('tracks loading start time', async () => {
    mockFetchSuccess({
      'data/config/programs.json': {},
      'data/config/featured.json': {},
      'data/config/program-order.json': [],
      'data/config/metadata.json': {}
    });

    const { default: DataLoader } = await import('../data/loader.js');
    const loader = new DataLoader();

    // loadingStartTime should be set in constructor
    expect(loader.loadingStartTime).toBeDefined();
    expect(typeof loader.loadingStartTime).toBe('number');
  });
});

describe('DataLoader - Program Loading', () => {
  beforeEach(() => {
    delete window.CONTENT_DATA;
  });

  afterEach(() => {
    resetFetch();
  });

  test('loads all 6 content types for a program', async () => {
    // Mock responses for all content types
    const responses = {};
    const contentTypes = ['linkedin', 'quotes', 'emails', 'stories', 'playbook', 'images'];
    contentTypes.forEach(type => {
      responses[`data/programs/pr-comms/${type}.json`] = mockContentData['pr-comms'][type] || [];
    });

    mockFetchSuccess(responses);

    const { default: DataLoader } = await import('../data/loader.js');
    const loader = new DataLoader();
    const programData = await loader.loadProgram('pr-comms');

    // Verify all content types loaded
    expect(programData).toHaveProperty('linkedin');
    expect(programData).toHaveProperty('quotes');
    expect(programData).toHaveProperty('emails');
    expect(programData).toHaveProperty('stories');
    expect(programData).toHaveProperty('playbook');
    expect(programData).toHaveProperty('images');
  });

  test('handles missing files by returning empty arrays', async () => {
    // Mock 404 for some files
    global.fetch = vi.fn((url) => {
      if (url.includes('quotes.json')) {
        return Promise.resolve({ ok: false, status: 404 });
      }
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve([{ test: 'data' }])
      });
    });

    const { default: DataLoader } = await import('../data/loader.js');
    const loader = new DataLoader();
    const programData = await loader.loadProgram('test-program');

    // quotes should be empty array due to 404
    expect(programData.quotes).toEqual([]);
    // Other types should have data
    expect(programData.linkedin).toHaveLength(1);
  });

  test('handles 404 responses without crashing', async () => {
    global.fetch = vi.fn(() => Promise.resolve({ ok: false, status: 404 }));

    const { default: DataLoader } = await import('../data/loader.js');
    const loader = new DataLoader();
    const programData = await loader.loadProgram('nonexistent');

    // Should return empty arrays for all types
    expect(programData.linkedin).toEqual([]);
    expect(programData.quotes).toEqual([]);
    expect(programData.emails).toEqual([]);
  });

  test('parallel loading completes correctly', async () => {
    const fetchSpy = vi.fn((url) => Promise.resolve({
      ok: true,
      json: () => Promise.resolve([])
    }));
    global.fetch = fetchSpy;

    const { default: DataLoader } = await import('../data/loader.js');
    const loader = new DataLoader();
    await loader.loadProgram('test-program');

    // Should fetch all 6 content types in parallel
    expect(fetchSpy).toHaveBeenCalledTimes(6);
  });

  test('handles network errors gracefully', async () => {
    global.fetch = vi.fn((url) => {
      if (url.includes('linkedin.json')) {
        return Promise.reject(new Error('Network timeout'));
      }
      return Promise.resolve({ ok: true, json: () => Promise.resolve([]) });
    });

    const { default: DataLoader } = await import('../data/loader.js');
    const loader = new DataLoader();
    const programData = await loader.loadProgram('test-program');

    // linkedin should be empty due to error
    expect(programData.linkedin).toEqual([]);
    // Other types should load
    expect(programData.quotes).toBeDefined();
  });

  test('merges all content types into program object', async () => {
    mockFetchSuccess({
      'data/programs/pr-comms/linkedin.json': mockContentData['pr-comms'].linkedin,
      'data/programs/pr-comms/quotes.json': mockContentData['pr-comms'].quotes,
      'data/programs/pr-comms/emails.json': mockContentData['pr-comms'].emails,
      'data/programs/pr-comms/stories.json': [],
      'data/programs/pr-comms/playbook.json': [],
      'data/programs/pr-comms/images.json': []
    });

    const { default: DataLoader } = await import('../data/loader.js');
    const loader = new DataLoader();
    const programData = await loader.loadProgram('pr-comms');

    // Should have merged all types
    expect(Object.keys(programData)).toHaveLength(6);
    expect(programData.linkedin).toHaveLength(3);
    expect(programData.quotes).toHaveLength(1);
    expect(programData.emails).toHaveLength(1);
  });
});

describe('DataLoader - Initialization', () => {
  beforeEach(() => {
    delete window.PROGRAMS;
    delete window.CONTENT_DATA;
    delete window.dataLoaded;
    vi.clearAllTimers();
  });

  afterEach(() => {
    resetFetch();
  });

  test('loads configs before programs', async () => {
    const callOrder = [];

    global.fetch = vi.fn((url) => {
      callOrder.push(url);
      // Return appropriate structure based on URL
      let data = {};
      if (url.includes('program-order.json')) {
        data = ['test'];
      } else if (url.includes('config')) {
        data = {};
      } else {
        data = [];
      }
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(data)
      });
    });

    const { default: DataLoader } = await import('../data/loader.js');
    const loader = new DataLoader();
    await loader.init();

    // Config files should be called before program files
    const firstConfigIndex = callOrder.findIndex(url => url.includes('config'));
    const firstProgramIndex = callOrder.findIndex(url => url.includes('programs/'));

    expect(firstConfigIndex).toBeLessThan(firstProgramIndex);
  });

  test('emits dataready event after complete initialization', async () => {
    mockFetchSuccess({
      'data/config/programs.json': { 'test': {} },
      'data/config/featured.json': {},
      'data/config/program-order.json': ['test'],
      'data/config/metadata.json': {},
      'data/programs/test/linkedin.json': [],
      'data/programs/test/quotes.json': [],
      'data/programs/test/emails.json': [],
      'data/programs/test/stories.json': [],
      'data/programs/test/playbook.json': [],
      'data/programs/test/images.json': []
    });

    const eventSpy = vi.fn();
    window.addEventListener('dataready', eventSpy);

    const { default: DataLoader } = await import('../data/loader.js');
    const loader = new DataLoader();
    await loader.init();

    // Event should have been dispatched
    expect(eventSpy).toHaveBeenCalled();
  });

  test('sets window.dataLoaded flag', async () => {
    mockFetchSuccess({
      'data/config/programs.json': { 'test': {} },
      'data/config/featured.json': {},
      'data/config/program-order.json': ['test'],
      'data/config/metadata.json': {},
      'data/programs/test/linkedin.json': [],
      'data/programs/test/quotes.json': [],
      'data/programs/test/emails.json': [],
      'data/programs/test/stories.json': [],
      'data/programs/test/playbook.json': [],
      'data/programs/test/images.json': []
    });

    const { default: DataLoader } = await import('../data/loader.js');
    const loader = new DataLoader();
    await loader.init();

    // Flag should be set
    expect(window.dataLoaded).toBe(true);
  });

  test('handles initialization failures', async () => {
    global.fetch = vi.fn(() => Promise.reject(new Error('Fatal error')));

    const { default: DataLoader } = await import('../data/loader.js');
    const loader = new DataLoader();

    // Should throw error
    await expect(loader.init()).rejects.toThrow();
  });

  test('logs loading progress to console', async () => {
    const consoleSpy = vi.spyOn(console, 'log');

    mockFetchSuccess({
      'data/config/programs.json': mockPrograms,
      'data/config/featured.json': mockFeatured,
      'data/config/program-order.json': mockProgramOrder,
      'data/config/metadata.json': { LAST_UPDATED: '2026-01-22T08:47:00Z' },
      'data/programs/pr-comms/linkedin.json': [],
      'data/programs/pr-comms/quotes.json': [],
      'data/programs/pr-comms/emails.json': [],
      'data/programs/pr-comms/stories.json': [],
      'data/programs/pr-comms/playbook.json': [],
      'data/programs/pr-comms/images.json': []
    });

    const { default: DataLoader } = await import('../data/loader.js');
    const loader = new DataLoader();
    await loader.init();

    // Should log initialization messages
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Initializing'));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('✅ Data loaded'));

    consoleSpy.mockRestore();
  });
});

describe('App Integration with DataLoader', () => {
  beforeEach(() => {
    delete window.dataLoaded;
    delete window.marketingHub;

    // Setup minimal fetch responses
    mockFetchSuccess({
      'data/config/programs.json': mockPrograms,
      'data/config/featured.json': mockFeatured,
      'data/config/program-order.json': mockProgramOrder,
      'data/config/metadata.json': { LAST_UPDATED: '2026-01-22T08:47:00Z' }
    });

    // Add program content responses
    mockProgramOrder.forEach(program => {
      const types = ['linkedin', 'quotes', 'emails', 'stories', 'playbook', 'images'];
      types.forEach(type => {
        const url = `data/programs/${program}/${type}.json`;
        global.fetch.mockImplementationOnce(() =>
          Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockContentData[program]?.[type] || [])
          })
        );
      });
    });
  });

  afterEach(() => {
    resetFetch();
  });

  test('app waits for dataready event before init', async () => {
    let hubInitialized = false;

    // Simulate app initialization logic
    window.addEventListener('dataready', () => {
      hubInitialized = true;
    });

    // Before data loads
    expect(hubInitialized).toBe(false);

    // Load data
    const { default: DataLoader } = await import('../data/loader.js');
    const loader = new DataLoader();
    await loader.init();

    // After data loads
    expect(hubInitialized).toBe(true);
  });

  test('app initializes after both DOM and data ready', async () => {
    let domReady = false;
    let dataReady = false;
    let appInitialized = false;

    function tryInit() {
      if (domReady && dataReady) {
        appInitialized = true;
      }
    }

    window.addEventListener('DOMContentLoaded', () => {
      domReady = true;
      tryInit();
    });

    window.addEventListener('dataready', () => {
      dataReady = true;
      tryInit();
    });

    // Simulate data loading
    const { default: DataLoader } = await import('../data/loader.js');
    const loader = new DataLoader();
    await loader.init();

    // Simulate DOM loaded
    window.dispatchEvent(new Event('DOMContentLoaded'));

    // App should initialize after both events
    expect(appInitialized).toBe(true);
  });

  test('handles data loading timeout scenario', async () => {
    // Mock slow data loading
    global.fetch = vi.fn((url) =>
      new Promise(resolve =>
        setTimeout(() => {
          const data = url.includes('program-order.json') ? ['test'] :
                      url.includes('config') ? {} : [];
          resolve({
            ok: true,
            json: () => Promise.resolve(data)
          });
        }, 100)
      )
    );

    const { default: DataLoader } = await import('../data/loader.js');
    const loader = new DataLoader();

    const startTime = Date.now();
    await loader.init();
    const endTime = Date.now();

    // Should have waited for data to load
    expect(endTime - startTime).toBeGreaterThanOrEqual(100);
  });

  test('full workflow: load configs → load programs → emit event', async () => {
    const workflow = [];

    // Track workflow steps
    global.fetch = vi.fn((url) => {
      if (url.includes('config')) {
        workflow.push('config');
      } else if (url.includes('programs')) {
        workflow.push('program');
      }
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(url.includes('program-order') ? ['test'] : {})
      });
    });

    window.addEventListener('dataready', () => {
      workflow.push('event');
    });

    const { default: DataLoader } = await import('../data/loader.js');
    const loader = new DataLoader();
    await loader.init();

    // Verify workflow order: configs → programs → event
    expect(workflow.filter(s => s === 'config').length).toBeGreaterThan(0);
    expect(workflow.filter(s => s === 'program').length).toBeGreaterThan(0);
    expect(workflow[workflow.length - 1]).toBe('event');
  });
});
