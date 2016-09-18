/*var triangle = "#";
while (triangle.length <= 7) {
  console.log(triangle);
  triangle += "#";
}*/

for (var triangle = "#"; triangle.length <= (isNaN(process.argv[2]) ? 7 : process.argv[2]); triangle += '#')
  console.log(triangle);
