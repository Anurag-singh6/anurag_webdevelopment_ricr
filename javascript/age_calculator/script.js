function calculate() {
  const d = document.getElementById("dob").value;
  const c = document.getElementById("cud").value;
  if (!d) {
    alert("please enter your date of birth.");
    return;
  }
  const birthd = new Date(d);
  const currentd = c ? new Date(c) : new Date();

  if (birthd > currentd) {
    alert("date of birth not be in future.");
    return;
  }
  let age = currentd.getFullYear() - birthd.getFullYear();

  const month = currentd.getMonth() - birthd.getMonth();

  if (month < 0 || (month === 0 && currentd.getDate() < birthd.getDate())) {
    age -= 1;
  }
  console.log(age);
  let d1 = document.createElement("div");
  d1.classList.add("mb-3");
  d1.id = "dh";
  let h = document.createElement("h5");
  h.classList.add("text-center");
  h.innerText = "Your age is " + age + " years";
  d1.appendChild(h);

  document.getElementById("m").appendChild(d1);
}
