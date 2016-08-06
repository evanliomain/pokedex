const fs = require('fs');
const pokedex = require('..');

const salameche   = pokedex(4);
const pokemonsArr = pokedex([1, 7, 10, 13]);
const pokemonsArg = pokedex('80', '056', 23);
const pokemons  = [salameche].concat(pokemonsArr).concat(pokemonsArg);

fs.writeFile('test.html',
`
<html>
  <body>
    <ul>
      ${pokemons.map(pokemon => `
        <li>
          <ul>
            <li>id     : ${pokemon.id}</li>
            <li>nameFr : ${pokemon.nameFr}</li>
            <li>nameEn : ${pokemon.nameEn}</li>
            <li>nameDe : ${pokemon.nameDe}</li>
            <li>nameJp : ${pokemon.nameJp}</li>
            <li><img alt="${pokemon.nameFr}" src="data:image/png;base64, ${pokemon.image}"/></li>
          </ul>
        </li>
        `)
      }
    </ul>
  </body>'
</html>
`
, err => {
  if (err) throw err;
  console.log('File generate');
});
