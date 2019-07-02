const fs = require('fs');
const PDFDocument = require('pdfkit');

let options = {
    size: 'A6',
    margin: 0
    // you pdf settings here.
}

let arSinhVien = [
    { stt: 1, name: "Nguyen Van Dinh1", namsinh: 1991 },
    { stt: 2, name: "Nguyen Van Dinh2", namsinh: 1992 },
    { stt: 3, name: "Nguyen Van Dinh3", namsinh: 1993 },
]

const doc = new PDFDocument(options);
let out = fs.createWriteStream('./files/output.pdf')
doc.pipe(out);
doc.text('DANH SACH NHAN VIEN', 0, 0)
arSinhVien.forEach((el, idx) => {
    doc.text(el.stt, 10, 30 * (idx + 1));
    doc.text(el.name, 50, 30 * (idx + 1));
    doc.text(el.namsinh, 200, 30 * (idx + 1));
});
doc.end();