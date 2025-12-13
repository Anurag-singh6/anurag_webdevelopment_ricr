function guess() {
  const input = Number(document.getElementById("random").value);

  if (!input) {
    alert("please enter the number..!");
    return;
  }
  if (input > 10) {
    alert("please guess betwwen 1 to 10.");
    return;
  }
  const r = Math.floor(Math.random() * 10) + 1;
  if (input == r) {
    alert("Congratulation...! you guess the right number.");
  } else {
    alert("OOPS SORRY...! you guess the wrong number.");
  }
  console.log("input number = " + input + ", random number = " + r);
  document.getElementById("random").value = "";
}
