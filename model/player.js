const Player = function(name) {
    this.name = name
    this.claimedFields = {};
}

Player.prototype.recordClaimedField = function(field, value) {
    this.claimedFields[field] = value
}

module.exports = Player;