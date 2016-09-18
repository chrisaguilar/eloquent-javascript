var size = (isNaN(process.argv[2]) ? 8 : process.argv[2]);
var board = "";
var line = "";
  
while (board.length <= Math.pow(size, 2)) {
  if (line.length == size) {
    board += line + "\n";
    line = line[0] == "#" ? " " : "#";
  } else {
    line += line[line.length-1] == "#" ? " " : "#";
  }
}

console.log(board);
