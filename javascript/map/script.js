function show() {
  let l = document.getElementById("place").value;

  console.log(l);
  if (l === "") {
    alert("please enter location");
    return;
  }

  const mapImg = document.getElementById("mapimg");

  const pin = document.createElement("i");
  pin.classList.add("bi", "bi-geo-alt-fill", "fs-5", "position-absolute");

  pin.style.transform = "translate(-50%, -100%)";
  pin.style.textShadow = "1px 1px 4px rgba(0,0,0,0.6)";
  pin.style.transition = "all 0.3s ease";

  if (l === "Delhi") {
    pin.style.top = "270px";
    pin.style.left = "619px";
    pin.style.color = "red";
    pin.title = "state delhi \ncapital new delhi";
  } else if (l === "Maharashtra") {
    pin.style.top = "415px";
    pin.style.left = "585px";
    pin.style.color = "blue";
    pin.title = "state maharastra \ncapital mumbai";
  } else if (l === "West Bengal") {
    pin.style.top = "362px";
    pin.style.left = "755px";
    pin.style.color = "green";
    pin.title = "state west bengal \ncapital kolkata";
  } else if (l === "Tamil Nadu") {
    pin.style.top = "540px";
    pin.style.left = "625px";
    pin.style.color = "purple";
    pin.title = "state tamil nadu \ncapital chennai";
  } else if (l === "Madhya Pradesh") {
    pin.style.top = "352px";
    pin.style.left = "620px";
    pin.style.color = "pink";
    pin.title = "state madhaya pradesh \ncapital bhopal";
  } else if (l === "Uttar Pradesh") {
    pin.style.top = "300px";
    pin.style.left = "655px";
    pin.style.color = "orange";
    pin.title = "state uttar pradesh \ncapital lucknow";
  } else if (l === "Bihar") {
    pin.style.top = "320px";
    pin.style.left = "720px";
    pin.style.color = "maroon";
    pin.title = "state bihar \ncapital patna";
  } else if (l === "Odisha") {
    pin.style.top = "400px";
    pin.style.left = "720px";
    pin.style.color = "yellow";
    pin.title = "state oddisa \ncapital bhuvnaeshwar";
  } else if (l === "Andhra Pradesh") {
    pin.style.top = "480px";
    pin.style.left = "635px";
    pin.style.color = "fuchsia";
    pin.title = "state andra pradesh \ncapital vishakapatnam";
  } else if (l === "Telangana") {
    pin.style.top = "435px";
    pin.style.left = "635px";
    pin.style.color = "olive";
    pin.title = "state telangana \ncapital hydrabad";
  } else if (l === "Karnataka") {
    pin.style.top = "490px";
    pin.style.left = "590px";
    pin.style.color = "purple";
    pin.title = "state karnataka \ncapital banglore";
  } else if (l === "Kerala") {
    pin.style.top = "560px";
    pin.style.left = "600px";
    pin.style.color = "black";
    pin.title = "state kerala \ncapital thiruvananthapuram";
  } else if (l === "Goa") {
    pin.style.top = "472px";
    pin.style.left = "570px";
    pin.style.color = "chocolate";
    pin.title = "state goa \ncapital panaji";
  } else if (l === "Chattisgarh") {
    pin.style.top = "400px";
    pin.style.left = "668px";
    pin.style.color = "aqua";
    pin.title = "state chattisgarh \ncapital raipur";
  } else if (l === "Jharkhand") {
    pin.style.top = "358px";
    pin.style.left = "720px";
    pin.style.color = "brown";
    pin.title = "state jharkhand \ncapital rachi";
  } else if (l === "Gujarat") {
    pin.style.top = "350px";
    pin.style.left = "545px";
    pin.style.color = "gold";
    pin.title = "state gujarat \ncapital gandhi nagar";
  } else if (l === "Rajasthan") {
    pin.style.top = "300px";
    pin.style.left = "575px";
    pin.style.color = "grey";
    pin.title = "state rajasthan \ncapital jaipur";
  } else if (l === "Haryana") {
    pin.style.top = "265px";
    pin.style.left = "608px";
    pin.style.color = "lime";
    pin.title = "state haryana \ncapital chandigarh";
  } else if (l === "Uttarakhand") {
    pin.style.top = "250px";
    pin.style.left = "645px";
    pin.style.color = "orangered";
    pin.title = "state uttarakhand \ncapital dheradun";
  } else if (l === "Punjab") {
    pin.style.top = "240px";
    pin.style.left = "600px";
    pin.style.color = "teal";
    pin.title = "state punjab \ncapital chandigarh";
  } else if (l === "Himachal Pradesh") {
    pin.style.top = "222px";
    pin.style.left = "622px";
    pin.style.color = "violet";
    pin.title = "state himachal pradesh \ncapital shimla";
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
