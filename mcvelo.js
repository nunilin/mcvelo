// .js code written by Matthew Carlson
// mcvelo site v1.0
//////////////////////////////////////

//Global Variables

// Button List fix this structure...silly
var bN = ["shoot", "draw", "make", "graph", "paint", "play", "write", "share"];
var shootButton, drawButton, makeButton, graphButton, paintButton, playButton, writeButton, shareButton;
var buttons = [shootButton, drawButton, makeButton, graphButton, paintButton, playButton, writeButton, shareButton];

// Not sure I like this...but it works
var brandText = document.getElementById("brand");
var versionText = document.getElementById("version");
var responseText = document.getElementById("response");
var attributeText = document.getElementById("attribute");
var copyRightText = document.getElementById("copyright");

brandText.innerHTML = "<A HREF=\"index.html\">mc</A>";
versionText.textContent = "v0.1";
responseText.textContent = "choose a verb";
attributeText.textContent = "Designed by KoHi Labs, LLC";
copyRightText.textContent = "Copyright 2014, Matthew Carlson";

// JSON for content management
var local_graphics = [{"image": "images/graphic_3.png", "text": "French", "link": "httpyahoocom"},
                      {"image": "images/graphic_2.png", "text": "Spoke", "link": "httpgooglecom"},
                      {"image": "images/graphic_1.png", "text": "Mom", "link": "httpgooglecom"},
                      {"image": "images/graphic_4.png", "text": "Coffee", "link": "httpgooglecom"},
                      {"image": "images/graphic_5.png", "text": "Risk", "link": "httpgooglecom"},
                      {"image": "images/graphic_6.png", "text": "Icon", "link": "httpgooglecom"}];

var local_paintings = [{"image": "images/painting_2.png", "text": "Bird #1", "link": ""},
                       {"image": "images/painting_1.png", "text": "The Road", "link": ""},
                       {"image": "images/painting_4.png", "text": "San Francisco", "link": ""},
                       {"image": "images/painting_5.png", "text": "Brief History", "link": ""},
                       {"image": "images/painting_3.png", "text": "Bird #2", "link": ""},
                       {"image": "images/painting_6.png", "text": "The Fly", "link": ""}];

var local_makes =     [{"image": "images/Bike_Lane.png", "text": "Table", "link": ""},
                       {"image": "images/Dolly.png", "text": "Dolly", "link": ""},
                       {"image": "images/Mask.png", "text": "Mask", "link": ""},
                       {"image": "images/Roast.png", "text": "Roast", "link": ""},
                       {"image": "images/shelve.png", "text": "Shelf", "link": ""},
                       {"image": "images/TT2Orange.png", "text": "Frame", "link": ""}];

var local_drawings = [{"image": "images/drawing_1.png", "text": "Freud Thinks", "link": ""},
                      {"image": "images/drawing_3.png", "text": "Vroom", "link": ""},
                      {"image": "images/cyclosaurus.png", "text": "Cycle Abstraction #2", "link": ""},
                      {"image": "images/saylovehearhate.png", "text": "saylovehearhate", "link": ""},
                      {"image": "images/drawing_2.png", "text": "Cycle Abstraction #1", "link": ""},
                      {"image": "images/empty.png", "text": "none", "link": ""}];

var local_shares = [{"image": "graphics/ck_icon.png", "text": "Developer", "link": ""},
                    {"image": "graphics/sf_logo.png", "text": "Architect", "link": ""},
                    {"image": "graphics/kohilabs.com-orange-circle-150.png", "text": "Partner", "link": ""},
                    {"image": "graphics/teamcaletti_brand.png", "text": "Team", "link": ""},
                    {"image": "graphics/ORACLE-Logo.jpg", "text": "Employee", "link": ""},
                    {"image": "graphics/220px-Ucdavis_aggies.png", "text": "Alumnus", "link": ""}];


