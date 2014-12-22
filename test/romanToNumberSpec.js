var Roman = require('../Roman').Roman;

describe("Roman numeral to number", function() {
    'use strict';

    it("should convert 'MMXV' correctly", function() {
        var TWO_THOUSAND_FIFTEEN = Roman.getNumFromRoman('MMXV');
        expect(TWO_THOUSAND_FIFTEEN).toBe(2015);
    });

    it("should convert 'CMXCIX' correctly", function() {
        var NINE_NINE_NINE = Roman.getNumFromRoman('CMXCIX');
        expect(NINE_NINE_NINE).toBe(999);
    });

    it("should convert 'MCCCXXXVII' correctly", function() {
        var HAXOR = Roman.getNumFromRoman('MCCCXXXVII');
        expect(HAXOR).toBe(1337);
    });

    it("should convert 'CCCXIV' correctly", function() {
        var PIE = Roman.getNumFromRoman('CCCXIV');
        expect(PIE).toBe(314);
    });

    it("should throw error for converting invalid string", function() {
        expect(Roman.getNumFromRoman.bind(null, null)).toThrow(new Error("Invalid roman numeral string"));
        expect(Roman.getNumFromRoman.bind(null, 'ICUP')).toThrow(new Error("Invalid roman numeral string"));
        expect(Roman.getNumFromRoman.bind(null, 'MIXCD')).toThrow(new Error("Invalid roman numeral string"));
        expect(Roman.getNumFromRoman.bind(null, 'CXCX')).toThrow(new Error("Invalid roman numeral string"));
        expect(Roman.getNumFromRoman.bind(null, 'MCDC')).toThrow(new Error("Invalid roman numeral string"));
    });
});
