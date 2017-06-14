var expect = require('chai').expect;
const Player = require('../model/player.js');

describe('Player', function() {

    var player = new Player();

    it('initialize with an empty array of claimed fields', function() {
        expect(player.claimedFields).to.deep.equal([]);
    })
})