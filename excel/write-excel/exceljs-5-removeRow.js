var Excel = require('exceljs');
var workbook = new Excel.Workbook();

workbook.xlsx.readFile('old.xlsx')
    .then(function () {
        var worksheet = workbook.getWorksheet(1);
        //worksheet.spliceRows(2,2);
        //worksheet.spliceRows(row._number, 1)
        //row.getCell(1).value = "0"
        var i = 0, j = 0;
        worksheet.eachRow(el => {
            if (el._number >= 2) i++;
        })
        while (j < i) {
            let row = worksheet.getRow(2);
            worksheet.spliceRows(row._number, 1)
            j++;
        }
        //console.log(row._cells)
        return workbook.xlsx.writeFile('new.xlsx');
    })