var assert = require("assert"),
    pushUnique = require("../src/index");


describe("pushUnique(array, ...args)", function() {
    it("should only push values that are not already in array", function() {
        var array = [0, 2, 4];

        pushUnique(array, 0, 1, 2, 3, 4, 5);

        assert.deepEqual(array, [0, 2, 4, 1, 3, 5]);
    });
});
