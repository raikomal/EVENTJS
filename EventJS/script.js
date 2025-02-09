let button = document.getElementById("btn");

// button.addEventListener("click", () => {
//   // alert("I was clicked.yayy!!!")
//   document.querySelector(".box").innerHTML = "<b>enjoy your click!!</b>yayyy!";
// });
button.addEventListener("dblclick", () => {
  // alert("I was clicked.yayy!!!")
  document.querySelector(".box").innerHTML = "<b>enjoy your click!!</b>yayyy!";
});
document.addEventListener("keydown", (e) => {
    alert(`Key pressed: ${e.key}`);
  });
  

document.addEventListener("keydown", (e) => {
  console.log(e.key ,e.keyCode);
});
