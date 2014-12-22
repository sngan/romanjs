(function() {
    'use strict';

    var root = this,
        Roman = {},
        romanStringArray = [
            ['I', 'V'],
            ['X', 'L'],
            ['C', 'D'],
            ['M']
        ],
        romanStringMap = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        };

    Roman.getRomanFromNum = function(number) {
        if (!number || !/^[0-9]+$/.test(number) || number < 1 || number > 4999) {
            throw new Error("Number must be between 1 and 4999");
        }

        var repeat = function (char, times) {
                var result = '';
                while(times > 0) {
                    result = result + char;
                    times -= 1;
                }
                return result;
            },
            getRomanString = function(num, order) {
                var ref = romanStringArray[order],
                mod5 = num % 5,
                rString = '';

                if (num === 9) {
                    rString = ref[0] + romanStringArray[order + 1][0];
                } else if (mod5 === 4) {
                    if (order === romanStringArray.length - 1) { //4000+
                        rString = repeat(ref[0], 4);
                    } else {
                        rString = ref.join('');
                    }
                } else {
                    if (num > 4) {
                        rString = ref[1];
                    }
                    rString = rString + repeat(ref[0], mod5);
                }

                return rString;
            },
            result = '',
            order = 0,
            current;

        while (number / 10 > 0){
            current = number % 10;
            result = getRomanString(current, order) + result;
            number = Math.floor(number / 10);
            order = order + 1;
        }

        return result;
    };

    Roman.getNumFromRoman = function(input) {
        if (!input) {
            throw new Error("Invalid roman numeral string");
        }

        var result = 0,
            index = 0,
            currentChar,
            currentVal,
            lastVal;

        while(index < input.length) {
            currentChar = input[index];
            currentVal = romanStringMap[currentChar];
            if (currentVal === undefined) {
                throw new Error("Invalid roman numeral string");
            } else {
                if (lastVal && currentVal > lastVal) {
                    if (currentVal / lastVal % 5 !== 0){
                        throw new Error("Invalid roman numeral string");
                    }
                    result = result - lastVal * 2 + currentVal;
                    lastVal = currentVal - lastVal;
                } else {
                    result = result + currentVal;
                    lastVal = currentVal;
                }
                index = index + 1;
            }
        }
        return result;
    };

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = Roman;
        }
        exports.Roman = Roman;
    } else {
        root.Roman = Roman;
    }
}.call(this));
