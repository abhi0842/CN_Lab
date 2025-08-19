
function alert_terminate(sender, receiver)
{
       Swal.fire({
    title: "Connection Terminated!!",
    html: `The dedicated path is now released between ${sender} and ${receiver} as the communication is finished.`,
    icon: "success",
    target: '.main-box ',
                  customClass:{
                    container:"position-absolute",
                    popup:"swal-popup",
                  },
    })

    document.getElementById("phase").innerText="Phase 1: Connection Establishment";
    document.getElementById("phase").style.visibility='hidden'
}


// D1_D4
var id1= null;
function myMove_D1_S1(id) {
  var elem = document.getElementById(id);   
  var posX = 100;
  var posY = 250; 
  elem.style.top = posY + 'px'; 
      elem.style.left = posX + 'px';  
   clearInterval(id1)
  id1 = setInterval(frame, 20);
  function frame() {
    if (posY >= 310){
      clearInterval(id1);
    } else {
      posX=posX+1.7;
      posY=posY+1;
      elem.style.top = posY + 'px'; 
      elem.style.left = posX + 'px'; 
    }
  }
}

var id2 = null;
function myMove_S1_S3(id) {
  var elem = document.getElementById(id);   
  var posX = 360;
  var posY = 360;
  clearInterval(id2);
  id2 = setInterval(frame, 20);
  function frame() {
    if (posY >= 430) {
      clearInterval(id2);
    } else {
      posX=posX+1;
      posY=posY+1;
      elem.style.top = posY + 'px'; 
      elem.style.left = posX + 'px'; 
    }
  }
}

var id3 = null;
function myMove_S3_S4(id) {
  var elem = document.getElementById(id);   
  var posX = 580;
  var posY = 430;
clearInterval(id3);
  id3 = setInterval(frame, 20);
  function frame() {
    if (posY <= 347) {
      clearInterval(id3);
    } else {
      posX=posX+1;
      posY=posY-1;
      elem.style.top = posY + 'px'; 
      elem.style.left = posX + 'px'; 
    }
 }
}

var id4 = null;
function myMove_S4_D4(ID) {
  var elem = document.getElementById(ID);   
  var posX = 790;
  var posY = 320;
clearInterval(id4);
  id4 = setInterval(frame, 20);
  function frame() {
    if (posY <= 230) {
      clearInterval(id4);
    } else {
      posX=posX+1;
      posY=posY-.55;
      elem.style.top = posY +'px'; 
      elem.style.left = posX + 'px'; 
    }
  }
}


//  D4_D1
var id5 = null;
function myMove_D4_S4(ID) {
  var elem = document.getElementById(ID);   
  var posX = 1080;
  var posY = 200;
  clearInterval(id5);
  id5 = setInterval(frame, 20);
  function frame() {
    if (posY >= 300) {
      clearInterval(id5);
    } else {
      posX=posX-1;
      posY=posY+.52;
      elem.style.top = posY +'px'; 
      elem.style.left = posX + 'px'; 
    }
  }
  
}

var id6 = null;
function myMove_S4_S3(ID) {
  var elem = document.getElementById(ID);   
  var posX = 770;
  var posY = 350; 
 clearInterval(id6);
  id6 = setInterval(frame, 20);
  function frame() {
    if (posY >= 415) {
      clearInterval(id6);
    } else {
      posX=posX-1;
      posY=posY+1;
      elem.style.top = posY + 'px'; 
      elem.style.left = posX + 'px'; 
    }
 }
}

 var id7= null;
function myMove_S3_S1(id) {
  var elem = document.getElementById(id);   
  var posX = 570;
  var posY = 435;  
  clearInterval(id7);
  id7 = setInterval(frame, 20);
  function frame() {
    if (posY <= 335) {
      clearInterval(id7);
    } else {
      posX=posX-1;
      posY=posY-1;
      elem.style.top = posY + 'px'; 
      elem.style.left = posX + 'px'; 
    }
  }
}
var id8= null;
function myMove_S1_D1(id) {
  var elem = document.getElementById(id);   
  var posX = 340;
  var posY = 300;   
  clearInterval(id8);
  id8 = setInterval(frame, 20);
  function frame() {
    if (posY <= 235) {
      clearInterval(id8);
    } else {
      posX=posX-1;
      posY=posY-.5;
      elem.style.top = posY + 'px'; 
      elem.style.left = posX + 'px'; 
    }
  }
}
// D1----D5
var id9 = null;
function myMove_S3_D5(ID) {
  var elem = document.getElementById(ID);   
  var posX = 600;
  var posY = 450;   
   clearInterval(id9)
  id9 = setInterval(frame, 20);
  function frame() {
    if (posX >= 950){
      clearInterval(id9);
    } else {
      posX=posX+1.7;
      elem.style.top = posY + 'px'; 
      elem.style.left = posX + 'px'; 
    }
  }
}

// D5-D1
 var id10 = null;
function myMove_D5_S3(ID) {
  var elem = document.getElementById(ID);   
  var posX = 1088;
  var posY = 420;    
   clearInterval(id10)
  id10 = setInterval(frame, 20);
  function frame() {
    if (posX <= 720){
      clearInterval(id10);
    } else {
      posX=posX-1.7;
      elem.style.top = posY + 'px'; 
      elem.style.left = posX + 'px'; 
    }
  }
}

