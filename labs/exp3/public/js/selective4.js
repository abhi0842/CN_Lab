var x, y;
var X, Y;
var flag = 0;
var count = 0;
var x1, y1, a1, b1, x2, y2, aa, bb, x4, y4, a4, b4, x5, y5, a5, b5, a2, b2; var inp;

function setup() {
    var canvas=createCanvas(800, 600);
    canvas.parent('sketch-holder');
    
    x = 400;
    y = 0;
    X = 1;
    Y = 0.1;

    a = 800;
    b = 40;
    A = -1;
    B = 0.1;

    x1 = 400;
    y1 = 160;
    a1 = 800;
    b1 = 80;

    a2 = 800;
    b2 = 80;
   
    x2 = 400;
    y2 = 0;

    aa = 0;
    bb = 0;

    x3 = 400;
    y3 = 200;
    a3 = 800;
    b3 = 120;

    x4 = 400;
    y4 = 0;
    a4 = 800;
    b4 = 160;
    x5 = 400;
    y5 = 240;
    a5 = 800;
    b5 = 280;


    arr = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0];
    strokeWeight(1);
    label = createElement('h4', 'Frames:');
    label.parent('sketch-holder');
    label.position(200, 150);
    button1 = createButton('1');
    button1.style('font-size', '17px');
    button1.style('color', 'black');
    button1.style('background-color', '#bae8e8');
    button1.position(270, 155);
    button1.mousePressed(f1);
    button2 = createButton('2');
    button2.style('font-size', '17px');
    button2.style('color', 'black');
    button2.style('background-color', '#bae8e8');
    button2.position(290, 155);
    button2.mousePressed(f2);
    button3 = createButton('3');
    button3.style('font-size', '17px');
    button3.style('color', 'black');
    button3.style('background-color', '#bae8e8');
    button3.position(310, 155);
    button3.mousePressed(f3);
    button4 = createButton('4');
    button4.style('font-size', '17px');
    button4.style('color', 'black');
    button4.style('background-color', '#bae8e8');
    button4.position(330, 155);
    button4.mousePressed(f4);
    button5 = createButton('5');
    button5.style('font-size', '17px');
    button5.style('color', 'black');
    button5.style('background-color', '#bae8e8');
    button5.position(350, 155);
    button5.mousePressed(f5);
    button6 = createButton('6');
    button6.style('font-size', '17px');
    button6.style('color', 'black');
    button6.style('background-color', '#bae8e8');
    button6.position(370, 155);
    button6.mousePressed(f6);
    button7 = createButton('7');
    button7.style('font-size', '17px');
    button7.style('color', 'black');
    button7.style('background-color', '#bae8e8');
    button7.position(390, 155);
    button7.mousePressed(f7);
    button8 = createButton('8');
    button8.style('font-size', '17px');
    button8.style('color', 'black');
    button8.style('background-color', '#bae8e8');
    button8.position(410, 155);
    button8.mousePressed(f8);
    button9 = createButton('9');
    button9.style('font-size', '17px');
    button9.style('color', 'black');
    button9.style('background-color', '#bae8e8');
    button9.position(430, 155);
    button9.mousePressed(f9);
    button10 = createButton('10');
    button10.style('color', 'black');
    button10.style('font-size', '17px');
    button10.style('background-color', '#bae8e8');
    button10.position(450, 155);
    button10.mousePressed(f10);

    button1.parent('sketch-holder');
    button2.parent('sketch-holder');
    button3.parent('sketch-holder');
    button4.parent('sketch-holder');
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
    button.position(440, 540);
    button.mousePressed(frames);
    button.style('background-color', '#bae8e8');
    button.parent('sketch-holder');
    button11 = createButton("Reset");
button11.parent('sketch-holder');
button11.position(222, 590);
button11.style('background-color', '#bae8e8');
button11.mousePressed(reset);
}

