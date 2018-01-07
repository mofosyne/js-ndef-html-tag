var ndef = require('ndef');
var qr = require('qr-image');


// Setup Ndef Message
message = [
  //ndef.textRecord("hello, world")
  ndef.mimeMediaRecord("text/html","<!DOCTYPE html><html><body><h1>Hello World</h1></body></html>")
];

// Encode NDEF Message
bytes = ndef.encodeMessage(message);


// var content = 'test msg';
console.log("qr:"+bytes);
content = bytes;

try
{ // SVG
  var qr_svg = qr.image(content, { type: 'svg' });
  qr_svg.pipe(require('fs').createWriteStream('./qr.svg'));
}catch(e){console.log("svg error:"+e);}

try
{ // PNG
  var qr_png = qr.image(content, { type: 'png' });
  qr_png.pipe(require('fs').createWriteStream('./qr.png'));
}catch(e){console.log("png: error"+e);}
