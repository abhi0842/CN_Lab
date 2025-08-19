var x, y, xx, yy;
var X, Y;
var flag = 0;
var rectX = 3;
var rectY = 3;
var inp;

function setup() {
    var canvas=createCanvas(800, 600);
    canvas.parent('sketch-holder');
   

    X = 1;
    Y = 0.1;

    x = 400;
    y = 0;
    a = 800;
    b = 40;

    A = -1;
    B = 0.1;

    x1 = 400;
    y1 = 0;
    a1 = 800;
    b1 = 80;

    x2 = 400;
    y2 = 160;
    a2 = 800;
    b2 = 120;

    x3 = 400;
    y3 = 200;
    a3 = 800;
    b3 = 160;

    x4 = 400;
    y4 = 240;
    a4 = 800;
    b4 = 200;

    x5 = 400;
    y5 = 280;
    a5 = 800;
    b5 = 240;

    x6 = 400;
    y6 = 320;
    a6 = 800;
    b6 = 280;

    x7 = 400;
    y7 = 360;
    a7 = 800;
    b7 = 320;

    x8 = 400;
    y8 = 400;
    a8 = 800;
    b8 = 360;


    x9 = 400;
    y9 = 440;
    a9 = 800;
    b9 = 400;

    x10 = 400;
    y10 = 480;
    a10 = 800;
    b10 = 440;

    a10_1 = 800;
    b10_1 = 480;
    m = 0;

    textSize(12);
    //nostroke();


    arr = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
    strokeWeight(1);
    label = createElement('h4', 'Frames:');
    label.parent('sketch-holder');
    label.position(200, 165);
    button1 = createButton('1');
    button1.parent('sketch-holder');
    button1.style('font-size', '17px');
    button1.style('color', 'black');
    button1.style('background-color', '#bae8e8');
    button1.position(270, 170);
    button1.mousePressed(f1);
    button2 = createButton('2');
    button2.parent('sketch-holder');
    button2.style('font-size', '17px');
    button2.style('color', 'black');
    button2.style('background-color', '#bae8e8');
    button2.position(290, 170);
    button2.mousePressed(f2);
    button3 = createButton('3');
    button3.parent('sketch-holder');
    button3.style('font-size', '17px');
    button3.style('color', 'black');
    button3.style('background-color', '#bae8e8');
    button3.position(310, 170);
    button3.mousePressed(f3);
    button4 = createButton('4');
    button4.parent('sketch-holder');
    button4.style('font-size', '17px');
    button4.style('color', 'black');
    button4.style('background-color', '#bae8e8');
    button4.position(330, 170);
    button4.mousePressed(f4);
    button5 = createButton('5');
    button5.style('font-size', '17px');
    button5.style('color', 'black');
    button5.style('background-color', '#bae8e8');
    button5.position(350, 170);
    button5.mousePressed(f5);
    button6 = createButton('6');
    button6.style('font-size', '17px');
    button6.style('color', 'black');
    button6.style('background-color', '#bae8e8');
    button6.position(370, 170);
    button6.mousePressed(f6);
    button7 = createButton('7');
    button7.style('font-size', '17px');
    button7.style('color', 'black');
    button7.style('background-color', '#bae8e8');
    button7.position(390, 170);
    button7.mousePressed(f7);
    button8 = createButton('8');
    button8.style('font-size', '17px');
    button8.style('color', 'black');
    button8.style('background-color', '#bae8e8');
    button8.position(410, 170);
    button8.mousePressed(f8);
    button9 = createButton('9');
    button9.style('font-size', '17px');
    button9.style('color', 'black');
    button9.style('background-color', '#bae8e8');
    button9.position(430, 170);
    button9.mousePressed(f9);
    button10 = createButton('10');
    button10.style('color', 'black');
    button10.style('font-size', '17px');
    button10.style('background-color', '#bae8e8');
    button10.position(450, 170);
    button10.mousePressed(f10);
    button5.parent('sketch-holder');
    button6.parent('sketch-holder');
    button7.parent('sketch-holder');
    button8.parent('sketch-holder');
    button9.parent('sketch-holder');
    button10.parent('sketch-holder');

    inp = createInput('').attribute('placeholder', 'for e.g 3');
    inp.parent('sketch-holder');
  inp.position(230, 540);
  inp.size(200);
  button = createButton("Submit");
  button.parent('sketch-holder');
  button.position(440, 540);
  button.mousePressed(frames);
  button.style('background-color', '#bae8e8');

  button11 = createButton("Reset");
button11.parent('sketch-holder');
button11.position(222, 590);
button11.style('background-color', '#bae8e8');
button11.mousePressed(reset);

};

