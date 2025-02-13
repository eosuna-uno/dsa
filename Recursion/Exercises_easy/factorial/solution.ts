import { assertEquals } from "jsr:@std/assert/equals";

function factorial(num: number): number {
  if (num == 1) return 1;
  return num * factorial(--num);
}
function factorial_big(num: bigint): bigint {
  if (num == 1n) return 1n;
  return num * factorial_big(--num);
}

Deno.test({
  name: "Recursion power normal int",
  fn: () => {
    assertEquals(factorial(1), 1);
    assertEquals(factorial(2), 2);
    assertEquals(factorial(4), 24);
    assertEquals(factorial(7), 5040);
    assertEquals(factorial(10), 3628800);
  },
});

Deno.test({
  name: "Recursion power big int",
  fn: () => {
    assertEquals(factorial_big(1n), 1n);
    assertEquals(factorial_big(2n), 2n);
    assertEquals(factorial_big(4n), 24n);
    assertEquals(factorial_big(7n), 5040n);
    assertEquals(factorial_big(10n), 3628800n);
    assertEquals(
      factorial_big(250n),
      3232856260909107732320814552024368470994843717673780666747942427112823747555111209488817915371028199450928507353189432926730931712808990822791030279071281921676527240189264733218041186261006832925365133678939089569935713530175040513178760077247933065402339006164825552248819436572586057399222641254832982204849137721776650641276858807153128978777672951913990844377478702589172973255150283241787320658188482062478582659808848825548800000000000000000000000000000000000000000000000000000000000000n
    );
  },
});
