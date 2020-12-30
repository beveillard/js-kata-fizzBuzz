export function fizzBuzz(n) {
  let result = "";

  if (isMultipleOf(3, n)) result = "Fizz";
  if (isMultipleOf(5, n)) result += "Buzz";
  if (result === "") result += n;

  return result;
}

function isMultipleOf(x, n) {
  return n % x == 0;
}
