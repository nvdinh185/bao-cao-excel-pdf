var Excel = require('exceljs');
var workbook = new Excel.Workbook();

let excelOp = async () => {
    let font = { size: 12, bold: true, color: { argb: "004e47cc" } };
    try {
        let worksheet = workbook.addWorksheet('Sheet1');
        let row = worksheet.addRow(1);
        row.getCell(1).value = 123;
        row.getCell(2).value = 456;
        row = worksheet.addRow(2);
        row.getCell(1).value = 1234;
        row.getCell(2).value = 4567;
        worksheet.eachRow(row => {
            row.eachCell((cell) => {
                cell.font = font;
                cell.border = {
                    top: { style: 'thin' },
                    bottom: { style: 'thin' },
                    left: { style: 'thin' },
                    right: { style: 'thin' },
                };
            });
        });
        workbook.xlsx.writeFile('question_50508131.xlsx');
    } catch (e) {
        console.log("Loi: " + e)
    }
}

excelOp();