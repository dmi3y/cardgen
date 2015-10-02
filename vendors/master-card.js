"use strict";

module.exports = {
	type: "master-card",
    prereq: function() {

        // All MasterCard numbers start with the numbers 51 through 55. All have 16 digits.
        var begin = [];
        begin.push(5, this.rand(1, 5));

        return {
            number: begin,
            length: 16
        };
    }
};
