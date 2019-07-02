const PDFDocument = require('pdfkit');
const fs = require('fs');

outputFilename = './files/pdf5.pdf';

page_config = {
    size: 'A5',
    margin: 0,
    layout: 'landscape'
};

background = {
    image: './images/LAWKI.jpg',
    left: 0,
    top: 0,
    width: 595,
    height: 420
};

matrix = [
    { x: 0, y: 100, value: "(0, 100)" },
    { x: 20, y: 120, value: "(20, 120)" },
    { x: 40, y: 140, value: "(40, 140)" },
    { x: 60, y: 160, value: "(60, 160)" },
    { x: 80, y: 180, value: "(80. 180)" }
];

doc = new PDFDocument(
    page_config
);

doc.pipe(fs.createWriteStream(outputFilename));

doc.image(background.image, background.left, background.top, { width: background.width, height: background.height });

doc.registerFont('Time-new-roman-utf8', './fonts/times.ttf');
doc.font('Time-new-roman-utf8');

doc.fontSize(20);
doc.fillColor("red");

matrix.forEach(el => {
    doc.text(el.value, el.x, el.y);
});
doc.end();
console.log("Da tao ra file pdf sample!");