document.getElementById("net1").style.visibility = "hidden";
document.getElementById("net2").style.visibility = "hidden";
document.getElementById("net3").style.visibility = "hidden";
document.getElementById("net4").style.visibility = "hidden";
document.getElementById("net5").style.visibility = "hidden";
document.getElementById("net6").style.visibility = "hidden";
document.getElementById("net7").style.visibility = "hidden";
document.getElementById("net8").style.visibility = "hidden";
document.getElementById("net9").style.visibility = "hidden";
document.getElementById("net10").style.visibility = "hidden";
document.getElementById("net11").style.visibility = "hidden";
document.getElementById("net12").style.visibility = "hidden";
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
        
}

function myMov1() {
    var elem = document.getElementById("net");   
    posx = 620;
    posy = 80;
    var id = setInterval(frame, 16);

    
    function frame() {
        if (posx == 850) {

             clearInterval(id)
             elem.style.visibility = "hidden";                

            if(document.getElementById("p2").checked) {
                // document.getElementById("net1").style.visibility = "visible";
                setTimeout(function(){
                    myMove3()
                    myMove4()
                },2000);

               
            }
            if(document.getElementById("p1").checked) {
                // document.getElementById("net10").style.visibility = "visible";
                setTimeout(myMove1,2000);}
            if(document.getElementById("p4").checked) {
                // document.getElementById("net3").style.visibility = "visible";
                setTimeout(myMove4,2000);
            
                setTimeout(myMove5,7000);
                
                setTimeout(myMove6,11000);
  

            }
            if(document.getElementById("p3").checked) {
                // document.getElementById("net9").style.visibility = "visible";
                setTimeout(myMove4,2000);
                setTimeout(myMove5,7000);
                setTimeout(myMove7,11000);
            }
            
        }
        
        else {
           
                posx++;
                               
                elem.style.top =posy + "px"; 
                elem.style.left = 1.05*posx + "px";
                
            }
        
    }
    setTimeout(show,10000);

}
function myMov2() {
    var elem = document.getElementById("net");   
    posx = 1130;
    posy = 80;
    var id = setInterval(frame, 16);

    
    function frame() {
        if (posx == 900) {

             clearInterval(id)
             elem.style.visibility = "hidden";                

            if(document.getElementById("p2").checked) {
                // document.getElementById("net1").style.visibility = "visible";
                setTimeout(myMove3,2000);

               
            }
            if(document.getElementById("p1").checked) {
                // document.getElementById("net10").style.visibility = "visible";
                setTimeout(myMove1,2000);}
            if(document.getElementById("p4").checked) {
                // document.getElementById("net3").style.visibility = "visible";
                setTimeout(myMove4,2000);
            
                setTimeout(myMove5,7000);
                
                setTimeout(myMove6,11000);
  

            }
            if(document.getElementById("p3").checked) {
                // document.getElementById("net9").style.visibility = "visible";
                setTimeout(myMove4,2000);
                setTimeout(myMove5,7000);
                setTimeout(myMove7,11000);
            }
            
        }
        
        else {
           
                posx--;
                               
                elem.style.top =posy + "px"; 
                elem.style.left = posx + "px";
                
            }
        
    }
    setTimeout(show,10000);

}
    function myMov3() {
    var elem = document.getElementById("net");   
    posx = 620;
    posy = 480;
    var id = setInterval(frame, 16);

    
    function frame() {
        if (posx == 900) {

             clearInterval(id)
             elem.style.visibility = "hidden";                

            if(document.getElementById("p2").checked) {
                // document.getElementById("net1").style.visibility = "visible";
                setTimeout(myMove9,2000);
                setTimeout(myMove8,6000);
                setTimeout(myMove3,11000);
               
            }
            if(document.getElementById("p1").checked) {
                // document.getElementById("net10").style.visibility = "visible";
                setTimeout(myMove9,2000);
                setTimeout(myMove8,6000);
                setTimeout(myMove1,11000);}
            if(document.getElementById("p4").checked) {
                // document.getElementById("net3").style.visibility = "visible";
                               
                setTimeout(myMove6,2000);
  

            }
            if(document.getElementById("p3").checked) {
                // document.getElementById("net9").style.visibility = "visible";
                
                setTimeout(myMove7,2000);
            }
            
        }
        
        else {
           
                posx++;
                               
                elem.style.top =posy + "px"; 
                elem.style.left = posx + "px";
                
            }
        
    }

    
     setTimeout(show,10000);

}
function myMov4() {
    var elem = document.getElementById("net");   
    posx = 1130;
    posy = 480;
    var id = setInterval(frame, 16);

    
    function frame() {
        if (posx == 900) {

             clearInterval(id)
             elem.style.visibility = "hidden";                

            if(document.getElementById("p2").checked) {
                // document.getElementById("net1").style.visibility = "visible";
                setTimeout(myMove9,2000);
                setTimeout(myMove8,6000);
                setTimeout(myMove3,11000);
               
            }
            if(document.getElementById("p1").checked) {
                // document.getElementById("net10").style.visibility = "visible";
                setTimeout(myMove9,2000);
                setTimeout(myMove8,6000);
                setTimeout(myMove1,11000);}
            if(document.getElementById("p4").checked) {
                // document.getElementById("net3").style.visibility = "visible";
                               
                setTimeout(myMove6,2000);
  

            }
            if(document.getElementById("p3").checked) {
                // document.getElementById("net9").style.visibility = "visible";
                
                setTimeout(myMove7,2000);
            }
            
        }
        
        else {
           
                posx--;
                               
                elem.style.top =posy + "px"; 
                elem.style.left = posx + "px";
                
            }
        
    }
    setTimeout(show,10000);
    
}
// upper hub to left
function myMove1() {
    var elem = document.getElementById("net1");   
    document.getElementById("net1").style.visibility = "visible";
    posx1 = 900;
    posy1 = 70;
    var id70 = setInterval(frame90, 16);

    function frame90() {
        if (posx1 == 620) {
             clearInterval(id70);
             
        }
        
        else {
           
                posx1--;
                
                elem.style.top =posy1 + "px"; 
                elem.style.left = posx1 + "px";
                
            }
        
    }
    
}
// upper right to hub
function myMove2() {
    var elem = document.getElementById("net3"); 
    elem.style.visibility = "visible";  
    posx1 = 1130;
    posy1 = 70;
    var id2 = setInterval(frame2, 16);

    function frame2() {
        if (posx1 == 900) {
             clearInterval(id2);
             elem.style.visibility = "hidden";
             
        }
        
        else {
           
                posx1--;
                
                elem.style.top =posy1 + "px"; 
                elem.style.left =posx1 + "px";
                
            }
        
    }
    
}
// upper hub to right
function myMove3() {
    var elem = document.getElementById("net2");   
    elem.style.visibility = "visible";
    posx2 = 940;
    posy2 = 70;
    var id3 = setInterval(frame1, 16);

    function frame1() {
        if (posx2 == 1130) {
        	 clearInterval(id3);
             
        }
        
        else {
                posx2++;
               
                elem.style.top =posy2 + "px"; 
                elem.style.left =posx2 + "px";
                
            }
        
    }
    
}
// upper hub to bridge
function myMove4() {
    var elem = document.getElementById("net4"); 
    elem.style.visibility = "visible";  
    posx3 = 900;
    posy3 = 60;
    var id4 = setInterval(frame3, 16);

    function frame3() {
        if (posy3 == 270) {
             clearInterval(id4);
             elem.style.visibility = "hidden";
             
        }
        
        else {

                posy3++;
               
                elem.style.top =posy3 + "px"; 
                elem.style.left =posx3 + "px";
                
            }
        
    }
 
}
// bridge to upper hub
function myMove8() {
    var elem = document.getElementById("net5");  
    elem.style.visibility = "visible"; 
    posx8 = 900;
    posy8 = 270;
    var id8 = setInterval(frame5, 16);

    function frame5() {
        if (posy8 == 70) {
             clearInterval(id8);
             elem.style.visibility = "hidden";
            
             
        }
        
        else {

                posy8--;
               
                elem.style.top =posy8 + "px"; 
                elem.style.left =posx8 + "px";
                
            }
        
    }
 
}
// bridge to below hub
function myMove5() { 
    var elem = document.getElementById("net6");   
    elem.style.visibility = "visible";
    posx4 = 900;
    posy4 = 270;
    var id5 = setInterval(frame6, 16);

    
    function frame6() {
        if (posy4 == 485) {
             clearInterval(id5);
             elem.style.visibility = "hidden";
             
        }
        
        else {
           
                posy4++;
                
               
                elem.style.top =posy4 + "px"; 
                elem.style.left = posx4 + "px";
                
            }
        
    }
  
}
// below hub to bridge 
function myMove9() { 
    var elem = document.getElementById("net7");   
    elem.style.visibility = "visible";
    posx7 = 900;
    posy7 = 485;
    var id7 = setInterval(frame7, 16);

    
    function frame7() {
        if (posy7 == 275) {
        	 clearInterval(id7);
             elem.style.visibility = "hidden";
        }
        
        else {
           
                posy7--;
                
               
                elem.style.top =posy7 + "px"; 
                elem.style.left = posx7 + "px";
                
            }
        
    }
  
}

