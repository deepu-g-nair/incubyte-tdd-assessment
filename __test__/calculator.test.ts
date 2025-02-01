import { add } from '../utils/calculator';

test("returns 0 if the input is an empty string", () => {
    expect(add("")).toBe(0);
});