var Excel = require('exceljs');
var workbook = new Excel.Workbook();

workbook.xlsx.readFile('old.xlsx')
    .then(function () {
        var worksheet = workbook.getWorksheet(1);
        var row = worksheet.getRow(2);
        row.getCell(1).value = 1;
        row.getCell(2).value = "Nguyen Van Dinh1";
        row.getCell(3).value = 1991;
        row = worksheet.getRow(3);
        row.getCell(1).value = 2;
        row.getCell(2).value = "Nguyen Van Dinh2";
        row.getCell(3).value = 1991;
        return workbook.xlsx.writeFile('new.xlsx');
    })