function calculate() {
  const km = Number(document.getElementById("kilometer").value);
  document.getElementsByClassName(".Error");
  if (km < 0) {
    document.getElementById("kmError").innerText = "*Only Positive Value.";
    document.getElementById("d1").remove();
    return;
  }
  let rate;
  let totalbill;
  if (km == 0) {
    rate = 0;
    totalbill = km * rate;
    document.getElementById("kmError").innerText = "";
  } else if (km >= 1 && km <= 10) {
    rate = 11;
    totalbill = km * rate;
    document.getElementById("kmError").innerText = "";
  } else if (km > 10 && km <= 100) {
    rate = 10;
    totalbill = km * rate;
    document.getElementById("kmError").innerText = "";
  } else if (km > 100) {
    rate = 9;
    totalbill = km * rate;
    document.getElementById("kmError").innerText = "";
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
  h.innerText = "Travel Bill Details 💰";
  d2.appendChild(h);

  const l = document.createElement("ul");
  l.classList.add("card-text");
  l.style = "list-style-type: circle";
  l.innerHTML = `<li><b>Total Bill = Rs. ${totalbill}</b></li>
          <li>
            <b>Calculation Breakdown at each slab</b> ${km} * Rs. ${rate} = Rs. ${totalbill}
          </li>`;
  d2.appendChild(l);

  document.getElementById("b").appendChild(d);
}
function reset() {
  window.location.reload();
}
