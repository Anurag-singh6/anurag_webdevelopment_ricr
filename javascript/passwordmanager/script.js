function adddata() {
  const site = document.getElementById("web").value.trim();
  const user = document.getElementById("fullname").value.trim();
  const pass = document.getElementById("password").value.trim();

  const datapacks = {
    website: site,
    username: user,
    password: pass,
  };
  console.log(datapacks);
  // if(localStorage.getItem("PasswordManager")){
  //     const data = JSON.parse(localStorage.getItem("PasswordManger"));
  // }
  // else{
  //     const data = [];
  // }
  const data = JSON.parse(localStorage.getItem("PasswordManager")) || [];
  data.push(datapacks);
  localStorage.setItem("PasswordManager", JSON.stringify(data));

  document.getElementById("web").value = "";
  document.getElementById("fullname").value = "";
  document.getElementById("password").value = "";
}
function clear() {
  window.location.reload();
}
function download() {
  const data = JSON.parse(localStorage.getItem("PasswordManager")) || [];
  if (data.length <= 0) {
    alert("No data found");
    return;
  }
  const headers = Object.keys(data[0]).join(",") + "\n";

  const rows = data.map((items) => Object.values(items).join(",")).join("\n");

  const CSVContent = headers + rows;

  const blob = new Blob([CSVContent], { type: "text/csv" });

  const anchor = document.createElement("a");

  anchor.href = URL.createObjectURL(blob);
  anchor.download = "data.csv";
  anchor.click();

  localStorage.removeItem("PasswordManager");
}
