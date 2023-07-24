
//--script yang bisa anda copykan pada appscript spreadsheet anda
// ingat anda harus deploy pada app script kemudian ambil alamat form action dan masukan pada sction form HTML

function doPost(e) {

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");
    var newRow = sheet.getLastRow() + 1;
    var rowData = [];
  
    rowData[0] = new Date();        // Tanggal dan Waktu
    rowData[1] = e.parameter.nama;  // Nama
    rowData[2] = e.parameter.ktp;   // Nomor KTP
    rowData[3] = e.parameter.tgl_lahir; // Tanggal Lahir
    rowData[4] = e.parameter.alamat; // Alamat
    rowData[5] = e.parameter.no_hp; // Nomor HP
  
    sheet.getRange(newRow, 1, 1, rowData.length).setValues([rowData]);
    return ContentService.createTextOutput("Data berhasil disimpan");
  }