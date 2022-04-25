const testObj = {
  number: 1,
  string: "1",
  boolean: true,
  undefined: undefined,
  null: null,
  symbol: Symbol("test"),
  bigint: BigInt(1),
  fn: () => {},
  object: { c: 2, d: { e: 3 } },
  array: [],
  date: new Date(),
  regexp: /\d+/,
  error: new Error(),
  map: new Map(),
  set: new Set(),
  weakMap: new WeakMap(),
  weakSet: new WeakSet(),
};

const deepCopy = (obj) => {
  const newObj = Array.isArray(obj) ? [] : {};
  
  const map = {
    "[object Object]": (key) => deepCopy(obj[key]),
    "[object Array]": (key) => deepCopy(obj[key]),
    "[object Date]": (key) => new Date(obj[key]),
    "[object RegExp]": (key) => new RegExp(obj[key]),
    "[object Error]": (key) => new Error(obj[key]),
    "[object Map]": (key) => new Map(obj[key]),
    "[object Set]": (key) => new Set(obj[key]),
  };

  for (let key in obj) {
    // 判断是否为原型属性
    if (obj.hasOwnProperty(key)) {
      const mapKey = Object.prototype.toString.call(obj[key]);
      console.log(mapKey);
      newObj[key] = map[mapKey] ? map[mapKey](key) : obj[key];
    }
  }
  return newObj;
};

const newTestObj = deepCopy(testObj);

console.log(testObj, newTestObj);
