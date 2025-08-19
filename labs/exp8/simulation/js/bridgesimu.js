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

function reload()
{
    window.location.reload();
}

function myMove(){
    var s1 = document.getElementById('pl1').checked;
    var s2 = document.getElementById('pl2').checked;
    var s3 = document.getElementById('pl3').checked;
    var s4 = document.getElementById('pl4').checked;


        var d1 = document.getElementById('p1').checked;
        var d2 = document.getElementById('p2').checked;
        var d3 = document.getElementById('p3').checked;
        var d4 = document.getElementById('p4').checked;


    if(document.getElementById("pl1").checked) {
   
               if (d2==false && d3==false && d4==false)
        {
            Swal.fire({
                backdrop:false,
               target: '#boxx',
               width:'370px',
               position:'center',
                customClass: {
                  container: 'position-absolute',
                  popup:"swal2-popup"
                },
                text:"Select destination address also.",
         
                });
          
      }
      else{
        document.getElementById('button2').disabled=true;
        document.getElementById('button2').style.cursor="no-drop";
          myMov1()
          
      }

            }
    else if(document.getElementById("pl2").checked) {
      
        if (d1==false && d3==false && d4==false)
        {
            Swal.fire({
                backdrop:false,
               target: '#boxx',
               width:'370px',
               position:'center',
                customClass: {
                  container: 'position-absolute',
                  popup:"swal2-popup"
                },
                text:"Select destination address also.",
                });     
      }
      else{
        document.getElementById('button2').disabled=true;
        document.getElementById('button2').style.cursor="no-drop";
          myMov2()
         
      }

            }
    else if(document.getElementById("pl3").checked) {
        
        if (d1==false && d2==false && d4==false)
        {
            Swal.fire({
                backdrop:false,
               target: '#boxx',
               width:'370px',
               position:'center',
                customClass: {
                  container: 'position-absolute',
                  popup:"swal2-popup"
                },
                text:"Select destination address also.",
         
                });   
      }
      else{
        document.getElementById('button2').disabled=true;
        document.getElementById('button2').style.cursor="no-drop";
          myMov3()
      }     

            }
        else if(document.getElementById("pl4").checked) {
      
        if (d1==false && d2==false && d3==false)
        {
            Swal.fire({
                backdrop:false,
               target: '#boxx',
               width:'370px',
               position:'center',
                customClass: {
                  container: 'position-absolute',
                  popup:"swal2-popup"
                },
                text:"Select destination address also.",
         
                });  
      }
      else{
        document.getElementById('button2').disabled=true;
        document.getElementById('button2').style.cursor="no-drop";
          myMov4()
      }  

            }
            else if(s1==false && s2==false && s3==false && s4==false && d1==false && d2==false && d3==false && d4==false)
            {
                document.getElementById("button").addEventListener("click", 
                Swal.fire({
                    backdrop:false,
                   target: '#boxx',
                   width:'390px',
                   position:'center',
                    customClass: {
                      container: 'position-absolute',
                      popup:"swal2-popup"
                    },
                    text:"First select source and destination address.",
             
                    }));
            }
            else{
                document.getElementById("button").addEventListener("click", 
                Swal.fire({
                    backdrop:false,
                   target: '#boxx',
                   width:'370px',
                   position:'center',
                    customClass: {
                      container: 'position-absolute',
                      popup:"swal2-popup"
                    },
                    text:"Select source address also.",
             
                    })
               );
            }

}

