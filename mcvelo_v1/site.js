var photoButton = document.getElementById("photoButton");
var drawingButton = document.getElementById("drawingButton");
var structureButton = document.getElementById("structureButton");
var graphicButton = document.getElementById("graphicButton");
var paintButton = document.getElementById("paintButton");
var soundButton = document.getElementById("soundButton");
var writeButton = document.getElementById("writeButton");
var shareButton = document.getElementById("shareButton");

var graph = document.getElementById("graph");

var brandText = document.getElementById("brandText");
var responseText = document.getElementById("responseText");
var attributeText = document.getElementById("attributeText");
var copyRightText = document.getElementById("copyRightText");

brandText.textContent = "mc";
responseText.textContent = "choose a verb";
attributeText.textContent = "Designed by KoHi Labs, LLC";
copyRightText.textContent = "Copyright 2014, Matthew Carlson";

var space0 = "images/empty.png";
var place = "100px";

// Store as JSON
var buttonLabels = ["shoot","draw","make","graph","paint","play","write","share"];

var local_graphics = [{"image":"images/graphic_3.png","text":"French","link":"httpyahoocom"},
                      {"image":"images/graphic_2.png","text":"Spoke","link":"httpgooglecom"},
                      {"image":"images/graphic_1.png","text":"Mom","link":"httpgooglecom"},
                      {"image":"images/graphic_4.png","text":"Coffee","link":"httpgooglecom"},
                      {"image":"images/graphic_5.png","text":"Risk","link":"httpgooglecom"},
                      {"image":"images/graphic_6.png","text":"Icon","link":"httpgooglecom"}];

var local_paintings = [{"image":"images/painting_2.png","text":"Bird #1","link":""},
                       {"image":"images/painting_1.png","text":"The Road","link":""},
                       {"image":"images/painting_4.png","text":"San Francisco","link":""},
                       {"image":"images/painting_5.png","text":"Brief History","link":""},
                       {"image":"images/painting_3.png","text":"Bird #2","link":""},
                       {"image":"images/painting_6.png","text":"The Fly","link":""}];

var local_makes =     [{"image":"images/Bike_Lane.png","text":"Table","link":""},
                       {"image":"images/Dolly.png","text":"Dolly","link":""},
                       {"image":"images/Mask.png","text":"Mask","link":""},
                       {"image":"images/Roast.png","text":"Roast","link":""},
                       {"image":"images/shelve.png","text":"Shelf","link":""},
                       {"image":"images/TT2Orange.png","text":"Frame","link":""}];

var local_drawings = [{"image":"images/drawing_1.png","text":"Freud Thinks","link":""},
                      {"image":"images/drawing_3.png","text":"Vroom","link":""},
                      {"image":"images/cyclosaurus.png","text":"Cycle Abstraction #2","link":""},
                      {"image":"images/saylovehearhate.png","text":"saylovehearhate","link":""},
                      {"image":"images/drawing_2.png","text":"Cycle Abstraction #1","link":""},
                      {"image":"images/empty.png","text":"none","link":""}];

var local_shares = [{"image":"graphics/ck_icon.png","text":"Developer","link":""},
                    {"image":"graphics/sf_logo.png","text":"Architect","link":""},
                    {"image":"graphics/kohilabs.com-orange-circle-150.png","text":"Partner","link":""},
                    {"image":"graphics/teamcaletti_brand.png","text":"Team","link":""},
                    {"image":"graphics/ORACLE-Logo.jpg","text":"Employee","link":""},
                    {"image":"graphics/220px-Ucdavis_aggies.png","text":"Alumnus","link":""}];


var local_photos = [{"image":"images/photo_3.png","text":"Valley","link":""},
                    {"image":"images/disco.png","text":"Disco","link":""},
                    {"image":"images/road.png","text":"Night","link":""},
                    {"image":"images/zoo.jpg","text":"Zoo","link":""},
                    {"image":"images/face.png","text":"Face","link":""},
                    {"image":"images/lamb.png","text":"Bell","link":""}];

var local_writes = [{"image":"images/html.png","text":"html","link":""},
                    {"image":"images/english.png","text":"english","link":""},
                    {"image":"images/js.png","text":"javascript","link":""},
                    {"image":"images/obj-c.png","text":"cocoa","link":""},
                    {"image":"images/css.png","text":"style","link":""},
                    {"image":"images/empty.png","text":"none","link":""}];



//var structures = ["images/empty.png","images/empty.png","images/empty.png","images/empty.png","images/empty.png","images/empty.png"];
var sounds = ["images/empty.png","images/empty.png","images/empty.png","images/empty.png","images/empty.png","images/empty.png"];

//var makeText = ["Object 1", "Object 2", "Object 3", "Object 4", "Object 5", "Object 6"];
var playText = ["Sound 1", "Sound 2", "Sound 3", "Sound 4", "Sound 5", "Sound 6"];
//var writeText = ["PL/SQL","Objective-C","JavaScript","CSS","HTML","English"];
// Done Store as JSON

document.getElementById('image1').src = local_paintings[1].image;
document.getElementById('image2').src = local_photos[2].image;
document.getElementById('image3').src = local_drawings[3].image;
document.getElementById('image4').src = local_graphics[0].image;
document.getElementById('image5').src = local_writes[2].image;
document.getElementById('image6').src = local_graphics[5].image;

document.getElementById('text1').textContent = local_paintings[1].text;
document.getElementById('text2').textContent = local_photos[2].text;
document.getElementById('text3').textContent = local_drawings[3].text;
document.getElementById('text4').textContent = local_graphics[0].text;
document.getElementById('text5').textContent = local_writes[2].text;
document.getElementById('text6').textContent = local_graphics[5].text;
                 
var buttonObs = {shoot: "digital time traps",
                  draw: "manual cranial output",
                  make: "spacial occupation",
                 graph: "perfect pixels",
                 paint: "planar escapism",
                  play: "aural hors d'ouvres",
                 write: "structured little symbols",
                 share: "neural cornucopias"};

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
    graph.style.width = place;
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
    //photoButton.style.borderWidth = "2px";
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
    setButton("draw");
    setGraph();
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
    setButton("make");
    setGraph();
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
    setButton("graph");
    setGraph();
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
    setButton("paint");
    setGraph();
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
    setButton("play");
    setGraph();
    setResponse("play");
    var text_string;
    for (var i = 0; i < playText.length; i++)
    {
        text_string = 'text'+(i+1);
        document.getElementById(text_string).textContent = playText[i];
    }
    responseText.textContent = buttonObs.play;
    var image_string;
    for (var i = 0; i < sounds.length; i++)
    { 
        image_string = 'image'+(i+1);
        //document.write(cars[i] + "<br>");
        document.getElementById(image_string).src = sounds[i];
    }
}

    function doWrite() {
    setButton("write");
    setGraph();
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
    setButton("share");
    setGraph();
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


photoButton.addEventListener('click', doPhoto, false);
drawingButton.addEventListener('click', doDrawing, false);
structureButton.addEventListener('click', doStructure, false);
graphicButton.addEventListener('click', doGraphical, false);
paintButton.addEventListener('click', doPaint, false);
soundButton.addEventListener('click', doSound, false);
writeButton.addEventListener('click', doWrite, false);
shareButton.addEventListener('click', doShare, false);