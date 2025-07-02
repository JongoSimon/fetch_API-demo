//   fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)

//     .then(response => {  

//         if (!response.ok) {
//             throw new Error('could not fetch resource');
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

async function fetchData() {
    try{

        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok) {
            throw new Error('could not fetch resource');
        }
        const data = await response.json();
        const pokemomSprite = data.sprites.front_default;
        const imgElement = document.getElementById('pokemonSprite');

        imgElement.src = pokemomSprite;
        imgElement.style.display = 'block';
    }
    catch(error) {
        console.error(error);
    }
}