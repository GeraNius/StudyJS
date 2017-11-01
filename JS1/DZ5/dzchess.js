// Запрос типа фигур
var pt = prompt("Выберите тип фигур\n1 - изображения\nиначе - буквы");
// всякие константы
const CELL_COUNT = 8;
const MAX_COUNT = 10;
var letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
var upieces = ['\u265F', '\u265c', '\u265E', '\u265D', '\u265B', '\u265A', '\u265D', '\u265E', '\u265c'];
var lpieces = ['П', 'Л', 'К', 'С', 'Ф', 'О', 'С', 'К', 'Л'];

// глобальные переменные
var cells;
var tab = document.getElementById("chessdesk");

initArray();
initPieces(pt);
clearMap();
printMap();

// инициализация массива объектов полей шахматной доски
function initArray() {
    cells = new Array(MAX_COUNT);
    for (var i = 0; i < cells.length; i++)
        cells[i] = new Array(MAX_COUNT);
    for (var row = 0; row < cells.length; row++) {
        for (var col = 0; col < cells.length; col++) {
            // углы доски
            if (row + col == 0 || row + col == (MAX_COUNT - 1) * 2 || row - col == MAX_COUNT - 1 || col - row == MAX_COUNT - 1)
                cells[row][col] = { typ: "corner", content: "", reverse: false, piece: "" }
            // буквы по бордюру
            else if (row == 0 || row == MAX_COUNT - 1)
                cells[row][col] = { typ: "letter", content: letters[col - 1], reverse: (row == 0 ? true : false), piece: "" }
            // цифры по бордюру
            else if (col == 0 || col == MAX_COUNT - 1)
                cells[row][col] = { typ: "digit", content: CELL_COUNT - (row - 1), reverse: (col == 0 ? false : true), piece: "" }
            // игровые поля
            else
                cells[row][col] = { typ: "cell", content: "", reverse: false, piece: "" }
        }
    }
}

// добавление фигур в массив полей доски
function initPieces(piece) {
    var pieces;
    if (piece == 1)
        pieces = upieces;
    else
        pieces = lpieces;
    for (var col = 1; col < cells.length - 1; col++) {
        cells[1][col].content = pieces[col];
        cells[2][col].content = pieces[0];
        cells[MAX_COUNT - 2][col].content = pieces[col];
        cells[MAX_COUNT - 3][col].content = pieces[0];
        cells[MAX_COUNT - 2][col].piece = "white";
        cells[MAX_COUNT - 3][col].piece = "white";
    }
}

// очистка доски
function clearMap() {
    while (tab.firstChild) {
        tab.removeChild(tab.firstChild);
    }
}

// отрисовка доски по массиву
function printMap() {
    var celltr;
    var celltd;
    for (var row = 0; row < cells.length; row++) {
        console.log(cells[row]);
        celltr = document.createElement("tr");
        tab.appendChild(celltr);
        for (var col = 0; col < cells.length; col++) {
            //celltr.style.backgroundColor="#E04E39";
            var celltd = document.createElement("td");
            celltd.textContent = cells[row][col].content;
            switch (cells[row][col].typ) {
                case "corner":
                    { celltd.classList.add("canva", "angle"); break; }
                case "letter":
                    { celltd.classList.add("canva", "letter"); break; }
                case "digit":
                    { celltd.classList.add("canva", "digit"); break; }
                default:
                    {
                        celltd.classList.add("cell");
                        if ((col + row) % 2 == 0)
                            celltd.classList.add("light");
                        else
                            celltd.classList.add("dark");
                    }
            }
            if (cells[row][col].reverse)
                celltd.classList.add("rev");
            if (cells[row][col].piece == "white")
                celltd.classList.add("pwhite");
            celltr.appendChild(celltd);
        }
    }
}