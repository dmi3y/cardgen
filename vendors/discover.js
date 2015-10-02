"use strict";

module.exports = {
    type: "discover",
    prereq: function() {
        var out, begin = [];
        // Discover card numbers begin with 6011 or 65. All have 16 digits.
        switch (this.rand(1)) {
            case 0:
                begin.push(6, 0, 1, 1);
                break;
            case 1:
                begin.push(6, 5);
                break;
        }

        return {
            number: begin,
            length: 16
        };
    }
};
