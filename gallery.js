var Chico = [
{  description:
  "bidwell park",
picture:
"http://bidwellpark.org/wp-content/uploads/2014/04/BidwellPool.jpg",
from:
"http://bidwellpark.org/"
},
{
description:
   "Chico State Univerity",
picture:
"http://today.csuchico.edu/wp-content/uploads/2015/08/Kendall-Hall-now.jpg",
from:
"https://www.google.com/search?newwindow=1&site=&tbm=isch&source=hp&biw=681&bih=642&q=chico+state&oq=chico&gs_l=img.1.0.35i39k1j0l9.4171.11885.0.13580.20.13.7.0.0.0.98.831.12.12.0....0...1ac.1.64.img..1.19.864.0..0i10k1j0i10i30k1j0i10i24k1j0i24k1.aOzg7_faVAo#imgrc=hRtzUFq-mA81-M:"
},
{
description:
   "Madison Bear Garden",
picture:
"http://static.panoramio.com/photos/large/98695149.jpg",
from:
"http://mapio.net/place/518772/"
},
{
description:
    "Morning Thunder Cafe",
picture:
"https://s-media-cache-ak0.pinimg.com/564x/fe/98/0a/fe980ad118ad3bc4be029aa68ff3b59a.jpg",
from:
"https://www.pinterest.com/pin/514395588658691246/"
},
{
description:
    "Chico Mall",
picture:
"http://www.centennialrec.com/images/made/a7a5d8042b20c99d/Chico_Mall_234_582_388_c1.jpg",
from:
"http://www.centennialrec.com/properties/details/chico-mall"
}
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

document.getElementById("picture").src=Chico[answer1].picture;
document.getElementById("caption").innerHTML=Chico[answer1].description;
document.getElementById("source").innerHTML= "image curtesy of" + Chico[answer1].from;
}
