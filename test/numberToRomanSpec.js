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

    it("should convert 4000 correctly", function() {
        var FOUR_THOUSAND = Roman.getRomanFromNum(4000);
        expect(FOUR_THOUSAND).toBe('MMMM');
    });

    it("should convert 1984 correctly", function() {
        var ORWELL = Roman.getRomanFromNum(1984);
        expect(ORWELL).toBe('MCMLXXXIV');
    });

    it("should throw error for converting invalid number", function() {
        expect(Roman.getRomanFromNum.bind(null, null)).toThrow(new Error("Number must be between 1 and 4999"));
        expect(Roman.getRomanFromNum.bind(null, 0)).toThrow(new Error("Number must be between 1 and 4999"));
        expect(Roman.getRomanFromNum.bind(null, 'batman')).toThrow(new Error("Number must be between 1 and 4999"));
        expect(Roman.getRomanFromNum.bind(null, 3.14)).toThrow(new Error("Number must be between 1 and 4999"));
        expect(Roman.getRomanFromNum.bind(null, 5000)).toThrow(new Error("Number must be between 1 and 4999"));
    });
});
