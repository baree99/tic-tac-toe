var expect = require('chai').expect;
const GameTable = require('../model/gameTable');

describe('GameTable', function() {

    var gameTable = new GameTable();

    it('initialize with a map of fields containing their value', function() {
        expect(gameTable.fields).to.deep.equal({
            'a1': 4,
            'a2': 3,
            'a3': 8,
            'b1': 9,
            'b2': 5,
            'b3': 1,
            'c1': 2,
            'c2': 7,
            'c3': 6
        })
    });

    describe('Remove field', function() {
        it('removes a a claimed field', function() {
            gameTable.removeField('a1')
            expect(gameTable.fields).to.not.include({'a1': 4})
        });
    });
});