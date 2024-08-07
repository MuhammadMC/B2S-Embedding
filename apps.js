console.log("Hello B2S");

// creatring some constants
const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

function logWorkbookInformation() {
  workbook = viz.workbook;
  console.log(`The workbook name is : ${workbook.name}`);
  //find the array of sheets within a dashboard

  let sheets = workbook.publishedSheetsInfo;
  sheets.forEach((element) => {
    index = element.index;
    console.log(`The Sheet with index ${index} is: ${element.name}`);
  });
}

viz.addEventListener("firstinteractive", logWorkbookInformation);
logWorkbookInformation();
