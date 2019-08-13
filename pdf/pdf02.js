const PDFDocument = require('pdfkit');
const fs = require('fs');

const page_config = {
    size: 'A5', //cỡ giấy
    margin: 10, //lề trên và trái
    layout: 'landscape' //kiểu giấy nằm ngang
    //layout: 'portrait'  //kiểu giấy mặc định (nam doc)
}

const doc = new PDFDocument(page_config);

let outputFilename = './files/pdf.pdf';
let out = fs.createWriteStream(outputFilename)
doc.pipe(out);

doc.end();

out.on('finish', () => {
    console.log("Đã tạo ra file pdf!")
});