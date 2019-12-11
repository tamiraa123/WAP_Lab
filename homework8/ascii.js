var execount = 0;
var EXERCISECount = 0;
var myVar;
speed = 250;
function gogogo(speed) {
    var e = document.getElementById("dropdown");
    var strUser = e.options[e.selectedIndex].text;
    console.log(strUser);
    if(strUser != "Blank")
    {
        myVar =  setInterval(function() { EXERCISEFunction(strUser.toUpperCase()); }, speed);
    }
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    
}
function EXERCISEFunction(Types)
{ 
    var EXERCISEFULL = window[Types] + "";
    var exe = EXERCISEFULL.split("=====");
    document.getElementById("maintext").innerHTML = exe[execount];
    ++execount;
    if (execount == exe.length) {
        execount = 0;
    } 
}
function stop() {
    clearInterval(myVar);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
 }
 function dropdown1event() {
    var x = document.getElementById("dropdown1").value;
    console.log(x);
    var fontSizeDropdown = "7pt";
    switch(x) {
        case "Tiny":
            fontSizeDropdown = "7pt";
          break;
        case "Small":
            fontSizeDropdown = "10pt";
          break;
        case "Medium":
            fontSizeDropdown = "12pt";
        break;
        case "Large":
            fontSizeDropdown = "16pt";
          break;
        case "Extra Large":
            fontSizeDropdown = "24pt";
        break;
        case "XXL":
            fontSizeDropdown = "32pt";
          break;
        default:
          // code block
      }
    document.getElementById("maintext").style.fontSize = fontSizeDropdown;
    
  }
  function checkbox1() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
        clearInterval(myVar);
        gogogo(50);
        console.log(50);
    } else {
        clearInterval(myVar);
        gogogo(250);
    }
  }