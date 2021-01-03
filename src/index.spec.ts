import { fizzBuzz } from ".";

describe("Test of fizzBuzz()", function () {
  it("Should return 1", function () {
    expect(fizzBuzz(1)).toEqual("1");
  });

  it("Should return 2", function () {
    expect(fizzBuzz(2)).toEqual("2");
  });

  it("Should return Fizz", function () {
    expect(fizzBuzz(3)).toEqual("Fizz");
  });

  it("Should return Fizz", function () {
    expect(fizzBuzz(6)).toEqual("Fizz");
  });

  it("Should return Buzz", function () {
    expect(fizzBuzz(5)).toEqual("Buzz");
  });

  it("Should return FizzBuzz", function () {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
  });

});
