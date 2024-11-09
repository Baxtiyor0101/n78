// getAttribute
// setAttribute
// imageElem.setAttribute("src", images[i]);

// events
// click
// dblclick
// mouseenter
// /mouseleave
// mouseover
// mouseout
// keydown
// mousemove

// submit =>form
//   e.preventDefault();
//   e.target.reset();

// =================================================================
// let imgs = document.querySelector("img");
// // console.log(imgs.getAttribute("src"));
// let images = [
//   "https://www.w3schools.com/w3css/img_fjords.jpg",
//   "https://www.w3schools.com/w3css/img_lights.jpg",
//   "https://www.w3schools.com/w3css/img_mountains.jpg",
//   "https://www.w3schools.com/w3css/img_nature.jpg",
//   "https://www.w3schools.com/w3css/img_snow.jpg",
// ];
// setInterval(() => {
//   let randomIndex = Math.floor(Math.random() * images.length);
//   imgs.setAttribute("src", images[randomIndex]);
// }, 1000);
// imgs.setAttribute(
//   "src",
//   "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
// );

// ============  events =================================
// addEventListener
// let btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   let randomIndex = Math.floor(Math.random() * images.length);
//   imgs.setAttribute("src", images[randomIndex]);
//   console.log("addEventListener worked");
// });

// btn.addEventListener("dblclick", () => {
//   console.log("addEventListener");
// });

// btn.addEventListener("mouseenter", () => {
//   let randomColor= "#"+ Math.random().toString(16).slice(2, 8);
//   document.body.style.backgroundColor = randomColor;
//   console.log("mouseenter");
// });

// btn.addEventListener("mouseleave", () => {
//   let randomColor = "#" + Math.random().toString(16).slice(2, 8);
//   document.body.style.backgroundColor = randomColor;
//   console.log("mouseenter");
// });

// document.querySelector(".box").addEventListener("mouseenter", () => {
//   let randomColor = "#" + Math.random().toString(16).slice(2, 8);
//   document.body.style.backgroundColor = randomColor;
//   console.log("mouseenter");
// });

// document.querySelector(".box").addEventListener("mouseout", () => {
//   let randomColor = "#" + Math.random().toString(16).slice(2, 8);
//   document.body.style.backgroundColor = randomColor;
//   console.log("mouseenter");
// });

// addEventListener("keydowm", (e) => {
//   if (e.code == Keyboard) {
//     console.log("sdsdc");
//   }
// });

// document.querySelector(".input").addEventListener("keydown", (e) => {
//   if (e.key === "t") {
//     console.log("sen t ni bosding");
//   }
// });

// let shadow = document.querySelector(".movewithmouse");
// document.addEventListener("mousemove", (e) => {
//   shadow.style.left = e.pageX + "px";
//   shadow.style.top = e.pageY + "px";
//   //   console.log(e.pageX, e.pageY);
//   //   console.log("moved");
// });

// document.querySelector(".box").addEventListener("mouseenter", () => {
//   shadow.style.display = "block";
//   console.log("dddd");
// });

// document.querySelector(".box").addEventListener("mouseleave", () => {
//   shadow.style.display = "none";
//   console.log("llll");
// });

// /////////////////////
// let form = document.querySelector("form");
// let ullist = document.querySelector("ul");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let search = document.querySelector(".search");
//   let li = document.createElement("li");
//   li.textContent = search.value;
//   ullist.prepend(li);
//   //   ullist.innerHTML = `<li>${search.value}</li>`;

//   console.log(search.value);
//   e.target.reset();
// });

// let title = document.querySelector(".title");
// title.textContent = "thi si just test";
// console.log(title.innerText);
// console.log(title.textContent);
// console.log(title.innerHTML);
