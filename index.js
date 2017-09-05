'use strict';

var roundToFraction = function (number, fraction) {
    var rounded = Math.round(number);
    if (rounded % fraction !== 0) {
        if (rounded % fraction > fraction / 2) {
            rounded += fraction - (rounded % fraction);
        } else {
            rounded -= rounded % fraction;
        }
    }

    return rounded;
};

/**
 * Round price to nearest fraction
 * Ref: http://market.bisnis.com/read/20160502/190/543637/bei-berlakukan-fraksi-harga-baru-mulai-hari-ini-simak-rincian-perubahannya
 * @param price
 */
module.exports = function (price) {
    if (price < 200) {
        return roundToFraction(price, 1);
    } else if (price < 500) {
        return roundToFraction(price, 2);
    } else if (price < 2000) {
        return roundToFraction(price, 5);
    } else if (price < 5000) {
        return roundToFraction(price, 10);
    } else {
        return roundToFraction(price, 25);
    }
};