var Roman = require('../Roman').Roman;

describe("Number to roman numeral", function() {
    'use strict';

    it("should convert 6 correctly", function() {
        var SIX = Roman.getRomanFromNum(6);
        expect(SIX).toBe('VI');
    });

    it("should convert 42 correctly", function() {
        var FORTY_TWO = Roman.getRomanFromNum(42);
        expect(FORTY_TWO).toBe('XLII');
    });

    it("should convert 440 correctly", function() {
        var EXTRA_LARGE_CD = Roman.getRomanFromNum(440);
        expect(EXTRA_LARGE_CD).toBe('CDXL');
    });

    it("should convert 1984 correctly", function() {
        var ORWELL = Roman.getRomanFromNum(1984);
        expect(ORWELL).toBe('MCMLXXXIV');
    });
});
