const Player = function(name) {
    this.name = name
    this.claimedFields = [];
}

Player.prototype.recordClaimedField = function(field) {
    this.claimedFields.push(field)
}

module.exports = Player;