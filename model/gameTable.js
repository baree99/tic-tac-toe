const GameTable = function() {
    this.fields = this._createTable();
}

GameTable.prototype.removeField = function(field) {
    delete this.fields[field]
}

GameTable.prototype._createTable = function() {
    var table = this._createFields();

    return this._assignMagicSquareToFields(table)
}

GameTable.prototype._createFields = function() {
    var columns = ['a', 'b', 'c'];
    var rows = [1, 2, 3];    
    var fields = [];      

    columns.forEach(function(column) {
        rows.forEach(function(row) {
            fields.push(column + row);
        });
    });

    return fields;
}

GameTable.prototype._assignMagicSquareToFields = function(fields) {
    var magicSquare = [4, 3, 8, 9, 5, 1, 2, 7, 6];
    var fieldsWithMagicSquare = {};

    for ( i = 0; i < fields.length; i++) {
        fieldsWithMagicSquare[fields[i]] = magicSquare[i];
    }

    return fieldsWithMagicSquare;
}

module.exports = GameTable;