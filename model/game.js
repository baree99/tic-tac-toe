const Player = require('./player')
const Rules = require('./rules')

const Game = function() {
    this.player1 = new Player('X');
    this.player2 = new Player('O');
    this.turn = this.player1;
    this.rules = new Rules();
}

Game.prototype.turnSwitch = function() {
    this.turn = (this.turn === this.player1) ? this.player2 : this.player1;
}

Game.prototype.claimField = function(field) {
    this.turn.recordClaimedField(field)
}

Game.prototype.gameOver = function() {
    if (this.rules.win(this.turn.claimedFields)) {
        return this.turn.name + ' won, winning fields: ' + this.rules.winningFields
    } else {
        return this.rules.allFieldsAreTaken()
    }
}

module.exports = Game;