type comparatorFunction<T> = ((a: T, b: T) => number) | null;
export function merge_sort<T>(
  arr: T[],
  comparator: comparatorFunction<T> = null
) {
  if (arr.length <= 1) return arr;
  let splitted_arrays = split_into_one_sized_arrays(arr);
  let iteration = 0;
  let merged: T[][] = [];
  while (merged.length < arr.length) {
    while (iteration < splitted_arrays.length - 1) {
      merged.push(
        merge(
          splitted_arrays[iteration],
          splitted_arrays[iteration + 1],
          comparator
        )
      );

      iteration = iteration + 2;
    }
    if (iteration != splitted_arrays.length) {
      merged.push(splitted_arrays[iteration]);
    }
    splitted_arrays = merged;
    iteration = 0;
    if (merged[0].length >= arr.length) return merged[0];
    merged = [];
  }
}

function split_into_one_sized_arrays<T>(arr: T[]): T[][] {
  let new_arr = [];
  for (let i = 0; i < arr.length; i++) new_arr.push([arr[i]]);
  return new_arr;
}

//merge sorted arrays
// this should have a complexity O of Time (n+m) and Space (n+m)
function merge<T>(n: T[], m: T[], comparator: comparatorFunction<T> = null) {
  let new_arr: T[] = [];
  let n_i = 0;
  let m_i = 0;
  let use_comp;
  const comp = (a: number, b: number) => a - b;
  if (typeof comparator !== "function") {
    use_comp = comp;
  } else {
    use_comp = comparator;
  }
  while (n_i < n.length && m_i < m.length) {
    const val = use_comp(n[n_i] as any, m[m_i] as any);
    if (val < 0) {
      new_arr.push(n[n_i]);
      n_i++;
    } else if (val > 0) {
      new_arr.push(m[m_i]);
      m_i++;
    } else {
      new_arr.push(m[m_i]);
      new_arr.push(n[n_i]);
      n_i++;
      m_i++;
    }
  }
  if (n_i < n.length) {
    for (let i = n_i; i < n.length; i++) {
      new_arr.push(n[i]);
    }
  }
  if (m_i < m.length) {
    for (let i = m_i; i < m.length; i++) {
      new_arr.push(m[i]);
    }
  }
  return new_arr;
}

Deno.test({
  name: "my merge sort",
  fn: () => {
    merge_sort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
    merge_sort([0, -10, 7, 4]); // [-10, 0, 4, 7]
    merge_sort([1, 2, 3]); // [1, 2, 3]
    merge_sort([]);

    var nums = [
      4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67,
      4342, 32,
    ];
    merge_sort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

    var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

    function strComp(a: string, b: string) {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      }
      return 0;
    }

    merge_sort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

    var moarKittyData = [
      {
        name: "LilBub",
        age: 7,
      },
      {
        name: "Garfield",
        age: 40,
      },
      {
        name: "Heathcliff",
        age: 45,
      },
      {
        name: "Blue",
        age: 1,
      },
      {
        name: "Grumpy",
        age: 6,
      },
    ];

    function oldestToYoungest(a: Record<string, any>, b: Record<string, any>) {
      return b.age - a.age;
    }

    merge_sort(moarKittyData, oldestToYoungest); // sorted by age in descending order
  },
});
