var Excel = require('exceljs');
var workbook = new Excel.Workbook();

let excelOp = async () => {
    try {
        let worksheet = workbook.addWorksheet('Sheet1');
        let row = worksheet.addRow(1);
        row.getCell(1).value = 123;
        row.getCell(2).value = 456;
        row = worksheet.addRow(2);
        row.getCell(1).value = 1234;
        row.getCell(2).value = 4567;
        workbook.xlsx.writeFile('question_50508131.xlsx');
    } catch (e) {
        console.log("Loi: " + e)
    }
}

excelOp();