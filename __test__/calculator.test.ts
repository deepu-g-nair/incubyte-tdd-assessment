import { add } from '../utils/calculator';

test("returns 0 if the input is an empty string", () => {
    expect(add("")).toBe(0);
});

test("returns the number itslef if the input is a single number", () => {
    expect(add("1")).toBe(1);
});