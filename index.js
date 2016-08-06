const fs       = require('fs'),
      leftPad  = require('left-pad'),
      pokemons = require('./pokemons');

module.exports = function(id) {
  if (Array.isArray(id)) {
    return id.map(_getPokemonById);
  }
  if (1 < arguments.length) {
    return Array.from(arguments).map(_getPokemonById);
  }
  return _getPokemonById(id);
}


function _getPokemonById(id) {
  const nId = parseInt(id, 10) - 1,
        sId = leftPad(id, 3, 0);

  return Object.assign({}, pokemons.pokemons[nId], {
    image : new Buffer(fs.readFileSync('./img/' + sId + '.png')).toString('base64')
  });
}