var local_photos = [{"image": "images/photo_3.png", "text": "Valley", "link": ""},
                    {"image": "images/disco.png", "text": "Disco", "link": ""},
                    {"image": "images/road.png", "text": "Night", "link": ""},
                    {"image": "images/zoo.jpg", "text": "Zoo", "link": ""},
                    {"image": "images/face.png", "text": "Face", "link": ""},
                    {"image": "images/photo_1.png", "text": "Bell", "link": ""}];

var local_writes = [{"image": "images/html.png", "text": "html", "link": ""},
                    {"image": "images/english.png", "text": "english", "link": ""},
                    {"image": "images/js.png", "text": "javascript", "link": ""},
                    {"image": "images/obj-c.png", "text": "cocoa", "link": ""},
                    {"image": "images/css.png", "text": "style", "link": ""},
                    {"image": "images/empty.png", "text": "none", "link": ""}];

var local_plays =  [{"image": "images/empty.png", "audio": "audio/53.mp3", "text": "53", "link": ""},
                    {"image": "images/empty.png", "text": "It", "link": ""},
                    {"image": "images/empty.png", "text": "Will", "link": ""},
                    {"image": "images/empty.png", "text": "Play", "link": ""},
                    {"image": "images/empty.png", "text": "Prett", "link": ""},
                    {"image": "images/empty.png", "text": "Waves", "link": ""}];
// functions

//run this at load
function doLoading()
{
    "use strict";
    bM();       // Button Loader
    dM();       // Dynamic Div Loader
    cL();       // Content Loader
    bL();       // Button Linker...hooks dynamic buttons to listener
}

// Button Maker
function bM() 
{  
    "use strict";
    var tB, bT;
  
 for (var i = 0; i < bN.length; i++)
  {
   tB = document.createElement("BUTTON");
   bT = document.createTextNode(bN[i]);
   tB.appendChild(bT);
   tB.className = "buttonStyle";
   tB.id = bN[i]+"Button";
   document.getElementById("tabs").appendChild(tB);
  }
}

// Div Maker
function dM()
{
    // content for left content update to dyanmically iterate
    for (var i = 1; i < 4; i++)
    {
        tD = document.createElement("DIV");
        tD.id = "item"+i;
        tI = document.createElement("IMG");
        tI.id = "image"+i;
        tI.src = "images/empty.png";
        tD.appendChild(tI);
        document.getElementById("leftContent").appendChild(tD);
    }

    // content for right cotent update to dynamically iterate
    for (var i = 4; i < 7; i++)
    {
        tD = document.createElement("DIV");
        tD.id = "item"+i;
        tI = document.createElement("IMG");
        tI.id = "image"+i;
        tI.src = "images/empty.png";
        tD.appendChild(tI);
        document.getElementById("rightContent").appendChild(tD);
    }
    
    // content for left nav? update to dynamically iterate
    for (var i = 1; i < 7; i++)
    {
        tD = document.createElement("DIV");
        tD.id = "text"+i;
        document.getElementById("navigate").appendChild(tD);
    }
}

// The button loader
function bL()
{
    shootButton = document.getElementById("shootButton");
    shootButton.addEventListener('click', doPhoto, false);
    
    drawButtonButton = document.getElementById("drawButton");
    drawButtonButton.addEventListener('click', doDrawing, false);    
    
    makeButtonButton = document.getElementById("makeButton");
    makeButtonButton.addEventListener('click', doStructure, false);
    
    graphButton = document.getElementById("graphButton");
    graphButton.addEventListener('click', doGraphical, false);
    
    paintButton = document.getElementById("paintButton");
    paintButton.addEventListener('click', doPaint, false);
    
    playButton = document.getElementById("playButton");
    playButton.addEventListener('click', doSound, false);
    
    writeButton = document.getElementById("writeButton");
    writeButton.addEventListener('click', doWrite, false);
    
    shareButton = document.getElementById("shareButton");
    shareButton.addEventListener('click', doShare, false);
}

var topLine = document.getElementById("topLine");

// load preview images should these be local?
var pC = [local_paintings[1],local_photos[2],local_drawings[3],local_graphics[0],local_writes[2],local_graphics[5]];

