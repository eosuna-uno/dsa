import { assertEquals } from "jsr:@std/assert/equals";
import { HashTable } from "./HashTable.ts";

Deno.test({
  name: "hashtable insert/get",
  fn: () => {
    let x = new HashTable<string>();
    x.set("cyan", "#00FFFF");
    x.set("Turquoise", "#40E0D0");
    x.set("MediumTurquoise", "#48D1CC");
    x.set("DarkTurquoise", "#00CED1");
    x.set("CadetBlue", "#5F9EA0");
    x.set("SteelBlue", "#4682B4");
    x.set("LightSteelBlue", "#B0C4DE");
    x.set("PowderBlue", "#B0E0E6");
    x.set("LightBlue", "#ADD8E6");
    x.set("SkyBlue", "#87CEEB");
    x.set("LightSkyBlue", "#87CEFA");
    x.set("DeepSkyBlue", "#00BFFF");
    x.set("DodgerBlue", "#1E90FF");
    x.set("CornflowerBlue", "#6495ED");
    x.set("MediumSlateBlue", "#7B68EE");

    assertEquals(x.get("cyan"), "#00FFFF");
    assertEquals(x.get("Turquoise"), "#40E0D0");
    assertEquals(x.get("MediumTurquoise"), "#48D1CC");
    assertEquals(x.get("DarkTurquoise"), "#00CED1");
    assertEquals(x.get("CadetBlue"), "#5F9EA0");
    assertEquals(x.get("SteelBlue"), "#4682B4");
    assertEquals(x.get("LightSteelBlue"), "#B0C4DE");
    assertEquals(x.get("PowderBlue"), "#B0E0E6");
    assertEquals(x.get("LightBlue"), "#ADD8E6");
    assertEquals(x.get("SkyBlue"), "#87CEEB");
    assertEquals(x.get("LightSkyBlue"), "#87CEFA");
    assertEquals(x.get("DeepSkyBlue"), "#00BFFF");
    assertEquals(x.get("DodgerBlue"), "#1E90FF");
    assertEquals(x.get("CornflowerBlue"), "#6495ED");
    assertEquals(x.get("MediumSlateBlue"), "#7B68EE");
  },
});
