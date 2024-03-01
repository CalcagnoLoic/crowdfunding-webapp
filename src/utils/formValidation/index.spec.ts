import { describe, it, expect } from "vitest";
import { formValidation } from ".";

describe("formValidation Unit Test Suites", () => {
  it("should be return something", () => {
    expect(formValidation("25", 25)).toBeDefined();
  });

  it("should return a boolean", () => {
    expect(typeof formValidation("8", 25)).toBe("boolean");
  });

  it("should return false if form is empty", () => {
    expect(formValidation("", 25)).toBe(false);
  });

  it("should return false if the input is not a number", () => {
    expect(formValidation("esf", 25)).toBe(false);
  });

  it("should return true if the input is a number", () => {
    expect(formValidation("25", 25)).toBe(true);
  });

  it("should be return false if the value is less than pledgeAmount", () => {
    expect(formValidation("2", 25)).toBe(false);
  });

  it("should be return true if the value is higher than pledgeAmount", () => {
    expect(formValidation("2785", 25)).toBe(true);
  });

  it("should be return true if the value is equal to pledgeAmount", () => {
    expect(formValidation("75", 75)).toBe(true);
  });
});
