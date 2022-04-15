/**
 * @jest-environment jsdom
 */

import { OnetooRepository } from "./onetoo-repository";

describe("onetoo-repository", () => {
  it("exists in custom element registry", () => {
    expect(customElements.get(OnetooRepository.tag)).toBeTruthy();
  });

  describe("child h2", () => {
    it("exists", () => {
      const component = new OnetooRepository();
      const h2 = component.querySelector("h2");

      expect(h2).toBeTruthy();
    });

    it("renders 'name' attribute", () => {
      const name = "hello";

      document.body.innerHTML = `<onetoo-repository name=${name}></onetoo-repository>`;

      const component = document.body.querySelector("onetoo-repository");

      expect(component.querySelector("h2").textContent).toEqual("hello");
    });
  });
});
