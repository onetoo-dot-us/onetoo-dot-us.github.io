/**
 * @jest-environment jsdom
 */

import { describe, expect, it } from '@jest/globals';
import { OnetooDl } from './onetoo-dl';

describe('onetoo-dl', () => {
  it('exists in custom element registry', () => {
    expect(customElements.get(OnetooDl.tag)).toBeTruthy();
  });

  describe('child dl element', () => {
    it('exists', () => {
      const component = new OnetooDl();
      const dl = component.querySelector('dl');

      expect(dl).toBeTruthy();
    });

    describe('child dt', () => {
      it('exists', () => {
        const component = new OnetooDl();
        const dl = component.querySelector('dl');
        const dt = dl.querySelector('dt');

        expect(dt).toBeTruthy();
      });

      it('renders "dt" attribute', () => {
        const dt = 'hello';

        document.body.innerHTML = `<onetoo-dl dt=${dt}></onetoo-dl>`;

        const component = document.body.querySelector('onetoo-dl');

        expect(component.querySelector('dt').textContent).toEqual(dt);
      });
    });

    describe('child dd', () => {
      it('exists', () => {
        const component = new OnetooDl();
        const dl = component.querySelector('dl');
        const dd = dl.querySelector('dd');

        expect(dd).toBeTruthy();
      });

      it('renders "dd" attribute', () => {
        const dd = 'hello';

        document.body.innerHTML = `<onetoo-dl dd=${dd}></onetoo-dl>`;

        const component = document.body.querySelector('onetoo-dl');

        expect(component.querySelector('dd').textContent).toEqual(dd);
      });

      describe('child a', () => {
        it('exists if "ddLink" attribute provided', () => {
          document.body.innerHTML = `<onetoo-dl dt='hello' dd='world' dd-link='/hello/world/'></onetoo-dl>`;

          const component = document.body.querySelector('onetoo-dl');

          expect(component.querySelector('a')).toBeTruthy();
        });

        it('does not exist if "ddLink" attribute is not provided', () => {
          document.body.innerHTML = `<onetoo-dl dt='hello' dd='world'></onetoo-dl>`;

          const component = document.body.querySelector('onetoo-dl');

          expect(component.querySelector('a')).toBeFalsy();
        });

        it('renders "dd" attribute', () => {
          document.body.innerHTML = `<onetoo-dl dt='hello' dd='world' dd-link='/hello/world/'></onetoo-dl>`;

          const component = document.body.querySelector('onetoo-dl');

          expect(component.querySelector('a').textContent).toEqual('world');
        });

        it('sets href to "ddLink" attribute', () => {
          const baseUrl = 'http://localhost';
          const ddLink = '/hello/world/';

          document.body.innerHTML = `<onetoo-dl dt='hello' dd='world' dd-link=${
            baseUrl + ddLink
          }></onetoo-dl>`;

          const component = document.body.querySelector('onetoo-dl');

          expect(component.querySelector('a').href).toEqual(baseUrl + ddLink);
        });
      });
    });
  });
});
