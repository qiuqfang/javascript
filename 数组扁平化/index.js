function flatten(lists) {
  let result = [];
  // 递归 扁平化
  //   lists.forEach((item, i, arr) => {
  //     if (Array.isArray(item)) {
  //       result = result.concat(mergeKLists(item));
  //     } else {
  //       result.push(arr[i]);
  //     }
  //   });

  // reduce 扁平化
  //   result = lists.reduce(
  //     (prev, cur) => prev.concat(Array.isArray(cur) ? flatten(cur) : cur),
  //     []
  //   );

  // [].concat.apply + some 扁平化 （apply通过数组穿参）
  //   result = lists;
  //   while (result.some((item) => Array.isArray(item))) {
  //     result = [].concat.apply([], result);
  //   }

  // ... + some 扁平化 (ES6扩展运算符)
  //   result = lists;
  //   while (result.some((item) => Array.isArray(item))) {
  //     result = [...result];
  //   }

  // toString 扁平化
  result = lists
    .toString()
    .split(",")
    .map((item) => parseInt(item));

  return result;
}

const result = flatten([1, [2], [3, [[4]]]]);
console.log(result);
