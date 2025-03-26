function add(a, b) {
    return a + b;
}

describe("Math operations", function () {
    it("should add two numbers correctly", function () {
        expect(add(2, 3)).toBe(5);
    });

    it("should return a number", function () {
        expect(typeof add(2, 3)).toBe("number");
    });
});