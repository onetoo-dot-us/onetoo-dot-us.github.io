import GhudHeaderOrganism from "./GhudHeaderOrganism.js";
import { TestUtils } from "../../../utilities/test-utils/test-utils.js";

describe("GhudHeaderOrganism", () => {
  it("contains an h1 element", async () => {
    const { _shadowRoot } = await TestUtils.render(GhudHeaderOrganism.tag);

    expect(_shadowRoot.querySelector("h1")).toBeTruthy();
  });

  it("constructs with correct h1.textContent", async () => {
    const h1Text = "hi";

    const { _shadowRoot } = await TestUtils.render(GhudHeaderOrganism.tag, {
      h1Text,
    });

    expect(_shadowRoot.querySelector("h1").textContent.includes(h1Text));
  });

  it("contains a slot element", async () => {
    const { _shadowRoot } = await TestUtils.render(GhudHeaderOrganism.tag);

    expect(_shadowRoot.querySelector("slot")).toBeTruthy();
  });

  it("contains a header element", async () => {
    const { _shadowRoot } = await TestUtils.render(GhudHeaderOrganism.tag);

    expect(_shadowRoot.querySelector("header")).toBeTruthy();
  });
});
