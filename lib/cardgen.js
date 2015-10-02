"use strict";

var sugar = require("sugar");

var Generator = {
    register: function(card) {
        var type = card.type;
        var prereq = card.prereq;

        this.prereqs = this.prereqs || [];
        this.types = this.types || {};
        this.typesa = this.typesa || [];

        this.types[type] = (this.prereqs.push(prereq) - 1);
        this.typesa.push(type);
    },
    randType: function() {
        return this.typesa[this.rand(this.typesa.length - 1)];
    },
    generate: function(opts) {
        opts = opts || {};
        var type = opts.type || this.randType();
        type = type.toUppercase();
        var prereq = this.prereqs[this.types[type]].call(this);

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
    },
    rand: Number.random, // SugarJs
    pick: function() {
        var len = arguments.length - 1;
        var i = this.rand(len);
        return arguments[i];
    }
};

var gen = Object.create(Generator);

module.exports = gen;
