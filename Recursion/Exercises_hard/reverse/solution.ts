import { assertEquals } from "jsr:@std/assert/equals";

function reverse(str: string, index: number = 0): string {
  if (index === str.length) {
    return "";
  }
  return str[str.length - index - 1] + reverse(str, ++index);
}
Deno.test({
  name: "Recursive reverse string",
  fn: () => {
    assertEquals(reverse("awesome"), "emosewa");
    assertEquals(reverse("rithmschool"), "loohcsmhtir");
  },
});