function reset()
{
    window.location.reload();
}
function wrongclick() {
    Swal.fire({
        backdrop:false,
       target: '#sketch-holder',
       width:'370px',
       position:'center',
        customClass: {
          container: 'position-absolute',
          popup:"swal2-popup"
        },
        text:"Wrong frame selected",
 
        }); 

}

function overwrite() {
 
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
    button5.disabled = true;
    button6.disabled = true;
    button7.disabled = true;
    button8.disabled = true;
    button9.disabled = true;
    button10.disabled = true;
    var millisecondsToWait = 4000;
    setTimeout(function() {
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        button4.disabled = false;
        button5.disabled = false;
        button6.disabled = false;
        button7.disabled = false;
        button8.disabled = false;
        button9.disabled = false;
        button10.disabled = false;
        bluish();
    }, millisecondsToWait);
}

function bluish() {
    button1.style('background-color', '#bae8e8');
    button2.style('background-color', '#bae8e8');
    button3.style('background-color', '#bae8e8');
    button4.style('background-color', '#bae8e8');
    button5.style('background-color', '#bae8e8');
    button6.style('background-color', '#bae8e8');
    button7.style('background-color', '#bae8e8');
    button8.style('background-color', '#bae8e8');
    button9.style('background-color', '#bae8e8');
    button10.style('background-color', '#bae8e8');

}


count = 0;
c3 = 0;
c4 = 0;
c5 = 0;

function f1() {
    if (!(arr[0])) {
        wrongclick();
        button1.style('background-color', 'red');
        flag = 0;
    } else if (arr[0] == 2) {} else {
        button1.style('background-color', 'green');
        count += 1;
        arr[0] = 2;
        if ((count == 3) || (count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 9) || (count == 10) || (count == 11) || (count == 12) || (count == 13)) {
            overwrite();
        }

    }
};


function f2() {
    if (!(arr[1])) {
        wrongclick();
        button2.style('background-color', 'red');
        flag = 0;
    } else if (arr[1] == 2) {} else {
        button2.style('background-color', 'green');
        count += 1;
        arr[1] = 2;
        if ((count == 3) || (count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 9) || (count == 10) || (count == 11) || (count == 12) || (count == 13)) {
            overwrite();
        }

    }
};

function f3() {
    if (!(arr[2])) {
        wrongclick();
        button3.style('background-color', 'red');
        flag = 0;
    } else if (arr[2] == 2) {} else {
        button3.style('background-color', 'green');
        count += 1;
        arr[2] = 2;
        if ((count == 3) || (count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 9) || (count == 10) || (count == 11) || (count == 12) || (count == 13)) {
            overwrite();
        }
    }
};

function f4() {
    if (!(arr[3])) {
        wrongclick();
        button4.style('background-color', 'red');
        flag = 0;
    } else if (arr[3] == 2) {} else {
        button4.style('background-color', 'green');
        count += 1;
        arr[3] = 2;
        if ((count == 3) || (count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 9) || (count == 10) || (count == 11) || (count == 12) || (count == 13)) {
            overwrite();
        }

    }
};

function f5() {
    if (!(arr[4])) {
        wrongclick();
        button5.style('background-color', 'red');
        flag = 0;
    } else if (arr[4] == 2) {} else {
        button5.style('background-color', 'green');
        count += 1;
        arr[4] = 2;
        if ((count == 3) || (count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 9) || (count == 10) || (count == 11) || (count == 12) || (count == 13)) {
            overwrite();
        }
    }

};

