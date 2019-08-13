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

const matrix = [
    { x: 0, y: 100, value: "(0, 100)" },
    { x: 40, y: 140, value: "(40, 140)" },
    { x: 80, y: 180, value: "(80. 180)" }
]

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