var image1, image2, image3, image4, image5, image6;
var text1, text2, text3, text4, text5, text6;

// iterate this in next version to support more images
function cL()
{
    for (var i = 0; i < pC.length; i++)
    {
        // add iteration logic here, please.    
    }
    
    image1 = document.getElementById('image1');
    image1.src = pC[0].image;
    text1 = document.getElementById('text1');
    text1.textContent = pC[0].text;
    
    image2 = document.getElementById('image2');
    image2.src = pC[1].image;
    text1 = document.getElementById('text2');
    text1.textContent = pC[1].text;
    
    image3 = document.getElementById('image3');
    image3.src =  pC[2].image;
    text1 = document.getElementById('text3');
    text1.textContent = pC[2].text;
    
    image4 = document.getElementById('image4');
    image4.src =  pC[3].image;
    text1 = document.getElementById('text4');
    text1.textContent = pC[3].text;
    
    image5 = document.getElementById('image5');
    image5.src =  pC[4].image;
    text1 = document.getElementById('text5');
    text1.textContent = pC[4].text;
    
    image6 = document.getElementById('image6');
    image6.src =  pC[5].image;
    text1 = document.getElementById('text6');
    text1.textContent = pC[5].text;
}

var buttonObs = {shoot: "time traps",
                  draw: "cranial output",
                  make: "spacial occupation",
                 graph: "perfect pixels",
                 paint: "planar escapism",
                  play: "aural waves",
                 write: "little symbols",
                 share: "neural cornucopias"};

function setButton(clicked) 
{
    // Seriously...??
    var write = "white", shoot = "white", draw = "white", paint = "white", play = "white", make = "white", graph = "white", share = "white";
    
    if (clicked == "write") {write = "black";}  
    else if (clicked == "paint") {paint = "black";}
    else if (clicked == "shoot") {shoot = "black";}
    else if (clicked == "graph") {graph = "black";}
    else if (clicked == "make") {make = "black";}
    else if (clicked == "play") {play = "black";}
    else if (clicked == "draw") {draw = "black";}
    else if (clicked == "share") {share = "black";}
        
    shootButton.style.borderBottomColor = shoot;
    shootButton.style.borderLeftColor = shoot;
    shootButton.style.borderRightColor = shoot;
    
    drawButton.style.borderWidth = draw;
    makeButton.style.borderWidth = make;
    graphicButton.style.borderWidth = graph;
    paintButton.style.borderWidth = paint;
    playButton.style.borderWidth = play;
    writeButton.style.borderWidth = write;
    shareButton.style.borderWidth = share;
}

var move_response;
var move_topLine;

function setResponse(clicked)
{
    if (clicked=="write") {move_response = 428; move_topLine = 830}  
    else if (clicked=="paint") {move_response = 264;move_topLine = 720}
    else if (clicked=="shoot") {move_response = 15;move_topLine = 416}
    else if (clicked=="graph") {move_response = 206;move_topLine = 600}
    else if (clicked=="make") {move_response = 97;move_topLine = 550}
    else if (clicked=="play") {move_response = 360;move_topLine = 750}
    else if (clicked=="draw") {move_response = 46;move_topLine = 440}
    else if (clicked=="share") {move_response = 472;move_topLine = 930}
    
    responseText.style.textIndent = move_response + "px";    
    if (topLine !== null){topLine.style.width = move_topLine + "px"};
    
    if (clicked !== "play") 
    {
        for (var i = 0; i < local_plays.length; i++)
            {
                tS = document.getElementById("audio"+(i+1)); 
                if (tS !== null){document.getElementById("item"+(i+1)).removeChild(tS)};
            }
    }
}

function doPhoto() {
//    setButton("shoot");
    setResponse("shoot");
    //shootButton.style.borderWidth = "2px";
	responseText.textContent = buttonObs.shoot;
    var text_string;
    var image_string;
    
    for (var i = 0; i < local_photos.length; i++)
    {
        text_string = 'text'+(i+1);
        image_string = 'image'+(i+1);
        document.getElementById(text_string).textContent = local_photos[i].text;
        document.getElementById(image_string).src = local_photos[i].image;
    }
}

