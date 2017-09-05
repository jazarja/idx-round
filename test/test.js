'use strict';

var expect = require('chai').expect;
var round = require('../index');

describe('idx-round', function () {
    it('should round price below 200 to nearest fraction', function () {
        var result = round(100.5);
        expect(result).to.equal(101);
    });

    it('should round price below 200 to nearest fraction', function () {
        var result = round(100.2);
        expect(result).to.equal(100);
    });

    it('should round price below 500 to nearest fraction', function () {
        var result = round(453);
        expect(result).to.equal(452);
    });

    it('should round price below 500 to nearest fraction', function () {
        var result = round(460);
        expect(result).to.equal(460);
    });

    it('should round price below 2000 to nearest fraction', function () {
        var result = round(1002);
        expect(result).to.equal(1000);
    });

    it('should round price below 2000 to nearest fraction', function () {
        var result = round(1004);
        expect(result).to.equal(1005);
    });

    it('should round price below 5000 to nearest fraction', function () {
        var result = round(4014);
        expect(result).to.equal(4010);
    });

    it('should round price below 5000 to nearest fraction', function () {
        var result = round(4018);
        expect(result).to.equal(4020);
    });

    it('should round price above 5000 to nearest fraction', function () {
        var result = round(5019.2);
        expect(result).to.equal(5025);
    });

    it('should round price above 5000 to nearest fraction', function () {
        var result = round(5012.2);
        expect(result).to.equal(5000);
    });
});