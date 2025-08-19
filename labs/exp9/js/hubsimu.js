document.getElementById("net1").style.visibility = "hidden";
document.getElementById("net2").style.visibility = "hidden";
document.getElementById("net3").style.visibility = "hidden";
document.getElementById("net4").style.visibility = "hidden";
document.getElementById("net5").style.visibility = "hidden";
document.getElementById("net10").style.visibility = "hidden";
document.getElementById("net9").style.visibility = "hidden";


function myMove(){
    if(document.getElementById("pl1").checked) {
        console.log("hi")
               
 myMov1()
            }
    else if(document.getElementById("pl2").checked) {
        console.log("hi")
               
 myMov2()
            }
    else if(document.getElementById("pl3").checked) {
        console.log("hi")
               
 myMov3()
            }
        else if(document.getElementById("pl4").checked) {
        console.log("hi")
               
 myMov4()
            }
        else if(document.getElementById("pl5").checked) {
        console.log("hi")
               
 myMov5()
            }


else if(document.getElementById("pl6").checked) {
        console.log("hi")
               
 myMov6()
            }

}


function myMov1() {
    var elem = document.getElementById("net");   
    posx = 620;
    posy = 70;
    var id = setInterval(frame, 16);

    
    function frame() {
        if (posy == 280) {

             clearInterval(id)
             elem.style.visibility = "Hidden";
              setTimeout(show1,1000);
               setTimeout(show2,1000);
                setTimeout(show3,1000);
                 setTimeout(show4,1000);
             setTimeout(function(){
                myMove2()
                myMove3()
                myMove4()
                myMove5()
                myMove6()
                

             },2000)
                          
        }
        
        else {
           
                posx++;
                posy++;
               
                elem.style.top =posy + "px"; 
                elem.style.left = 1.05*posx + "px";
                
            }
            
        
    }

    // setTimeout(show,10000);

}  

