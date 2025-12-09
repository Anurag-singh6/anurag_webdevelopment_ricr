const mapImg = document.getElementById("mapimg");
const pinSound = document.getElementById("pinSound");
let isMuted = false;
function playSound() {
  if (!isMuted) {
    pinSound.currentTime = 0;
    pinSound.play();
  }
}

const statesData = {
  Delhi: {
    top: "272px",
    left: "610px",
    color: "red",
    title: "Union territory Delhi\nCapital: India",
  },
  Maharashtra: {
    top: "415px",
    left: "585px",
    color: "blue",
    title: "State Maharashtra\nCapital: Mumbai",
  },
  "West Bengal": {
    top: "360px",
    left: "745px",
    color: "green",
    title: "State West Bengal\nCapital: Kolkata",
  },
  "Tamil Nadu": {
    top: "540px",
    left: "615px",
    color: "purple",
    title: "State Tamil Nadu\nCapital: Chennai",
  },
  "Madhya Pradesh": {
    top: "352px",
    left: "615px",
    color: "pink",
    title: "State Madhya Pradesh\nCapital: Bhopal",
  },
  "Uttar Pradesh": {
    top: "300px",
    left: "650px",
    color: "orange",
    title: "State Uttar Pradesh\nCapital: Lucknow",
  },
  Bihar: {
    top: "320px",
    left: "715px",
    color: "maroon",
    title: "State Bihar\nCapital: Patna",
  },
  Odisha: {
    top: "395px",
    left: "700px",
    color: "yellow",
    title: "State Odisha\nCapital: Bhubaneswar",
  },
  "Andhra Pradesh": {
    top: "480px",
    left: "625px",
    color: "fuchsia",
    title: "State Andhra Pradesh\nCapital: Amaravati",
  },
  Telangana: {
    top: "435px",
    left: "630px",
    color: "olive",
    title: "State Telangana\nCapital: Hyderabad",
  },
  Karnataka: {
    top: "490px",
    left: "585px",
    color: "purple",
    title: "State Karnataka\nCapital: Bangalore",
  },
  Kerala: {
    top: "555px",
    left: "590px",
    color: "black",
    title: "State Kerala\nCapital: Thiruvananthapuram",
  },
  Goa: {
    top: "472px",
    left: "560px",
    color: "chocolate",
    title: "State Goa\nCapital: Panaji",
  },
  Chattisgarh: {
    top: "395px",
    left: "662px",
    color: "aqua",
    title: "State Chhattisgarh\nCapital: Raipur",
  },
  Jharkhand: {
    top: "350px",
    left: "708px",
    color: "brown",
    title: "State Jharkhand\nCapital: Ranchi",
  },
  Gujarat: {
    top: "350px",
    left: "545px",
    color: "gold",
    title: "State Gujarat\nCapital: Gandhinagar",
  },
  Rajasthan: {
    top: "300px",
    left: "570px",
    color: "grey",
    title: "State Rajasthan\nCapital: Jaipur",
  },
  Haryana: {
    top: "265px",
    left: "600px",
    color: "lime",
    title: "State Haryana\nCapital: Chandigarh",
  },
  Uttarakhand: {
    top: "250px",
    left: "638px",
    color: "orangered",
    title: "State Uttarakhand\nCapital: Dehradun",
  },
  Punjab: {
    top: "240px",
    left: "595px",
    color: "teal",
    title: "State Punjab\nCapital: Chandigarh",
  },
  "Himachal Pradesh": {
    top: "222px",
    left: "615px",
    color: "violet",
    title: "State Himachal Pradesh\nCapital: Shimla",
  },
  "Jammu and Kashmir": {
    top: "198px",
    left: "587px",
    color: "red",
    title: "Union Territory Jammu & Kashmir\nCapital: Srinagar",
  },
  Ladhak: {
    top: "190px",
    left: "620px",
    color: "red",
    title: "Union Territory Ladakh\nCapital: Leh",
  },
  Sikkim: {
    top: "290px",
    left: "750px",
    color: "coral",
    title: "State Sikkim\nCapital: Gangtok",
  },
  Assam: {
    top: "304px",
    left: "800px",
    color: "PaleGreen",
    title: "State Assam\nCapital: Dispur",
  },
  "Arunachal Pradesh": {
    top: "278px",
    left: "820px",
    color: "Navy",
    title: "State Arunachal Pradesh\nCapital: Itanagar",
  },
  Meghalaya: {
    top: "318px",
    left: "785px",
    color: "YellowGreen",
    title: "State Meghalaya\nCapital: Shillong",
  },
  Nagaland: {
    top: "308px",
    left: "826px",
    color: "Salmon",
    title: "State Nagaland\nCapital: Kohima",
  },
  Manipur: {
    top: "330px",
    left: "818px",
    color: "Silver",
    title: "State Manipur\nCapital: Imphal",
  },
  Tripura: {
    top: "348px",
    left: "792px",
    color: "RebeccaPurple",
    title: "State Tripura\nCapital: Agartala",
  },
  Mizoram: {
    top: "358px",
    left: "808px",
    color: "RoyalBlue",
    title: "State Mizoram\nCapital: Aizawl",
  },
  Puducherry: {
    top: "530px",
    left: "633px",
    color: "red",
    title: "Union Territory Puducherry\nCapital: Puducherry",
  },
  "Daman and Diu": {
    top: "395px",
    left: "551px",
    color: "red",
    title: "Union Territory Daman & Diu\nCapital: Daman",
  },
  Chandigarh: {
    top: "242px",
    left: "608px",
    color: "red",
    title: "Union Territory Chandigarh\nCapital: Punjab & Haryana",
  },
  "Andaman and Nicobar": {
    top: "525px",
    left: "816px",
    color: "red",
    title: "Union Territory Andaman & Nicobar\nCapital: Port Blair",
  },
};
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
    pin.style.top = "272px";
    pin.style.left = "610px";
    pin.style.color = "red";
    pin.title = "Union teritory delhi \ncapital India";
  } else if (l === "Maharashtra") {
    pin.style.top = "415px";
    pin.style.left = "585px";
    pin.style.color = "blue";
    pin.title = "state maharastra \ncapital mumbai";
  } else if (l === "West Bengal") {
    pin.style.top = "360px";
    pin.style.left = "745px";
    pin.style.color = "green";
    pin.title = "state west bengal \ncapital kolkata";
  } else if (l === "Tamil Nadu") {
    pin.style.top = "540px";
    pin.style.left = "615px";
    pin.style.color = "purple";
    pin.title = "state tamil nadu \ncapital chennai";
  } else if (l === "Madhya Pradesh") {
    pin.style.top = "352px";
    pin.style.left = "615px";
    pin.style.color = "pink";
    pin.title = "state madhaya pradesh \ncapital bhopal";
  } else if (l === "Uttar Pradesh") {
    pin.style.top = "300px";
    pin.style.left = "650px";
    pin.style.color = "orange";
    pin.title = "state uttar pradesh \ncapital lucknow";
  } else if (l === "Bihar") {
    pin.style.top = "320px";
    pin.style.left = "715px";
    pin.style.color = "maroon";
    pin.title = "state bihar \ncapital patna";
  } else if (l === "Odisha") {
    pin.style.top = "395px";
    pin.style.left = "700px";
    pin.style.color = "yellow";
    pin.title = "state oddisa \ncapital bhuvnaeshwar";
  } else if (l === "Andhra Pradesh") {
    pin.style.top = "480px";
    pin.style.left = "625px";
    pin.style.color = "fuchsia";
    pin.title = "state andra pradesh \ncapital amravati";
  } else if (l === "Telangana") {
    pin.style.top = "435px";
    pin.style.left = "630px";
    pin.style.color = "olive";
    pin.title = "state telangana \ncapital hydrabad";
  } else if (l === "Karnataka") {
    pin.style.top = "490px";
    pin.style.left = "585px";
    pin.style.color = "purple";
    pin.title = "state karnataka \ncapital banglore";
  } else if (l === "Kerala") {
    pin.style.top = "555px";
    pin.style.left = "590px";
    pin.style.color = "black";
    pin.title = "state kerala \ncapital thiruvananthapuram";
  } else if (l === "Goa") {
    pin.style.top = "472px";
    pin.style.left = "560px";
    pin.style.color = "chocolate";
    pin.title = "state goa \ncapital panaji";
  } else if (l === "Chattisgarh") {
    pin.style.top = "395px";
    pin.style.left = "662px";
    pin.style.color = "aqua";
    pin.title = "state chattisgarh \ncapital raipur";
  } else if (l === "Jharkhand") {
    pin.style.top = "350px";
    pin.style.left = "708px";
    pin.style.color = "brown";
    pin.title = "state jharkhand \ncapital rachi";
  } else if (l === "Gujarat") {
    pin.style.top = "350px";
    pin.style.left = "545px";
    pin.style.color = "gold";
    pin.title = "state gujarat \ncapital gandhi nagar";
  } else if (l === "Rajasthan") {
    pin.style.top = "300px";
    pin.style.left = "570px";
    pin.style.color = "grey";
    pin.title = "state rajasthan \ncapital jaipur";
  } else if (l === "Haryana") {
    pin.style.top = "265px";
    pin.style.left = "600px";
    pin.style.color = "lime";
    pin.title = "state haryana \ncapital chandigarh";
  } else if (l === "Uttarakhand") {
    pin.style.top = "250px";
    pin.style.left = "638px";
    pin.style.color = "orangered";
    pin.title = "state uttarakhand \ncapital dheradun";
  } else if (l === "Punjab") {
    pin.style.top = "240px";
    pin.style.left = "595px";
    pin.style.color = "teal";
    pin.title = "state punjab \ncapital chandigarh";
  } else if (l === "Himachal Pradesh") {
    pin.style.top = "222px";
    pin.style.left = "615px";
    pin.style.color = "violet";
    pin.title = "state himachal pradesh \ncapital shimla";
  } else if (l === "Jammu and Kashmir") {
    pin.style.top = "198px";
    pin.style.left = "587px";
    pin.style.color = "red";
    pin.title = "union teritory jammu and kashmir \ncapital srinagar";
  } else if (l === "Ladhak") {
    pin.style.top = "190px";
    pin.style.left = "620px";
    pin.style.color = "red";
    pin.title = "union teritory ladhak \ncapital leah";
  } else if (l === "Sikkim") {
    pin.style.top = "290px";
    pin.style.left = "750px";
    pin.style.color = "coral";
    pin.title = "state sikkim \ncapital gangtok";
  } else if (l === "Assam") {
    pin.style.top = "304px";
    pin.style.left = "800px";
    pin.style.color = "PaleGreen";
    pin.title = "state assam \ncapital dispur";
  } else if (l === "Arunachal Pradesh") {
    pin.style.top = "278px";
    pin.style.left = "820px";
    pin.style.color = "Navy";
    pin.title = "state arunachal pradesh \ncapital ita nagar";
  } else if (l === "Meghalaya") {
    pin.style.top = "318px";
    pin.style.left = "785px";
    pin.style.color = "YellowGreen";
    pin.title = "state meghalaya \ncapital shillong";
  } else if (l === "Nagaland") {
    pin.style.top = "308px";
    pin.style.left = "826px";
    pin.style.color = "Salmon";
    pin.title = "state nagaland \ncapital kohima";
  } else if (l === "Manipur") {
    pin.style.top = "330px";
    pin.style.left = "818px";
    pin.style.color = "Silver";
    pin.title = "state manipur \ncapital imphal";
  } else if (l === "Tripura") {
    pin.style.top = "348px";
    pin.style.left = "792px";
    pin.style.color = "RebeccaPurple";
    pin.title = "state tripura \ncapital agartala";
  } else if (l === "Mizoram") {
    pin.style.top = "358px";
    pin.style.left = "808px";
    pin.style.color = "RoyalBlue";
    pin.title = "state mizoram \ncapital aizwal";
  } else if (l === "Puducherry") {
    pin.style.top = "530px";
    pin.style.left = "633px";
    pin.style.color = "red";
    pin.title = "union teritory puducherry \ncapital puducherry";
  } else if (l === "Daman and Diu") {
    pin.style.top = "395px";
    pin.style.left = "551px";
    pin.style.color = "red";
    pin.title = "union teritory daman and diu\ncapital daman";
  } else if (l === "Chandigarh") {
    pin.style.top = "242px";
    pin.style.left = "608px";
    pin.style.color = "red";
    pin.title = "union teritory chandigarh \ncapital punjab & haryana";
  } else if (l === "Andaman and Nicobar") {
    pin.style.top = "525px";
    pin.style.left = "816px";
    pin.style.color = "red";
    pin.title =
      "union teritory andaman and nicobar \ncapital shri vijaya puram";
  } else {
    alert("Location not found in map data");
    return;
  }

  mapImg.appendChild(pin);

  playSound();

  document.getElementById("place").value = "";
}
function refresh() {
  window.location.reload();
}
function add() {
  for (const state in statesData) {
    const data = statesData[state];
    const pin = document.createElement("i");
    pin.classList.add("bi", "bi-geo-alt-fill", "fs-5", "position-absolute");
    pin.style.transform = "translate(-50%, -100%)";
    pin.style.textShadow = "1px 1px 4px rgba(0,0,0,0.6)";
    pin.style.transition = "all 0.3s ease";
    pin.style.top = data.top;
    pin.style.left = data.left;
    pin.style.color = data.color;
    pin.title = data.title;
    mapImg.appendChild(pin);

    playSound();
  }
}
function toggleSound() {
  isMuted = !isMuted;
  const btn = document.getElementById("soundBtn");
  btn.textContent = isMuted ? "🔇 Sound Off" : "🔊 Sound On";
}
