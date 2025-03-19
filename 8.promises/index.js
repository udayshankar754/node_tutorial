function delayFn(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

console.log("Promise starting");

delayFn(2000).then(() => {
  console.log("Promise resolved after 2 seconds");
})

console.log("Promise still pending");


function divideFn(num1 , num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("Cannot divide by zero");
    } else {
      resolve(num1 / num2);
    }
  });
}


divideFn(10, 0).then((result) => {
  console.log("Result:", result);
}).catch((error) => {
  console.error("Error:", error);
});