function myMov2() {
    var elem = document.getElementById("net");   
    posx = 920;
    posy = 100;
    var id = setInterval(frame, 16);

    
    function frame() {
        if (posy == 280) {

             clearInterval(id)
             elem.style.visibility = "Hidden";
              setTimeout(show1,1000);
               setTimeout(show2,1000);
                setTimeout(show3,1000);
                 setTimeout(show4,1000);
             setTimeout(function(){
                myMove1()
                myMove2()
                // myMove3()
                myMove4()
                myMove5()
                myMove6()
                

             },2000)
                          
        }
        
        else {
           
               
                posy++;
               
                elem.style.top =posy + "px"; 
                elem.style.left =posx + "px";
                
            }
        
    }
    // setTimeout(show,10000);

}
function myMov3() {
    var elem = document.getElementById("net");   
    posx = 1080;
    posy = 100;
    var id = setInterval(frame, 16);

    
    function frame() {
        if (posy == 280) {

             clearInterval(id)
             elem.style.visibility = "Hidden";
              setTimeout(show1,1000);
               setTimeout(show2,1000);
                setTimeout(show3,1000);
                 setTimeout(show4,1000);
             setTimeout(function(){
                myMove1()
                // myMove2()
                myMove3()
                myMove4()
                myMove5()
                myMove6()
                

             },2000)
                          
        }
        
        else {
           
                posx--;
                posy++;
               
                elem.style.top =posy + "px"; 
                elem.style.left =1.05*posx + "px";
                
            }
        
    }
    // setTimeout(show,10000);

}
function myMov4() {
    var elem = document.getElementById("net");   
    posx = 640;
    posy = 485;
    var id = setInterval(frame, 16);

    
    function frame() {
        if (posy == 280) {

             clearInterval(id)
             elem.style.visibility = "Hidden";
              setTimeout(show1,1000);
               setTimeout(show2,1000);
                setTimeout(show3,1000);
                 setTimeout(show4,1000);
             setTimeout(function(){
                myMove1()
                myMove2()
                myMove3()
                myMove4()
                // myMove5()
                myMove6()
                

             },2000)
                          
        }
        
        else {
           
                posx++;
                posy--;
               
                elem.style.top =posy + "px"; 
                elem.style.left =1.05*posx + "px";
                
            }
        
    }
    // setTimeout(show,10000);
}
function myMov5() {
    var elem = document.getElementById("net");   
    posx = 920;
    posy = 485;
    var id = setInterval(frame, 16);

    
    function frame() {
        if (posy == 280) {

             clearInterval(id)
             elem.style.visibility = "Hidden";
              setTimeout(show1,1000);
               setTimeout(show2,1000);
                setTimeout(show3,1000);
                 setTimeout(show4,1000);
             setTimeout(function(){
                myMove1()
                myMove2()
                myMove3()
                // myMove4()
                myMove5()
                myMove6()
                

             },2000)
                          
        }
        
        else {
           
                
                posy--;
               
                elem.style.top =posy + "px"; 
                elem.style.left =posx + "px";
                
            }
        
    }
    // setTimeout(show,10000);
}
function myMov6() {
    var elem = document.getElementById("net");   
    posx = 1080;
    posy = 485;
    var id = setInterval(frame, 16);

    
    function frame() {
        if (posy == 280) {

             clearInterval(id)
             elem.style.visibility = "Hidden";
              setTimeout(show1,1000);
               setTimeout(show2,1000);
                setTimeout(show3,1000);
                 setTimeout(show4,1000);
             setTimeout(function(){
                 myMove1()
                myMove2()
                myMove3()
                myMove4()
                myMove5()
                //myMove6()
                

             },2000)
                          
        }
        
        else {
           
                posx--;
                posy--;
               
                elem.style.top =posy + "px"; 
                elem.style.left =0.999*posx + "px";
                
            }
        
    }
    // setTimeout(show,10000);
}
function myMove1() {
    
    var elem = document.getElementById("net10");   
    posx1 = 760;
    posy1 = 250;
    document.getElementById("net10").style.visibility = "visible";
    var id70 = setInterval(frame90, 16);

    function frame90() {
        if (posy1 == 50) {
             clearInterval(id70);
             
             
        }
        
        else {
           
                posx1--;
                posy1--;
               
                elem.style.top =posy1 + "px"; 
                elem.style.left =1.1*posx1 + "px";
                
            }
        
    }
    
}
function myMove2() {
    var elem = document.getElementById("net9"); 
    document.getElementById("net9").style.visibility = "visible";  
    posx9 = 880;
    posy9 = 250;
    var id2 = setInterval(frame2, 16);

    function frame2() {
        if (posy9 == 50) {
        	 clearInterval(id2);
             
        }
        
        else {
           
                posx9++;
                posy9--;
               
                elem.style.top =posy9 + "px"; 
                elem.style.left =1.05*posx9 + "px";
                
            }
        
    }
    
}
function myMove3() {
    var elem = document.getElementById("net1"); 
    document.getElementById("net1").style.visibility = "visible";  
    posx2 = 880;
    posy2 = 260;
    var id3 = setInterval(frame1, 16);

    function frame1() {
        if (posy2 == 50) {
        	 clearInterval(id3);
             
        }
        
        else {
           
               
                posy2--;
               
                elem.style.top =posy2 + "px"; 
                elem.style.left =posx2 + "px";
                
            }
        
    }
    
}
function myMove4() {
    var elem = document.getElementById("net2");  
    document.getElementById("net2").style.visibility = "visible"; 
    posx3 = 880;
    posy3 = 260;
    var id4 = setInterval(frame3, 16);

    
    function frame3() {
        if (posy3 == 480) {
        	 clearInterval(id4);
             
        }
        
        else {
                posy3++;
               
                elem.style.top =posy3 + "px"; 
                elem.style.left =posx3 + "px";
                
            }
        
    }   
}
function myMove5() {
    var elem = document.getElementById("net3");   
    document.getElementById("net3").style.visibility = "visible";
    posx4 = 880;
    posy4 = 260;
    var id5 = setInterval(frame4, 16);

    
    function frame4() {
        if (posy4 == 485) {
        	 clearInterval(id5);
             
        }
        
        else {           
                posx4--;
                posy4++;
               
                elem.style.top =posy4 + "px"; 
                elem.style.left =.9999*posx4 + "px";
                
            }
        
    }
   
}
function myMove6() {
    var elem = document.getElementById("net4");  
    document.getElementById("net4").style.visibility = "visible"; 
    posx5 = 880;
    posy5 = 260;
    var id6 = setInterval(frame5, 16);

    
    function frame5() {
        if (posy5 == 485) {
        	 clearInterval(id6);
             
        }
        
        else {           
                posx5++;
                posy5++;
               
                elem.style.top =posy5 + "px"; 
                elem.style.left =1.05*posx5 + "px";
                
            }
        
    }   
}
function show1()
{
    document.getElementById("msg1").innerHTML = "*Hub Is properly a hardware device";
             
   

}
function show2()
{
    
             
    document.getElementById("msg2").innerHTML = "*It works on Physical Layer";
  

}
function show3()
{
    
  
    document.getElementById("msg3").innerHTML = "*It never Checks any address Just Broadcast the message";
   
    

}
function show4()
{
    
   
    document.getElementById("msg4").innerHTML = "*It works as a multiport Repeater";

}
