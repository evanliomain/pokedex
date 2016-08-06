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
  var image;

  const nId = parseInt(id, 10) - 1,
        sId = leftPad(id, 3, 0);

  try {
    image = new Buffer(fs.readFileSync('./img/' + sId + '.png')).toString('base64');
  } catch (error) {
    image = null;
  }

  return Object.assign({}, pokemons.pokemons[nId], { image });
}