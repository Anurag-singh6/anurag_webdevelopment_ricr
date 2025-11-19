function submitform() {
  console.log("submit button is clicked");
  const fullname = document.getElementById("FullName").value;
  const contact = document.getElementById("MobileNumber").value;
  const em = document.getElementById("Email").value;
  const q = document.getElementById("Qualification").value;
  const collegename = document.getElementById("CollegeName").value;
  const year = document.getElementById("Year");
  const sy = year.value;
  const bh = document.getElementById("Branch").value;
  const source = document.getElementById("info");
  const soi = source.value;
  console.log("Name: " + fullname);
  console.log("contact number: " + contact);
  console.log("email: " + em);
  console.log("qualification: " + q);
  console.log("college: " + collegename);
  console.log("year: " + sy);
  console.log("branch: " + bh);
  console.log("source of infomation: " + soi);
}
