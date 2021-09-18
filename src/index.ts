export function fizzBuzz(n: number): string {
  let result = "";
  if (isMultipleOf(3, n)) result = "Fizz";
  if (isMultipleOf(5, n)) result += "Buzz";

  return (result === "") ? String(n) : result;
}

function isMultipleOf(m: number, n: number): boolean {
  return n % m === 0;
}