function f6() {
    if (!(arr[5])) {
        wrongclick();
        button6.style('background-color', 'red');
        flag = 0;
    } else if (arr[5] == 2) {} else {
        button6.style('background-color', 'green');
        count += 1;
        arr[5] = 2;
        if ((count == 3) || (count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 9) || (count == 10) || (count == 11) || (count == 12) || (count == 13)) {
            overwrite();
        }
    }

};

function f7() {
    if (!(arr[6])) {
        wrongclick();
        button7.style('background-color', 'red');
        flag = 0;
    } else if (arr[6] == 2) {} else {
        button7.style('background-color', 'green');
        count += 1;
        arr[6] = 2;
        if ((count == 3) || (count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 9) || (count == 10) || (count == 11) || (count == 12) || (count == 13)) {
            overwrite();
        }

    }

};

function f8() {
    if (!(arr[7])) {
        wrongclick();
        button8.style('background-color', 'red');
        flag = 0;
    } else if (arr[7] == 2) {} else {
        button8.style('background-color', 'green');
        count += 1;
        arr[7] = 2;
        if ((count == 3) || (count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 9) || (count == 10) || (count == 11) || (count == 12) || (count == 13)) {
            overwrite();
        }
    }

};

function f9() {
    if (!(arr[8])) {
        wrongclick();
        button9.style('background-color', 'red');
        flag = 0;
    } else if (arr[8] == 2) {} else {
        button9.style('background-color', 'green');
        count += 1;
        arr[8] = 2;
        if ((count == 3) || (count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 9) || (count == 10) || (count == 11) || (count == 12) || (count == 13)) {
            overwrite();
        }
    }

};

function f10() {

    if (!(arr[9])) {
        wrongclick();
        button10.style('background-color', 'red');
        flag = 0;
    } else if (arr[9] == 2) {} else {
        button10.style('background-color', 'green');
        count += 1;
        arr[9] = 2;
        if ((count == 3) || (count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 9) || (count == 10) || (count == 11) || (count == 12) || (count == 13)) {
            overwrite();
        }
    }

};



cnt1 = 0;
cnt2 = 0;
cnt3 = 0;
cnt4 = 0;
cnt5 = 0;
cnt6 = 0;
cnt7 = 0;
cnt8 = 0;
cnt9 = 0;
cnt10 = 0;
cnt11 = 0;
cnt12 = 0;
cnt13 = 0;
ack2 = 0; //for ack2 lost
i=0;


c = 0

function coloursq1() {
    stroke('white');
    fill('red');
    square(30, 200, 40);

}

function coloursq2() {
    stroke('white');
    fill('blue');
    square(30, 250, 40);
}

function coloursq3() {
    stroke('white');
    fill(192, 192, 192);
    square(30, 300, 40);
}

function coloursq4() {
    stroke('white');
    fill(255, 204, 0);
    square(30, 350, 40);

}




function lines() {
    strokeWeight(4);
    stroke('black');
    line(400, 0, 400, 640);
    line(799, 0, 799, 640);
}

function texts() {
    strokeWeight(1);
    fill(0);
    textSize(18);
    text('Reciever', 720, 590);
    text('Sender', 405, 590);
    textSize(20);
    text('represents a normal frame sent', 80, 225);
    text('represents a corrupted frame', 80, 275);
    text('represents a Negative ACK', 80, 325);
    text('represents an ACK', 80, 375);
    text('THE WINDOW SIZE IS',1, 150);
    text('3', 225, 150); 
    fill('blue');
    text('How many total frames are transmitted?',0,480);
    stroke(400);
    strokeWeight(4);
}

function text1()
{
    Swal.fire({
        backdrop:false,
       target: '#sketch-holder',
       width:'370px',
       position:'center',
        customClass: {
          container: 'position-absolute',
          popup:"swal2-popup"
        },
        text:"There is no significant role for the sliding window because sender is only going to retransmit the frame for which the NACK is recieved or the ACK is not received.",
        icon:'info',
        }); 
    
}

