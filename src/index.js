var indexOf = require("index_of");


function basePushUnique(array, value) {
    if (indexOf(array, value) === -1) {
        array[array.length] = value;
    }
}

module.exports = function pushUnique(array) {
    var i = 0,
        il = arguments.length - 1;

    while (i++ < il) {
        basePushUnique(array, arguments[i]);
    }

    return array;
};
