function reset() {
  window.location.reload();
}
function calculate() {
  const sal = Number(document.getElementById("sal").value);
  document.getElementsByClassName(".Error");
  if (sal <= 0) {
    document.getElementById("salError").innerText = "Only + values";
    document.getElementById("d1").remove();
    return;
  }
  let hra, da, grossal;
  if (sal < 1500) {
    hra = 0.1 * sal;
    da = 0.9 * sal;
    grossal = sal + hra + da;
    document.getElementById("salError").innerText = "";
  } else if (sal >= 1500) {
    hra = 500;
    da = 0.98;
    grossal = sal + hra + da;
    document.getElementById("salError").innerText = "";
  }

  const d = document.createElement("div");
  d.classList.add("card", "container", "mt-4");
  d.style = "width: 18rem";
  d.id = "d1";

  const d2 = document.createElement("div");
  d2.classList.add("card-body");
  d.appendChild(d2);

  const h = document.createElement("h5");
  h.classList.add("card-title");
  h.innerText = "Salary Details 🤑";
  d2.appendChild(h);

  const l = document.createElement("ul");
  l.classList.add("card-text");
  l.style = "list-style-type: square";
  l.innerHTML = `<li>Basic Salary: ₹${sal.toLocaleString("en-IN")}</li>
          <li>HRA: ₹${hra.toLocaleString("en-IN")}</li>
          <li>DA: ₹${da.toLocaleString("en-IN")}</li>
          <li>Gross Salary: ₹${grossal.toLocaleString("en-IN")}</li>`;
  d2.appendChild(l);

  document.getElementById("b").appendChild(d);
}
