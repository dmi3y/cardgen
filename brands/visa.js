"use strict";

// Source http://www.regular-expressions.info/creditcard.html
module.exports = {
    type: "VISA",
    prereq: function() {

        // All Visa card numbers start with a 4. New cards have 16 digits. Old cards have 13.
        var begin = [];
        begin.push(4);
        return {
            number: begin,
            length: 16
        };
    }
};