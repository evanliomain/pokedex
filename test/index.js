const fs = require('fs');
const pokedex = require('..');

const pokemon = pokedex.findPokemonById(4)

fs.writeFile('test.html',
'<html>'
+ '<body>'
+ '<h1>' + pokemon.nameFr + '</h1>'
+ '<img alt="' + pokemon.nameFr + '" src="data:image/png;base64, ' + pokemon.image+ '"/>'
+ '</body>'
+ '</html>'
, err => {
  if (err) throw err;
  console.log('File generate');
});
