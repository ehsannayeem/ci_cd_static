var i=0;
var j=0;

var numGrid= [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9,],
  [0]
];
document.write(numGrid[1][1]);

for(i=0; i<numGrid.length; i++){
  for(j=0; j<numGrid[i].length; j++){
  document.write(numGrid[i]);
  }
  document.write("<br/>");
}
