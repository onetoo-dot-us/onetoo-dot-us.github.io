import GhudHeader from "./GhudHeader.js";

describe("GhudHeader", () => {
  const ghudHeader = new GhudHeader();

  it("defines setRule()", () => {
    expect(typeof ghudHeader.setRule).toBe("function");
  });
});