function rectangles(a,b) // a is x-axis, b - width
{
   
    strokeWeight(2);
    stroke('black');
    fill('white');
    rect(a,36,b,55);
    stroke('#f9f4ef');
    fill('black');
    textSize(11);
    text('current window',a,103);
    strokeWeight(4);
    stroke('red');
}

function myInputEvent() {
  
    
    if(inp.value() != "13")
    {
      Swal.fire({
        backdrop:false,
        target:'#sketch-holder',
        width:'370px',
        position:'center',
        customClass: {
        container: 'position-absolute',
        popup:"swal2-popup"
         },
        title:"Oops...",
        text:"Wrong answer, Please Try Again.",
        icon:"error",
        });
    }
    if(inp.value() == "13")
    {
      Swal.fire({
        backdrop:false,
        target:'#sketch-holder',
        width:'370px',
        position:'center',
          customClass: {
         container: 'position-absolute',
         popup:"swal2-popup"
           },
        title:"Correct answer",
        text:"Try other window size.",
        icon:"success",
        });
    }                         
    }


function frames()
{
    Swal.fire({
        
        backdrop:false,
        target: '#sketch-holder',
        width:'390px',
        position:'center',
        customClass: {
          container: 'position-absolute',
          popup:"swal2-popup"
        },  
        icon:"warning",
    text:'First complete the simulation process.'
      
    })
   
}

function draw() {
    background(color('#fffffe'));
    strokeWeight(4);
    stroke('black');
    fill('white');
    square(215, 125, 35);


    coloursq1();
    coloursq4();
    coloursq2();
    coloursq3();
    texts();
    textSize(12);


    lines();
    textSize(12);
    stroke('black');
    fill(400);
    strokeWeight(4);
    stroke('black');
    if (count == 3) {
        cnt1 = 1;
    }
    if (count == 4) {
        cnt2 = 1;
    }
    if (count == 5) {
        cnt3 = 1;
    }

    if (count == 6) {
        cnt4 = 1;
    }

    if (count == 7) {
        cnt5 = 1;
    }

    if (count == 8) {
        cnt6 = 1;
    }

    if (count == 9) {
        cnt7 = 1;
    }

    if (count == 10) {
        cnt8 = 1;
    }

    if (count == 11) {
        cnt9 = 1;
    }
    if (count == 12) {
        cnt10 = 1;
    }
    if (count == 13) {
        cnt11 = 1;
    }


    if (cnt1 == 1) {
        stroke('#f9f4ef');
        fill('black');
        textSize(18);
        text('1', 380, 15);
        text('2', 380, 55);
        text('3', 380, 95);       
        if (x <= 5000) {
            if(cnt2!=1)
            rectangles(50,72);
            stroke('red');
            x = x + X;
            y = y + Y;
            if (x <= 1000) {
                line(x, y, 400, 0); //for 1
            }
            if (cnt2 != 1) {
                line(x, y + 40, 400, 40); //for 2
            
            }
            if (cnt3 != 1) {
                line(x, y + 80, 400, 80); //for 3
            }
           
        }
        if (x >= 950) {
            stroke('#f9f4ef');
            fill('black');
            textSize(18);
            text('1', 780, 55);
            stroke(255, 204, 0);
            if (a >= 400) {
                a = a + A;
                b = b + B;
                line(a, b, 800, 40); // for ack1
            }

            if (a == 400) {
                arr = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0];
               
            }

        }

    }

    // send frame 4, ack2
    if (cnt2 == 1) {
        stroke('#f9f4ef');
        textSize(18);
        text('4', 380, 135);
        stroke('red');
        if (x1 <= 5000) {
            if(cnt4!=1)
            rectangles(75,71);
            x1 = x1 + X;
            y1 = y1 + Y;
            if (cnt4 != 1) {  
                stroke('red');
                fill('white');               
                stroke('blue');
                if (x1 % 2 == 0) {
                    line(x1, y1 + 120 + 5, 400, 120);
                } else {
                    line(x1, y1 + 120 - 5, 400, 120);
                }
                
            }
           
        }
        if (x1 <= 5000) {
            stroke(255, 204, 0);
            if (a1 >= 600) {
                a1 = a1 + A;
                b1 = b1 + B;
            }
            if (x1 <= 1000) {
                line(a1, b1, 800, 80);
                stroke('#f9f4ef');
                fill('black');
                textSize(18);
                text('2', 780, 95);
            }
        }
        if (x1 == 900) {
            Swal.fire({
                backdrop:false,
               target: '#sketch-holder',
               width:'390px',
               position:'center',
                customClass: {
                  container: 'position-absolute',
                  popup:"swal2-popup"
                },
                text:"ACK 2 not received. Retransmit the frame.",
         
                });
            ack2 =1;
            arr = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0];
            
        }
        
    }
    if(ack2 == 1)
    {
      
      stroke('#f9f4ef');
      fill('red');
      textSize(18);
      text('ACK 2 lost', 700, 95);
        textSize(12);
    }

    //frame 2 agian
    if (cnt3 == 1) {
        stroke('#f9f4ef');
        fill('black');
        textSize(18);
        text('2', 380, 175);
        text('3', 780, 135); 
        stroke('red');      
        if (x2 <= 5000) {
            x2 = x2 + X;
            y2 = y2 + Y;
            if (cnt5 != 1) {
               line(x2, y2, 400, 160);
            }
        }
        if (x2 <= 5000) {
            stroke(255, 204, 0);
            if (a2 >= 400) {
                a2 = a2 + A;
                b2 = b2 + B;
            }
            if (x2 <= 1000) {
                line(a2, b2, 800, 120);
            }
        }
        if (x2 == 900) {
            arr = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0];
            text1();
        }
    }