// D1---D6
var id11 = null;
function myMove_S3_S5() {
  var elem = document.getElementById("P1");   
  var posX = 580;
  var posY = 480;  
   clearInterval(id11)
  id11 = setInterval(frame, 20);
  function frame() {
    if (posX >= 665){
      clearInterval(id11);
    } else {
      posX=posX+1;
      posY=posY+1;
      elem.style.top = posY + 'px'; 
      elem.style.left = posX + 'px'; 
    }
  }
}
var id12= null;
function myMove_S5_D6() {
  var elem = document.getElementById("P1");   
  var posX = 810;
  var posY = 610;   
  clearInterval(id12);
  id12 = setInterval(frame, 20);
  function frame() {
    if (posY >= 694) {
      clearInterval(id12);
    } else {
      posX=posX+1;
      posY=posY+.5;
      elem.style.top = posY + 'px'; 
      elem.style.left = posX + 'px'; 
    }
  }
}
// d6_d1
var id13= null;
function myMove_D6_S5() {
  var elem = document.getElementById("P6");   
  var posX = 1090;
  var posY = 640;  
  clearInterval(id13);
  id13 = setInterval(frame, 20);
  function frame() {
    if (posY <= 580) {
      clearInterval(id13);
    } else {
      posX=posX-1.5;
      posY=posY-.5;
      elem.style.top = posY + 'px'; 
      elem.style.left = posX + 'px'; 
    }
  }
}

var id14= null;
function myMove_S5_S3() {
  var elem = document.getElementById("P6");   
  var posX = 765;
  var posY = 530;  
  clearInterval(id14);
  id14 = setInterval(frame, 20);
  function frame() {
    if (posY <= 440) {
      clearInterval(id14);
    } else {
      posX=posX-.74;
      posY=posY-.8;
      elem.style.top = posY + 'px'; 
      elem.style.left = posX + 'px'; 
    }
  }
}


// d1---d3
var id15 = null;
function myMove_S3_S2(ID) {
  var elem = document.getElementById(ID);   
  var posX = 445;
  var posY = 460;
  clearInterval(id15);
  id15 = setInterval(frame, 20);
  function frame() {
    if (posY >= 550) {
      clearInterval(id15);
    } else {
      posX=posX-1;
      posY=posY+1;
      elem.style.top = posY + 'px'; 
      elem.style.left = posX + 'px'; 
    }
  }
}
var id16 = null;
function myMove_S2_D3(ID) {
  var elem = document.getElementById(ID);   
  var posX = 210;
  var posY = 600;
  clearInterval(id16);
  id16 = setInterval(frame, 20);
  function frame() {
    if (posY >= 680) {
      clearInterval(id16);
    } else {
      posX=posX-1;
      posY=posY+.5;
      elem.style.top = posY + 'px'; 
      elem.style.left = posX + 'px'; 
    }
  }
}
// d3---d1
var id17 = null;
function myMove_D3_S2(ID) {
  var elem = document.getElementById(ID);   
  var posX = 80;
  var posY = 610;
  clearInterval(id17);
  id17 = setInterval(frame, 20);
  function frame() {
    if (posY <= 540) {
      clearInterval(id17);
    } else {
      posX=posX+1;
      posY=posY-.5;
      elem.style.top = posY + 'px'; 
      elem.style.left = posX + 'px'; 
    }
  }
}
var id18 = null;
function myMove_S2_S3(ID) {
  var elem = document.getElementById(ID);   
  var posX = 375;
  var posY = 485;
  clearInterval(id18);
  id18 = setInterval(frame, 20);
  function frame() {
    if (posY <= 380) {
      clearInterval(id18);
    } else {
      posX=posX+1;
      posY=posY-1.5;
      elem.style.top = posY + 'px';
      elem.style.left = posX + 'px'; 
    }
  }
}

// d1----d2
var id19 = null;
function myMove_S3_D2(ID) {
  var elem = document.getElementById(ID);   
  var posX = 420;
  var posY = 430;   
   clearInterval(id19)
  id19 = setInterval(frame, 20);
  function frame() {
    if (posX <= 93) {
      clearInterval(id19);
    } else {
      posX=posX-1.7;
      elem.style.top = posY + 'px'; 
      elem.style.left = posX + 'px'; 
    }
  }
}

// d2----d1
var id20 = null;
function myMove_D2_S3(ID) {
  var elem = document.getElementById(ID);   
  var posX = 100;
  var posY = 430;   
   clearInterval(id20)
  id20 = setInterval(frame, 20);
  function frame() {
    if (posX >= 430) {
      clearInterval(id20);
    } else {
      posX=posX+1.5;
       elem.style.top = posY + 'px'; 
       elem.style.left = posX + 'px'; 
    }
  }
}
// D4----D2
var id21 = null;
function myMove_D4_S4(ID) {
  var elem = document.getElementById(ID);   
  var posX = 1080;
  var posY = 210;   
  clearInterval(id21);
  id21 = setInterval(frame, 20);
  function frame() {
    if (posY >= 298) {
      clearInterval(id21);
    } else {
      posX=posX-1.5;
      posY=posY+.8;
      elem.style.top = posY + 'px'; 
      elem.style.left = posX + 'px'; 
    }
  }
}


// d1----d2----error
var id22 = null;
function myMove_S3_D2_error(ID) {
  var elem = document.getElementById(ID);   
  var posX = 420;
  var posY = 430;   
   clearInterval(id22)
  id22 = setInterval(frame, 20);
  function frame() {
    if (posX <= 220) {
      clearInterval(id22);
    } else {
      posX=posX-1.7;
      elem.style.top = posY + 'px'; 
      elem.style.left = posX + 'px'; 
    }
  }
}
// d3--d4----error
 var id23 = null;
function myMove_S3_S4_error(id) {
  var elem = document.getElementById(id);   
  var posX = 580;
  var posY = 430;
clearInterval(id23);
  id23 = setInterval(frame, 20);
  function frame() {
    if (posY <= 380) {
      clearInterval(id23);
    } else {
      posX=posX+1;
      posY=posY-1;
      elem.style.top = posY + 'px'; 
      elem.style.left = posX + 'px'; 
    }
 }
}