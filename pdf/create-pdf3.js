const PDFDocument = require('pdfkit');
const fs = require('fs');

outputFilename = './files/pdf3.pdf';

page_config = {
    size: 'A5',
    margin: 0,
    layout: 'landscape'
},

background = {
    image: './images/LAWKI.jpg', //file ảnh nền
    left: 0, //canh trái ảnh nền
    top: 0, //canh trên ảnh nền
    width: 595, //chiều rộng ảnh nền
    height: 420 //chiều cao ảnh nền
},

doc = new PDFDocument(
    page_config
);

doc.pipe(fs.createWriteStream(outputFilename));

doc.image(background.image, background.left, background.top, { width: background.width, height: background.height });

doc.end();
console.log("Da tao ra file pdf sample!");