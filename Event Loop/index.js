let a = 0;
async function fn1(num) {
  console.log(1, ++num);
  const result = await fn2(num++);
  console.log(result);
  console.log(2, num);
}

async function fn2(num) {
  console.log(3, ++num);
}

console.log(4, a);

setTimeout(() => {
  console.log(5, ++a);
}, 1000);

fn1(a);

console.log(6, a++);

setTimeout(() => {
  console.log(7, a++);
}, 1000);

Promise.resolve().then(() => {
  console.log(8, ++a);
  setTimeout(() => {
    console.log(9, a++);
  }, 1000);
  Promise.resolve().then(() => {
    console.log(10, ++a);
  });
});
