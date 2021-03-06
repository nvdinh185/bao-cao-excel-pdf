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

//Viết nội dung và xác định vị trí
doc.text("Hello World!", 50, 100);
doc.end();

out.on('finish', () => {
    console.log("Đã tạo ra file pdf!")
});