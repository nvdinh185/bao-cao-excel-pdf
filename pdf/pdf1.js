const fs = require('fs');
const PDFDocument = require('pdfkit');

let options = {
    size: 'A5',
    margin: 0,
    layout: 'landscape'
    // you pdf settings here.
}
const doc = new PDFDocument(options);
let out = fs.createWriteStream('output.pdf')
doc.pipe(out);
doc.text('Hello World.')
doc.end();
out.on('finish', function () {
    // what you want to do with the file.
});