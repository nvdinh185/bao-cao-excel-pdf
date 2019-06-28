const PDFDocument = require('pdfkit');
const fs = require('fs');
var outputFilename = './files/giay_moi_A4_sample.pdf';

var config = {
    matrix_point: {
        max_row: 10, //so luong dong
        max_col: 5, // so luong cot
        zipper_row: 20, //khoang cach giua 2 dong
        zipper_col: 60, //khoang cach giua 2 cot
    },
    background: {
        image: './images/Backgroud-Giay-moi-2019.jpg', //file ảnh nền
        left: 0, //canh trái ảnh nền
        top: 0, //canh trên ảnh nền
        width: 595, //chiều rộng ảnh nền
        height: 420 //chiều cao ảnh nền
    },
    page_config: {
        size: 'A5', //cỡ giấy
        margin: 0, //lề dưới
        layout: 'landscape' // nằm ngang
    },
    color_default: "blue", //màu chữ
    title: "mau giay moi sample",
    author: "intenet"
};

var matrix = [];
for (let row = 0; row < config.matrix_point.max_row; row++) {
    for (let col = 0; col < config.matrix_point.max_col; col++) {
        matrix.push({
            x: col * config.matrix_point.zipper_col, //giãn cột
            y: row * config.matrix_point.zipper_row, //giãn dòng
            value: '(' + (row * config.matrix_point.zipper_row) + ',' + (col * config.matrix_point.zipper_col) + ')'
        })
    }
}

var doc = new PDFDocument(
    config.page_config
);

var defaultColor = config.color_default;
doc.pipe(fs.createWriteStream(outputFilename));

doc.info['Title'] = config.title;
doc.info['Author'] = config.author;

//in nen de canh
doc.image(config.background.image, config.background.left, config.background.top, { width: config.background.width, height: config.background.height });

doc.registerFont('Time-new-roman-utf8', './fonts/times.ttf');
doc.font('Time-new-roman-utf8');

doc.fontSize(12);
doc.fillColor(defaultColor);

matrix.forEach(el => {
    doc.text(el.value, el.x, el.y);
});

doc.end();
console.log("Da tao ra file pdf sample!");