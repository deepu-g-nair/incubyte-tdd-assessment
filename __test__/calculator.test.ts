import { add } from '../utils/calculator';

test("returns 0 if the input is an empty string", () => {
    expect(add("")).toBe(0);
});

test("returns the number itslef if the input is a single number", () => {
    expect(add("1")).toBe(1);
});

test("returns the sum if the input is comma seperated numbers", () => {
    expect(add("1,5")).toBe(6);
});

test("handle any amount of numbers", () => {
    expect(add("1,5,6,1,5,6")).toBe(24);
});