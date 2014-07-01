var bL = ["shoot", "draw", "make", "graph", "paint", "play", "write", "share"];

// Button Maker
function doLoading()
{
    bM();
    dM();
    alertUs();
}

function bM() 
{  
 var tB, bT;
  
 for (var i = 0; i < bL.length; i++)
  {
   tB = document.createElement("BUTTON");
   bT = document.createTextNode(bL[i]);
   tB.appendChild(bT);
   tB.className = "buttonStyle";
   tB.id = bL[i]+"Button";
   document.getElementById("tabs").appendChild(tB);
  }
}

// Div Maker
function dM()
{
    for (var i = 1; i < 4; i++)
    {
        tD = document.createElement("DIV");
        tI = document.createElement("IMG");
        tI.id = "image"+i;
        tI.src = "images/empty.png";
        tD.appendChild(tI);
        document.getElementById("leftContent").appendChild(tD);
    }

for (var i = 4; i < 7; i++)
    {
        tD = document.createElement("DIV");
        tD.id = "image"+i+1;
        document.getElementById("rightContent").appendChild(tD);
    }
}

function alertUs()
{
    alert("Yo!");
}