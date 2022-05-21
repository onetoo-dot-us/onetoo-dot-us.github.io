/**
 * @jest-environment jsdom
 */

import { OnetooHeader } from './onetoo-header';
import { describe, it, expect } from '@jest/globals';
describe('onetoo-header', () => {
  it('is defined', () => {
    expect(customElements.get(OnetooHeader.tag)).toBeTruthy();
  });

  describe('child h1', () => {
    it('exists', () => {
      const component = new OnetooHeader();
      const h1 = component.querySelector('h1');

      expect(h1).toBeTruthy();
    });
  });
});
