function submit() {
  const fullname = document.getElementById("fullname").value;
  document.querySelectorAll(".Error").forEach((element) => {
    element.innerHTML = "";
  });
  if (!fullname) {
    document.getElementById("nameError").innerText = "*Full Name Required";
    return;
  } else if (!/^[A-Za-z ]+$/.test(fullname)) {
    document.getElementById("nameError").innerText =
      "Please enter a valid name";
    return;
  }
  const em = document.getElementById("email").value;
  if (!em) {
    document.getElementById("emailError").innerText = "*Email Required";
    return;
  } else if (!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(em)) {
    document.getElementById("emailError").innerText =
      "Please enter a valid email address";
    return;
  }
  const mob = document.getElementById("mobile").value;
  if (!mob) {
    document.getElementById("mobError").innerText = "*Mobile number Required";
    return;
  } else if (!/^[6-9]\d{9}$/.test(mob)) {
    document.getElementById("mobError").innerText =
      "Enter 10-digit Indian mobile number";
    return;
  }
  const dob = document.getElementById("dob").value;
  if (!dob) {
    document.getElementById("dobError").innerText = "*DOB Required";
    return;
  } else {
    const curryear = new Date().getFullYear();
    const birthyear = Number(dob.split("-")[0]);
    if (curryear - birthyear < 15) {
      document.getElementById("dobError").innerText =
        "You must be at least 15 years old";
      return;
    }
  }
  const qual = document.getElementById("Qualification");
  if (!qual) {
    document.getElementById("qError").innerText =
      "Please select a qualification";
    return;
  }
  const q = qual.value;

  const p = document.getElementById("grade").value;
  if (!p) {
    document.getElementById("gradeError").innerText = "Required";
    return;
  } else if (p < 0 || p > 100) {
    document.getElementById("gradeError").innerText =
      "Enter a valid percentage or grade.";
    return;
  }
  const pc = document.getElementById("Preferred");
  if (!pc) {
    document.getElementById("courseError").innerText = "Select a course";
    return;
  }
  const pfc = pc.value;
  const bt = document.getElementById("batch");
  if (!bt) {
    document.getElementById("batchError").innerText = "Select a batch timing";
    return;
  }
  const btp = bt.value;
  const addr = document.getElementById("address").value;
  if (!addr) {
    document.getElementById("addressError").innerText =
      "Enter your full address";
    return;
  }
  const city = document.getElementById("city").value;
  if (!city) {
    document.getElementById("cityError").innerText =
      "Please enter a valid city name";
    return;
  }
  const pin = document.getElementById("pin").value;
  if (!pin) {
    document.getElementById("pinError").innerText = "Required";
    return;
  } else if (!/^[1-9]{1}[0-9]{5}$/.test(pin)) {
    document.getElementById("pinError").innerText =
      "Enter a valid 6-digit pin code";
    return;
  }
  const gna = document.getElementById("gname").value;
  if (!gna) {
    document.getElementById("gnError").innerText = "Enter guardian full name";
    return;
  }
  const gc = document.getElementById("gc").value;
  if (!/^[6-9]\d{9}$/.test(gc)) {
    document.getElementById("gcError").innerText =
      "Enter 10 digit contact number";
    return;
  }
  const addinfo = document.getElementById("addinfo");
  if (!addinfo) {
    document.getElementById("addError").innerText = "Select an option";
    return;
  }
  const add = addinfo.value;
  const sp = document.getElementById("sp").value;
  alert("Registration Successfull..!");
  console.log("Name: " + fullname);
  console.log("email: " + em);
  console.log("mob: " + mob);
  console.log("date of birth: " + dob);
  console.log("qualification: " + q);
  console.log("percentage: " + p);
  console.log("pereferd by: " + pfc);
  console.log("batch: " + btp);
  console.log("address: " + addr);
  console.log("city: " + city);
  console.log("pincode: " + pin);
  console.log("guardian name " + gna);
  console.log("guardian conatct " + gc);
  console.log("additional info: " + add);
  console.log("special: " + sp);
}
