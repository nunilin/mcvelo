var buttonLabels = ["shoot", "draw", "make", "graph", "paint", "play", "write", "share"];

function buttonMaker() {
    var tempButton, tempText;
    for (var i = 0; i < buttonArray.length; i++)
    {
        tempButton = document.createElement("BUTTON");
        tempButton.appendChild(buttonText);
        tempButton.className = "buttonStyle";
        tempButton.id = buttonLabels[i];
        buttonText = document.createTextNode(buttonLabels[i]);
        document.getElementById("buttons").appendChild(tempButton);
    }
}