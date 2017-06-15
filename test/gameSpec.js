var expect = require('chai').expect;
const Game = require('../model/game');

describe('Game', function() {

    var game;

    beforeEach(function() {
        game = new Game();
    });

    it('initialize with two players', function() {
        expect(game.player1).to.have.property('claimedFields')
        expect(game.player2).to.have.property('claimedFields')
    });

    describe('Switch Turn', function() {
        it('changes the turns between the players', function() {
            game.turn = game.player1;
            game.turnSwitch();
            expect(game.turn).to.equal(game.player2)
        });
    });

    describe('Claim Field', function() {
        it("stores the claimed field in the player in turn's object", function() {
            game.turn = game.player1;
            game.claimField('a1');
            expect(game.player1.claimedFields).to.include('a1')
        });
    });

    describe('Game Over', function() {
        it('returns false when noone is winning or fields left to claim', function() {
            expect(game.gameOver()).to.be.false
        })

        it('returns the winning player with winning fields', function() {
            game.player1.claimedFields = {
                'a1': 4,
                'a3': 8,
                'b3': 1,
                'c2': 7,
                'c3': 6
            }
            expect(game.gameOver()).to.equal('X won, winning fields: a3,b3,c3')
        })
    })
});