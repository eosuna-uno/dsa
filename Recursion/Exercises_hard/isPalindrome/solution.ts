import { assertEquals } from "jsr:@std/assert/equals";

function isPalindrome(str: string, index: number = 0): boolean {
  if (str.length === 1 || str.length === 0) return true;
  if (index >= str.length - index) return true;
  if (str[index] === str[str.length - 1 - index]) {
    return isPalindrome(str, ++index);
  } else return false;
}
function isPalindromHelper(str: string): boolean {
  if (str.length === 1 || str.length === 0) return true;
  const helper = (index = 0): boolean => {
    if (
      index >= str.length - 1 - index &&
      str[index] === str[str.length - 1 - index]
    )
      return true;
    if (str[index] === str[str.length - 1 - index]) return helper(++index);
    else return false;
  };
  return helper();
}
Deno.test({
  name: "Recursive reverse string",
  fn: () => {
    assertEquals(isPalindrome("aaaaaa"), true); // false
    assertEquals(isPalindrome("awesome"), false); // false
    assertEquals(isPalindrome("foobar"), false); // false
    assertEquals(isPalindrome("tacocat"), true); // true
    assertEquals(isPalindrome("amanaplanacanalpanama"), true); // true
    assertEquals(isPalindrome("amanaplanacanalpandemonium"), false); // false
  },
});

Deno.test({
  name: "Recursive reverse string with helper",
  fn: () => {
    assertEquals(isPalindromHelper("aaaaaaaaa"), true); // false
    assertEquals(isPalindromHelper("awesome"), false); // false
    assertEquals(isPalindromHelper("foobar"), false); // false
    assertEquals(isPalindromHelper("tacocat"), true); // true
    assertEquals(isPalindromHelper("amanaplanacanalpanama"), true); // true
    assertEquals(isPalindromHelper("amanaplanacanalpandemonium"), false); // false
  },
});
