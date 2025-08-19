var x, y, xx;
var X, Y;
var flag = 0;
var inp;

function setup() {
    var canvas=createCanvas(800, 850);
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
    y1 = 200;
    a1 = 800;
    b1 = 80;
    x2 = 400;
    y2 = 240;
    a2 = 800;
    b2 = 120;
    x3 = 400;
    y3 = 80;
    a3 = 800;
    b3 = 120;
    x4 = 400;
    y4 = 280;
    a4 = 800;
    b4 = 160;
    x5 = 400;
    y5 = 320;
    a5 = 800;
    b5 = 200;
    x6 = 400;
    y6 = 360;
    a6 = 800;
    b6 = 240;
    x7 = 400;
    y7 = 200;
    a7 = 800;
    b7 = 240;
    m = 0;

    textSize(12);
    //nostroke();


    arr = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
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
    inp.position(222, 450);
    inp.size(200);
    button = createButton("Submit");
    button.position(430, 450);
    button.mousePressed(frames);
    button.style('background-color', '#bae8e8');
button.parent('sketch-holder');

button11 = createButton("Reset");
button11.parent('sketch-holder');
button11.position(222, 505);
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
   // document.querySelector(".right").style.display = "none";
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
        if ((count == 5) || (count == 6) || (count == 7) || (count == 12) || (count == 13) || (count == 14) || (count == 15) || (count == 20)) {
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
        if ((count == 5) || (count == 6) || (count == 7) || (count == 12) || (count == 13) || (count == 14) || (count == 15) || (count == 20)) {
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
        if ((count == 5) || (count == 6) || (count == 7) || (count == 12) || (count == 13) || (count == 14) || (count == 15) || (count == 20)) {
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
        if ((count == 5) || (count == 6) || (count == 7) || (count == 12) || (count == 13) || (count == 14) || (count == 15) || (count == 20)) {
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
        if ((count == 5) || (count == 6) || (count == 7) || (count == 12) || (count == 13) || (count == 14) || (count == 15) || (count == 20)) {
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
        if ((count == 5) || (count == 6) || (count == 7) || (count == 12) || (count == 13) || (count == 14) || (count == 15) || (count == 20)) {
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
        if ((count == 5) || (count == 6) || (count == 7) || (count == 12) || (count == 13) || (count == 14) || (count == 15) || (count == 20)) {
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
        if ((count == 5) || (count == 6) || (count == 7) || (count == 12) || (count == 13) || (count == 14) || (count == 15) || (count == 20)) {
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
        if ((count == 5) || (count == 6) || (count == 7) || (count == 12) || (count == 13) || (count == 14) || (count == 15) || (count == 20)) {
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
        if ((count == 5) || (count == 6) || (count == 7) || (count == 12) || (count == 13) || (count == 14) || (count == 15) || (count == 20)) {
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
c = 0
ack3 = 0;
ack6 = 0;

function coloursq1() {
    stroke('white');
    fill('red');
    square(20, 190, 35);

}

function coloursq4() {
    stroke('white');
    fill(255, 204, 0);
    square(20, 250, 35);

}

function lines() {
    strokeWeight(4);
    stroke('black');
    line(400, 0, 400, 840);
    line(799, 0, 799, 840);
}

function texts() {
    strokeWeight(1);
    fill(0);
    textSize(18);
    text('Reciever', 720, 840);
    text('Sender', 405, 840);
    strokeWeight(0);
    textSize(18);
    textSize(20);
    text('represents a normal frame sent', 65, 215);
    text('represents an ACK', 65, 275);
    text('THE WINDOW SIZE IS', 1, 145);
    text('5', 225, 145);
    fill('blue');
    text('How many total frames are transmitted?',10,360);
}

function rectangles(x,y)
{
    strokeWeight(2);
    stroke('black');
    fill('white');
    rect(x,35,y,49);
    stroke('#f9f4ef');
    fill('black');
    textSize(14);
    text('current window',x+6,98);
    strokeWeight(4);
    stroke('red');
}

function myInputEvent() {
  
    
    if(inp.value() != "20")
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
    if(inp.value() == "20")
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
        text:"Try other window size",
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

function discarded()
{
    Swal.fire({
        
        backdrop:false,
        target: '#sketch-holder',
        position:'center',
        customClass: {
          container: 'position-absolute',
          popup:"swal2-popup"
        }, 
        title:'Discarded', 
        icon:"info",
        text:'Receiver silently discards the duplicate frames.'
      
    })
}

function draw() {
    background(color('#fffffe'));
    strokeWeight(4);
    stroke('black');
    fill('white');
    square(215, 120, 35);

    coloursq1();
    coloursq4();
    texts();
    textSize(12);


    lines();
    textSize(12);
    stroke('black');
    fill(400);


    strokeWeight(4);
    stroke('black');

    if (count == 5) {
        cnt1 = 1;
    }
    if (count == 6) {
        cnt2 = 1;
    }
    if (count == 7) {
        cnt3 = 1;
    }

    if (count == 12) {
        cnt4 = 1;
    }

    if (count == 13) {
        cnt5 = 1;
    }

    if (count == 14) {
        cnt6 = 1;
    }

    if (count == 15) {
        cnt7 = 1;
    }

    if (count == 20) {
        cnt8 = 1;
    }


    if (cnt1 == 1) {
        stroke('#f9f4ef');
        fill('black');
    textSize(18);
    text('1', 380, 15);
    text('2', 380, 55);
    text('3', 380, 95);
    text('4', 380, 135);
    text('5', 380, 175);
        if (x <= 5000) {
            if(cnt2!=1)
            rectangles(64,114);
            stroke('red');
            x = x + X;
            y = y + Y;
            if (x <= 1000) {
                line(x, y, 400, 0);
            }
            if (cnt2 != 1) {
                line(x, y + 40, 400, 40);
            }
            if (cnt3 != 1) {
                line(x, y + 80, 400, 80);
            }
            if (cnt4 != 1) {
                line(x, y + 120, 400, 120);
                line(x, y + 160, 400, 160);
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
                line(a, b, 800, 40);
            }

            if (a == 400) {
                arr = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
              
            }

        }

    }

    if (cnt2 == 1) {
        stroke('#f9f4ef');
        fill('black');
        textSize(18);
        text('6', 380, 215);
        text('2', 780, 95);
        stroke('red');
        if (x1 <= 5000) {
            if(cnt3!=1)
            rectangles(88,112);
            x1 = x1 + X;
            y1 = y1 + Y;
            if (cnt4 != 1) {
                line(x1, y1, 400, 200);
            }
        }
        if (x1 <= 5000) {
            stroke(255, 204, 0);
            if (a1 >= 400) {
                a1 = a1 + A;
                b1 = b1 + B;
               // if (cnt4 != 1)
                    line(a1, b1, 800, 80);
            }
            if (a1 == 400) {
                arr = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
              
            }

        }
        //frame 7
        if (cnt3 == 1) {
            stroke('#f9f4ef');
            fill('black');
            textSize(18);
            text('7', 380, 255);
           
            stroke('red');
            if (x2 <= 5000) {
                if(cnt5!=1)
            rectangles(111,112);
                x2 = x2 + X;
                y2 = y2 + Y;
                if (cnt4 != 1) {
                    line(x2, y2, 400, 240);
                }
            }
            if (x2 <= 5000 ) {
                stroke(255, 204, 0);
                if (a2 >= 600) {
                    a2 = a2 + A;
                    b2 = b2 + B;
                }
                if (x2 <= 1000) {
                    line(a2, b2, 800, 120);
                    stroke('#f9f4ef');
                    fill('black');
                    textSize(18);
                    text('3', 780, 135);
                }
                if (x2 == 750) {
                    arr = [0, 0, 1, 1, 1, 1, 1, 0, 0, 0];
                    Swal.fire({
                        backdrop:false,
                       target: '#sketch-holder',
                       width:'370px',
                       position:'center',
                        customClass: {
                          container: 'position-absolute',
                          popup:"swal2-popup"
                        },
                        text:"ACK 3 not received. Retransmit all the frames of the current window.",
                 
                        });
                    
                   ack3=1;
                }

            }

        }
        if(ack3 == 1)
        {
            
          stroke('#f9f4ef');
          fill('red');
          textSize(18);
          text('ACK 3 lost', 693, 135);
            textSize(12);
        }

        //again 3,4,5,6,7
        if (cnt4 == 1) {
            stroke('#f9f4ef');
        fill('black');
    textSize(18);
    text('3', 380, 295);
    text('4', 380, 335);
    text('5', 380, 375);
    text('6', 380, 415);
    text('7', 380, 455);
    fill('red');
    //text('Discarded', 710, 175);
    //text('Discarded', 710, 215);
    //text('Discarded', 710, 255);
   // text('Discarded', 710, 295);
            if (x3 <= 5000) {
                stroke('red');
                x3 = x3 + X;
                y3 = y3 + Y;
                if (cnt8 != 1) {
                    if (x3 <= 1000) {
                        line(x3, y3 + 200, 400, 280);
                    }
                    if (cnt5 != 1) {
                        line(x3, y3 + 240, 400, 320);
                    }
                    if (cnt6 != 1) {
                        line(x3, y3 + 280, 400, 360);
                    }
              
                    if (cnt7 != 1) {
                        line(x3, y3 + 320, 400, 400); //6
                    }
                    if(cnt8!=1)
                    {
                        line(x3, y3 + 360, 400, 440); //7
                    }
                }
                if(x3==950)
                {
                    discarded();
                }
            }

        }
        if (x3 >= 950) {
            stroke('#f9f4ef');
            fill('black');
            textSize(18);
            text('3', 780, 335);
            stroke(255, 204, 0);
            if (a3 >= 400) {
                a3 = a3 + A;
                b3 = b3 + B;
                line(a3, b3+200, 800, 320);
            }
            if (a3 == 400) {
                arr = [0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
        
            }
        }

    }
// frame 8
    if (cnt5 == 1) {
        stroke('#f9f4ef');
        fill('black');
    textSize(18);
    text('8', 380, 495);
    text('4', 780, 375);
        stroke('red');
        if (x4 <= 5000) {
            if(cnt6!=1)
            rectangles(133.1,112);
            stroke('red');
            if (x4 <= 5000) {
                x4 = x4 + X;
                y4 = y4 + Y;
                if (cnt8 != 1)
                    line(x4, y4+200, 400, 480);
            }
        }
        if (x4 <= 5000) {    
            stroke(255, 204, 0);
            if (a4 >= 400) {
                a4 = a4 + A;
                b4 = b4 + B;
                if (cnt7 != 1) { line(a4, b4+200, 800, 360); }
            }
            if (a4 == 400) {
                arr = [0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
            
            }

        }
    }

    //frame 9
    if (cnt6 == 1) {
        stroke('#f9f4ef');
        fill('black');
    textSize(18);
    text('9', 380, 535);
    text('5', 780, 415);
        stroke('red');
        if (x5 <= 5000) {
            if(cnt7!=1)
            rectangles(155,112);
            stroke('red');
            if (x5 <= 5000) {
                x5 = x5 + X;
                y5 = y5 + Y;
                if (cnt8 != 1)
                    line(x5, y5+200, 400, 520);
            }
        }
        if (x5 <= 5000) {
            stroke(255, 204, 0);
            if (a5 >= 400) {
                a5 = a5 + A;
                b5 = b5 + B;
                if (cnt8 != 1) { line(a5, b5+200, 800, 400); } //ACK5
            }
            if (a5 == 400) {
                arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
               
            }
        }

    }

    //frame 10
    if (cnt7 == 1) {
        stroke('#f9f4ef');
        fill('black');
    textSize(18);
    text('10', 375, 575); 
   
        stroke('red');
        if (x6 <= 5000) {
            if(cnt9!=1)
            rectangles(178,127);
            stroke('red');
            if (x6 <= 5000) {
                x6 = x6 + X;
                y6 = y6 + Y;
                if (cnt8 != 1)
                    line(x6, y6+200, 400, 560);
            }
        }
        if (x6 <= 5000) {
            stroke(255, 204, 0);
            if (a6 >= 600) {
                a6 = a6 + A;
                b6 = b6 + B;
                if (x6 <= 1000) {
                 line(a6, b6+200, 800, 440); } //ACK6
                 stroke('#f9f4ef');
                 fill('black');
                 textSize(18);
                 text('6', 780, 455);
            }
            if (x6 == 750) {
                arr = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1];
                Swal.fire({
                    backdrop:false,
                   target: '#sketch-holder',
                   width:'370px',
                   position:'center',
                    customClass: {
                      container: 'position-absolute',
                      popup:"swal2-popup"
                    },
                    text:"ACK 6 not received. Retransmit all the frames of the current window.",
             
                    });
              
                ack6=1;
            }
        }
      
    }

if(ack6 == 1)
{textSize(18);
    stroke('#f9f4ef');
    fill('red');
    text(' ACK 6 lost',700, 455);
    
}
    //frame 6,7,8,9,10
    if (cnt8 == 1) {
        stroke('#f9f4ef');
        fill('red');
       // text('Discarded', 710, 495);
   // text('Discarded', 710, 535);
   // text('Discarded', 710, 575);
   // text('Discarded', 710, 615);
        fill('black');
        textSize(18);
        text('6', 380, 615);
        text('7', 380, 655); 
        text('8', 380, 695); 
        text('9', 380, 735); 
        text('10', 375, 775);  
        
        if (x7 <= 1000) {
            stroke('red');
            x7 = x7 + X;
            y7 = y7 + Y;
            line(x7, y7 + 400, 400, 600);
            line(x7, y7 + 440, 400, 640);
            line(x7, y7 + 480, 400, 680);
            line(x7, y7 + 520, 400, 720);
            line(x7, y7 + 560, 400, 760);
if(x7==940)
{
discarded();
}

        }
        if (x7 >= 950) {
            stroke('#f9f4ef');
            fill('black');
            textSize(18);
            text('6', 780, 655);
            text('7', 780, 695);
            text('8', 780, 735);
            text('9', 780, 775);
            text('10', 775, 815);
            stroke(255, 204, 0);
            a7 = a7 + A;
            b7 = b7 + B;
            if (a7 >= 400) {
                line(a7, b7+400, 800, 640);
                line(a7, b7 + 440, 800, 680);
                line(a7, b7 + 480, 800, 720);
                line(a7, b7 + 520, 800, 760);
                line(a7, b7 + 560, 800, 800);
            }
        }

        if (a7 == 400) {
            arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            cnt9=1;
            Swal.fire({
        
                backdrop:false,
                target: '#sketch-holder',
                width:'390px',
                position:'center',
                customClass: {
                  container: 'position-absolute',
                  popup:"swal2-popup"
                },  
                icon:"info",
                text:'Input the total numbers of frames transmitted.'
              
            })
            button.mousePressed(myInputEvent);
        }

    }



};