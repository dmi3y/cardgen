"use strict";

module.exports = {
    type: "diners-club",
    prereq: function() {
        var out, begin = [];
        // Diners Club card numbers begin with 300 through 305, 36 or 38. All have 14 digits.
        // There are Diners Club cards that begin with 5 and have 16 digits.
        // These are a joint venture between Diners Club and MasterCard, and should be processed like a MasterCard.
        switch (this.rand(1)) {
            case 0:
                begin.push(3, 0, this.rand(5)); 
                break;
            case 1:
                begin.push(3, this.pick(6, 8));
                break;
        }

        return {
            number: begin,
            length: 14
        };
    }
};
