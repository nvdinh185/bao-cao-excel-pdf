const PDFDocument = require('pdfkit');
const fs = require('fs');

outputFilename = './files/pdf4.pdf';

page_config = {
    size: 'A5',
    margin: 0,
    layout: 'landscape'
},

background = {
    image: './images/LAWKI.jpg',
    left: 0,
    top: 0,
    width: 595,
    height: 420
},

doc = new PDFDocument(
    page_config
);

doc.pipe(fs.createWriteStream(outputFilename));

doc.image(background.image, background.left, background.top, { width: background.width, height: background.height });

doc.registerFont('Time-new-roman-utf8', './fonts/times.ttf');
doc.font('Time-new-roman-utf8');

doc.fontSize(20);
doc.fillColor("red");

doc.text("Hello", 100, 200);
doc.end();
console.log("Da tao ra file pdf sample!");