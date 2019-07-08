var Excel = require('exceljs');
var workbook = new Excel.Workbook();

workbook.xlsx.readFile('old.xlsx')
    .then(function () {
        var worksheet = workbook.getWorksheet(1);
        let row = worksheet.getRow(2);
        /* var i = 0, j = 0;
        worksheet.eachRow(el => {
            if (el._number >= 5) i++;
        })
        while (j < i) {
            let row = worksheet.getRow(5);
            worksheet.spliceRows(row._number, 1)
            j++;
        } */
        while (row._cells.length > 0) {
            worksheet.spliceRows(row._number, 1)
            row = worksheet.getRow(2);
        }
        return workbook.xlsx.writeFile('new.xlsx');
    })