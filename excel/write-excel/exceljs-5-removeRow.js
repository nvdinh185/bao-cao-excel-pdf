var Excel = require('exceljs');
var workbook = new Excel.Workbook();

workbook.xlsx.readFile('old1.xlsx')
    .then(function () {
        var worksheet = workbook.getWorksheet(1);
        //worksheet.spliceRows(2,2);
        let row = worksheet.getRow(2);
        //worksheet.spliceRows(row._number, 1)
        //row.getCell(1).value = "0"
        worksheet.eachRow(el => {
            //worksheet.spliceRows(el._number, 0)
        })
        return workbook.xlsx.writeFile('new.xlsx');
    })