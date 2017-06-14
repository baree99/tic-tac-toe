var expect = require('chai').expect;
const Game = require('../model/game.js');

describe('Game', function() {

    var game = new Game();

    it('initialize with two players', function() {
        expect(game.player1).to.have.property('claimedFields')
    })
})