function reset()
{
    window.location.reload();
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


count = 0;

function f1() {
    if (!(arr[0])) {
        wrongclick();
        button1.style('background-color', 'red');
        flag = 0;
    } else if (arr[0] == 2) {} else {
        button1.style('background-color', 'green');
        count += 1;
        arr[0] = 2;
        if ((count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 12)) {
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
        if ((count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 12)) {
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
        if ((count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 12)) {
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
        if ((count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 12)) {
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
        if ((count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 12)) {
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
        if ((count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 12)) {
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
        if ((count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 12)) {
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
        if ((count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 12)) {
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
        if ((count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 12)) {
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
        if ((count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 12)) {
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
ack3 = 0; // for ack3 lost
cum1 = 0; //cummulative acknowledgement
cum2 = 0; //cummulative ack



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
    strokeWeight(0);
    fill(0);
    textSize(18);
    text('Reciever', 720, 590);
    text('Sender', 405, 590);
    textSize(20);
    text('represents a normal frame sent', 80, 225);
    text('represents a corrupted frame', 80, 275);
    text('represents a Negative ACK', 80, 325);
    text('represents an ACK', 80, 375);
    text('THE WINDOW SIZE IS', 1, 150);
    text('4', 225, 150);
    fill('blue');
    text('How many total frames are transmitted?',0,480);

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

function rectangles(a,b)
{// a is x-axis, b - width
    strokeWeight(2);
    stroke('black');
    fill('white');
    rect(a,19,b,54);
    stroke('#f9f4ef');
    fill('black');
    textSize(14);
    text('current window',a,86);
    strokeWeight(4);
    stroke('red');
}

function myInputEvent() {
  
    
    if(inp.value() != "12")
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
    if(inp.value() == "12")
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

    if (count == 4) { cnt1 = 1; }
    if (count == 5) { cnt2 = 1; }
    if (count == 6) { cnt3 = 1; }
    if (count == 7) { cnt4 = 1; }
    if (count == 8) { cnt5 = 1; }
    if (count == 12) { cnt6 = 1; }

    if (cnt1 == 1) {
        stroke('#f9f4ef');
        fill('black');
        textSize(18);
        text('1', 380, 15);
        text('2', 380, 55);
        text('3', 380, 95);
        text('4', 380, 135);
        if (x <= 7000) {
            if(cnt2!=1)
            rectangles(50,96);
            stroke('red');
            x = x + X; //400  1
            y = y + Y; //0    0.1
            if (x <= 1000) {
                line(x, y, 400, 0); //frame 1
            }

            if (cnt3 != 1) {
                line(x, y + 80, 400, 80);  //frame 3
            }
            if (cnt4 != 1) {
                line(x, y + 120, 400, 120); //frame 4
            }

            if (cnt2 != 1) {
                if (x >= 600) {
                    xx = 600;
                    yy = 20;
                } else {
                    xx = x;
                    yy = y
                }

                line(xx, yy + 40, 400, 40); //frame 2
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
                line(a, b, 800, 40); //ACK1
            }

            if (a == 400) {
                arr = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0];
                
            }
        }
    }

    //frame 5
    if (cnt2 == 1) {
        stroke('#f9f4ef');
        fill('black');
        textSize(18);
        text('5', 380, 175);
        text('N2', 770, 95);
        stroke('red');
        if (x1 <= 5000) {
            if(cnt3!=1)
            rectangles(76,94);
            x1 = x1 + X;
            y1 = y1 + Y;
            if(cnt7!=1)
            {
                line(x1, y1, 400, 160);
            }       

        }
        if (x1 <= 5000) {
            stroke(169, 169, 169);
            if (a1 >= 400) {
                a1 = a1 + A;
                b1 = b1 + B;
                line(a1, b1, 800, 80); //NAK2
            }
            if (a1 == 400) {
                arr = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0];
                text1();
            }


        }
    }
    //frame 2 again
    if (cnt3 == 1) {
        stroke('#f9f4ef');
        fill('black');
        textSize(18);
        text('2', 380, 215);
        
        stroke('red');
        if (x2 <= 5000) {
          
            x2 = x2 + X;
            y2 = y2 + Y;
            if(cnt7!=1){
                line(x2, y2 + 200, 400, 200);  
            }
           

        }
        if (x2 <=5000) {
            stroke(255, 204, 0);
            if (a3 >= 400) {
                a3 = a3 + A;
                b3 = b3 + B;
                if (a3 >= 600) {
                    aa = a3;
                    bb = b3;
                } else {
                    aa = 600;
                    bb = 140;
                }
                if (cnt4 != 1) {
                    line(aa, bb, 800, 120); //ack3 lost
                    stroke('#f9f4ef');
                    fill('black');
                    textSize(18);
                    text('3', 780, 135);
                }
             
            }
           
            if (a3 == 400) {
                ack3 =1;
                Swal.fire({
                    backdrop:false,
                   target: '#sketch-holder',
                   width:'390px',
                   position:'center',
                    customClass: {
                      container: 'position-absolute',
                      popup:"swal2-popup"
                    },
                    text:"ACK 3 not received. Retransmit the frame.",
                    });
                arr = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0];
            }
        }

    }

    //for printing lost
    if(ack3 == 1)
    {
        stroke('#f9f4ef');
        fill('red');
        textSize(18);
        text('ACK 3 lost', 700, 135);
    }

    //frame 3 again
    if (cnt4 == 1) {
        stroke('#f9f4ef');
        fill('black');
        textSize(18);
        text('3', 380, 255);
        text('4', 780, 175);
        if (x4 <= 5000) {
            stroke('red');
            x4 = x4 + X;
            y4 = y4 + Y;
            if(cnt7!=1)
            { 
                line(x4, y4 + 240, 400, 240);
            }

        }
        if (x4 <= 5000) {
            stroke(255, 204, 0);
            if (a4 >= 400) {
                a4 = a4 + A;
                b4 = b4 + B;              
                line(a4, b4, 800, 160); //ack4
                
            }
            if (a4 == 400) {
                arr = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];              
            }


        }
      
    }


//frame 6
    if (cnt5 == 1) {
        stroke('#f9f4ef');
        fill('black');
        textSize(18);
        text('6', 380, 295);
        if (x3 <= 5000) {
            stroke('red');
            x3 = x3 + X;
            y3 = y3 + Y;
            if (cum1 !=1) {
                line(x3, y3+80, 400, 280);
            }

        }
        if (x3 >= 950) {
            stroke('#f9f4ef');
            fill('black');
            textSize(18);
            text('5', 780, 215);
            text('2', 780, 255);
            text('3', 780, 295);
            text('6', 780, 335);
            stroke(255, 204, 0);
            if (a2 >= 400) 
            {
                a2 = a2 + A;
                b2 = b2 + B;
                cnt7=1;cum1=1;
                    line(a2, b2 + 120, 800, 200); //ack5
                    line(a2, b2 + 160, 800, 240); //ack2
                    line(a2, b2 + 200, 800, 280); //ack3
                    line(a2, b2 + 240, 800, 320); //ack6
           
            }

            if (a2 == 400) {
                arr = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
             
            }
        }
    }

    //frame 7,8,9,10
    if (cnt6 == 1) {
        stroke('#f9f4ef');
        fill('black');
        textSize(18);
        text('7', 380, 335);
        text('8', 380, 375);
        text('9', 380, 415);
        text('10', 375, 455);
        if (x5 <= 5000) {     
          
            stroke('red');
            x5 = x5 + X;
            y5 = y5 + Y;
            if (cum2 !=1) {
                line(x5, y5+80, 400, 320);
                line(x5, y5 + 120, 400, 360);
                line(x5, y5 + 160, 400, 400);
                line(x5, y5 + 200, 400, 440);
            }
        }
            if (x5 >= 950) {
                stroke('#f9f4ef');
                fill('black');
                text('7', 780, 375);
                text('8', 780, 415);
                text('9', 780, 455);
                text('10', 775, 495);
                stroke(255, 204, 0);
                if (a5 >= 400) 
                {
                    a5 = a5 + A;
                    b5 = b5 + B;
                    cum2=1;
                    line(a5, b5 + 80, 800, 360);
                    line(a5, b5 + 120, 800, 400);
                    line(a5, b5 + 160, 800, 440);
                    line(a5, b5 + 200, 800, 480);
                }
               
                if (a5 == 400) {
                    arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
               cnt8=1;
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