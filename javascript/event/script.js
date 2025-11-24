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
