var Excel = require('exceljs');
var workbook = new Excel.Workbook();

let writeFile = async () => {
    try {
        await workbook.xlsx.readFile('old1.xlsx');
        var worksheet = workbook.getWorksheet(2);
        var row = worksheet.getRow(2);
        row.getCell(1).value = 2;
        row.getCell(2).value = 4;
        workbook.xlsx.writeFile('new.xlsx');
    } catch (err) {
        console.log('Loi: ' + err)
    }
}

writeFile().then(data => {
    console.log('data')
}).catch(err => {
    console.log(err)
})