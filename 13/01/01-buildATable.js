const mountains = [
  { name: "Kilimanjaro", height: 5895, country: "Tanzania" },
  { name: "Everest", height: 8848, country: "Nepal" },
  { name: "Mount Fuji", height: 3776, country: "Japan" },
  { name: "Mont Blanc", height: 4808, country: "Italy/France" },
  { name: "Vaalserberg", height: 323, country: "Netherlands" },
  { name: "Denali", height: 6168, country: "United States" },
  { name: "Popocatepetl", height: 5465, country: "Mexico" }
];

function CellRow(cells) {
  this.cells = cells;
}
CellRow.prototype.makeRow = function() {
  const tr = document.createElement('tr');
  for (let i in this.cells) {
    tr.appendChild(this.cells[i].makeCell());
  }
  return tr;
}

function TextCell(text, type) {
  this.text = text;
  this.type = type;
}
TextCell.prototype.makeCell = function() {
  let cell = document.createElement(`${this.type}`);
  cell.textContent = this.text;
  cell.style.textAlign = typeof this.text == 'number' ? 'right' : 'left';
  return cell;
}

function drawTable(data) {
  const table = document.body.appendChild(document.createElement('table'));
  const keys = Object.keys(data[0]);
  
  table.appendChild(new CellRow(keys.map(key => new TextCell(key, 'th'))).makeRow());

  data.map(row => {
    let current = [];
    for (let i in row) current.push(new TextCell(row[i], 'td'));
    return table.appendChild(new CellRow(current).makeRow()); 
  });
  
}

drawTable(mountains);