# js-ndef-html-tag

This is a sister project to https://github.com/mofosyne/NFCMessageBoard .

In NFCMessageBoard project, I have added the capability to read NFC tag that has a html encoded payload (It can also read compressed html as well)

Specifically these are the two mime records we are using:

* `text/html`
* `text/html+gzip`

The idea behind this is to be able to encode small interactive javascript demos into nfc tags for digital art installations.

## Usage

This does not yet have a proper commandline interface, `index.js` is the current working file. For now just modify the content of `html_content` and then run index.js it will generate a `qr_output.png`.

Next install [NFC Developer By Thomas Rorvik Skjolberg App](https://play.google.com/store/apps/details?id=com.antares.nfc) to your phone. This app has the capability to read QR code with NDEF payload and write to an NFC tag.

You can then use this app to scan the QR code in `qr_output.png` and then write to a 1kb tag. Note that there is not much space in a typical 1kb tag. You need to keep it a short as possible.

Once the tag is written, you can read the NFC tag html payload via the NFCMessageBoard app.

## Examples

Some examples of NDEF payloads you can use is provided in `example_ndef_qr` folder. You can use this to confirm that your QR to NFC tag app is functional.