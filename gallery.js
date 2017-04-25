var Chico = [
  "bidwell park",
   "Chico State Univerity",
   "Madison Bear Garden",
    "Morning Thunder Cafe",
    "Chico Mall"
  ];
  var current;

function shuffleGallery()
{
var answer1;
  do{
answer1 = Math.floor(Math.random()*Chico.length);
}
while(answer1==current);
current=answer1;
console.log(Chico[answer1]);


}
