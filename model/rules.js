const GameTable = require('./gameTable')

const Rules = function() {
    this.gameTable = new GameTable();
}

Rules.prototype.isFieldAvailable = function(field) {
    return this.gameTable.fields.hasOwnProperty(field)
}

Rules.prototype.allFieldsAreTaken = function() {
    return (Object.keys(this.gameTable.fields).length === 0)
}

Rules.prototype.win = function(fields) {
    var fieldNames = Object.keys(fields)


    for (i = 0; i < fieldNames.length - 2; i++) {

        for ( j = 1; j < fieldNames.length - 1; j++ ) {
            if ( i >= j ) { j = i + 1 };

            for ( k = 2; k < fieldNames.length; k++ ) {
                if ( j >= k ) { k = j + 1 }
                if (fields[fieldNames[i]] + fields[fieldNames[j]] + fields[fieldNames[k]] === magicSum) {
                    return [
                        fieldNames[i], 
                        fieldNames[j],
                        fieldNames[k]
                    ];
                }
            }
        }
    }
};

const magicSum = 15;


module.exports = Rules;