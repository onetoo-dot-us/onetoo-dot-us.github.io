import GhudAElement from "./GhudAElement.js";
import { TestUtils } from "../../../utilities/test-utils/test-utils.js";

describe("GhudAElement", () => {
  it("contains an anchor element", async () => {
    const { _shadowRoot } = await TestUtils.render(GhudAElement.tag);
    expect(_shadowRoot.querySelector("a")).toBeTruthy();
  });

  it("constructs with correct anchor.href", async () => {
    const href = "hi";

    const { _shadowRoot } = await TestUtils.render(GhudAElement.tag, { href });
    expect(_shadowRoot.querySelector("a").href.includes(href));
  });

  it("constructs with correct anchor.textContent", async () => {
    const text = "hello";

    const { _shadowRoot } = await TestUtils.render(GhudAElement.tag, { text });
    expect(_shadowRoot.querySelector("a").textContent).toEqual(text);
  });
});
