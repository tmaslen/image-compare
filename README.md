IMAGE-COMPARE
=============

Node.js utility to help you quickly identify which image from an array closest resembles a target image.

## Usage

```
image-compare PATH-TO-TARGET-IMAGE [IMAGE, ...]
```

Returns the path of the closest resembling image.

For example:

```
image-compare 'test/img/01.jpg' 'test/img/02.jpg' 'test/img/03.jpg'
```

Will return text:

```
test/img/02.jpg
```

## Installation

```
npm install image-compare
```

## How Image-compare works

Image-compare is really a nice API sat between the command line and [GraphicsMagick](http://www.graphicsmagick.org/).  It uses the GraphicsMagick [compare method](http://www.graphicsmagick.org%2Fcompare.html) to create a number that represents the difference between the target image and each image in the array.  Image-compare then returns the image that has the smallest amount of difference.  `GraphicsMagick.compare` isn't a silver bullet, you can't get a 100% reliable comparison between images from it.  The best way to work out which image from a collection closest resembles another image is to compare the size of difference.