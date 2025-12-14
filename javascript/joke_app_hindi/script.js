async function gethjokes() {
  const response = await fetch(
    "https://indian-jokes-api.onrender.com/jokes/hindi"
  );
  const data = await response.json();

  document.getElementById("joke").innerText = data.joke.joke;
}
async function getejokes() {
  const response = await fetch(
    "https://indian-jokes-api.onrender.com/jokes/english"
  );
  const data = await response.json();

  document.getElementById("e").innerText = data.joke.joke;
}
