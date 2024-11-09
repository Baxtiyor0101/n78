let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");

function redLight() {
  red.classList.add("on");
  yellow.classList.remove("on");
  green.classList.remove("on");
}

function yellowLight() {
  red.classList.remove("on");
  yellow.classList.add("on");
  green.classList.remove("on");
}

function greenLight() {
  red.classList.remove("on");
  yellow.classList.remove("on");
  green.classList.add("on");
}

function tl() {
  redLight();
  setTimeout(() => {
    yellowLight();

    setTimeout(() => {
      greenLight();
      setTimeout(yellowLight, 5_000);
    }, 2_000);
  }, 5_000);
}

tl();
setInterval(tl, 14_000);
