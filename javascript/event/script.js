function on() {
  document.getElementById("bulb").style.backgroundColor = "yellow";
}
function aqua() {
  document.getElementById("bulb").style.backgroundColor = "aqua";
}
function green() {
  document.getElementById("bulb").style.backgroundColor = "green";
}
function off() {
  document.getElementById("bulb").style = backgroundColor = "white";
}
function input() {
  const usercol = document.getElementById("input");
  usercol.addEventListener("change", () => changebulbcolor(usercol.value));
}
function changebulbcolor(color) {
  document.getElementById("bulb").style.backgroundColor = color;
}
function sm_control() {
  const btn = document.getElementById("SB_btn");
  const bulb = document.getElementById("smartBulb");
  if (btn.innerText === "off") {
    btn.innerText = "on";
    bulb.classList.add("on");
  } else {
    btn.innerText = "off";
    bulb.classList.remove("on");
  }
}
function sm_control2() {
  document.getElementById("smartBulb").classList.toggle("on");
}
document.getElementById("ball1").addEventListener("mouseenter", () => {
  fillColor("red");
});
document.getElementById("ball1").addEventListener("mouseleave", () => {
  fillColor("white");
});
function fillColor(Color) {
  console.log(Color);
  document.getElementById("bulb2").style.backgroundColor = Color;
}
document.getElementById("ball2").addEventListener("mouseenter", () => {
  fillColor("yellow");
});
document.getElementById("ball2").addEventListener("mouseleave", () => {
  fillColor("white");
});
document.getElementById("ball3").addEventListener("mouseenter", () => {
  fillColor("green");
});
document.getElementById("ball3").addEventListener("mouseleave", () => {
  fillColor("white");
});
document.getElementById("ball4").addEventListener("mouseenter", () => {
  fillColor("blue");
});
document.getElementById("ball4").addEventListener("mouseleave", () => {
  fillColor("white");
});
document.getElementById("ball5").addEventListener("mouseenter", () => {
  fillColor("pink");
});
document.getElementById("ball5").addEventListener("mouseleave", () => {
  fillColor("white");
});
document.getElementById("ball6").addEventListener("mouseenter", () => {
  fillColor("orange");
});
document.getElementById("ball6").addEventListener("mouseleave", () => {
  fillColor("white");
});
document.getElementById("ball7").addEventListener("mouseenter", () => {
  fillColor("chocolate");
});
document.getElementById("ball7").addEventListener("mouseleave", () => {
  fillColor("white");
});
