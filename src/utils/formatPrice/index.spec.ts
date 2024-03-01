import { describe, it, expect } from "vitest";
import { formatPrice } from ".";

describe("formatPrice Unit Test Suites", () => {
  it("should be return something", () => {
    expect(formatPrice(12345)).toBeDefined();
  });

  it("should be return a string", () => {
    expect(typeof formatPrice(12345)).toBe("string");
  });

  it("should be return the price with the good format", () => {
    expect(formatPrice(12345)).toBe("12,345");
  });
});
