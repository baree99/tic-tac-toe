var expect = require('chai').expect;
const Field = require('../model/field.js');

describe('Field', function() {
    
    var field = new Field();

    it('initialize with a map of fields containing their value', function() {
        expect(field.map).to.deep.equal({ a1: 4, a2: 3, a3: 8, b1: 9, b2: 5, b3: 1, c1: 2, c2: 7, c3: 6 })
    })
});