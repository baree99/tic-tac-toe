const GameTable = function() {
    this.fields = this._createTable();
}

GameTable.prototype.removeField = function(field) {
    delete this.fields[field]
}

GameTable.prototype._createTable = function() {
    var table = this._createFields();
    return this._assignValuesToFields(table)
}

GameTable.prototype._createFields = function() {
    var columns = ['a', 'b', 'c'];
    var rows = [1, 2, 3];    
    var table = [];      

    columns.forEach(function(column) {
        rows.forEach(function(row) {
            table.push(column + row);
        });
    });

    return table
}

GameTable.prototype._assignValuesToFields = function(table) {
    var values = [4, 3, 8, 9, 5, 1, 2, 7, 6];
    var fieldValues = {};

    for ( i = 0; i < table.length; i++) {
        fieldValues[table[i]] = values[i];
    }
    return fieldValues;
}

module.exports = GameTable;