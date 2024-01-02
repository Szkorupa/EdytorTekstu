

function normalFont() {
    document.getElementById("mid").style.fontSize = "1rem";
}
function lessFont() {
    document.getElementById("mid").style.fontSize = "1.5rem";
}
function moreFont() {
    document.getElementById("mid").style.fontSize = "2.5rem";
}


function change() {

    var FontSizeValue = document.getElementById("font-size-value").value;
    document.getElementById("mid").style.fontSize = FontSizeValue;
    document.getElementById("mid").style.fontStyle = "normal";
    }

function reset() {
    document.getElementById("mid").style.fontSize = "1rem";
    document.getElementById("center").style.backgroundColor = "black";
    document.getElementById("mid").style.color = "white";
    document.getElementById("mid").style.fontStyle = "normal";

}

function changeColor() {
    document.getElementById("mid").style.color = "yellow";
    document.getElementById("center").style.backgroundColor = "black";

}
function changeColor2() {
    document.getElementById("mid").style.color = "black";
    document.getElementById("center").style.backgroundColor = "yellow";
}

function colorPicker() {
    var colorpicked = document.getElementById("colorpicker").value;
    document.getElementById("center").style.backgroundColor = colorpicked;
    }

function changeCursive() {
    document.getElementById("mid").style.fontStyle = "italic";
}

function textPicker() {
    var textcolor = document.getElementById("colorpicker2").value;
    document.getElementById("mid").style.color = textcolor;
    }

function changeCursive() {
    var FontSizeValue = document.getElementById("font-size-value").value;
    document.getElementById("mid").style.fontSize = FontSizeValue;
    var fontsize;
    var fontsize = document.getElementById("mid").FontSizeValue = document.getElementById("mid").style.fontSize;
    const size1 = "10px";
    const size2 = "30px";
    if (fontsize >= size1) {
        if (fontsize < size2) {
            document.getElementById("mid").style.fontStyle = "italic";
          }
      }
    console.log(fontsize);
}
