var Excel = require('exceljs');
var workbook = new Excel.Workbook();

workbook.xlsx.readFile('old.xlsx')
    .then(() => {
        var worksheet = workbook.getWorksheet(1);
        var row = worksheet.getRow(1);
        //console.log(row.getCell(1).value)
        row.eachCell((cell) => {
            cell.font = { bold: true };
            cell.border = {
                top: { style: 'thin' },
                bottom: { style: 'double' },
                left: { style: 'double' },
                right: { style: 'double' },
            };
        });
        return workbook.xlsx.writeFile('new.xlsx');
    })