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
});