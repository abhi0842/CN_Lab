document.getElementById("net1").style.visibility = "hidden";
document.getElementById("net2").style.visibility = "hidden";
document.getElementById("net3").style.visibility = "hidden";
document.getElementById("net4").style.visibility = "hidden";
document.getElementById("net5").style.visibility = "hidden";
document.getElementById("net9").style.visibility = "hidden";
document.getElementById("net10").style.visibility = "hidden";

function reload()
{
    window.location.reload();
}

function myMove(){
    var s1 = document.getElementById('pl1').checked;
    var s2 = document.getElementById('pl2').checked;
    var s3 = document.getElementById('pl3').checked;
    var s4 = document.getElementById('pl4').checked;
    var s5 = document.getElementById('pl5').checked;
    var s6 = document.getElementById('pl6').checked;

    var d1 = document.getElementById('p1').checked;
        var d2 = document.getElementById('p2').checked;
        var d3 = document.getElementById('p3').checked;
        var d4 = document.getElementById('p4').checked;
        var d5 = document.getElementById('p5').checked;
        var d6 = document.getElementById('p6').checked;

        if(document.getElementById("pl1").checked) {
        
            if (d2==false && d3==false && d4==false && d5==false && d6==false)
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
          
            if (d1==false && d3==false && d4==false && d5==false && d6==false)
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
         
            if (d1==false && d2==false && d4==false && d5==false && d6==false)
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
      
            if (d1==false && d2==false && d3==false && d5==false && d6==false)
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
            else if(document.getElementById("pl5").checked) {
     
            if (d1==false && d2==false && d3==false && d4==false && d6==false)
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
                    myMov5()
                }
    
                }
    
    
    else if(document.getElementById("pl6").checked) {
      
            if (d1==false && d2==false && d3==false && d4==false && d5==false)
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
              myMov6()
          }
    
                }
                
                else if(s1==false && s2==false && s3==false && s4==false && s5==false && s6==false && d1==false && d2==false && d3==false && d4==false && d5==false && d6==false)
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
    posx = 530;
    posy = 60;
    var id = setInterval(frame, 16);

    
    function frame() {
        if (posy == 280) {

             clearInterval(id)
             elem.style.visibility = "hidden";
              setTimeout(show,1000);
              setTimeout(show2,6000); 

            if(document.getElementById("p2").checked) {
               
                setTimeout(myMove3,2000);
               
            }
            if(document.getElementById("p1").checked) {
               
                setTimeout(myMove1,2000);}
            if(document.getElementById("p4").checked) {
              
                setTimeout(myMove5,2000);}
            if(document.getElementById("p3").checked) {
          
                setTimeout(myMove2,2000);}
            if(document.getElementById("p5").checked) {
             
                setTimeout(myMove4,2000);}
             if(document.getElementById("p6").checked) {
      
                setTimeout(myMove6,2000);}
                         
        }
       
        else {
          
               posx++;
               posy++;
               
              elem.style.top =posy + "px"; 
              elem.style.left = 1.01*posx + "px";
                
            }      
    }


}
function myMov2() {
    var elem = document.getElementById("net");   
    posx = 780;
    posy = 50;
    var id = setInterval(frame, 16);

    
    function frame() {
        if (posy == 280) {

             clearInterval(id)
             elem.style.visibility = "hidden";
              setTimeout(show,1000);
              setTimeout(show2,6000);
             if(document.getElementById("p2").checked) {
                document.getElementById("net1").style.visibility = "visible";
                setTimeout(myMove3,2000);
               
            }
            if(document.getElementById("p1").checked) {
                document.getElementById("net10").style.visibility = "visible";
                setTimeout(myMove1,2000);}
            if(document.getElementById("p4").checked) {
                document.getElementById("net3").style.visibility = "visible";
                setTimeout(myMove5,2000);}
            if(document.getElementById("p3").checked) {
                document.getElementById("net9").style.visibility = "visible";
                setTimeout(myMove2,2000);}
            if(document.getElementById("p5").checked) {
                document.getElementById("net2").style.visibility = "visible";
                setTimeout(myMove4,2000);}
             if(document.getElementById("p6").checked) {
                document.getElementById("net4").style.visibility = "visible";
                setTimeout(myMove6,2000);}
                          
        }
        
        else {
           
               
                posy++;
               
                elem.style.top =posy + "px"; 
                elem.style.left =posx + "px";
                
            }
        
    }
 

}
function myMov3() {
    var elem = document.getElementById("net");   
    posx = 950;
    posy = 60;
    var id = setInterval(frame, 16);

    
    function frame() {
        if (posy == 280) {

             clearInterval(id)
             elem.style.visibility = "hidden";
              setTimeout(show,1000);
              setTimeout(show2,6000);
            if(document.getElementById("p2").checked) {
                document.getElementById("net1").style.visibility = "visible";
                setTimeout(myMove3,2000);
               
            }
            if(document.getElementById("p1").checked) {
                document.getElementById("net10").style.visibility = "visible";
                setTimeout(myMove1,2000);}
            if(document.getElementById("p4").checked) {
                document.getElementById("net3").style.visibility = "visible";
                setTimeout(myMove5,2000);}
            if(document.getElementById("p3").checked) {
                document.getElementById("net9").style.visibility = "visible";
                setTimeout(myMove2,2000);}
            if(document.getElementById("p5").checked) {
                document.getElementById("net2").style.visibility = "visible";
                setTimeout(myMove4,2000);}
             if(document.getElementById("p6").checked) {
                document.getElementById("net4").style.visibility = "visible";
                setTimeout(myMove6,2000);}
                          
        }
        
        else {
           
                posx--;
                posy++;
               
                elem.style.top =posy + "px"; 
                elem.style.left =1.05*posx + "px";
                
            }
        
    }


}
function myMov4() {
    var elem = document.getElementById("net");   
    posx = 540;
    posy = 475;
    var id = setInterval(frame, 16);

    
    function frame() {
        if (posy == 280) {

             clearInterval(id)
             elem.style.visibility = "hidden";
              setTimeout(show,1000);
              setTimeout(show2,6000);
             if(document.getElementById("p2").checked) {
                document.getElementById("net1").style.visibility = "visible";
                setTimeout(myMove3,2000);
               
            }
            if(document.getElementById("p1").checked) {
                document.getElementById("net10").style.visibility = "visible";
                setTimeout(myMove1,2000);}
            if(document.getElementById("p4").checked) {
                document.getElementById("net3").style.visibility = "visible";
                setTimeout(myMove5,2000);}
            if(document.getElementById("p3").checked) {
                document.getElementById("net9").style.visibility = "visible";
                setTimeout(myMove2,2000);}
            if(document.getElementById("p5").checked) {
                document.getElementById("net2").style.visibility = "visible";
                setTimeout(myMove4,2000);}
             if(document.getElementById("p6").checked) {
                document.getElementById("net4").style.visibility = "visible";
                setTimeout(myMove6,2000);}
                          
        }
        
        else {
           
                posx++;
                posy--;
               
                elem.style.top =posy + "px"; 
                elem.style.left =1.05*posx + "px";
                
            }
        
    }

}
function myMov5() {
    var elem = document.getElementById("net");   
    posx = 740;
    posy = 475;
    var id = setInterval(frame, 16);

    
    function frame() {
        if (posy == 280) {

             clearInterval(id)
             elem.style.visibility = "hidden";
              setTimeout(show,1000);
              setTimeout(show2,6000); 
             if(document.getElementById("p2").checked) {
                document.getElementById("net1").style.visibility = "visible";
                setTimeout(myMove3,2000);
               
            }
            if(document.getElementById("p1").checked) {
                document.getElementById("net10").style.visibility = "visible";
                setTimeout(myMove1,2000);}
            if(document.getElementById("p4").checked) {
                document.getElementById("net3").style.visibility = "visible";
                setTimeout(myMove5,2000);}
            if(document.getElementById("p3").checked) {
                document.getElementById("net9").style.visibility = "visible";
                setTimeout(myMove2,2000);}
            if(document.getElementById("p5").checked) {
                document.getElementById("net2").style.visibility = "visible";
                setTimeout(myMove4,2000);}
             if(document.getElementById("p6").checked) {
                document.getElementById("net4").style.visibility = "visible";
                setTimeout(myMove6,2000);}
                          
        }
        
        else {
           
                
                posy--;
               
                elem.style.top =posy + "px"; 
                elem.style.left =posx + "px";
                
            }
        
    }

}
function myMov6() {
    var elem = document.getElementById("net");   
    posx = 980;
    posy = 475;
    var id = setInterval(frame, 16);

    
    function frame() {
        if (posy == 280) {

             clearInterval(id)
             elem.style.visibility = "hidden";
              setTimeout(show,1000);
              setTimeout(show2,6000);
             if(document.getElementById("p2").checked) {
                document.getElementById("net1").style.visibility = "visible";
                setTimeout(myMove3,2000);
               
            }
            if(document.getElementById("p1").checked) {
                document.getElementById("net10").style.visibility = "visible";
                setTimeout(myMove1,2000);}
            if(document.getElementById("p4").checked) {
                document.getElementById("net3").style.visibility = "visible";
                setTimeout(myMove5,2000);}
            if(document.getElementById("p3").checked) {
                document.getElementById("net9").style.visibility = "visible";
                setTimeout(myMove2,2000);}
            if(document.getElementById("p5").checked) {
                document.getElementById("net2").style.visibility = "visible";
                setTimeout(myMove4,2000);}
             if(document.getElementById("p6").checked) {
                document.getElementById("net4").style.visibility = "visible";
                setTimeout(myMove6,2000);}
                          
        }
        
        else {
           
                posx--;
                posy--;
               
                elem.style.top =posy + "px"; 
                elem.style.left =0.999*posx + "px";
                
            }
        
    }

}
function myMove1() {
    var elem = document.getElementById("net10");   
    document.getElementById("net10").style.visibility = "visible";
    posx1 = 710;
    posy1 = 250;
    var id70 = setInterval(frame90, 16);

    function frame90() {
        if (posy1 == 60) {
             clearInterval(id70);
             
        }
        
        else {
           
                posx1--;
                posy1--;
               
                elem.style.top =posy1 + "px"; 
                elem.style.left =1.01*posx1 + "px";
                
            }
        
    }
    
}
function myMove2() {
    var elem = document.getElementById("net9");   
    document.getElementById("net9").style.visibility = "visible";
    posx9 = 810;
    posy9 = 250;
    var id2 = setInterval(frame2, 16);

    function frame2() {
        if (posy9 == 60) {
             clearInterval(id2);
             
        }
        
        else {
           
                posx9++;
                posy9--;
               
                elem.style.top =posy9 + "px"; 
                elem.style.left =.98*posx9 + "px";
                
            }
        
    }
    
}
function myMove3() {
    var elem = document.getElementById("net1");   
    document.getElementById("net1").style.visibility = "visible";
    posx2 = 740;
    posy2 = 260;
    var id3 = setInterval(frame1, 16);

    
    function frame1() {
        if (posy2 == 60) {
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
    posx3 = 740;
    posy3 = 260;
    var id4 = setInterval(frame3, 16);

    
    function frame3() {
        if (posy3 == 475) {
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
    posx4 = 760;
    posy4 = 260;
    var id5 = setInterval(frame4, 16);

    
    function frame4() {
        if (posy4 == 475) {
        	 clearInterval(id5);
             
        }
        
        else {
           
                posx4= posx4 - 1.01;
                posy4++;
               
                elem.style.top =posy4 + "px"; 
                elem.style.left =posx4 + "px";
                
            }
        
    }
    
    
    
}
function myMove6() {
    var elem = document.getElementById("net4");   
    document.getElementById("net4").style.visibility = "visible";
    posx5 = 840;
    posy5 = 260;
    var id6 = setInterval(frame5, 16);

    
    function frame5() {
        if (posy5 == 475) {
        	 clearInterval(id6);
             
        }
        
        else {
           
                posx5++;
                posy5++;
               
                elem.style.top =posy5 + "px"; 
                elem.style.left =.92*posx5 + "px";
                
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