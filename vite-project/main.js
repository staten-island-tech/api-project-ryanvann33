const apiEndpoint = 'https://pokeapi.co/api/v2/pokemon/';

async function getPokemon() {
const pokemonId = document.getElementById('pokemonId').value;
const response = await fetch(apiEndpoint + pokemonId);
const data = await response.json();
const pokemonHeight = data.height;
const pokemonWeight = data.weight;
const pokemonType = data.types[0].type.name;
const pokemonAbility = data.abilities[0].ability.name;

  document.getElementById('pokemonType').innerHTML = `Type: ${pokemonType}`;
  document.getElementById('pokemonAbility').innerHTML = `Ability: ${pokemonAbility}`;
  document.getElementById('pokemonHeight').innerHTML = `Height: ${pokemonHeight}`;
  document.getElementById('pokemonWeight').innerHTML = `Weight: ${pokemonWeight}`;
}


document.getElementById('submitButton').addEventListener('click', getPokemon);