var Excel = require('exceljs');
var workbook = new Excel.Workbook();

let arSinhVien = [
    { stt: 1, name: "Nguyen Van Dinh1", namsinh: 1991 },
    { stt: 2, name: "Nguyen Van Dinh2", namsinh: 1992 },
    { stt: 3, name: "Nguyen Van Dinh3", namsinh: 1993 }
]

workbook.xlsx.readFile('old.xlsx')
    .then(function () {
        var worksheet = workbook.getWorksheet(1);

        arSinhVien.forEach((element, idx) => {
            var row = worksheet.getRow(idx + 2);
            row.getCell(1).value = element.stt;
            row.getCell(2).value = element.name;
            row.getCell(3).value = element.namsinh;
            row.eachCell((cell) => {
                cell.border = {
                    top: { style: 'thin' },
                    bottom: { style: 'thin' },
                    left: { style: 'thin' },
                    right: { style: 'thin' },
                };
            });
        });

        return workbook.xlsx.writeFile('new.xlsx');
    })
    .catch(err => console.log("Xay ra loi: " + err))