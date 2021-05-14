
const { test, expect } = require("@jest/globals");
const add = require("../add");

test("add 2 +  3 to equal 5", () => {
    expect(add(2, 3)).toBe(5);
});
test("add 2 + 4 + 6 + 7 to equal 19", () => {
    expect(add(2, 4, 6, 7)).toBe(19);
});
test("add 1, 2, 3, 4, 5 to equal 15", () => {
    expect(add(1, 2, 3, 4, 5)).toBe(15);
});