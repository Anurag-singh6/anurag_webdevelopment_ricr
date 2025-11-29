function start() {
  console.log("game start");
  document.getElementById("roll1").disabled = false;
  document.getElementById("rs").disabled = false;
  document.getElementById("st").disabled = true;
}
function restart() {
  console.log("game restarted");
  window.location.reload();
}
function p1play() {
  console.log("player 1 Playing");
  let score = Number(document.getElementById("sc1").innerText);

  const df = Math.floor(Math.random() * 6) + 1;
  switch (df) {
    case 1: {
      document.getElementById("dice1").src = "./image/1.png";
      break;
    }
    case 2: {
      document.getElementById("dice1").src = "./image/2.png";
      break;
    }
    case 3: {
      document.getElementById("dice1").src = "./image/3.png";
      break;
    }
    case 4: {
      document.getElementById("dice1").src = "./image/4.png";
      break;
    }
    case 5: {
      document.getElementById("dice1").src = "./image/5.png";
      break;
    }
    case 6: {
      document.getElementById("dice1").src = "./image/6.png";
      break;
    }
    default: {
      document.getElementById("dice1").src = "./image/6.png";
    }
  }
  if (df == 6) {
    document.getElementById("roll1").disabled = true;
    document.getElementById("roll2").disabled = false;
  } else {
    score = score + df;
    document.getElementById("sc1").innerText = score;
    if (score >= 100) {
      alert("Player 1 wins.");
      document.getElementById("roll1").disabled = true;
      document.getElementById("roll2").disabled = true;
    }
  }
}
function p2play() {
  console.log("player 2 Playing");
  let score = Number(document.getElementById("sc2").innerText);

  const df = Math.floor(Math.random() * 6) + 1;
  // shocut of switch case
  document.getElementById("dice2").src = `./image/${df}.png`;
  if (df == 6) {
    document.getElementById("roll2").disabled = true;
    document.getElementById("roll1").disabled = false;
  } else {
    score = score + df;
    document.getElementById("sc2").innerText = score;
    if (score >= 100) {
      alert("Player 2 wins.");
      document.getElementById("roll1").disabled = true;
      document.getElementById("roll2").disabled = true;
    }
  }
}
