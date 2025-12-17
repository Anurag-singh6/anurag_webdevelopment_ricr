function submit() {
  const n = document.getElementById("fullname").value.trim();
  const m = document.getElementById("mob").value.trim();
  const e = document.getElementById("em").value.trim();
  const b = document.getElementById("dob").value.trim();

  document.querySelectorAll(".Error").forEach((element) => {
    element.innerHTML = "";
  });

  // validation start
  if (!n) {
    document.getElementById("NameError").innerText = "Required";
    return;
  } else if (!/^[A-Za-z ]+$/.test(n)) {
    document.getElementById("NameError").innerText =
      "Only Alphabets and Spaces are Allowed";
    return;
  }

  if (!e) {
    document.getElementById("EmailError").innerText = "Required";
    return;
  } else if (!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(e)) {
    document.getElementById("EmailError").innerText = "Use proper Email Format";
    return;
  }

  if (!m) {
    document.getElementById("PhoneError").innerText = "Required";
    return;
  } else if (!/^[6-9]\d{9}$/.test(m)) {
    document.getElementById("PhoneError").innerText =
      "Only Indian Mobile Number Allowed";
    return;
  }

  if (!b) {
    document.getElementById("BirthError").innerText = "Required";
    return;
  } else {
    const curryear = new Date().getFullYear();
    const birthyear = Number(b.split("-")[0]);
    if (curryear - birthyear < 17) {
      document.getElementById("BirthError").innerText =
        "You must be of 18 years Old";
      return;
    }
  }
  const data = {
    fullname: n,
    mobno: m,
    email: e,
    dob: b,
  };
  console.log(data);
}
