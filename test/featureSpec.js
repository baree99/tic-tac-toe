var expect = require('chai').expect;
const Game = require('../model/game');

describe('Test Game', function() {

    describe('When someone wins', function() {
        var game = new Game();

        it('after a player claimed a field it switches turn', function() {
            expect(game.turn.name).to.equal('X')
            game.claimField('a1');
            expect(game.turn.name).to.equal('O')
        })

        it('records the claimed fields for both players', function() {
            game.claimField('a2');
            game.claimField('b1');
            game.claimField('b3');
            expect(game.player1.claimedFields).to.deep.equal({
                'a1': 4,
                'b1': 9
            })
            expect(game.player2.claimedFields).to.deep.equal({
                'a2': 3,
                'b3': 1
            })
        })

        it('stops you from claiming a claimed field', function() {
            expect(game.claimField('b3')).to.equal('Field has already been taken')
        })

        it('declares the winner with the winning fields', function() {
            game.claimField('b2');
            game.claimField('a3');
            expect(game.claimField('c3')).to.equal('X won, winning fields: a1,b2,c3')
        })
    })

    describe('When noone wins', function() {
        it("returns that 'All fields has been taken'", function() {
            var game = new Game();
            
            game.claimField('b2');
            game.claimField('c1');
            game.claimField('c2');
            game.claimField('a2');
            game.claimField('a1');
            game.claimField('c3');
            game.claimField('a3');
            game.claimField('b1');
            expect(game.claimField('b3')).to.equal('All fields has been taken')
        })
    })
})