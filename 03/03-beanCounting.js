function countBs(string) {
  var Bs = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == "B") Bs++;
  return `B's: ${Bs}`;
}

console.log(countBs("Batman and Bobby are going to Bollywood"));
console.log(countBs("Big Boobies are Bodacious and Beautiful"));

function countChar(string, character) {
  var chars = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == character) chars++;
  return `${character}'s: ${chars}`;
}

console.log(countChar("sally sold sea shells by the sea shore", "s"));
console.log(countChar("peter piper picked a pack of pickled peppers", "p"));
console.log(countChar("of all the saws I ever saw saw, I never saw a saw that saws while this saw saws", "s"));