//frame 5
    if (cnt4 == 1) {
        stroke('#f9f4ef');
        textSize(18);
        text('N4', 770, 175); 
        text('5', 380, 215); 
        stroke('red');    
        if (x3 <= 5000) {   
            x3 = x3 + X;
            y3 = y3 + Y;
            if (cnt6 != 1) {
                line(x3, y3, 400, 200);
            }
        }

        if (x3 <= 5000) {
            stroke(169, 169, 169);
            if (a3 >= 400) {
                a3 = a3 + A;
                b3 = b3 + B;
            }
            if (x3 <= 1000) {
                line(a3, b3, 800, 160);
            }
        }

        if (x3 == 900) {
            arr = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0];
        }

    }

    //frame 4 again
    if (cnt5 == 1) {
        stroke('#f9f4ef');
        textSize(18);
        text('2', 780, 215); 
        text('4', 380, 255); 
        stroke('red');
        if (x4 <= 5000) {
            x4 = x4 + X;
            y4 = y4 + Y;
            if (cnt7 != 1) {
                line(x4, y4, 400, 240);
            }
        }

        if (x4 <= 5000) {
            stroke(255, 204, 0);
            if (a4 >= 400) {
                a4 = a4 + A;
                b4 = b4 + B;
            }
            if (x4 <= 1000) {
                line(a4, b4, 800, 200);
            }
        }
        if (x4 == 900) {
            arr = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
           // alert1();
        }

    }

//frame 6
    if (cnt6 == 1) {
        stroke('#f9f4ef');
        text('5', 780, 255); 
        text('6', 380, 295);
        stroke('red');
        if (x5 <= 5000) {
            x5 = x5 + X;
            y5 = y5 + Y;
            if (cnt8 != 1) {
                line(x5, y5, 400, 280);
            }
        }


        if (x5 <= 5000) {
            stroke(255, 204, 0);
            if (a5 >= 400) {
                a5 = a5 + A;
                b5 = b5 + B;
            }
            if (x5 <= 1000) {
                line(a5, b5, 800, 240);
            }
        }
        if (x5 == 900) {
            arr = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
     
        }

    }

