function show() {
  let l = document.getElementById("place").value;

  console.log(l);
  if (l === "") {
    alert("please enter location");
    return;
  }

  const mapImg = document.getElementById("mapimg");

  const pin = document.createElement("i");
  pin.classList.add("bi", "bi-geo-alt-fill", "fs-3", "position-absolute");

  pin.style.transform = "translate(-50%, -100%)";
  pin.style.textShadow = "1px 1px 4px rgba(0,0,0,0.6)";
  pin.style.transition = "all 0.3s ease";

  if (l === "delhi") {
    pin.style.top = "450px";
    pin.style.left = "365px";
    pin.style.color = "red";
    pin.title = "state delhi \ncapital new delhi";
  } else if (l === "mumbai") {
    pin.style.top = "830px";
    pin.style.left = "220px";
    pin.style.color = "blue";
    pin.title = "state maharastra \ncapital mumbai";
  } else if (l === "kolkata") {
    pin.style.top = "690px";
    pin.style.left = "730px";
    pin.style.color = "green";
    pin.title = "state west bengal \ncapital kolkata";
  } else if (l === "chennai") {
    pin.style.top = "1100px";
    pin.style.left = "440px";
    pin.style.color = "purple";
    pin.title = "state tamil nadu \ncapital chennai";
  } else if (l === "madhaya pradesh") {
    pin.style.top = "650px";
    pin.style.left = "400px";
    pin.style.color = "pink";
    pin.title = "state madhaya pradesh \ncapital bhopal";
  } else {
    alert("Location not found in map data");
    return;
  }

  mapImg.appendChild(pin);

  document.getElementById("place").value = "";
}
function refresh() {
  window.location.reload();
}
