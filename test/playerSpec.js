var expect = require('chai').expect;
const Player = require('../model/player.js');

describe('Player', function() {

    var player = new Player();

    it('initialize with an empty array of claimed fields', function() {
        expect(player.claimedFields).to.deep.equal([]);
    })

    describe('Record Claimed Field', function() {
        it('pushes the claimed field to the claimed fields array', function() {
            player.recordClaimedField('a1')
            expect(player.claimedFields).to.include('a1')
        })
    })
})