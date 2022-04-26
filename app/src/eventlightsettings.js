function eventlightsettings()
{
  var gui;
  var me = this;
  var backButton;
  var menu = [];
  var menuNames = ["Event 1","Event 2", "Event 3","Event 4", "Event 5"];    

  this.setup = function()
  {
    gui = createGui();
    backButton = createButton("Back", 5, height-50);
    backButton.w = width-10;
    backButton.h = 40;
    backButton.setStyle(buttonstyleMenu);
    backButton.onPress = function() {
      me.sceneManager.showScene(mainmenu);
    }  

    for(var i = 0;i < menuNames.length;i++) {
      menu[i] = createButton(menuNames[i],5,i*60+60);
      menu[i].index = i;
      menu[i].w = width-10;
      menu[i].h = 50;
      menu[i].setStyle(buttonstyleMenu);
      menu[i].onPress = function() 
      {        
        var eventData = {type:"event",value: this.index+1};  
        var message = JSON.stringify(eventData);
        //socket.send(message);   
      }      
    }    
  }
  
  this.enter = function()
  {
    gui.show();
  }

  this.exit = function()
  {
    gui.hide();
  }

  this.draw = function()
  {
    background(88);
    fill(255);
    textSize(20);
    text("EVENT LIGHT SETTINGS",10,20);
    
    gui.draw();

  }
 
}
