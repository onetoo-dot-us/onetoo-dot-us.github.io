/**
 * @jest-environment jsdom
 */

import { OnetooHeader } from "./onetoo-header";
import { describe, it, expect } from "@jest/globals";
describe("onetoo-header", () => {
  it("is defined", () => {
    expect(customElements.get(OnetooHeader.tag)).toBeTruthy();
  });
});
