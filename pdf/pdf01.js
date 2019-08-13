const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument;

let outputFilename = './files/pdf.pdf';
let out = fs.createWriteStream(outputFilename)
doc.pipe(out);

doc.end();

out.on('finish', () => {
    console.log("Đã tạo ra file pdf đầu tiên!")
});