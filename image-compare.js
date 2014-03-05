#! /usr/bin/env node
// -*- js -*-
'use strict';

/*
image-compare 'test/img/01.jpg' 'test/img/02.jpg' 'test/img/03.jpg'
*/

var args                  = process.argv.slice(2);
var imageToCompareAgainst = args[0];
var imagesToCompare       = args.slice(1);

var imageCompare = require('./lib/image-compare.js');
imageCompare.compare(imageToCompareAgainst, imagesToCompare, function (imagesOrderedByDifference) {
    console.log(imagesOrderedByDifference[0][0]);
});