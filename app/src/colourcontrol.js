//const { LINE_LOOP } = require("./libraries/p5");

function colourcontrol()
{
  var gui;
  var me = this;
  var backButton;
  var menuButton;
  var setButton;
  var allButton;
  var toggles = [];
  var rowSize = 3;
  var curColour = color(0);
  var greyColour = color(0);
  var guiVisible = 0; 
  var paletteX = 20;
  var paletteY = 325;
  var paletteOffset = 287;
  var cpx = paletteX;
  var cpy = paletteY; 
  var cpx2 = paletteX+paletteOffset;
  var cpy2 = paletteY +158;

  this.setup = function()
  {
    gui = createGui();

    // header menu
    var buttonstyleBack = {
        "rounding": 0,
        "strokeWeight": 0,
        "fillBg": color(255,255,255,0),
        "fillBgHover": color(255,255,255,0),
        "fillLabelHover" : color(255,255,255,0)
    }
    backButton = createButton("", 0, 0);
    backButton.w = 50;
    backButton.h = 50;
    backButton.setStyle(buttonstyleBack);
    backButton.onPress = function() {
        me.sceneManager.showScene(mainmenu);
    }  
    
    menuButton = createButton("", width-50, 0);
    menuButton.w = 50;
    menuButton.h = 50;
    menuButton.setStyle(buttonstyleBack);
    menuButton.onPress = function() {
        var url = "../app/index.html";
        window.location.replace(url)
    }
    // end header menu


    allButton = createButton("Select All Lights", 20, 55);
    allButton.w = 100;
    allButton.h = 50;
    allButton.setStyle({
      fillBg: color(0,0,0),
      rounding: 0,
      textSize: 12,
      strokeWeight: 2,
      strokeBg: color(0),
      strokeBgHover: color(0),
      fillLabel: color(0),
      fillBgHover: color(255),
      fillBg: color(255),
      fillLabelHover : color(0)      
    });

    var buttonstyleSet= {
        "font": 'gotham',
        "textSize": 12,
        "rounding": 0,
        "strokeWeight": 1,
        "fillBg": color(0),
        "fillBgHover": color(0),
        "fillLabelHover" : color(255),
        "fillLabel" : color(255),
        "strokeBg" : color(255),
        "strokeBgHover" : color(255)
    }

    setButton = createButton("Set Colour",  20, height-110);
    setButton.w = width-50;
    setButton.h = 50;
    setButton.setStyle(buttonstyleSet);    

    //create toggles
    for(i = 0; i < rowSize;i++) {
        var size = 50;
        var s = 75;
        var yoff = 120;
        var xoff = 140;
        var n = "";
        toggles.push([createToggle("",xoff,yoff+i*s,size,size),createToggle("",xoff + s,yoff+i*s,size,size),createToggle("",xoff + s*2,yoff+i*s,size,size)]);
    }


    var togglestyle= {
        "rounding": 50,
        "strokeWeight": 2,
        "fillBgOn:": color(255),
        "fillBgOff": color(47,47,47,0),
        "strokeBgOn" : color(255),
        "strokeBgOff" : color(255),
        "strokeBgOnHover" : color(255),
        "strokeBgOffHover" : color(255)
    }

    toggles[0][0].setStyle(togglestyle);
    toggles[0][1].setStyle(togglestyle);
    toggles[0][2].setStyle(togglestyle);        
    toggles[1][0].setStyle(togglestyle);
    toggles[1][1].setStyle(togglestyle);
    toggles[1][2].setStyle(togglestyle);              
    toggles[2][0].setStyle(togglestyle);
    toggles[2][1].setStyle(togglestyle);
    toggles[2][2].setStyle(togglestyle);  
         
  }

  function checkColour() 
  {
    var cx = paletteX;
    var cy = paletteY;
    var cw = 276;
    var ch = 158;
    if((mouseX >= cx) && (mouseX <= cx+cw)) {
      if((mouseY >= cy) && (mouseY <= cy+ch)) {
        curColour = colorWheel.get(mouseX-cx, mouseY-cy);
        cpx = mouseX;
        cpy = mouseY;          
      }
    }    
  }

  function checkGreyscale() 
  {
    var cx = paletteX+paletteOffset;
    var cy = paletteY;
    var cw = 33;
    var ch = 158;
    if((mouseX >= cx) && (mouseX <= cx+cw)) {
      if((mouseY >= cy) && (mouseY <= cy+ch)) {
        greyColour = colorWheel.get(mouseX-cx+paletteOffset, mouseY-cy);
        cpx2 = mouseX;
        cpy2 = mouseY;          
      }
    }    
  }

  function drawColourPalette()
  {

    fill(255);
    image(colorWheel, paletteX, paletteY);

    noFill();
    stroke(255);
    strokeWeight(3);
    ellipse(cpx,cpy,20,20);

    fill(255);
    stroke(0);
    strokeWeight(3);
    line(paletteX+paletteOffset, cpy2, paletteX+paletteOffset+33, cpy2);
    ellipse(paletteX+paletteOffset,cpy2,10,10);


    fill(255);
  }
  
  
  this.enter = function()
  {  
    gui.show();
    guiVisible = true;
    curColour = color(0,0,0);
  }

  this.exit = function()
  {
    gui.hide();
    guiVisible = false;
  }

  this.draw = function()
  {
    background('#bfbfbf');

    textFont(fontGotham);
    textAlign(CENTER);

    // header menu
    fill(255);
    noStroke();
    rect(0,0,width,50);    
    image(backimg,0,0);

    textSize(14);
    fill(0);
    text("ADMIN",width/2, 30);

    fill(255);
    image(menuimg,width-50,0);
    // end header menu

    textAlign(LEFT);
    fill(0);
    // textSize(20);
    // text("CUSTOM COLOURS",30,80);    

    var xoff = 20;
    var yoff = 120;
    var xoff2 = 140;
    var yoff2 = 55;
    var w2 = 50;
    var h2 = 265;
    var r = 0;
    var yspacer = 75;
    var xspacer = 75;
    //var w = width - 50;
    var w = xoff2+xspacer*2 + 30;
    var h = 50;

    fill(47,47,47,128);
    rect(xoff,yoff,w,h,r);
    rect(xoff,yoff+yspacer,w,h,r);
    rect(xoff,yoff+yspacer*2,w,h,r);
    fill(255);
    textSize(12);
    text("Tower Top",xoff+20,yoff+30);
    text("Tower Middle",xoff+20,yoff+30+yspacer);
    text("Tower Base",xoff+20,yoff+30+yspacer*2);

    fill(47,47,47,128);
    rect(xoff2,yoff2,w2,h2,r);
    rect(xoff2+xspacer,yoff2,w2,h2,r);
    rect(xoff2+xspacer*2,yoff2,w2,h2,r);
    fill(255);
    textSize(12);
    text("Norton",xoff2+5,yoff2+30);
    text("Docker",xoff2+5+xspacer,yoff2+30);
    text("Gray",xoff2+5+xspacer*2,yoff2+30);

    drawColourPalette();

    gui.draw();

    if (allButton.isPressed) {
      toggles[0][0].val = true;
      toggles[0][1].val = true;
      toggles[0][2].val = true;        
      toggles[1][0].val = true;
      toggles[1][1].val = true;
      toggles[1][2].val = true;              
      toggles[2][0].val = true;
      toggles[2][1].val = true;
      toggles[2][2].val = true;              
    }

    if(setButton.isPressed) {
      var dmxData = {type:"dmxcontrol", 
                     name: "colourwheel", r: red(curColour), g: green(curColour), b: blue(curColour), w: red(greyColour),
                     top1: toggles[0][0].val, top2: toggles[0][1].val, top3: toggles[0][2].val,
                     mid1: toggles[1][0].val, mid2: toggles[1][1].val, mid3: toggles[1][2].val,
                     low1: toggles[2][0].val, low2: toggles[2][1].val, low3: toggles[2][2].val,
      };  
      var message = JSON.stringify(dmxData); 
      print(message);
      //socket.send(message);  
    }

    // colour square for visual feedback
    // noStroke();
    // fill(greyColour);
    // rect(width-55,paletteY+165,50,50);
    // fill(curColour);
    // rect(width-120,paletteY+165,50,50);

  }

  this.touchEnded = function() 
  {
    if(guiVisible) {
      checkColour();
      checkGreyscale();
    }
  }

  this.touchMoved = function() 
  {
    if(guiVisible) {
      checkColour();
      checkGreyscale(); 
    }
  }

  this.mouseDragged = function(args) 
  {
    if(guiVisible) {
      checkColour();
      checkGreyscale(); 
    }  
  }

  this.mousePressed = function()
  {
    if(guiVisible) {
      checkColour();
      checkGreyscale(); 
    }  
  }
 
}
