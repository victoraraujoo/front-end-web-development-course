let offset = 0;
let limit = 5;
const maxRecord = 151;
let url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
const pokeList = document.getElementById("poke-list")


function pokemonToHmtl(pokemon) {
    console.log(pokemon.types[0].type.name)
    return `
    <a href=#>
        <li class="poke ${pokemon.types[0].type.name}">
            <span class="number-poke">#${pokemon.id}</span>
            <span id="nome-pokemon" class="nome-poke">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${typesToLi(pokemon.types).join("")}
                </ol>
                <img src="${pokemon.sprites.other.dream_world.front_default}"
                    alt=${pokemon.name}>
            </div>
        </li>
    </a>
    `
}


function typesToLi(pokemonTypes) {
    return pokemonTypes.map(
        typeSlot => `<li class="type ${typeSlot.type.name}">${typeSlot.type.name}</li>`
    )
}


function loadPokemonItens() {
    fetch(url)
        .then(response => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemonList = []) => {
            const newList = pokemonList.map(
                pokemon => fetch(pokemon.url).then(resp => resp.json())
            )
            return newList
        })
        .then(esperaRequest => Promise.all(esperaRequest))
        .then(infoPokemon => {
            const liPoke = infoPokemon.map(infoPokemon => pokemonToHmtl(infoPokemon))
            const lijoined = liPoke.join("")
            pokeList.innerHTML += lijoined
        })
        .catch((error) => console.error(error))
    offset += limit
}


btLoad.addEventListener("click", () => {
    let offsetNextPage = offset + limit;
    if (offsetNextPage >= maxRecord) {
        limit = maxRecord - offset
        url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
        loadPokemonItens()
        btLoad.parentElement.removeChild(btLoad)
        cbElement.parentElement.removeChild(cbElement)
    } else {
        url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
        loadPokemonItens()
    }
})


elem.addEventListener('change', () => {
    var newLimit = document.getElementById("elem").value;
    limit = Number(newLimit)
});


loadPokemonItens();
