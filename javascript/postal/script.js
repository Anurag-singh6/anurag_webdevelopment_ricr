function Input() {
  const username = document.getElementById("name");
  username.addEventListener("change", () => usernamecolor(username.value));
  const headingcolor = document.getElementById("heading");
  headingcolor.addEventListener("change", () =>
    headingcolorcontrol(headingcolor.value)
  );
  const para = document.getElementById("paragraph");
  para.addEventListener("change", () => paracolorcontrol(para.value));
}
function usernamecolor(color) {
  document.getElementById("h").style.color = color;
}
function headingcolorcontrol(color) {
  document.getElementById("p").style.color = color;
}
function paracolorcontrol(color) {
  document.getElementById("c").style.backgroundColor = color;
}
