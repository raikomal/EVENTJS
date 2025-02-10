console.log("I am Komal Rai");
console.log("He is not a student");

setTimeout(() => {
  console.log("I am inside setTimeout");
}, 0);

setTimeout(() => {
  console.log("I am inside setTimeout 2");
}, 0);

console.log("THE END");

const fn = () => {
  console.log("Nothing");
};

const callback = (arg, fn) => {
  console.log(arg);
  fn();
};

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = () => {
    console.log("Script Loaded:", src);
    callback("komal", fn);
  };

  document.head.append(sc);
  console.log("Script tag added:", sc);
};




loadScript(
  "sha512-UOoJElONeUNzQbbKQbjldDf9MwOHqxNz49NNJJ1d90yp+X9edsHyJoAs6O4K19CZGaIdjI5ohK+O2y5lBTW6uQ==",
  callback
);
