var async        = require('async');
var imageCompare = require('../lib/image-compare.js');

/*
node image-compage.js target.jpg image1.jpg image2.jpg
*/

module.exports = {
    testEqualityComparison: function (test) {
        test.expect(1);
        imageCompare.equalityComparisons = [];
        function testAssertion () {
            test.ok(imageCompare.equalityComparisons[0][1] < imageCompare.equalityComparisons[1][1]);
            test.done();
        }
        imageCompare.imageToCompareAgainst = 'test/img/01.jpg';
        async.each(['test/img/02.jpg', 'test/img/03.jpg'], imageCompare.getEqualityValues, testAssertion);
    },
    testArrayOrdering: function (test) {
        test.expect(1);
        var unsortedArray = [
            ['05.jpg', 0.05],
            ['04.jpg', 0.04],
            ['03.jpg', 0.03],
            ['02.jpg', 0.02]
        ];
        var expectedArray = [
            [ '02.jpg', 0.02 ],
            [ '03.jpg', 0.03 ],
            [ '04.jpg', 0.04 ],
            [ '05.jpg', 0.05 ]
        ]
        imageCompare.equalityComparisons = unsortedArray;
        imageCompare.callback = function (sortedArray) {
            test.deepEqual(sortedArray, expectedArray);
            test.done();
        }
        imageCompare.orderEqualityComparisons();
    }
};

/*

npm link

*/