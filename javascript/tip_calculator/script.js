function calculatetip() {
  const amount = document.getElementById("billamount").value;
  let serviceper = document.getElementById("service").value;
  const tp = document.getElementById("totalpersons").value;
  let result;
  if (!amount) {
    alert("please enter the amount..!");
    return;
  }
  if (!serviceper) {
    alert("plaese select the service...!");
    return;
  }
  if (!tp) {
    alert("please enter total person...!");
    return;
  }

  if (serviceper == "1") {
    serviceper = 25;
    result = (serviceper / amount) * tp;
    result *= 100;
    console.log(result);
  } else if (serviceper == "2") {
    serviceper = 20;
    result = (serviceper / amount) * tp;
    result *= 100;
    console.log(result);
  } else if (serviceper == "3") {
    serviceper = 15;
    result = (serviceper / amount) * tp;
    result *= 100;
    console.log(result);
  } else if (serviceper == "4") {
    serviceper = 10;
    result = (serviceper / amount) * tp;
    result *= 100;
    console.log(result);
  } else if (serviceper == "5") {
    serviceper = 5;
    result = (serviceper / amount) * tp;
    result *= 100;
    console.log(result);
  }
  let d = document.createElement("div");
  d.classList.add("mt-2");

  let h = document.createElement("h5");
  h.classList.add("text-center");
  h.innerText = "Tip Amount " + result + ".00₹ each";
  d.appendChild(h);
  document.getElementById("f").appendChild(d);
}