function myMov1() {
    var elem = document.getElementById("net");   
    posx = 520;
    posy = 85;
    var id = setInterval(frame, 16);

    
    function frame() {
        if (posx == 740) {

             clearInterval(id)
             elem.style.visibility = "hidden";                
             setTimeout(show,1000);
            if(document.getElementById("p2").checked) {
                setTimeout(function(){
                    myMove3()
                   
                },2000);
               
                setTimeout(show2,6000);

            }
          
            if(document.getElementById("p4").checked) {
                setTimeout(myMove4,2000);
                setTimeout(myMove5,7000);
                setTimeout(myMove6,11000);
                setTimeout(show2,16000);
            }
            if(document.getElementById("p3").checked) {
                setTimeout(myMove4,2000);
                setTimeout(myMove5,7000);
                setTimeout(myMove7,11000);
                setTimeout(show2,16000);
            }
            
        }
        
        else {
           
                posx++;
                               
                elem.style.top =posy + "px"; 
                elem.style.left = 1.05*posx + "px";
                
            }
        
    }
   
}
function myMov2() {
    var elem = document.getElementById("net");   
    posx = 950;
    posy = 80;
    var id = setInterval(frame, 16);

    
    function frame() {
        if (posx == 780) {

             clearInterval(id)
             elem.style.visibility = "hidden";                
             setTimeout(show,1000);
          
            if(document.getElementById("p1").checked) {
                setTimeout(myMove1,2000);
                setTimeout(show2,6000);}
            if(document.getElementById("p4").checked) {
                setTimeout(myMove4,2000);
                setTimeout(myMove5,7000); 
                setTimeout(myMove6,11000);
                setTimeout(show2,16000);

            }
            if(document.getElementById("p3").checked) {
                setTimeout(myMove4,2000);
                setTimeout(myMove5,7000);
                setTimeout(myMove7,11000);
                setTimeout(show2,16000);
            }
            
        }
        
        else {
           
                posx--;             
                elem.style.top =posy + "px"; 
                elem.style.left = posx + "px";
                
            }
        
    }
   
}
    function myMov3() {
    var elem = document.getElementById("net");   
    posx = 520;
    posy = 480;
    var id = setInterval(frame, 16);

    
    function frame() {
        if (posx == 760) {

             clearInterval(id)
             elem.style.visibility = "hidden";                
             setTimeout(show,1000);
            if(document.getElementById("p2").checked) {
              
                setTimeout(myMove9,2000);
                setTimeout(myMove8,6000);
                setTimeout(myMove3,11000);
                setTimeout(show2,16000);
               
            }
            if(document.getElementById("p1").checked) {
              
                setTimeout(myMove9,2000);
                setTimeout(myMove8,6000);
                setTimeout(myMove1,11000);
                setTimeout(show2,16000);}
            if(document.getElementById("p4").checked) {
                              
                setTimeout(myMove6,2000);
                setTimeout(show2,6000);
  
            }
          
            
        }
        
        else {
           
                posx++;
                               
                elem.style.top =posy + "px"; 
                elem.style.left = posx + "px";
                
            }
        
    }

}
function myMov4() {
    var elem = document.getElementById("net");   
    posx = 950;
    posy = 480;
    var id = setInterval(frame, 16);

    
    function frame() {
        if (posx == 780) {

             clearInterval(id)
             elem.style.visibility = "hidden";                
             setTimeout(show,1000);
            if(document.getElementById("p2").checked) {
              
                setTimeout(myMove9,2000);
                setTimeout(myMove8,6000);
                setTimeout(myMove3,11000);
                setTimeout(show2,16000);
               
            }
            if(document.getElementById("p1").checked) {
              
                setTimeout(myMove9,2000);
                setTimeout(myMove8,6000);
                setTimeout(myMove1,11000);
                setTimeout(show2,16000);}
          
            if(document.getElementById("p3").checked) {
                   
                setTimeout(myMove7,2000);
                setTimeout(show2,6000);
            }
            
        }
        
        else {
           
                posx--;
                               
                elem.style.top =posy + "px"; 
                elem.style.left = posx + "px";
                
            }
        
    }

}
// upper hub to left
function myMove1() {
    var elem = document.getElementById("net1");   
    document.getElementById("net1").style.visibility = "visible";
    posx1 = 780;
    posy1 = 70;
    var id70 = setInterval(frame90, 16);

    function frame90() {
        if (posx1 == 540) {
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
    posx2 = 780;
    posy2 = 70;
    var id3 = setInterval(frame1, 16);

    function frame1() {
        if (posx2 == 955) {
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
    posx3 = 790;
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
    posx8 = 780;
    posy8 = 270;
    var id8 = setInterval(frame5, 16);

    function frame5() {
        if (posy8 == 80) {
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
    posx4 = 775;
    posy4 = 275;
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
    posx7 = 775;
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
    posx5 = 760;
    posy5 = 475;
    var id6 = setInterval(frame8, 16);

    
    function frame8() {
        if (posx5 == 955) {
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
    posx6 = 780;
    posy6 = 475;
    var id6 = setInterval(frame9, 16);

    
    function frame9() {
        if (posx6 == 540) {
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
    document.getElementById("msg1").style.visibility='visible';
             
}

function show2()
{
    Swal.fire({
        backdrop:false,
       target: '#boxx',
       position:'center',
        customClass: {
          container: 'position-absolute',
          popup:"swal2-popup"
        },
        text:"Frame Received.",
         icon:'success'
        }); 
}