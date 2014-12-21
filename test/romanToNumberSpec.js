var Roman = require('../Roman').Roman;

describe("Roman numeral to number", function() {
    'use strict';

    it("should convert 'MMXIV' correctly", function() {
        var TWO_THOUSAND_FOURTEEN = Roman.getNumFromRoman('MMXIV');
        expect(TWO_THOUSAND_FOURTEEN).toBe(2014);
    });

    it("should convert 'MCXVI' correctly", function() {
        var ONE_ONE_ONE_SIX = Roman.getNumFromRoman('MCXVI');
        expect(ONE_ONE_ONE_SIX).toBe(1116);
    });

    it("should convert 'MCCCXXXVII' correctly", function() {
        var HAXOR = Roman.getNumFromRoman('MCCCXXXVII');
        expect(HAXOR).toBe(1337);
    });

    it("should convert 'CCCXIV' correctly", function() {
        var PIE = Roman.getNumFromRoman('CCCXIV');
        expect(PIE).toBe(314);
    });
});
