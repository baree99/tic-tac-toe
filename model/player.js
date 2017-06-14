const Player = function() {
    this.claimedFields = [];
}

Player.prototype.recordClaimedField = function(field) {
    this.claimedFields.push(field)
}

module.exports = Player;