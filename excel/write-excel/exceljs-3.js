var Excel = require('exceljs');
var workbook = new Excel.Workbook();

workbook.xlsx.readFile('old.xlsx')
    .then(function () {
        var worksheet = workbook.getWorksheet(1);
        var row = worksheet.getRow(2);
        row.getCell(1).value = 1;
        row.getCell(2).value = 2;
        return workbook.xlsx.writeFile('old.xlsx');
    })