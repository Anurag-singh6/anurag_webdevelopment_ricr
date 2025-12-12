function submit() {
  const n = document.getElementById("fullname").value.trim();
  const m = document.getElementById("mob").value.trim();
  const e = document.getElementById("em").value.trim();
  const b = document.getElementById("dob").value.trim();

  if (!/^[A-Zaa-z]+$/.test(n)) {
    alert("wrong input name");
    return;
  }
  if (!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in)$/.test(e)) {
    alert("wrong email");
    return;
  }
  if (!/^[6-9]\d{9}$/.test(m)) {
    alert("wrong number");
    return;
  }

  const data = {
    fullname: n,
    mobno: m,
    email: e,
    dob: b,
  };
  console.log(data);
}
