var indexOf = require("index_of");


module.exports = pushUnique;

function pushUnique(array) {
    var i = 0,
        il = arguments.length - 1;

    while (i++ < il) {
        basePushUnique(array, arguments[i]);
    }

    return array;
}

pushUnique.array = function(array, values) {
    var i = -1,
        il = values.length - 1;

    while (i++ < il) {
        basePushUnique(array, values[i]);
    }

    return array;
};

function basePushUnique(array, value) {
    if (indexOf(array, value) === -1) {
        array[array.length] = value;
    }
}
