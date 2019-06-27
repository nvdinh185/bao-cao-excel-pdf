const excel = require('node-excel-export');
const fs = require('fs');

const heading = [
    [
        {
            value: 'HTX TIEU THU DIEN VINH HUNG',
            style: {}
        }
    ],
];

const specification = {
    stt: {
        displayName: 'STT',
        headerStyle: {},
        width: 100
    },
    ma: {
        displayName: 'Mã KH',
        headerStyle: {},
        width: 100
    },
    ten: {
        displayName: 'Ten Khach hang',
        headerStyle: {},
        width: 100
    },
    diachi: {
        displayName: 'Dia chi',
        headerStyle: {},
        width: 100
    },
    chuathue: {
        displayName: 'Chua thue',
        headerStyle: {},
        width: 100
    },
    thue: {
        displayName: 'Thue',
        headerStyle: {},
        width: 100
    },
    tong: {
        displayName: 'Tong cong',
        headerStyle: {},
        width: 100
    }
}

const dataset = [
    { stt: 'IBM', ma: "1", ten: 'some note', diachi: "", chuathue: "", thue: "", tong: "" },
    { stt: 'IBM', ma: "1", ten: 'some note', diachi: "", chuathue: "", thue: "", tong: "" },
    { stt: 'IBM', ma: "1", ten: 'some note', diachi: "", chuathue: "", thue: "", tong: "" },
]

const merges = [];

const report = excel.buildExport(
    [
        {
            name: 'Report',
            heading: heading,
            merges: merges,
            specification: specification,
            data: dataset
        }
    ]
);

fs.writeFile('./bao-cao.xlsx', report, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('excel ./report.xlsx saved!');
    }
});