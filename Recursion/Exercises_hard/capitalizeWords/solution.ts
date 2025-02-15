import { assertEquals } from "jsr:@std/assert/equals";

function capitalize_words(arr: string[]): string[] {
  return arr.length < 1
    ? []
    : [arr[0].toUpperCase(), ...capitalize_words(arr.slice(1))];
}

Deno.test({
  name: "capitalize workds",
  fn: () => {
    assertEquals(capitalize_words(["i", "am", "learning", "recursion"]), [
      "I",
      "AM",
      "LEARNING",
      "RECURSION",
    ]);
    assertEquals(capitalize_words([]), []);
    assertEquals(capitalize_words(["1"]), ["1"]);
    assertEquals(capitalize_words(["zxcw asd"]), ["ZXCW ASD"]);
    assertEquals(capitalize_words(["CAP"]), ["CAP"]);
    assertEquals(capitalize_words(["CAP and not"]), ["CAP AND NOT"]);
  },
});
