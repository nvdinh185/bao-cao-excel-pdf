const cloneExcelUtil = require('./cloneExcelUtil');

const styles = {
    headerDark: {
        fill: {
            fgColor: {
                rgb: '00FFFFCC'
            }
        },
        font: {
            color: {
                rgb: '00000000'
            },
            sz: 14,
            bold: true,
            underline: true,
            italic: true
        },
        alignment: {
            horizontal: 'center',
        }
    },
    headerGreen: {
        fill: {
            fgColor: {
                rgb: '00FF00FF'
            }
        }
    },
    cellPink: {
        fill: {
            fgColor: {
                rgb: '00FFFFCC'
            }
        }
    },
    cellGreen: {
        fill: {
            fgColor: {
                rgb: '00FF00FF'
            }
        }
    }
};

const heading = [
    [{ value: 'Danh sach sinh vien', style: styles.headerDark }],
];

const specification = {
    stt: {
        displayName: 'STT',
        headerStyle: styles.headerGreen,
        cellStyle: styles.cellPink,
        width: 120
    },
    ho_va_ten: {
        displayName: 'Ho va ten',
        headerStyle: styles.headerGreen,
        cellStyle: styles.cellPink,
        width: '20'
    },
    type: {
        displayName: 'Type',
        headerStyle: styles.headerGreen,
        cellStyle: styles.cellPink,
        width: '20'
    }
}

const merges = [{ start: { row: 1, column: 1 }, end: { row: 1, column: 3 } }]

const excelConfig = {
    sheetname: 'danhsach',
    heading: heading,
    merges: merges,
    specification: specification
}

const filenameInput = './dsmau.xlsx';
const filenameOutput = './excel_clone.xlsx';

cloneExcelUtil.cloneExcel(excelConfig, filenameInput, filenameOutput);