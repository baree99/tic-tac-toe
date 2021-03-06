var expect = require('chai').expect;
const Player = require('../model/player');

describe('Player', function() {

    var player = new Player('X');

    it('initialize with a name', function() {
        expect(player.name).to.equal('X');
    });

    it('initialize with an empty hash of claimed fields', function() {
        expect(player.claimedFields).to.deep.equal({});
    });

    describe('Record Claimed Field', function() {
        it('pushes the claimed field to the claimed fields array', function() {
            player.recordClaimedField('a1', 4);
            expect(player.claimedFields).to.include({'a1': 4})
        });
    });
});