// Запрос типа фигур
var pt = prompt("Выберите тип фигур\n1 - изображения\nиначе - буквы");
// всякие константы
const CELL_COUNT = 8;
const MAX_COUNT = 10;
const PAWN_INDEX = 0;
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


// инициализация свойств ячейки массива
function initProperties(prow, pcol) {
    cells[prow][pcol] = { typ: null, reverse: null, content: null, color: null };

}

// установка свойств ячейки массива
function setProperties(prow, pcol, ptyp, prev, pcontent, pcolor) {
    if (ptyp != null)
        cells[prow][pcol].typ = ptyp;
    if (pcontent != null)
        cells[prow][pcol].content = pcontent;
    if (prev != null)
        cells[prow][pcol].reverse = prev;
    if (pcolor != null) {
        cells[prow][pcol].color = pcolor;
    }
}

// инициализация массива объектов полей шахматной доски
function initArray() {
    cells = new Array(MAX_COUNT);
    for (var i = 0; i < cells.length; i++)
        cells[i] = new Array(MAX_COUNT);
    for (var row = 0; row < cells.length; row++) {
        for (var col = 0; col < cells.length; col++) {
            initProperties(row, col);
            // углы доски
            if (row + col == 0 || row + col == (MAX_COUNT - 1) * 2 || row - col == MAX_COUNT - 1 || col - row == MAX_COUNT - 1)
                setProperties(row, col, "corner", false, null, null);
            // буквы по бордюру
            else if (row == 0 || row == MAX_COUNT - 1)
                setProperties(row, col, "letter", (row == 0 ? true : false), letters[col - 1], null);
            // цифры по бордюру
            else if (col == 0 || col == MAX_COUNT - 1)
                setProperties(row, col, "digit", (col == 0 ? false : true), CELL_COUNT - (row - 1), null);
            // игровые поля
            else
                setProperties(row, col, "cell", false, null, null);
        }
    }
}


// добавление фигур в массив полей доски
function initPieces(piece) {
    var pieces = piece == 1 ? upieces : lpieces;
    var pieceRow = (MAX_COUNT - CELL_COUNT) / 2;
    var pawnRow = pieceRow + 1;
    for (var col = pieceRow; col < cells.length - pieceRow; col++) {
        setProperties(pieceRow, col, null, null, pieces[col], null);
        setProperties(pawnRow, col, null, null, pieces[PAWN_INDEX], null);
        setProperties(CELL_COUNT, col, null, null, pieces[col], "white");
        setProperties(CELL_COUNT - pieceRow, col, null, null, pieces[PAWN_INDEX], "white");
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
            if (cells[row][col].color == "white")
                celltd.classList.add("pwhite");
            celltr.appendChild(celltd);
        }
    }
}