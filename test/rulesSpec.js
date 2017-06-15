var expect = require('chai').expect;
const Rules = require('../model/rules');

describe('Rules', function() {

    var rules = new Rules();

    describe('Field checker', function() {
        it('checks is a field is still available', function() {
            rules.gameTable.removeField('a1')
            expect(rules.isFieldAvailable('a1')).to.be.false
            expect(rules.isFieldAvailable('a2')).to.be.true
        });
    });

    describe('Win', function() {
        it('returns the winning fields', function() {
            var winningFields = {
                'a1': 4,
                'a3': 8,
                'b3': 1,
                'c2': 7,
                'c3': 6
            }

            expect(rules.win(winningFields)).to.deep.equal([
                'a3',
                'b3',
                'c3'
            ])
        });

        it('returns false when player is not winning', function() {
            var winningFields = {
                'a1': 4,
                'b1': 9,
                'b3': 1,
                'c2': 7,
                'c3': 6
            }

            expect(rules.win(winningFields)).to.be.false
        });
    });

    describe('All fields taken', function() {
        it('returns false when there are fields left to take', function() {
            expect(rules.allFieldsAreTaken()).to.be.false
        })

        it('returns false when there are fields left to take', function() {
            rules.gameTable.fields = {};
            expect(rules.allFieldsAreTaken()).to.be.true
        })
    })
});