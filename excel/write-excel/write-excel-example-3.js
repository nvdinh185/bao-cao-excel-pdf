var Excel = require('exceljs');
var workbook = new Excel.Workbook();

let arSinhVien = [
    { stt: 1, name: "Nguyen Van Dinh1", namsinh: 1991 },
    { stt: 2, name: "Nguyen Van Dinh2", namsinh: 1992 },
    { stt: 3, name: "Nguyen Van Dinh3", namsinh: 1993 }
]

let excelOp = async () => {
    workbook = await workbook.xlsx.readFile('old.xlsx');
    let worksheet = workbook.getWorksheet('Sheet1');
    arSinhVien.forEach((element, idx) => {
        var row = worksheet.getRow(idx + 2);
        row.getCell(1).value = element.stt;
        row.getCell(2).value = element.name;
        row.getCell(3).value = element.namsinh;
    });
    workbook.xlsx.writeFile('question_50508131.xlsx');
}

excelOp();