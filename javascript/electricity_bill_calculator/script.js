function reset() {
  const res = document.getElementById("myform");
  document.getElementById("euError").innerText = "";
  document.getElementById("d1").remove();
  res.reset();
}
function calculate() {
  const amount = Number(document.getElementById("amount").value);
  document.getElementsByClassName(".Error");
  if (!amount) {
    document.getElementById("euError").innerText = "*Required";
    document.getElementById("euError").style = "color: yellow !important";
    document.getElementById("d1").remove();
    return;
  } else if (amount > 300) {
    document.getElementById("euError").innerText = "*EU Not > 300.";
    document.getElementById("euError").style = "color: yellow !important";
    document.getElementById("d1").remove();
    return;
  }
  let charge1 = 0,
    charge2 = 0,
    charge3 = 0;
  if (amount >= 1 && amount <= 50) {
    charge1 = 50 * 0.5;
    document.getElementById("euError").innerText = "";
  } else if (amount > 50 && amount <= 200) {
    charge1 = 50 * 0.5;
    charge2 = 150 * 0.75;
    document.getElementById("euError").innerText = "";
  } else if (amount > 200 && amount <= 300) {
    charge1 = 50 * 0.5;
    charge2 = 150 * 0.75;
    charge3 = 100 * 1.2;
    document.getElementById("euError").innerText = "";
  }
  const totalbill = charge1 + charge2 + charge3;
  const surcharge = 0.2 * totalbill;
  const finalBill = totalbill + surcharge;
  // console.log(
  //   "so the total electricity bill for " +
  //     amount +
  //     " units is Rs." +
  //     finalBill.toFixed(2)
  // );

  const d = document.createElement("div");
  d.classList.add("card", "container", "mt-4");
  d.style = "width: 18rem";
  d.id = "d1";

  const d2 = document.createElement("div");
  d2.classList.add("card-body");
  d.appendChild(d2);

  const h = document.createElement("h5");
  h.classList.add("card-title");
  h.innerText = "Bill Details 📃💸";
  d2.appendChild(h);

  const l = document.createElement("ul");
  l.classList.add("card-text");
  l.style = "list-style-type: square";
  l.innerHTML = `<li>Units in each slab and charge for each slab (even if 0). slab 1 = <b>${charge1}</b>, slab 2 = <b>${charge2}</b>, slab 3 = <b>${charge3}</b></li>
          <li>Subtotal (before surcharge). <b>Rs.${totalbill}</b></li>
          <li>Surcharge amount. <b>Rs.${surcharge}</b></li>
          <li>Grand total (subtotal + surcharge). <b>Rs.${finalBill.toFixed(
            2
          )}</b></li>`;
  d2.appendChild(l);

  document.getElementById("b").appendChild(d);
}
