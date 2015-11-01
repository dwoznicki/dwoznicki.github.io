//text-align
// ==================================================================
document.getElementById("text-align").onclick = function() { textAlign() };
var textAlignClicks = 0;
function textAlign() {
  textAlignClicks++;
  switch (textAlignClicks) {
    case 1:
      document.getElementById("text-align").style.textAlign = "center";
      document.getElementById("text-align").innerHTML = "Aligned <em class=\"red\">center</em>.<br>Click to align <em class=\"red\">right</em>.";
    break;
    case 2:
      document.getElementById("text-align").style.textAlign = "right";
      document.getElementById("text-align").innerHTML = "Aligned <em class=\"red\">right</em>.<br>Click to align <em class=\"red\">left</em>.";
    break;
    case 3:
      document.getElementById("text-align").style.textAlign = "left";
      document.getElementById("text-align").innerHTML = "Aligned <em class=\"red\">left</em>.<br>Click to align <em class=\"red\">center</em>.";
      textAlignClicks = 0;
    break;
  }
}

// float
// ==================================================================
document.getElementById("float").onclick = function() { float() };
var floatClicks = 0;
function float() {
  floatClicks++;
  switch (floatClicks) {
    case 1:
      document.getElementById("float").style.float = "right";
      document.getElementById("float").innerHTML = "Click me to float <em class=\"red\">left</em>.";
    break;
    case 2:
      document.getElementById("float").style.float = "left";
      document.getElementById("float").innerHTML = "Click me to float <em class=\"red\">none</em>.";
    break;
    case 3:
      document.getElementById("float").style.float = "none";
      document.getElementById("float").innerHTML = "Click me to float <em class=\"red\">right</em>.";
      floatClicks = 0;
    break;
  }
}

// clear
// ==================================================================
document.getElementById("clear").onclick = function() { clears() };
var clearsClicks = 0;
function clears() {
  clearsClicks++;
  switch (clearsClicks) {
    case 1:
      document.getElementById("clear").style.clear = "left";
      document.getElementById("clear").innerHTML = "This element is clearing <em class=\"red\">left</em>.<br>Click to align floater <em class=\"red\">right</em>.";
    break;
    case 2:
      document.getElementById("floater").style.float = "right";
      document.getElementById("clear").innerHTML = "This element is clearing <em class=\"red\">left</em>.<br>Click to clear <em class=\"red\">right</em>.";
    break;
    case 3:
      document.getElementById("clear").style.clear = "right";
      document.getElementById("clear").innerHTML = "This element is clearing <em class=\"red\">right</em>.<br>Click to align floater <em class=\"red\">left</em>.";
    break;
    case 4:
      document.getElementById("floater").style.float = "left";
      document.getElementById("clear").innerHTML = "This element is clearing <em class=\"red\">right</em>.<br>Click here to clear <em class=\"red\">none</em>.";
    break;
    case 5:
    document.getElementById("clear").style.clear = "none";
    document.getElementById("clear").innerHTML = "This element is clearing <em class=\"red\">none</em>.<br>Click to clear <em class=\"red\">left</em>.";
    clearsClicks = 0;
  }
}

