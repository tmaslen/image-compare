var gm   = require('gm');
var async = require('async');

var imageCompare = {

    equalityComparisons: [],
    imageToCompareAgainst: null,
    callback: null,

    compare: function (imageToCompareAgainst, comparedImages, callback) {
        imageCompare.imageToCompareAgainst = imageToCompareAgainst;
        imageCompare.callback = callback;
        async.each(comparedImages, imageCompare.getEqualityValues, imageCompare.orderEqualityComparisons);
    },

    getEqualityValues: function (imageToCompare, callback) {
        gm.compare(imageCompare.imageToCompareAgainst, imageToCompare, 0.11, function (err, isEqual, equality, raw) {
            imageCompare.equalityComparisons.push([imageToCompare, equality]);
            callback();
        });
    },

    orderEqualityComparisons: function () {
        imageCompare.equalityComparisons.sort(function (a, b) {
            a = a[1];
            b = b[1];
            return a < b ? -1 : (a > b ? 1 : 0);
        });
        imageCompare.callback(imageCompare.equalityComparisons);
    }

};

module.exports = imageCompare;