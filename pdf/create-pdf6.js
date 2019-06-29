const PDFDocument = require('pdfkit');
const fs = require('fs');

outputFilename = './files/pdf6.pdf';

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

matrix_point = {
    max_row: 10, //so luong dong
    max_col: 6, // so luong cot
    zipper_row: 40, //khoang cach giua 2 dong
    zipper_col: 90, //khoang cach giua 2 cot
};

matrix = []
for (let row = 0; row < matrix_point.max_row; row++) {
    for (let col = 0; col < matrix_point.max_col; col++) {
        matrix.push({
            x: col * matrix_point.zipper_col,
            y: row * matrix_point.zipper_row,
            value: "(" + col * matrix_point.zipper_col + "-" + row * matrix_point.zipper_row + ")"
        })
    }
}
//console.log(matrix)
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