// position
// ==================================================================
document.getElementById("position").onclick = function() { position() };
var positionClicks = 0
function position() {
  positionClicks++;
  switch (positionClicks) {
    case 1:
      document.getElementById("position").style.position = "relative";
      document.getElementById("position").innerHTML = "My position is now <em>relative</em>. But nothing changed, huh? That's because I'm still within the flow of the page. Click to give me a property of <em>left: 175px;</em>";
    break;
    case 2:
      document.getElementById("position").style.left = "175px";
      document.getElementById("position").innerHTML = "That moved me away from the left by 175 pixels. Notice I moved from where I was originally. Now click to give me <em>top: 20px;</em>";
    break;
    case 3:
      document.getElementById("position").style.top = "20px";
      document.getElementById("position").innerHTML = "You can move around relatively positioned elements using top:, bottom:, left:, and right: Now click to give me an <em>absolute</em> position.";
    break;
    case 4:
      document.getElementById("position").style.position = "absolute";
      document.getElementById("position").style.top = "auto";
      document.getElementById("position").innerHTML = "Woah! My position is now <em>absolute</em>. I'm over here because my position is relative to my first ancestor with a position property. Click to give me <em>left: 500px; top: 1500px;</em>";
    break;
    case 5:
      document.getElementById("position").style.left = "500px";
      document.getElementById("position").style.top = "1500px";
      document.getElementById("position").innerHTML = "I no longer interact with other elements on the page, so you can put me anywhere! Last, click to give me a position of <em>fixed</em>.";
    break;
    case 6:
      document.getElementById("position").style.position = "fixed";
      document.getElementById("position").style.left = "0px";
      document.getElementById("position").style.top = "0px";
      document.getElementById("position").innerHTML = "I'm now <em>fixed</em> at <em>left: 0px; top: 0px;</em> Now try scrolling.";
      document.onscroll = function () {
        if (document.getElementById("position").style.position === "fixed")
        { document.getElementById("position").innerHTML = "Notice how I'm stuck to the screen. That's fixed positioning! Click to return me to my regular place in the flow of the page." };
      }
    break;
    case 7:
      document.getElementById("position").style.position = "static";
      document.getElementById("position").innerHTML = "Hi. My position is <em>static</em>. Since I'm inside the flow of the page, I'm contained within my parent div. Click to make me <em>relative</em>.";
      positionClicks = 0;
    break;
  }
}

// display
// ==================================================================
document.getElementById("display").onclick = function() { display() };
var displayClicks = 0;
var displayDivs = document.getElementById("display").querySelectorAll("div");
function display() {
  displayClicks++;
  switch (displayClicks) {
    case 1:
      for (var i = 0; i < displayDivs.length; i++) {
        displayDivs[i].style.display = "inline-block";
      }
      document.getElementById("display").querySelectorAll("p")[0].innerHTML = "They're now <em class=\"red\">inline-blocks</em>.The elements can now have a height and width, though they still sit on the same line. Click to change display to <em class=\"red\">block</em>.";
    break;
    case 2:
      for (var i = 0; i < displayDivs.length; i++) {
        displayDivs[i].style.display = "block";
      }
      document.getElementById("display").querySelectorAll("p")[0].innerHTML = "The elements are now <em class=\"red\">blocks</em>. Block elements force a line break, meaning nothing can sit to the right of them. They're useful for pictures or banners. Click to change display to <em class=\"red\">inline</em>.";
    break;
    case 3:
      for (var i = 0; i < displayDivs.length; i++) {
        displayDivs[i].style.display = "inline";
      }
      document.getElementById("display").querySelectorAll("p")[0].innerHTML = "The text above is <em class=\"red\">inline</em>. Elements can sit on the same line together. Notice how the space they take up is limited to the size of the words.<br>Click to change display to <em class=\"red\">inline-block</em>.";
      displayClicks = 0;
    break;
  }
}

// border, margin, padding
// ==================================================================
document.getElementById("bmp").onclick = function () { bmp() };
var bmpClicks = 0;
function bmp() {
  bmpClicks++;
  switch (bmpClicks) {
    case 1:
      document.getElementById("bmp").style.border = "dashed 3px #ff5555";
      document.getElementById("bmp").innerHTML = "Click to add a <em class=\"red\">margin</em> of <em>50px</em>.";
    break;
    case 2:
      document.getElementById("bmp").style.margin = "50px auto";
      document.getElementById("bmp").innerHTML = "Click to add a <em class=\"red\">padding</em> of <em>40px</em>."
    break;
    case 3:
      document.getElementById("bmp").style.padding = "40px";
      document.getElementById("bmp").innerHTML = "Click to remove styles."
    break;
    case 4:
      document.getElementById("bmp").style.border = "none";
      document.getElementById("bmp").style.margin = "auto";
      document.getElementById("bmp").style.padding = "2em 0 0 0";
      document.getElementById("bmp").innerHTML = "Click to add a <em class=\"red\">border:</em><em> dashed 3px #ff5555;</em>"
      bmpClicks = 0;
    break;
  }
}