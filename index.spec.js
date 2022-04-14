const OnetooRepository = require("./index");

describe("onetoo-repository", () => {
  it("builds", () => {
    expect(new OnetooRepository()).toBeTruthy();
  });
});
