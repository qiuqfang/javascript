// 闭包面试题
const fun = function (a, b) {
  console.log(b);
  return {
    fun: function (c) {
      return fun(c, a);
    },
  };
};

const a = fun(0);
a.fun(1).fun(2).fun(3);
console.log("-----------------");
fun(0).fun(1).fun(2).fun(3);
console.log("-----------------");
const c = fun(0).fun(1); c.fun(2); c.fun(3);