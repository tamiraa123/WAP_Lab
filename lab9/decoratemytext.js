function bgdec(){
    //alert("Hello, world!");
    var myVar = setInterval(myTimer, 500);
}
function myTimer() {
    var fontSize = parseInt($("#text").css("font-size"));
        fontSize = fontSize + 2 + "pt";
        $("#text").css({'font-size':fontSize});
  }


function bling(){
    //alert("Hello, world!");
   if(document.getElementById("bling").checked == true){
    $("#text").css("font-weight", "bold");
    $("#text").css("color", "green");
    $("#text").css("text-decoration", "underline");

    $("body").css({'background-image' : 'url(hundred-dollar-bill.jpg)',
      'background-repeat': 'repeat'});
    
     }
     else
     {
        $("#text").css("font-weight", "normal");
        $("#text").css("color", "black");
        $("#text").css("text-decoration", "none");
     }
}
function pigLatin(){
   var words = (document.getElementById("text").value).trim().split(" ");
   var voilent = ["a","o","i","u","e","A","O","I","U","E"]; 
   var numbers = ["1","2","3","4","5","6","7","8","9","0"]; 
   var res = "";
   for(let i=0;i<words.length;i++)
   {
        if(voilent.includes(words[i].substring(0,1))==true)
        {
            res = res + words[i] + "ay" + " ";
        }
        else if(numbers.includes(words[i].substring(0,1))==true)
        {
            res = res + words[i] + " ";
        }
        else
        {
            if(words[i].length>1)
            {
               res = res + words[i].substring(1,words[i].length) + words[i].substring(0,1) + " ";
            }
        }
   }
   
   console.log(res);
}
function malkovitchb(){
    var words = (document.getElementById("text").value).trim().split(" ");
    var res = "";
    for(let i=0;i<words.length;i++)
    {
        if(words[i].length > 5)
        {
            res = res + "Malkovich" + " ";
        }
        else
        {
            res = res + words[i] + " ";
        }
        console.log(res);
    }
    document.getElementById("text").innerHTML = res;
}