function doDrawing() {
//    setButton("draw");
    setResponse("draw");
	responseText.textContent = buttonObs.draw;
    
    var text_string;
    var image_string;
    
    for (var i = 0; i < local_drawings.length; i++)
    {
        text_string = 'text'+(i+1);
        image_string = 'image'+(i+1);
        document.getElementById(text_string).textContent = local_drawings[i].text;
        document.getElementById(image_string).src = local_drawings[i].image;
    }
}

function doStructure() {
//    setButton("make");
    setResponse("make");
	responseText.textContent = buttonObs.make;
    
    var text_string;
    var text_string;
    var image_string;
    
    for (var i = 0; i < local_makes.length; i++)
    {
        text_string = 'text'+(i+1);
        image_string = 'image'+(i+1);
        document.getElementById(text_string).textContent = local_makes[i].text;
        document.getElementById(image_string).src = local_makes[i].image;
    }
}

function doGraphical() {
//    setButton("graph");
    setResponse("graph");
	responseText.textContent = buttonObs.graph;
    
    var text_string;
    var image_string;
    
    for (var i = 0; i < local_graphics.length; i++)
    {
        text_string = 'text'+(i+1);
        image_string = 'image'+(i+1);

        document.getElementById(text_string).textContent = local_graphics[i].text;
        document.getElementById(image_string).src = local_graphics[i].image;
    }
}

function doPaint() {
//    setButton("paint");
    setResponse("paint");
    responseText.textContent = buttonObs.paint;
    
    var text_string;
    var image_string;
    
    for (var i = 0; i < local_paintings.length; i++)
    {
        text_string = 'text'+(i+1);
        image_string = 'image'+(i+1);

        document.getElementById(text_string).textContent = local_paintings[i].text;
        document.getElementById(image_string).src = local_paintings[i].image;
    }
}

function doSound() {
//    setButton("play");
    setResponse("play");
    responseText.textContent = buttonObs.play;
    
    var text_string;
    var image_string;
    
    for (var i = 0; i < local_plays.length; i++)
    {
        text_string = 'text'+(i+1);
        image_string = 'image'+(i+1);

        tS = document.createElement("AUDIO");
        tS.id = "audio"+(i+1);
        tS.controls = "controls";
        tA1 = document.createElement("SOURCE");
        tA1.src="audio/53.mp3";      // reference JSON here
        tA1.type="audio/mpeg";
        tA2 = document.createElement("SOURCE");
        tA2.src="audio/53.ogg";      // reference JSON here
        tA2.type="audio/ogg";
        tS.appendChild(tA1);
        tS.appendChild(tA2);
        
        document.getElementById(text_string).textContent = local_plays[i].text;
        document.getElementById(image_string).src = local_plays[i].image;
        
        document.getElementById("item"+(i+1)).appendChild(tS);        
    }
    analytics.track('Play Tracks',{'mode':'something'});
}

function doWrite() 
{
//    setButton("write");
    setResponse("write");
    responseText.textContent = buttonObs.write;
            
    var text_string;
    var image_string;
        
    for (var i = 0; i < local_writes.length; i++)
    {
       text_string = 'text'+(i+1);
       image_string = 'image'+(i+1);
       document.getElementById(text_string).textContent = local_writes[i].text;
       document.getElementById(image_string).src = local_writes[i].image;
    }

}


function doShare() {
//    setButton("share");
//    setGraph();
    setResponse("share");
    responseText.textContent = buttonObs.share;

    var text_string;
    var image_string;

    for (var i = 0; i < local_shares.length; i++)
    {
        text_string = 'text'+(i+1);
        image_string = 'image'+(i+1);
        document.getElementById(text_string).textContent = local_shares[i].text;
        document.getElementById(image_string).src = local_shares[i].image;
        
    }
}