// frame 7
    if (cnt7 == 1) {
        stroke('#f9f4ef');
        text('4', 780, 295); 
        text('7', 380, 335);
        stroke('red');
        if (x6 <= 5000) {
            x6 = x6 + X;
            y6 = y6 + Y;
            if (cnt9 != 1) {
                line(x6, y6, 400, 320);
            }
        }

        if (x6 <= 5000) {
            stroke(255, 204, 0);
            if (a6 >= 400) {
                a6 = a6 + A;
                b6 = b6 + B;
            }
            if (x6 <= 1000) {
                line(a6, b6, 800, 280);
            }
        }
        if (x6 == 900) {
            arr = [0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
     
        }

    }


//frame 8
    if (cnt8 == 1) {
        stroke('#f9f4ef');
        text('6', 780, 335); 
        text('8', 380, 375);
        stroke('red');
        if (x7 <= 5000) {
            x7 = x7 + X;
            y7 = y7 + Y;
            if (x7 < 5000) {
                if (x7 <= 600) {
                    xx = x7;
                    yy = y7;
                } else {
                    xx = 600;
                    yy = 380;
                }
            }
            if (cnt10 != 1) {
                line(xx, yy, 400, 360); //for 8
            }
        }

        if (x7 <= 5000) {
            stroke(255, 204, 0);
            if (a7 >= 400) {
                a7 = a7 + A;
                b7 = b7 + B;
            }
            if (x7 <= 1000) {
             line(a7, b7, 800, 320); //ack6
            }
        }
        if (x7 == 900) {
            arr = [0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
        }

    }

    //frame 9
    if (cnt9 == 1) {
        stroke('#f9f4ef');
        text('7', 780, 375); 
        text('9', 380, 415);
        stroke('red');
        if (x8 <= 5000) {
            x8 = x8 + X;
            y8 = y8 + Y;
            if (cnt11 != 1) {
                line(x8, y8, 400, 400); //for 9
            }
        }

        if (x8 <= 5000) {
            stroke(255, 204, 0);
            if (a8 >= 400) {
                a8 = a8 + A;
                b8 = b8 + B;
            }
            if (x8 <= 1000) {
                line(a8, b8, 800, 360); //ack7
            }
        }
        if (x8 == 900) {
            arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
       
        }

    }
//frame 10
    if (cnt10 == 1) {
        stroke('#f9f4ef');
        text('N8', 770, 415); 
        text('10', 375, 455);
        stroke('red');
        if (x9 <= 5000) {
            x9 = x9 + X;
            y9 = y9 + Y;
            if (cnt12 != 1) {
                line(x9, y9, 400, 440);
            }
        }

        if (x9 <= 5000) {
            stroke(169, 169, 169);
            if (a9 >= 400) {
                a9 = a9 + A;
                b9 = b9 + B;
            }
            if (x9 <= 1000) {
                line(a9, b9, 800, 400); //for NAK8
            }
        }
        if (x9 == 900) {
            arr = [0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
       
        }

    }
    //frame 8 again
    if (cnt11 == 1) {
        stroke('#f9f4ef');
        text('9', 780, 455); 
        text('8', 380, 495);
        stroke('red');
        if (x10 <= 5000) { //for frame 8 send
            x10 = x10 + X;
            y10 = y10 + Y;
            if (cnt12 !=1) {
                line(x10, y10, 400, 480);
            }
        }

        if (x10 <= 5000) {
            stroke(255, 204, 0);
            if (a10 >= 400) {
                a10 = a10 + A;
                b10 = b10 + B;
            }
            if (x10 <= 1000) {
            line(a10, b10, 800, 440); //for ACK9
            }
        }


        if (x10 >= 950) { //for ack10 & 8
            stroke('#f9f4ef');
            text('10', 775, 495);
            text('8', 780, 535);
            stroke(255, 204, 0);
            if (a10_1 >= 400) {
                a10_1 = a10_1 + A;
                b10_1 = b10_1 + B;
                line(a10_1, b10_1, 800, 480);
                line(a10_1, b10_1+40, 800, 520);
                cnt12=1;
            }
            if (a10_1 == 400) {
                arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                Swal.fire({
                    backdrop:false,
                   target: '#sketch-holder',
                   width:'390px',
                   position:'center',
                    customClass: {
                      container: 'position-absolute',
                      popup:"swal2-popup"
                    },
                    text:"Input the total number of frames transmitted.",
             
                    });
                button.mousePressed(myInputEvent);
            }


        }


    }



};