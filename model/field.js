const Field = function() {
    this.map = this._createMap();
}

Field.prototype._createMap = function() {
    var table = this._createTable();
    return this._assignValuesToFields(table)
}

Field.prototype._createTable = function() {
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

Field.prototype._assignValuesToFields = function(table) {
    var values = [4, 3, 8, 9, 5, 1, 2, 7, 6];
    var fieldValues = {};

    for ( i = 0; i < table.length; i++) {
        fieldValues[table[i]] = values[i];
    }
    return fieldValues;
}

Field.prototype._assigner = function() {
    
}

module.exports = Field;