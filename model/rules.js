const GameTable = require('./gameTable')

const Rules = function() {
    this.gameTable = new GameTable();
}

Rules.prototype.isFieldAvailable = function(field) {
    return this.gameTable.fields.hasOwnProperty(field)
}

module.exports = Rules;