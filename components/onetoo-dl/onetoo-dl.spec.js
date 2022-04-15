/**
 * @jest-environment jsdom
 */

import { describe, expect, it } from "@jest/globals";
import { OnetooDl } from "./onetoo-dl";

describe("onetoo-dl", () => {
  it("exists in custom element registry", () => {
    expect(customElements.get(OnetooDl.tag)).toBeTruthy();
  });

  describe("child dl element", () => {
    it("exists", () => {
      const component = new OnetooDl();
      const dl = component.querySelector("dl");

      expect(dl).toBeTruthy();
    });

    describe("child dt", () => {
      it("exists", () => {
        const component = new OnetooDl();
        const dl = component.querySelector("dl");
        const dt = dl.querySelector("dt");

        expect(dt).toBeTruthy();
      });
    });

    describe("child dd", () => {
      it("exists", () => {
        const component = new OnetooDl();
        const dl = component.querySelector("dl");
        const dd = dl.querySelector("dd");

        expect(dd).toBeTruthy();
      });
    });
  });
});
