var photoButton = document.getElementById("photoButton");
var drawingButton = document.getElementById("drawingButton");
var structureButton = document.getElementById("structureButton");
var graphicButton = document.getElementById("graphicButton");
var paintButton = document.getElementById("paintButton");
var soundButton = document.getElementById("soundButton");
var writeButton = document.getElementById("writeButton");
var shareButton = document.getElementById("shareButton");

var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");
var text4 = document.getElementById("text4");
var text5 = document.getElementById("text5");
var text6 = document.getElementById("text6");
//var graph = document.getElementById("graph");

var responseText = document.getElementById("responseText");
var graph = document.getElementById("graph");

var space0 = "images/empty.png";
var place;

// Store as JSON
var graphics = ["images/graphic_1.png","images/graphic_2.png","images/graphic_3.png","images/graphic_4.png","images/graphic_5.png","images/graphic_6.png"];
var paints = ["images/painting_1.png","images/painting_2.png","images/painting_3.png","images/painting_4.png","images/painting_5.png","images/painting_6.png"];
var shares = ["graphics/ck_icon.png","graphics/sharefund_icon.png","graphics/kohilabs.com-orange-circle-150.png","graphics/ORACLE-Logo.jpg","graphics/teamcaletti_brand.png","images/empty.png"];
var photos = ["images/photo_1.png","images/photo_2.png","images/photo_3.png","images/empty.png","images/empty.png","images/empty.png"];
var draws = ["images/drawing_1.png","images/drawing_2.png","images/drawing_3.png","images/empty.png","images/empty.png","images/empty.png"];
// Done Store as JSON

responseText.textContent = "choose a verb and click it";

document.getElementById('image1').src = paints[1];
document.getElementById('image2').src = paints[3];
document.getElementById('image3').src = graphics[2];
document.getElementById('image4').src = graphics[0];
document.getElementById('image5').src = photos[2];
document.getElementById('image6').src = graphics[5];

var shootText = ["Image 1", "Image 2", "Image 3", "Image 4", "Image 5", "Image 6"];
var drawText = ["Draw 1", "Draw 2", "Draw 3", "Draw 4", "Draw 5", "Draw 6"];
var makeText = ["Object 1", "Object 2", "Object 3", "Object 4", "Object 5", "Object 6"];
var graphText = ["Graphic 1", "Graphic 2", "Graphic 3", "Graphic 4", "Graphic 5", "Graphic 6"];
var paintText = ["Paint 1", "Paint 2", "Paint 3", "Paint 4", "Paint 5", "Paint 6"];
var playText = ["Sound 1", "Sound 2", "Sound 3", "Sound 4", "Sound 5", "Sound 6"];

var writeText = ["PL/SQL","Objective-C","JavaScript","CSS","HTML","English"];

var buttonObs = {shoot: "digital time traps",
                  draw: "manual cranial output",
                  make: "spacial occupation",
                 graph: "perfect pixels",
                 paint: "planar escapism",
                  play: "aural hors d'ouvres",
                 write: "structured little symbols",
                 share: "elaborate idea maps"};

function setButton(clicked) {
    var write = 0, shoot = 0, draw = 0, paint = 0, play = 0, make = 0, graph = 0, share = 0;
    
    if (clicked == "write") {write = 2; place = "460px"; }  
    else if (clicked == "paint") {paint = 2; place = "317px"; }
    else if (clicked == "shoot") {shoot = 2; place = "5px"; }
    else if (clicked == "graph") {graph = 2; place = "238px"; }
    else if (clicked == "make") {make = 2; place = "159px"; }
    else if (clicked == "play") {play = 2; place = "390px"; }
    else if (clicked == "draw") {draw = 2; place = "82px"; }
    else if (clicked == "share") {share = 2; place = "540px"; }
    
    
    photoButton.style.borderWidth = shoot + "px";
    drawingButton.style.borderWidth = draw + "px";
    structureButton.style.borderWidth = make + "px";
    graphicButton.style.borderWidth = graph + "px";
    paintButton.style.borderWidth = paint + "px";
    soundButton.style.borderWidth = play + "px";
    writeButton.style.borderWidth = write + "px";
    shareButton.style.borderWidth = share + "px";
}

function setGraph()
{
    graph.style.borderRightWidth = place;
}

function setResponse(clicked)
{
    var space = 0;
    
    if (clicked=="write") {space = "5px";}  
    else if (clicked=="paint") {space = "5px";}
    else if (clicked=="shoot") {space = "5px";}
    else if (clicked=="graph") {space = "5px";}
    else if (clicked=="make") {space = "5px";}
    else if (clicked=="play") {space = "5px";}
    else if (clicked=="draw") {space = "5px";}
    else if (clicked=="share") {space = "5px";}
    
    responseText.style.left = space;    
}

