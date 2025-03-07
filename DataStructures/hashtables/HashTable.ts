import { hash } from "./Hash.ts";
export class HashTable<T> {
  private keyMap: [string, T][][];
  constructor(size: number = 103) {
    this.keyMap = new Array(size);
  }
  set(key: string, value: T) {
    const idx = this._hash(key);
    if (this.keyMap[idx] === undefined) {
      this.keyMap[idx] = [];
    }
    if (this.keyMap[idx].length === 0) {
      this.keyMap[idx].push([key, value]);
      return true;
    }
    if (this.keyMap[idx].length > 0) {
      for (let i = 0; i < this.keyMap[idx].length; i++) {
        const [search_key, _search_value] = this.keyMap[idx][i];
        if (search_key === key) {
          this.keyMap[idx][i][1] = value;
          return true;
        }
      }
      this.keyMap[idx].push([key, value]);
    }
  }
  get(key: string) {
    const idx = this._hash(key);
    const val = this.keyMap[idx];
    if (val === undefined) {
      return null;
    }
    if (val.length === 0) {
      return null;
    }
    if (val.length === 1) {
      return val[0][1];
    }
    if (val.length > 1) {
      //look up the key
      for (const [search_key, value] of val) {
        if (key === search_key) {
          return value;
        }
      }
    }
    return null;
  }
  keys() {
    return this.keyMap.flat().map(([key]) => key);
  }
  values() {
    return [...new Set<T>(this.keyMap.flat().map(([_, values]) => values))];
  }
  values_unique() {}
  _hash(key: string) {
    return hash(key, this.keyMap.length);
  }
}

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
x.set("MediumSlateBlue", "#7B68EE");
console.log(x.keys());
console.log(x.values());
1 + 1;
