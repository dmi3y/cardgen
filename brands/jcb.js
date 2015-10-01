"use strict";

module.exports = {
    type: "JCB",
    prereq: function() {
        var begin = [];
        var length = 15;
        // JCB cards beginning with 2131 or 1800 have 15 digits.
        // JCB cards beginning with 35 have 16 digits.
        switch (this.rand(2)) {
            case 0:
                begin.push(2, 1, 3, 1);
                break;
            case 1:
                begin.push(1, 8, 0, 0);
                break;
            case 2:
                begin.push(3, 5);
                length = 16;
                break;
        }

        return {
            number: begin,
            length: length
        };
    }
};
