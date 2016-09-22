const mountains = require('./mountains');
const subjects = require('./subjects');

const repeat = (string, t) => {
  //Repeat string t times, return the repeated string
  //This is used to calculate the blank space for each element in a row
  let result = "";
  for (let i = 0; i < t; i++) result += string;
  return result;
}

//BEGIN TEXTCELL
function TextCell(text) {
  //TextCell interface
  //this.text = text (split at newline characters)
  this.text = text.split("\n");
}
TextCell.prototype.minWidth = function () {
  //Set minimum width of each cell
  //Look at each line
  //The absolute minimum is 0
  //If the line is greater than 0, the minimum width is line.length (the max value)
  return this.text.reduce(function (width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function () {
  //The minimum height = this.text.length
  //So if this.text included one newline character, this.minHeight would equal 2
  //This is because when you create a TextCell instance, this.text gets set to the 'text' parameter, which is split by newline characters
  return this.text.length;
};
TextCell.prototype.draw = function (width, height) {
  //This is what creates the cell that gets printed to the screen
  //It looks at the height and i, and if this.text[i] exists, it pushes this.text[i] + a blank space repeated until the line matches the given width
  //If this.text[i] doesn't contain anything, it sets the current line to a blank line.
  //Then it returns the current cell
  let result = [];
  for (let i = 0; i < height; i++) {
    const line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};
//END TEXTCELL

//BEGIN RTEXTCELL
function RTextCell(text) {
  //Basically does the same thing as calling TextCell(text)
  //Sets this.text to text, split by newline characters
  TextCell.call(this, text);
}
RTextCell.prototype = Object.create(TextCell.prototype); //RTextCell has all the same prototypes as TextCell (minWidth, minHeight)
RTextCell.prototype.draw = function (width, height) {
  //We need to override the TextCell.prototype.draw function, because this one has to repeat the blank spaces to the left of the line
  //This is really the same as TextCell.prototype.draw, except it pushes the blank spaces before the line in the for loop
  let result = [];
  for (let i = 0; i < height; i++) {
    const line = this.text[i] || "";
    result.push(repeat(" ", width - line.length) + line);
  }
  return result;
};
//END RTEXTCELL

//BEGIN UNDERLINEDCELL
function UnderlinedCell(inner) {
  //UnderlinedCell takes a parameter 'inner'
  //This parameter is actually an instance of TextCell
  //So it takes a TextCell and gives it an underline
  this.inner = inner;
}
UnderlinedCell.prototype.minWidth = function () {
  //Remember the TextCell provided in inner?
  //Use that TextCell's minWidth property and return it.
  return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function () {
  //Remember the TextCell provided in inner?
  //Use that TextCell's minHeight property and add one to it
  //Why do we add one? Because it's the header text + lines underneath
  return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function (width, height) {
  //Remember the TextCell provided in inner?
  //Use it's draw function to render the text (with height-1, because the +1 would make an extra line between the underline and the text)
  //Concatenate a row of dashes that extend the width of the line and return all of that 
  return this.inner.draw(width, height - 1)
    .concat([repeat("-", width)]);
};
//END UNDERLINEDCELL

const rowHeights = rows => rows.map(row => row.reduce((max, cell) => Math.max(max, cell.minHeight()), 0));
//Computes the height of each row
//For each row, look at each individual cell
//The initial height of a row should be 0
//Look at the cell's height. Is it bigger than the row's current max height?
//If it is, set the row's max height to the current cell's height
//Otherwise, continue


const colWidths = rows => rows[0].map((_, i) => rows.reduce((max, row) => Math.max(max, row[i].minWidth()), 0));
//Computes the width of each column
//Look at rows[0], use it as a sort of template for determining width
//Look at each row in rows
//Look at the first column in each row only
//The initial width of a column is zero; if a column is found that has a larger minWidth than the current width, set the current width to that cell's minWidth
//Then do the same thing for the other columns

function drawTable(rows) {
  //rows = dataTable(mountains)
  //At this point, the TextCells have been added to the table

  const heights = rowHeights(rows);
  const widths = colWidths(rows);
  //Compute the widths and heights of each column and row

  
  const drawLine = (blocks, lineNo) => blocks.map(block => block[lineNo]).join('|');
  //Draw the spacing/lines between columns

  const drawRow = (row, rowNum) => {
    const blocks = row.map((cell, colNum) => cell.draw(widths[colNum], heights[rowNum]));
    //For every row, use each cell's 'draw' function to draw its dimensions
    //Look at the widths and heights arrays computed earlier, and use those values to compute the cell's dimensions

    return blocks[0].map((_, lineNo) => drawLine(blocks, lineNo)).join("\n");
    //Compute the dimensions of each cell in a row, and also compute the column widths
    //Return all that info
  }

  return rows.map(drawRow).join("\n");
  //Map each row to drawRow so that it can compute the dimensions of each row/column
  //Join the rows with a newline character, so that when console.log calls, it will print out beautifully
}

function dataTable(data) {
  //data = mountains
  
  const keys = Object.keys(data[0]);
  //data[0] = {name: "Kilimanjaro", height: 5895, country: "Tanzania"}
  //Object.keys(data[0]) = ['name', 'height', 'country']

  const headers = keys.map(name => new UnderlinedCell(new TextCell(name)));
  //Create Underlined, Text cells out of each key in 'keys'
  //These values make up the header row (goes above body)

  const body = 
    data.map(row =>
      keys.map(name =>
        typeof row[name] == 'number' ? 
          new RTextCell(String(row[name]))
          :new TextCell(String(row[name]))
      )
    );
  //Look at the key:value pairs in each row
  //If the value of 'key' is a number, it needs to be a right-aligned text cell
  //If the value of 'key' is something other than a number, it needs to be a left-aligned (regular) text cell
  //Set the formatted rows to 'body'

  return [headers].concat(body);
  //return the header row concatenated with the body (header on top, body on bottom)
}

console.log();
console.log(drawTable(dataTable(mountains)));
console.log();

console.log();
console.log(drawTable(dataTable(subjects)));
console.log();