function doPhoto() {
    setButton("shoot");
    setGraph();
    setResponse("shoot");
    photoButton.style.borderWidth = "2px";
	responseText.textContent = buttonObs.shoot;
    text1.textContent = shootText[0];
	text2.textContent = shootText[1];
	text3.textContent = shootText[0];
	text4.textContent = shootText[1];
    text5.textContent = shootText[0];
	text6.textContent = shootText[1];
    var image_string;
    for (var i = 0; i < photos.length; i++)
    { 
        image_string = 'image'+(i+1);
        log(image_string);
        //document.write(cars[i] + "<br>");
        document.getElementById(image_string).src = photos[i];
    }
}

function doDrawing() {
    setButton("draw");
    setGraph();
    setResponse("draw");
	responseText.textContent = buttonObs.draw;
    var image_string;
    for (var i = 0; i < draws.length; i++)
    { 
        image_string = 'image'+(i+1);
        log(image_string);
        //document.write(cars[i] + "<br>");
        document.getElementById(image_string).src = draws[i];
    }

}

function doStructure() {
    setButton("make");
    setGraph();
    setResponse("make");
	responseText.textContent = buttonObs.make;
	document.getElementById('image1').src = space0;
    document.getElementById('image2').src = space0;
    document.getElementById('image3').src = space0;
    document.getElementById('image4').src = space0;
    document.getElementById('image5').src = space0;
    document.getElementById('image6').src = space0;
}

function doGraphical() {
    setButton("graph");
    setGraph();
    setResponse("graph");
	responseText.textContent = buttonObs.graph;
    var image_string;
    for (var i = 0; i < graphics.length; i++)
    { 
        image_string = 'image'+(i+1);
        log(image_string);
        //document.write(cars[i] + "<br>");
        document.getElementById(image_string).src = graphics[i];
    }
}

function doPaint() {
    setButton("paint");
    setGraph();
    setResponse("paint");
    text1.textContent = paintText[0];
	text2.textContent = paintText[1];
	text3.textContent = paintText[0];
	text4.textContent = paintText[1];
    text5.textContent = paintText[0];
	text6.textContent = paintText[1];
	responseText.textContent = buttonObs.paint;
    var image_string;
    for (var i = 0; i < paints.length; i++)
    { 
        image_string = 'image'+(i+1);
        log(image_string);
        //document.write(cars[i] + "<br>");
        document.getElementById(image_string).src = paints[i];
    }
}

function doSound() {
    setButton("play");
    setGraph();
    setResponse("play");
	text1.textContent = playText[0];
	text2.textContent = playText[1];
	text3.textContent = playText[0];
	text4.textContent = playText[1];
    text5.textContent = playText[0];
	text6.textContent = playText[1];
    responseText.textContent = buttonObs.play;
	document.getElementById('image1').src = space0;
    document.getElementById('image2').src = space0;
    document.getElementById('image3').src = space0;
    document.getElementById('image4').src = space0;
    document.getElementById('image5').src = space0;
    document.getElementById('image6').src = space0;
}

    function doWrite() {
    setButton("write");
    setGraph();
    setResponse("write");
	text1.textContent = writeText[0];
	text2.textContent = writeText[1];
	text3.textContent = writeText[2];
	text4.textContent = writeText[3];
    text5.textContent = writeText[4];
	text6.textContent = writeText[5];
    responseText.textContent = buttonObs.write;
	//responseText.style.left = "400px";
	document.getElementById('image1').src = space0;
    document.getElementById('image2').src = space0;
    document.getElementById('image3').src = space0;
    document.getElementById('image4').src = space0;
    document.getElementById('image5').src = space0;
    document.getElementById('image6').src = space0;
}


function doShare() {
    setButton("share");
    setGraph();
    setResponse("share");
	text1.textContent = shootText[0];
	text2.textContent = shootText[1];
	text3.textContent = shootText[0];
	text4.textContent = shootText[1];
    text5.textContent = shootText[0];
	text6.textContent = shootText[1];
    responseText.textContent = buttonObs.share;
	//responseText.style.left = "400px";
    var image_string;
    for (var i = 0; i < shares.length; i++)
    { 
        image_string = 'image'+(i+1);
        log(image_string);
        //document.write(cars[i] + "<br>");
        document.getElementById(image_string).src = shares[i];
    }
}

function log(msg) {
    setTimeout(function() {
        throw new Error(msg);
    }, 0);
}

photoButton.addEventListener('click', doPhoto, false);
drawingButton.addEventListener('click', doDrawing, false);
structureButton.addEventListener('click', doStructure, false);
graphicButton.addEventListener('click', doGraphical, false);
paintButton.addEventListener('click', doPaint, false);
soundButton.addEventListener('click', doSound, false);
writeButton.addEventListener('click', doWrite, false);
shareButton.addEventListener('click', doShare, false);