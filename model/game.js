const Player = require('./player')

const Game = function() {
    this.player1 = new Player();
}

module.exports = Game;