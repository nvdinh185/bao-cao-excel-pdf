var Excel = require('exceljs');
var workbook = new Excel.Workbook();

workbook.xlsx.readFile('old.xlsx')
    .then(function () {
        var worksheet = workbook.getWorksheet(1);
        worksheet.spliceRows(2,2);
        return workbook.xlsx.writeFile('new.xlsx');
    })