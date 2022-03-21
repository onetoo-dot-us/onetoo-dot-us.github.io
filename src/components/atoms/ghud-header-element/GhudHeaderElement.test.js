import GhudHeaderElement from "./GhudHeaderElement.js";
import { TestUtils } from "../../../utilities/test-utils/test-utils.js";

describe("GhudHeaderElement", () => {
  it("contains a slot element", async () => {
    const { _shadowRoot } = await TestUtils.render(GhudHeaderElement.tag);

    expect(_shadowRoot.querySelector("slot")).toBeTruthy();
  });
});
