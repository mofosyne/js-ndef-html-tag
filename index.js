var ndef = require('ndef');
var qr = require('qr-image');
var gzip = require('gzip-js'),options = {
    level: 3,
  };


html_content = "<!DOCTYPE html><html><body><h1>Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! </h1></body></html>"
var gzip_content = gzip.zip(html_content, options);
console.log("gzip_content:"+gzip_content);

// Setup Ndef Message
message = [
  //ndef.textRecord("hello, world")
  //ndef.mimeMediaRecord("text/html","<!DOCTYPE html><html><body><h1>Hello World</h1></body></html>")
  ndef.mimeMediaRecord("text/html+gzip", gzip_content)
];

// Encode NDEF Message
ndef_bytes = ndef.encodeMessage(message);

// var content = 'test msg';
console.log("ndef_bytes:"+ndef_bytes);

/*
try
{ // SVG
  var qr_svg = qr.image(ndef_bytes, { type: 'svg' });
  qr_svg.pipe(require('fs').createWriteStream('./qr_output.svg'));
}catch(e){console.log("svg error:"+e);}
*/

try
{ // PNG
  var qr_png = qr.image(ndef_bytes, { type: 'png' });
  qr_png.pipe(require('fs').createWriteStream('./qr_output.png'));
}catch(e){console.log("png: error"+e);}
