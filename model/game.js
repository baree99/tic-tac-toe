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
    if (this.rules.isFieldAvailable(field)) {
        return this._executeFieldClaiming(field)
    } else {
        return 'Field has already been taken'
    }
}

Game.prototype.gameOver = function() {
    if (this.rules.win(this.turn.claimedFields)) {
        return this.turn.name + ' won, winning fields: ' + this.rules.winningFields
    } else if (this.rules.allFieldsAreTaken()) {
        return 'All fields has been taken'
    }

    return this.turnSwitch()
}

Game.prototype._executeFieldClaiming = function(field) {
    this.turn.recordClaimedField(field, this.rules.gameTable.fields[field])
    this.rules.gameTable.removeField(field)
    return this.gameOver()
}

module.exports = Game;