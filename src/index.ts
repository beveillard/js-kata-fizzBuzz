export function fizzBuzz(n) {
  let result = "";

  if (n % 3 == 0) result = "Fizz";
  if (n % 5 == 0) result += "Buzz";
  if (result === "") result += n;

  return result;
}
