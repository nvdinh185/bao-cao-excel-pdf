const fs = require('fs');
const PDFDocument = require('pdfkit');

let options = {
    size: 'A6',
    margin: 0,
    layout: 'landscape'
};

background = {
    image: './images/LAWKI.jpg', //file ảnh nền
    left: 0, //canh trái ảnh nền
    top: 0, //canh trên ảnh nền
    width: 420, //chiều rộng ảnh nền
    height: 298 //chiều cao ảnh nền
};

let arSinhVien = [
    { stt: 1, name: "Nguyen Van Dinh1", namsinh: 1991 },
    { stt: 2, name: "Nguyen Van Dinh2", namsinh: 1992 },
    { stt: 3, name: "Nguyen Van Dinh3", namsinh: 1993 },
]

const doc = new PDFDocument(options);
let out = fs.createWriteStream('./files/output.pdf')
doc.pipe(out);
doc.image(background.image, background.left, background.top, { width: background.width, height: background.height });

doc.text('DANH SACH NHAN VIEN', 0, 0)
arSinhVien.forEach((el, idx) => {
    doc.text(el.stt, 10, 20 * (idx + 1));
    doc.text(el.name, 50, 20 * (idx + 1));
    doc.text(el.namsinh, 200, 20 * (idx + 1));
});
doc.end();