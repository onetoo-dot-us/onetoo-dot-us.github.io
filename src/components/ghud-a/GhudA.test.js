import GhudA from "./GhudA.js";
import { TestUtils } from "../../utilities/test-utils/test-utils.js";

describe("Ghud A component", () => {
  it("has an anchor element", async () => {
    const { _shadowRoot } = await TestUtils.render(GhudA.tag);
    expect(_shadowRoot.querySelector("a")).toBeTruthy();
  });

  it("constructs with correct anchor.href", async () => {
    const href = "hi";

    const { _shadowRoot } = await TestUtils.render(GhudA.tag, { href });
    expect(_shadowRoot.querySelector("a").href.includes(href));
  });

  it("constructs with correct anchor.textContent", async () => {
    const text = "hello";

    const { _shadowRoot } = await TestUtils.render(GhudA.tag, { text });
    expect(_shadowRoot.querySelector("a").textContent).toEqual(text);
  });
});
