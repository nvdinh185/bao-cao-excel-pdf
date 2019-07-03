const fs = require('fs');
const PDFDocument = require('pdfkit');

let options = {
    size: 'A5',
    margin: 0,
    layout: 'landscape'
};

background = {
    image: './images/mau-hoa-don.jpg',
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

let maxtrix = []
for (let row = 0; row < matrix_point.max_row; row++) {
    for (let col = 0; col < matrix_point.max_col; col++) {
        maxtrix.push({
            x: col * matrix_point.zipper_col,
            y: row * matrix_point.zipper_row,
            value: "(" + col * matrix_point.zipper_col + "-" + row * matrix_point.zipper_row + ")"
        })
    }
}
console.log(maxtrix)
const doc = new PDFDocument(options);
let out = fs.createWriteStream('./files/output.pdf')
doc.pipe(out);
doc.image(background.image, background.left, background.top, { width: background.width, height: background.height });

doc.text('DANH SACH NHAN VIEN', 0, 0)

doc.end();