// below hub to right
function myMove6() {
    var elem = document.getElementById("net9");   
    elem.style.visibility = "visible";
    posx5 = 900;
    posy5 = 485;
    var id6 = setInterval(frame8, 16);

    
    function frame8() {
        if (posx5 == 1130) {
        	 clearInterval(id6);
             
        }
        
        else {
           
                posx5++;
    
                elem.style.top =posy5 + "px"; 
                elem.style.left =posx5 + "px";
                
            }
        
    }

}
// below hub to left
function myMove7() {
    var elem = document.getElementById("net8"); 
    elem.style.visibility = "visible";  
    posx6 = 900;
    posy6 = 485;
    var id6 = setInterval(frame9, 16);

    
    function frame9() {
        if (posx6 == 620) {
        	 clearInterval(id6);
             
        }
        
        else {
           
                posx6--;
                              
                elem.style.top =posy6 + "px"; 
                elem.style.left =posx6 + "px";
                
            }
        
    }

}

function show()
{
    document.getElementById("msg1").innerHTML = "*Bridge works on Physical and data Link Layer";
             
    document.getElementById("msg2").innerHTML = "*It is a 2 port device.";
  
    document.getElementById("msg3").innerHTML = "*Bridge checks to forward or filter the packet using routing table";
   
    document.getElementById("msg4").innerHTML = "*It is also used for interconnecting two LANs working on the same protocol";

   
}

