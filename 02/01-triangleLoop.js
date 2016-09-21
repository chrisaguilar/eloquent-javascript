/*
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by
writing .length after it.
var abc = "abc";
console.log(abc.length);
// -> 3
*/

/*var triangle = "#";
while (triangle.length <= 7) {
  console.log(triangle);
  triangle += "#";
}*/

for (var triangle = "#"; triangle.length <= (isNaN(process.argv[2]) ? 7 : process.argv[2]); triangle += '#')
  console.log(triangle);
