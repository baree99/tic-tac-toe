var expect = require('chai').expect;
const Game = require('../model/game.js');

describe('Game', function() {

    var game = new Game();

    it('initialize with two players', function() {
        expect(game.player1).to.have.property('claimedFields')
        expect(game.player2).to.have.property('claimedFields')
    })

    describe('Switch Turn', function() {
        it('changes the turns between the players', function() {
            game.turn = game.player1
            game.turnSwitch()
            expect(game.turn).to.equal(game.player2)
        })
    })
})