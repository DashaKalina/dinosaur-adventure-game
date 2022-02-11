const array = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 3, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
];

let currentDinoStateRow  = 0;
let currentDinoStateColumn  = 0;

function createMarkup(arr) {
  let htmlMarkup = '';
  arr.forEach((row, indexRow) => {
    htmlMarkup += '<div class="row">';
    row.forEach((element, indexColumn) => {
      if(element === 0) {
        htmlMarkup += '<div class="elem"></div>'
      } else if(element === 1) {
        htmlMarkup += '<div class="elem volcan"></div>'
      } else if(element === 3) {
        currentDinoStateRow = indexRow;
        currentDinoStateColumn = indexColumn;
        htmlMarkup += '<div class="elem dino"></div>'
      };
    });
    htmlMarkup +='</div>';
    // console.log(htmlMarkup)
  });
  return htmlMarkup;
}
let app = document.getElementById("app");
app.innerHTML = createMarkup(array)
