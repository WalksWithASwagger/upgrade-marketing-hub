/**
 * Fetch mocking utilities for testing async data loading
 */

import { vi } from 'vitest';

export function mockFetchSuccess(responses = {}) {
  /**
   * Mock successful fetch responses
   *
   * @param responses - Map of URL to response data
   * @example
   * mockFetchSuccess({
   *   'data/config/programs.json': { "pr-comms": {...} }
   * });
   */
  global.fetch = vi.fn((url) => {
    const response = responses[url] || {};
    return Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(response)
    });
  });
}

export function mockFetchError(url, error) {
  /**
   * Mock fetch error for specific URL
   *
   * @param url - URL that should fail
   * @param error - Error to throw
   */
  global.fetch = vi.fn((reqUrl) => {
    if (reqUrl === url) {
      return Promise.reject(new Error(error));
    }
    return Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve({})
    });
  });
}

export function mockFetch404(url) {
  /**
   * Mock 404 response for specific URL
   *
   * @param url - URL that should return 404
   */
  global.fetch = vi.fn((reqUrl) => {
    if (reqUrl === url) {
      return Promise.resolve({
        ok: false,
        status: 404,
        json: () => Promise.reject(new Error('Not found'))
      });
    }
    return Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve({})
    });
  });
}

export function resetFetch() {
  /**
   * Clear all fetch mocks
   */
  if (global.fetch && global.fetch.mockClear) {
    global.fetch.mockClear();
  }
}
