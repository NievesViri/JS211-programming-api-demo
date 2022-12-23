let firstPlayer;

let secondPlayer;

const list = document.querySelector("ul");

window.onload = function () {
  loadPost();
  loadPosts2();
};

const loadPost = () => {
  const random = Math.floor(Math.random() * 100);
  fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    .then((res) => res.json())
    .then((array) => {
      firstPlayer = array;
    });
};

const loadPosts2 = () => {
  const random2 = Math.floor(Math.random() * 100);
  fetch(`https://pokeapi.co/api/v2/pokemon/${random2}`)
    .then((res) => res.json())
    .then((array) => {
      secondPlayer = array;
    });
};

const pokemon1 = () => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const name = document.createElement("li");
  name.innerHTML = `Name: ${firstPlayer.species.name} <br> 
  HP: ${firstPlayer.stats[0].base_stat} <br> 
  Attack: ${firstPlayer.stats[1].base_stat} <br> 
  Defense: ${firstPlayer.stats[2].base_stat}
    `;

  console.log(firstPlayer);
  img.src =
    firstPlayer.sprites.versions["generation-iv"][
      "heartgold-soulsilver"
    ].back_shiny;
  div.append(img);
  name.append(div);
  list.append(name);
};

const pokemon2 = () => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const name = document.createElement("li");
  name.innerHTML = `Name: ${secondPlayer.species.name} <br> 
  HP: ${secondPlayer.stats[0].base_stat} <br> 
  Attack: ${secondPlayer.stats[1].base_stat} <br> 
  Defense: ${secondPlayer.stats[2].base_stat}
    `;

  console.log(secondPlayer);
  img.src =
    secondPlayer.sprites.versions["generation-iv"][
      "heartgold-soulsilver"
    ].back_shiny;
  div.append(img);
  div.id = "poke";
  name.append(div);
  list.append(name);
};

const startFight = () => {
  const poke1Info = firstPlayer.stats[0].base_stat;
  const poke2Info = secondPlayer.stats[0].base_stat;
  if (poke1Info > poke2Info) {
    window.alert(`Pokemon: ${firstPlayer.species.name} Won!`);
  } else if (poke2Info > poke1Info) {
    window.alert(`Pokemon: ${secondPlayer.species.name} Won!`);
  } else if (poke1Info === poke2Info) {
    window.alert(
      `Both ${firstPlayer.species.name} & ${secondPlayer.species.name} Tied!!`
    );
  }
};
