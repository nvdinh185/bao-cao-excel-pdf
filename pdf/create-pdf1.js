const PDFDocument = require('pdfkit');
const doc = new PDFDocument;
const fs = require('fs');

outputFilename = './files/pdf1.pdf';

doc.pipe(fs.createWriteStream(outputFilename));

doc.end();
console.log("Da tao ra file dau tien!");