var cells = Array.prototype.slice.call(document.getElementsByTagName('td'));
var row1 = cells.slice(0,3);
var row2 = cells.slice(3,6);
var row3 = cells.slice(6,9);
var col1 = [row1[0], row2[0], row3[0]];
var col2 = [row1[1], row2[1], row3[1]];
var col3 = [row1[2], row2[2], row3[2]];
var diagnol1 = [row1[0], row2[1], row3[2]];
var diagnol2 = [row1[2], row2[1], row3[0]];

var winners = [];
winners.push(row1, row2, row3, col1, col2, col3, diagnol1, diagnol2);

function gameWinner(item, line) {
  if(line.every(function (element) {
    return element.textContent === item;
  })){
      alert(item + " HAS WON!!!")
  }
};
  //for loop for the board
  for (var i = 0; i < 9; i++) {
    //alternate user input through boolean 'turn'
    var turn = false;
    (function (i) {
      cells[i].addEventListener('click', function () {
        if(turn && cells[i].innerHTML == ''){
          cells[i].innerHTML = 'O';
          cells[i].style.backgroundColor = 'red';
          turn = !turn;
        }else if(cells[i].innerHTML == '') {
          cells[i].innerHTML = 'X';
          cells[i].style.backgroundColor = 'blue';
          turn = !turn
        }
        winner('X');
        winner('O');
      })
    })(i);
  };

    function winner(player) {
      return winners.some(function (winArray) {
        return gameWinner(player, winArray);
      })
    };
    function clearBoard() {
      for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
        cells[i].style.backgroundColor = "rgb(211,211,211)";
      }
    };

    document.getElementById('reset').addEventListener('click', function () {
      return clearBoard();
    })
