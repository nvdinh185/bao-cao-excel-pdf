var Excel = require('exceljs');
var workbook = new Excel.Workbook();

workbook.xlsx.readFile('old.xlsx')
    .then(() => {
        var worksheet = workbook.getWorksheet(2);
        var row = worksheet.getRow(2);
        row.getCell(2).value = 5;
        return workbook.xlsx.writeFile('new.xlsx');
    })