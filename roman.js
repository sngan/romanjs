(function() {
    'use strict';

    var Roman = {},
        romanString = [
            ['I', 'V'],
            ['X', 'L'],
            ['C', 'D'],
            ['M']
        ],
        repeat = function (char, times) {
            var result = '';
            while(times > 0) {
                result = result + char;
                times -= 1;
            }
            return result;
        },
        getRomanString = function(num, order) {
            var ref = romanString[order],
                mod5 = num % 5,
                rString = '';

            if (num === 9) {
                rString = ref[0] + romanString[order + 1][0];
            } else if (mod5 === 4) {
                rString = ref.join('');
            } else {
                if (num > 4) {
                    rString = ref[1];
                }
                rString = rString + repeat(ref[0], mod5);
            }

            return rString;
        };


    Roman.getRomanFromNum = function(number) {
        if (!number || number < 1 || number > 4999) {
            throw new Error("Number must be between 1 and 4999");
        }

        var result = '',
            order = 0,
            current;
        while (number % 10 !== number){
            current = number % 10;
            result = getRomanString(current, order) + result;
            number = Math.floor(number / 10);
            order = order + 1;
        }
        result = getRomanString(number, order) + result;

        return result;
    };

    Roman.getNumFromRoman = function(input) {
        return input;
    };

    exports.Roman = Roman;
}.call(this));
