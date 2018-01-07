var ndef = require('ndef');
var qr = require('qr-image');
var gzip = require('gzip-js'),options = {
    level: 3,
  };


html_content = `
<!DOCTYPE html>
<html>
<body>
<h2>What Can JavaScript Do?</h2>
<p id="demo">JavaScript can change HTML content.</p>
<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>
</body>
</html>

`;

var gzip_content = gzip.zip(html_content, options);
//console.log("gzip_content:"+gzip_content);

// Setup Ndef Message
message = [
  //ndef.textRecord("hello, world")

  //Cyberpunk Futurism
  //ndef.mimeMediaRecord("text/html",`<style type="text/css">@import url(https://fonts.googleapis.com/css?family=Press+Start+2P);body{background:#fff;font-family:'Press Start 2P',monospace;text-transform:uppercase;text-align: center;font-size:8px;-webkit-font-smoothing:none;top:50vh;position:relative;margin-top:-84px;}svg{max-width:64px;display:block;margin:.5em auto}span{display:block}._k{letter-spacing:1px}i{font-style:normal;color:#F0C}a{color:currentColor;text-decoration:none;outline:#fff}</style><body><a href="http://exolymph.com/cyberpunk-futurism-chat-group/"><svg viewbox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path d="M 45 25 L 25 45 5 25 25 5 35 15 45 5 25 25 45 45" fill="transparent" stroke="black" stroke-width="5" stroke-dasharray="46 5"/></svg><span>cyber<i>punk</i> </span><span class="_k">fu<i>turism</i></span></a></body>`)

  // html
  ndef.mimeMediaRecord("text/html",html_content)

  // gzipped html (Not as futureproof)
  //ndef.mimeMediaRecord("text/html+gzip", gzip_content)
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
