const PDFDocument = require('pdfkit');
const fs = require('fs');

const page_config = {
    size: 'A5', //cỡ giấy
    margin: 10, //lề trên và trái
    layout: 'landscape' //kiểu giấy nằm ngang
    //layout: 'portrait'  //kiểu giấy mặc định (nam doc)
}

const background = {
    image: './images/LAWKI.jpg', //file ảnh nền
    left: 0, //canh trái ảnh nền
    top: 0, //canh trên ảnh nền
    width: 595, //chiều rộng ảnh nền
    height: 420 //chiều cao ảnh nền
}

const matrix = []

const matrix_point = {
    max_row: 10, //so luong dong
    max_col: 5, // so luong cot
    zipper_row: 40, //khoang cach giua 2 dong
    zipper_col: 115, //khoang cach giua 2 cot
}

for (let row = 0; row < matrix_point.max_row; row++) {
    for (let col = 0; col < matrix_point.max_col; col++) {
        matrix.push({
            x: col * matrix_point.zipper_col,
            y: row * matrix_point.zipper_row,
            value: "(" + col * matrix_point.zipper_col + "-" + row * matrix_point.zipper_row + ")"
        })
    }
}

const doc = new PDFDocument(page_config);

let outputFilename = './files/pdf.pdf';
let out = fs.createWriteStream(outputFilename)
doc.pipe(out);
doc.image(background.image, background.left, background.top, { width: background.width, height: background.height });

//Khai báo font chữ
doc.registerFont('Time-new-roman-utf8', './fonts/times.ttf');

//Sử dụng font chữ
doc.font('Time-new-roman-utf8');

//cỡ chữ
doc.fontSize(30);

//màu chữ
doc.fillColor("red");

//Viết nội dung sử dụng ma trận để lấy dữ liệu và vị trí
matrix.forEach(el => {
    doc.text(el.value, el.x, el.y);
});

doc.end();

out.on('finish', () => {
    console.log("Đã tạo ra file pdf!")
});