const hello = require('index')


describe("hello world", () => {
  it("doubleNumbers", () => {
    expect.hasAssertions();
    expect(hello("world")).toStrictEqual("hello world");
  });
});
