import { fizzBuzz } from ".";

describe("Test of fizzBuzz()", function () {
  it("Should return Fizz", function () {
    expect(fizzBuzz(6)).toEqual("Fizz");
  });

  it("Should return Buzz", function () {
    expect(fizzBuzz(10)).toEqual("Buzz");
  });

  it("Should return FizzBuzz", function () {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
  });

  it("Should return n", function () {
    expect(fizzBuzz(4)).toEqual("4");
  });
});
