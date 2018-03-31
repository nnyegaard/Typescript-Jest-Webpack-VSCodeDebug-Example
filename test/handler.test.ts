import { add } from "../src/handler";

describe("My test cases", () => {
  it("should return 4", () => {
    const result = add(2, 2);
    expect(result).toBe(4);
  });
});
