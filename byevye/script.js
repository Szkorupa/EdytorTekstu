function font() {
    var colorpicked = document.getElementById("colorpicker").value;
    document.getElementById("tekst").style.color = colorpicked;

    var letterspacing = document.getElementById("letterspacing").value;
    document.getElementById("tekst").style.letterSpacing = letterspacing;

    var gruby = document.getElementById("gruby").value;
    document.getElementById("tekst").style.fontStyle = gruby;


    const fontSizeSlider = document.getElementById("suwak");
    const displayText = document.getElementById("tekst");

    fontSizeSlider.addEventListener("input", () => {
    const fontSize = fontSizeSlider.value;
    displayText.style.fontSize = `${fontSize}px`;
    });
    }

function border() {
    var bordercolor = document.getElementById("bordercolor").value;
    document.getElementById("text-box").style.borderColor = bordercolor;

    var bordersize = document.getElementById("bordersize").value;
    document.getElementById("text-box").style.bordersize = bordersize;

    var borderstyle = document.getElementById("borderstyle").value;
    document.getElementById("text-box").style.borderStyle = borderstyle;
}

function spaner() {
    var backgcolor = document.getElementById("backgcolor").value;
    var colorpicker2 = document.getElementById("colorpicker2").value;
    var bordersize2 = document.getElementById("bordersize2").value + "px";
    var bordercolor2 = document.getElementById("bordercolor2").value;
    var borderstyle2 = document.getElementById("borderstyle2").value;

    var spanElement1 = document.getElementsByTagName("span")[0];
    var spanElement2 = document.getElementsByTagName("span")[1];

        spanElement1.style.backgroundColor = backgcolor;
        spanElement1.style.color = colorpicker2;
        spanElement1.style.borderWidth = bordersize2;
        spanElement1.style.borderColor = bordercolor2;
        spanElement1.style.borderStyle = borderstyle2;

        spanElement2.style.backgroundColor = backgcolor;
        spanElement2.style.color = colorpicker2;
        spanElement2.style.borderWidth = bordersize2;
        spanElement2.style.borderColor = bordercolor2;
        spanElement2.style.borderStyle = borderstyle2;

        console.log('tak');
}



function reset(){
    document.getElementById("tekst").style.color = "white";
    document.getElementById("tekst").style.letterSpacing = ".2px";
    document.getElementById("tekst").style.fontStyle = "normal";
    document.getElementById("text-box").style.borderColor = "white";
    document.getElementById("text-box").style.borderSize = "20px";
    document.getElementById("text-box").style.borderstyle = "solid";
    document.getElementsByTagName("span").style.background = "transparent";
    document.getElementsByTagName("span").style.color = "white";
    document.getElementsByTagName("span").style.bordersize = "2px";
    document.getElementsByTagName("span").style.bordercolor2 = "white";
    document.getElementsByTagName("span").style.borderstyle2 = "white";
}

function reset2(){
    document.getElementById("tekst").style.color = "white";
    document.getElementById("tekst").style.letterSpacing = 1;
    document.getElementById("tekst").style.fontStyle = "italic";
}

function reset3(){
    document.getElementById("text-box").style.borderColor = "white";
    document.getElementById("text-box").style.borderSize = "20px";
    document.getElementById("text-box").style.borderstyle = "solid";
}

function reset4(){
    document.getElementsByTagName("span").style.background = "transparent";
    document.getElementsByTagName("span").style.color = "white";
    document.getElementsByTagName("span").style.bordersize = "2px";
    document.getElementsByTagName("span").style.bordercolor2 = "white";
    document.getElementsByTagName("span").style.borderstyle2 = "solid";
}

function refresh() {
    const widthInput = document.getElementById('width');
    const heightInput = document.getElementById('height');
    const textBox = document.getElementById('text-box');

    const szerokosc = widthInput.value + "px";
    const wysokosc = heightInput.value + "px";

    textBox.style.width = szerokosc;
    textBox.style.height = wysokosc;

    refresh();
  }