var arrObject = require('./utils/array-object');
const PDFDocument = require('pdfkit');
const fs = require('fs');

config = {
    background: {
        image: './images/Backgroud-Giay-moi-2019.jpg',
        left: 0,
        top: 0,
        width: 610,
        height: 422
    },
    page_config: {
        size: 'A5',
        margin: 0,
        layout: 'landscape'
    },
    color_default: "blue",
    title: "mau giay moi",
    author: "intenet"
};
mask = {
    ten_kh: {
        col: 120,
        row: 100
    },
    sotrang: {
        col: 540,
        row: 380,
        color: "red"
    }
};
list_data = [
    { ten_kh: "Nguyen Van Dinh", sotrang: 1 },
    { ten_kh: "Nguyen Van anh", sotrang: 2 },
    { ten_kh: "Nguyen Van em", sotrang: 3 },
    { ten_kh: "Nguyen Van minh", sotrang: 4 },
    { ten_kh: "Nguyen Van ha", sotrang: 5 },
    { ten_kh: "Nguyen Van hung", sotrang: 6 },
    { ten_kh: "Nguyen Van hoa", sotrang: 7 }
]

var pagesPrint = [];
list_data.forEach(kh => {
    pagesPrint.push(arrObject.getMatrix(mask, kh, { col: 0, row: 0 }));
})

var doc = new PDFDocument(
    config.page_config
);
var outputFilename = './files/giay_moi_a4.pdf';

var defaultColor = config.color_default;
doc.pipe(fs.createWriteStream(outputFilename));

doc.info['Title'] = config.title;
doc.info['Author'] = config.author;

doc.registerFont('Time-new-roman-utf8', './fonts/times.ttf');
doc.font('Time-new-roman-utf8');

doc.fontSize(12);
doc.fillColor(defaultColor);

pagesPrint.forEach((page, idx) => {
    if (idx > 0) doc.addPage();
    doc.image(config.background.image, config.background.left, config.background.top, { width: config.background.width, height: config.background.height });
    page.forEach(point => {
        if (point.color) doc.fillColor(point.color);
        doc.fillColor(defaultColor);
        doc.text(point.value, point.col, point.row);
    })
})
doc.end();
console.log("Da tao ra file pdf!");