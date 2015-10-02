"use strict";

module.exports = {
    type: "EXPRESS",
    prereq: function() {

        // American Express card numbers start with 34 or 37 and have 15 digits.
        var begin = [];
        begin.push(3, this.pick(4, 7));

        return {
            number: begin,
            length: 15
        };
    }
};
