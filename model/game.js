const Player = require('./player')

const Game = function() {
    this.player1 = new Player('X');
    this.player2 = new Player('O');
    this.turn = this.player1;
}

Game.prototype.turnSwitch = function() {
    this.turn = (this.turn === this.player1) ? this.player2 : this.player1;
}

Game.prototype.claimField = function(field) {
    this.turn.recordClaimedField(field)
}

module.exports = Game;