// let form1 = document.querySelector(".form1");
// let ulList = document.querySelector(".list");

// form1.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let elem = e.target;
//   let text = elem[0].value;
//   let li = document.createElement("li");
//   let delBtn = document.createElement("button");
//   let editBtn = document.createElement("button");
//   let div = document.createElement("div");
//   let icon = document.createElement("i");
//   let span = document.createElement("span");
//   span.textContent = text;
//   icon.classList.add("fas", "fa-trash-alt", "text-info");
//   delBtn.classList.add("btn", "btn-danger");
//   editBtn.classList.add("btn", "btn-warning");
//   editBtn.textContent = "Edit";
//   //   delBtn.textContent = "Delete";
//   delBtn.append(icon);
//   delBtn.addEventListener("click", () => {
//     li.remove();
//   });
//   editBtn.addEventListener("click", () => {
//     span.contentEditable = true;
//   });
//   span.addEventListener("blur", () => {
//     span.contentEditable = false;
//     // li.textContent = li.innerText; // Update text content after editing
//   });

// //   li.textContent = text;
//   div.append(delBtn, editBtn);
//   //   li.append(delBtn);
//   //   li.append(editBtn);
//   li.append(span, div);
//   li.style.display = "flex";
//   li.style.justifyContent = "space-between";
//   li.classList.add("bg-secondary", "px-3", "color", "text-warning");

//   //   li.addEventListener("dblclick", () => {
//   //     li.remove();
//   //   });
//   ulList.append(li);
//   console.log(li);
//   elem.reset();
// });

//////===================================working with REAL DATA
let datasForTable = [
  { id: 1, name: "John", age: 25, action: "del edit" },
  { id: 2, name: "Jane", age: 30, action: "del edit" },
  { id: 3, name: "Mike", age: 28, action: "del edit" },
  { id: 4, name: "Sarah", age: 32, action: "del edit" },
  { id: 5, name: "David", age: 27, action: "del edit" },
];
let head = document.querySelector(".head");
let table = document.querySelector("table");
Object.keys(datasForTable[0]).forEach((val) => {
  let th = document.createElement("th");
  th.textContent = val;
  head.append(th);
});

function displayData() {
  datasForTable.forEach((val) => {
    let tr = document.createElement("tr");
    let tdId = document.createElement("td");
    let tdName = document.createElement("td");
    let tdAge = document.createElement("td");
    let tdAction = document.createElement("td");
    val.action.split(" ").forEach((vals) => {
      let btn = document.createElement("button");
      btn.textContent = vals;
      btn.classList.add("btn", "btn-warning");
      tdAction.append(btn);
      // btn.addEventListener("click", () => {
      //   console.log(val);
      // });
    });
    tdId.textContent = val.id;
    tdName.textContent = val.name;
    tdAge.textContent = val.age;
    tr.append(tdId, tdName, tdAge, tdAction);
    table.append(tr);
  });
}
displayData();

let form = document.querySelector(".formTable");
form.addEventListener("submit", (e) => {

  e.preventDefault();
  let elem = e.target;
  let data = {
    id: datasForTable.length + 1,
    name: elem[0].value,
    age: parseInt(elem[1].value),
    action: "del edit",
  };
  datasForTable.push(data);
  displayData();
  //   console.log(datasForTable);
});
