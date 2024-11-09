// // DOM Document Object Model
// let title = document.getElementById("title");
// let testclass = document.getElementsByClassName("testclass");
// let info = document.getElementsByTagName("p");
// let test = document.getElementsByName("text");
// let btn = document.querySelector(".btn");
// let collection = document.querySelectorAll(".btn");
// console.log(collection);
// // console.log(title);
// // console.log(test[0]);

// giving style
// let body = document.querySelector("body");
// body.style.backgroundColor = "#323423";

// classlist
// add("class qoshadi")
// remove(class ochiradi)
// toggle(currunt clas bolsa ochiradi bolmasa qoshidi)

// let h3 = document.querySelector("h3");

// h3.classList.add("dark");
// h3.classList.remove("dark");

// toggle
// h3.classList.toggle("dark");
// if (h3.classList.value.includes("dark")) {
//   h3.classList.remove("dark");
// } else {
//   h3.classList.add("dark");
// }
// console.log(h3.classList);

//  setTimeout => berilgan vaqtdan keyin ishlaydigan function
//  setInterval => har berilgan vaqtda ishlab turadigan function

// let testfunc = (a, b) => {
//   console.log("setTimeout", a * b);
// };
// setTimeout(testfunc, 3000, 45, 3);

// let count = 0;
// let counter = setInterval(
//   (a) => {
//     console.log(count++);
//     console.log(counter);
//     if (count === 5) {
//       clearInterval(1);
//     }
//   },
//   1000,
//   34
// );
// console.log(count + "sdsdfsdfsdf");

// ////////////////////////
// let body = document.querySelector("body");
// setInterval(() => {
//   body.classList.toggle("dark");
// }, 1000);

// //////////////////////////
let items = document.querySelectorAll(".item");
setInterval(() => {
  items.forEach((val, inx) => {
    x = Math.random() * 1300;
    y = Math.random() * 800;
    color = "#" + Math.random().toString(16).slice(4, 10);
    val.style.left = x + "px";
    val.style.top = y + "px";
    val.style.backgroundColor = color;
    val.style.borderRadius = "50%";
    val.style.transition = "all 2s linear";
  });
}, 2000);
// console.log(items);

// "#343533"
// "3"+9 ="39"