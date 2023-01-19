const URL = "https://pokeapi.co/api/v2/pokemon/ditto";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    document.getElementById("api-response").textContent = data.content;
    console.log(data.content);
  } catch (error) {
    console.log(error);
  }
}
getData(URL);

async function getname() {
  let big = await getData(URL);

  big.game_indices.filter((thing) => thing.version.name).forEach((thing) => {});
}
