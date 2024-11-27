// All Those Pokemon!
let pokeData;
fetch("pokemon.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (pokeData = strData.split(/\r?\n/)));

document.getElementById("btn1").addEventListener("click", randomPokemon);
document.getElementById("btn2").addEventListener("click", randomTeam);
document.getElementById("input1").addEventListener("change", firstLetter);
document.getElementById("input2").addEventListener("change", chooseLetters);

function randomPokemon() {
  let randomPokemon = Math.floor(Math.random() * 418);
  let name = `${pokeData[randomPokemon]}`;
  let pokeName = name.substring(0, name.length - 4);
  document.getElementById(
    "span1"
  ).innerHTML = `<img src="images/${pokeData[randomPokemon]}" alt="" />${pokeName}`;
}

function randomTeam() {
  let randomPokemon1 = Math.floor(Math.random() * 418);
  let name1 = `${pokeData[randomPokemon1]}`;
  let pokeName1 = name1.substring(0, name1.length - 4);
  let randomPokemon2 = Math.floor(Math.random() * 418);
  let name2 = `${pokeData[randomPokemon2]}`;
  let pokeName2 = name2.substring(0, name2.length - 4);
  let randomPokemon3 = Math.floor(Math.random() * 418);
  let name3 = `${pokeData[randomPokemon3]}`;
  let pokeName3 = name3.substring(0, name3.length - 4);
  document.getElementById("span2").innerHTML = "";
  document.getElementById(
    "span2"
  ).innerHTML += `<img src="images/${pokeData[randomPokemon1]}" alt="" /> ${pokeName1}`;
  document.getElementById(
    "span2"
  ).innerHTML += `<img src="images/${pokeData[randomPokemon2]}" alt="" /> ${pokeName2}`;
  document.getElementById(
    "span2"
  ).innerHTML += `<img src="images/${pokeData[randomPokemon3]}" alt="" /> ${pokeName3}`;
}

function firstLetter() {
  document.getElementById("div1").innerHTML = "";
  let letter = document.getElementById("input1").value;
  for (let i = 0; i < pokeData.length; i++) {
    if (pokeData[i].charAt(0) == letter) {
      let name = `${pokeData[i]}`;
      let pokeName = name.substring(0, name.length - 4);
      document.getElementById(
        "div1"
      ).innerHTML += `<img src="images/${pokeData[i]}" alt="" /> ${pokeName}`;
    }
  }
}

function chooseLetters() {
  document.getElementById("div2").innerHTML = "";
  let letter2 = document.getElementById("input2").value;
  for (let i = 0; i < pokeData.length; i++) {
    if (pokeData[i].length - 4 == letter2) {
      let name = `${pokeData[i]}`;
      let pokeName = name.substring(0, name.length - 4);
      document.getElementById(
        "div2"
      ).innerHTML += `<img src="images/${pokeData[i]}" alt="" /> ${pokeName}`;
    }
  }
}
