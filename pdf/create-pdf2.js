const PDFDocument = require('pdfkit');
const fs = require('fs');

outputFilename = './files/pdf2.pdf';

page_config = {
    size: 'A5', //cỡ giấy
    margin: 0,
    layout: 'landscape' //nam ngang
    //layout: 'portrait'  //mac dinh (nam doc)
},

doc = new PDFDocument(
    page_config
);

doc.pipe(fs.createWriteStream(outputFilename));
doc.text('Hello World.')
doc.end();
console.log("Da tao ra file pdf sample!");