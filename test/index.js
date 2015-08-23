var tape = require("tape"),
    pushUnique = require("..");


tape("pushUnique(array, ...args) should only push values that are not already in array", function(assert) {
    var array = [0, 2, 4];

    pushUnique(array, 0, 1, 2, 3, 4, 5);

    assert.deepEqual(array, [0, 2, 4, 1, 3, 5]);
    assert.end();
});

tape("#array(array, values) should only push values from array that are not already in array", function(assert) {
    var array = [0, 2, 4];

    pushUnique.array(array, [0, 1, 2, 3, 4, 5]);

    assert.deepEqual(array, [0, 2, 4, 1, 3, 5]);
    assert.end();
});
