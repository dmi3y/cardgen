"use strict";

var Randomizer = {
    /*
    *   Randomly picks whole numbers of the provided range (inclusive)
    *   If there is only one arument, range starts from zero
    */
    rand: function(/*from, to*/) {
        var from = arguments[0];
        var to = arguments[1];

        if ( to === undefined ) {
            to = from;
            from = 0;
        }

        return Math.floor(Math.random() * (to - from + 1)) + from;
    },

    /*
    *   Randomly picking up item from the arguments
    */
    pick: function(/*a, b, c, d...      */) {
        var len = arguments.length - 1;
        var i = this.rand(len);
        return arguments[i];
    },

    /*
    *   Picking up random item from registered vendors
    */
    randType: function() {
        var len0 = this.typesa.length - 1;
        return this.typesa[this.rand(len0)];
    }
};

var Generator = {
    register: function(card) {
        var type = card.type;
        var prereq = card.prereq;

        this.types = this.types || {};
        this.typesa = this.typesa || [];

        this.types[type] = prereq;
        this.typesa.push(type);
    },
    generate: function(opts) {
        opts = opts || {};
        var type = opts.type || this.randType();
        var prereq = this.types[type].call(this);

        var number = prereq.number;
        var length = prereq.length;

        // https://en.wikipedia.org/wiki/Luhn_algorithm
        // Fill random generated numbers for the rest of the card
        // Calculate Luhn control sum and place it at the end

        // reserve last digit for control sum
        var i = length - 1; 
        var num, sum = 0, flipflop = true;

        for (; i --> 0 ;) {
            num = number[i];
            if ( num === undefined ) {

                num = this.rand(9);
                number[i] = num;
            }

            if ( flipflop ) {

                num *= 2;
                sum += (num > 9? num - 9: num);
            } else {

                sum += num;
            }

            flipflop = !flipflop;
        }

        // control number appears last
        var cnum = (10 - sum % 10) % 10;

        number.push(cnum);
        return {
            numberRaw: number,
            number: number.join(""),
            type: type
        };
    }
};

// Melt Randomizer with Generator
for( var key in Randomizer ) {

    Generator[key] = Randomizer[key];
}

var gen = Object.create(Generator);

module.exports = gen;
