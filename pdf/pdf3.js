const fs = require('fs');
const PDFDocument = require('pdfkit');

let options = {
    size: 'A5',
    margin: 0,
    layout: 'landscape'
}

let arSinhVien = [
    { stt: 1, name: "Nguyen Van Dinh1", namsinh: 1991 },
    { stt: 2, name: "Nguyen Van Dinh2", namsinh: 1992 },
    { stt: 3, name: "Nguyen Van Dinh3", namsinh: 1993 },
]

const doc = new PDFDocument(options);
let out = fs.createWriteStream('./files/pdf.pdf')
doc.pipe(out);
doc.text('DANH SACH SINH VIEN', 0, 0)
arSinhVien.forEach((el, idx) => {
    doc.text(el.stt, 10, 20 * (idx + 1));
    doc.text(el.name, 50, 20 * (idx + 1));
    doc.text(el.namsinh, 200, 20 * (idx + 1));
});
doc.end();