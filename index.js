const fs       = require('fs'),
      pokemons = require('./pokemons');

exports.findPokemonById = function(id) {
  const nId = parseInt(id, 10) - 1;
  return Object.assign({}, pokemons.pokemons[nId], {
    image : new Buffer(fs.readFileSync('./img/' + id + '.png')).toString('base64')
  });
}
