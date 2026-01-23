/**
 * Vitest global setup
 *
 * Runs before all tests to configure test environment
 */

import { beforeEach, afterEach, vi } from 'vitest';

// Setup DOM elements before each test
beforeEach(() => {
  // Create minimal DOM structure
  document.body.innerHTML = `
    <div id="featuredGrid"></div>
    <div id="featuredTitle"></div>
    <div id="featuredSubtitle"></div>
    <div id="programList"></div>
    <div id="contentGrid"></div>
    <div id="contentTabs"></div>
    <input id="searchInput" />
    <select id="categoryFilter"></select>
    <select id="sortSelect"></select>
    <button id="copyAllBtn"><span>Copy All</span></button>
    <button id="statsBtn">Stats</button>
    <div id="statsPanel"></div>
    <div id="totalPosts"></div>
    <div id="totalEmails"></div>
    <div id="totalQuotes"></div>
    <div id="totalStories"></div>
    <div id="totalImages"></div>
    <div id="totalPrograms"></div>
    <div id="lastUpdated"></div>
    <div id="previewModal" class="modal">
      <div id="modalTitle"></div>
      <div id="modalBody"></div>
      <button id="modalClose">Close</button>
      <button id="modalCopy">Copy</button>
      <button id="modalExport">Export</button>
    </div>
    <div id="exportModal" class="modal">
      <button id="exportModalClose">Close</button>
      <div id="exportOptions"></div>
    </div>
    <div id="toast">
      <span id="toastMessage"></span>
    </div>
  `;

  // Mock clipboard API (use defineProperty for read-only property)
  Object.defineProperty(navigator, 'clipboard', {
    value: {
      writeText: vi.fn(() => Promise.resolve())
    },
    writable: true,
    configurable: true
  });
});

// Cleanup after each test
afterEach(() => {
  vi.clearAllMocks();
  document.body.innerHTML = '';
});
