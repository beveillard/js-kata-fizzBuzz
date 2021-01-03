export function fizzBuzz(n) {
  let result = "";
  if (isMultipleOf(3, n)) result = "Fizz";
  if (isMultipleOf(5, n)) result += "Buzz";

  return (result === "") ? String(n) : result;
}

function isMultipleOf(m, n) {
  return n % m === 0;
}
