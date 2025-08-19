//Get the modal
var modal = document.getElementById("myModal")


//Get the button that open the modal
var btn = document.getElementById("myBtn");

//Get the <span> element that close the modal
var span = document.getElementsByClassName("close")[0];

//when user click the button,open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

//when the user click on span(❌),close the modal
span.onclick = function() {
    modal.style.display = "none";
}

//when the user clicks anywhere outside of the modal,close it
window.onclick = function(event) {
    if (event.target ==modal){
        modal.style.display = "none";
    }
    }

    tippy('#D1',{
        content:'<b style="color:orange">MAC Address - </b> 70:B1:DE:F3:OC:FA',
        allowHTML:true,
        placement:'bottom-end'
    });

    tippy('#D2',{
        content:'<b style="color:orange">MAC Address - </b> A7:DB:B2:EC:41:39',
        allowHTML:true,
        placement:'bottom-end'
    });

    tippy('#D3',{
        content:'<b style="color:orange">MAC Address - </b> B4:46:3A:33:8F:A4',
        allowHTML:true,
        placement:'bottom-end'
    });

    tippy('#D4',{
        content:'<b style="color:orange">MAC Address - </b> 9E:E4:F9:3E:4A:8C',
        allowHTML:true,
        placement:' bottom-right'
    });

    tippy('#D5',{
        content:'<b style="color:orange">MAC Address - </b> FD:39:3B:EC:9A:4D',
        allowHTML:true,
        placement:'bottom-right'
    });
    
    tippy('#D6',{
        content:'<b style="color:orange">MAC Address - </b> AB:E3:9F:84:EC:5A',
        allowHTML:true,
        placement:'bottom-right'
    });

    tippy('#s_img_1',{
      content: '<b style="color:orange">MAC Address - </b> 00:1B:2F:AA:34:56 <br><br>\
      <table border="3px" style="width:50%;border-color:white"> \
      <caption style="color:orange">MAC Address Table</Caption>\
        <tr>\
          <th> S.No.</th>\
          <th>MAC Address</th>\
          <th>Type</th>\
          <th>Port</th>\
          </tr>\
          <tr> \
            <td>1.</td>\
            <td>70:B1:DE:F3:OC:FA</td>\
            <td>Dynamic</td>\
            <td>1</td>\
          </tr>\
          <tr>\
           <td>2.</td>\
            <td> 00:25:45:EF:12:90</td>\
            <td>Dynamic</td>\
            <td>5</td>\
          </tr>\
          <tr> \
      </table>',
      allowHTML:true,
      placement:'bottom-left'
    });

    tippy('#s_img_2',{
      content: '<b style="color:orange">MAC Address - </b> 00:23:04:CD:89:AB <br><br>\
      <table border="3px" style="width:50%;border-color:white"> \
      <caption style="color:orange">MAC Address Table</Caption>\
        <tr>\
          <th> S.No.</th>\
          <th>MAC Address</th>\
          <th>Type</th>\
          <th>Port</th>\
          </tr>\
          <tr> \
            <td>1.</td>\
            <td>B4:46:3A:33:8F:A4</td>\
            <td>Dynamic</td>\
            <td>3</td>\
          </tr>\
          <tr>\
           <td>2.</td>\
            <td> 00:25:45:EF:12:90</td>\
            <td>Dynamic</td>\
            <td>5</td>\
          </tr>\
      </table>',
      allowHTML:true,
      placement:'bottom-left-end'
    });

    tippy('#s_img_3',{
      content: '<b style="color:orange">MAC Address - </b>	00:25:45:EF:12:90 <br><br>\
      <table border="3px" style="width:50%;border-color:white"> \
      <caption style="color:orange">MAC Address Table</Caption>\
        <tr>\
          <th> S.No.</th>\
          <th>MAC Address</th>\
          <th>Type</th>\
          <th>Port</th>\
          </tr>\
          <tr> \
            <td>1.</td>\
            <td>A7:DB:B2:EC:41:39</td>\
            <td>Dynamic</td>\
            <td>2</td>\
             </tr>\
             <tr> \
            <td>2.</td>\
            <td> 00:23:04:CD:89:AB</td>\
            <td>Dynamic</td>\
            <td>3</td>\
             </tr>\
            <tr> \
            <td>3.</td>\
            <td> F8:66:F2:9B:10:01</td>\
            <td>Dynamic</td>\
            <td>4</td>\
             </tr>\
            <tr>\
            <td>4.</td>\
            <td>FD:39:3B:EC:9A:4D</td>\
            <td>Dynamic</td>\
            <td>5</td>\
            </tr>\
             <tr>\
            <td>5.</td>\
            <td>	00:1B:2F:AA:34:56</td>\
            <td>Dynamic</td>\
            <td>1</td>\
             </tr>\
             <tr>\
            <td>6.</td>\
            <td> 3C:CE:73:76:54:32	</td>\
            <td>Dynamic</td>\
            <td>6</td>\
             </tr>\
            </table>',
            allowHTML:true,
            placement:'bottom-left-center'
          });

tippy('#s_img_4',{
      content: '<b style="color:orange">MAC Address - </b>	F8:66:F2:9B:10:01 <br><br>\
      <table border="3px" style="width:50%;border-color:white"> \
      <caption style="color:orange">MAC Address Table</Caption>\
        <tr>\
          <th> S.No.</th>\
          <th>MAC Address</th>\
          <th>Type</th>\
          <th>Port</th>\
          </tr>\
          <tr> \
            <td>1.</td>\
            <td>9E:E4:F9:3E:4A:8C</td>\
            <td>Dynamic</td>\
            <td>4</td>\
          </tr>\
          <tr> \
            <td>2.</td>\
            <td> 00:25:45:EF:12:90</td>\
            <td>Dynamic</td>\
            <td>1</td>\
          </tr>\
      </table>',
      allowHTML:true,
      placement:'bottom-right-center'
    });

tippy('#s_img_5',{
      content:'<b style="color:orange">MAC Address - </b> 3C:CE:73:76:54:32 <br><br>\
       <table border="3px" style="width:50%;border-color:white"> \
      <caption style="color:orange">MAC Address Table</Caption>\
        <tr>\
          <th>S.No.</th>\
          <th>MAC Address</th>\
          <th>Type</th>\
          <th>Port</th>\
          </tr>\
          <tr>\
            <td>1.</td>\
            <td>AB:E3:9F:84:EC:5A</td>\
            <td>Dynamic</td>\
            <td>5</td>\
          </tr>\
         <tr> \
            <td>2.</td>\
            <td> 00:25:45:EF:12:90</td>\
            <td>Dynamic</td>\
            <td>1</td>\
          </tr>\
           </table>',
      allowHTML:true,
      placement:'center-right-center'
    });

function start(){
{
  document.getElementById('start').disabled=true;
  return (async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Initiate a Request',
      target: '.main-box ',
      customClass:{
        container:"position-absolute",
        popup:"swal-popup",
      },
      confirmButtonText:'Submit',
      html:
        `<label for="device1" class="label">Select Sender:</label><br>
        <select id="device1" class="swal2-input" style="width:200px">
          <option value="" disabled selected>Device</option>
          <option value="Device 1">Device 1</option>
          <option value="Device 2">Device 2</option>
          <option value="Device 3">Device 3</option>
          <option value="Device 4">Device 4</option>
          <option value="Device 5">Device 5</option>
          <option value="Device 6">Device 6</option>
        </select><br><br>
        <label for="device2" class="label">Select Receiver:</label><br>
        <select id="device2" class="swal2-input" style="width:200px">
          <option value="" disabled selected>Device</option>
          <option value="Device 1">Device 1</option>
          <option value="Device 2">Device 2</option>
          <option value="Device 3">Device 3</option>
          <option value="Device 4">Device 4</option>
          <option value="Device 5">Device 5</option>
          <option value="Device 6">Device 6</option>
        </select>`,
      focusConfirm: false,
      allowOutsideClick:false,
      preConfirm: () => {
        const sender = document.getElementById('device1').value;
        const receiver = document.getElementById('device2').value;
        if (!sender || !receiver) {
          Swal.showValidationMessage('Please select both Sender and Receiver');
          return false;
        }
        else if(sender==receiver)
        {
          Swal.showValidationMessage('Sender and Receiver can\'t be same');
          return false;
        }
        document.getElementById('phase').style.visibility='visible'
        return { sender: sender, receiver: receiver };
      } 
    }) ;

  if (formValues) {
    console.log('Sender:', formValues.sender);
    console.log('Receiver:', formValues.receiver);
  } 
  

  //device 1----device 4
    if((formValues.sender=="Device 1" && formValues.receiver=="Device 4") ||
    (formValues.sender=="Device 4" && formValues.receiver=="Device 1"))
     {
      if(formValues.sender=="Device 1" && formValues.receiver=="Device 4")
      {
        speak('Device 1 initiates a connection to Device 4. The request passes through intermediate switches, which only know their immediate neighbors.')

        setTimeout(() => {
        document.getElementById("hr1").classList.add('move_L_R');
        }, 2000); 
        
        setTimeout(() => {
        document.getElementById("hr4").classList.add('move_L_R');
        }, 4000);  

        setTimeout(() => {
        document.getElementById("hr5").classList.add('move_L_R');
        }, 6000); 

        setTimeout(() => {
        document.getElementById("hr8").classList.add('move_L_R');
        }, 8000);  

        setTimeout(() => {
         //send acknowledgement
        speak('Once the destination is found, an acknowledgment is sent back. Each switch reserves the path for exclusive communication.')
        }, 10000);  


        setTimeout(() => {
        document.getElementById("hr8").classList.remove('move_L_R');
        document.getElementById("hr8").classList.add('connection_R_L');
        }, 12000); 
        
        setTimeout(() => { 
          document.getElementById("hr5").classList.remove('move_L_R');
          document.getElementById("hr5").classList.add('connection_R_L');
        }, 14000);  

        setTimeout(() => {
         document.getElementById("hr4").classList.remove('move_L_R');
         document.getElementById("hr4").classList.add('connection_R_L');
        }, 16000); 

        setTimeout(() => {
           document.getElementById("hr1").classList.remove('move_L_R');
           document.getElementById("hr1").classList.add('connection_R_L');
        }, 18000); 

        

        setTimeout(() => {
        
        // ALERT-CONNECTION ESTABLISH
        Swal.fire({
              title: "Connection Established!!",
              html: `A dedicated path is set up between ${formValues.sender} and ${formValues.receiver}. The actual data is sent over this reserved path.`,
              icon: "success",
              target: '.main-box ',
              customClass:{
                container:"position-absolute",
                popup:"swal-popup",
              },   
          }).then((result) => {
              if (result.isConfirmed) {
                document.getElementById("phase").innerText="Phase 2: Data Transmission"
                  document.getElementById("P1").style.display='inline';

                  speak('Now, the data transmission begins. The path remains reserved for Device 1 and 4 for the entire duration of the session.');

                  //data-packet sent
                setTimeout(() => {
                  myMove_D1_S1("P1")
                  }, 1000); 

                setTimeout(() => {
                  myMove_S1_S3("P1")
                  }, 3000); 

                setTimeout(() => {
                  myMove_S3_S4("P1")
                  }, 5000); 

                setTimeout(() => {
                  myMove_S4_D4("P1")
                  }, 7000);

                  //ALERT DATA received
                  setTimeout(() => {
                  Swal.fire({
                    title: "Data Received!!", 
                    html: `The data has been received by ${formValues.receiver}.`,  
                    icon: "success",
                    target: '.main-box ',
                    customClass:{
                      container:"position-absolute",
                      popup:"swal-popup",
                    },
                }).then((result) => {
                    if (result.isConfirmed) {
                      document.getElementById("phase").innerText="Phase 3: Connection Termination"
                        remove("P1");

                        speak('When communication ends, the circuit is released, making the links available for other users.')

                      //connection-terminated
                      setTimeout(() => {
                     document.getElementById("hr8").classList.remove('connection_R_L');
                       document.getElementById("hr8").classList.add('terminate_R_L');
                      }, 1000);
                      
                      setTimeout(() => {
                          document.getElementById("hr8").classList.remove('terminate_R_L');
                          document.getElementById("hr8").style.border='2px dashed black';
                           document.getElementById("hr5").classList.remove('connection_R_L');
                          document.getElementById("hr5").classList.add('terminate_R_L');                
                      }, 3000);

                      setTimeout(() => {
                          document.getElementById("hr5").classList.remove('terminate_R_L');
                          document.getElementById("hr5").style.border='2px dashed black';
                          document.getElementById("hr4").classList.remove('connection_R_L');
                          document.getElementById("hr4").classList.add('terminate_R_L');                   
                      }, 5000);

                      setTimeout(() => {
                         document.getElementById("hr4").classList.remove('terminate_R_L');
                         document.getElementById("hr4").style.border='2px dashed black';
                         
                      document.getElementById("hr1").classList.remove('connection_R_L');
                        document.getElementById("hr1").classList.add('terminate_R_L');
                    
                      }, 7000);

                       setTimeout(() => {
                          document.getElementById("hr1").classList.remove('terminate_R_L');
                          document.getElementById("hr1").style.border='2px dashed black';
                      }, 9000);
               

                      //ALERT TERMINATE
                      setTimeout(() =>
                      {
                        alert_terminate(formValues.sender,formValues.receiver);
                        document.getElementById('start').disabled=false;
                      },10000);
                    }
                });
                  }, 11000);

                        }
                    });
                }, 23000);

              }

     //  device4-----device1
      else{ 
         speak('Device 4 initiates a connection to Device 1. The request passes through intermediate switches, which only know their immediate neighbors.')

        setTimeout(() => {
        document.getElementById("hr8").classList.add('move_R_L');
        }, 2000);  

        setTimeout(() => {
        document.getElementById("hr5").classList.add('move_R_L');
        }, 4000);  

        setTimeout(() => {
        document.getElementById("hr4").classList.add('move_R_L');
        }, 6000); 

        setTimeout(() => {
        document.getElementById("hr1").classList.add('move_R_L');
        }, 8000);  


         setTimeout(() => {
          // send acknowledgement
           speak('Once the destination is found, an acknowledgment is sent back. Each switch reserves the path for exclusive communication.')
          }, 10000);  

          setTimeout(() => {
          document.getElementById("hr1").classList.remove('move_R_L');
          document.getElementById("hr1").classList.add('connection_R_L');
          }, 12000); 

          setTimeout(() => {
          document.getElementById("hr4").classList.remove('move_R_L');
          document.getElementById("hr4").classList.add('connection_R_L');
          }, 14000); 

           setTimeout(() => {
          document.getElementById("hr5").classList.remove('move_R_L');
          document.getElementById("hr5").classList.add('connection_R_L');
          }, 16000); 

           setTimeout(() => {
          document.getElementById("hr8").classList.remove('move_R_L');
          document.getElementById("hr8").classList.add('connection_R_L');
          }, 18000); 

           setTimeout(() => {

        // ALERT-CONNECTION ESTABLISH
        Swal.fire({
              title: "Connection established!!",
              html: `A dedicated path is set up between ${formValues.sender} and ${formValues.receiver}. The actual data is sent over this reserved path.`, 
              icon: "success",
              target: '.main-box ',
              customClass:{
                container:"position-absolute",
                popup:"swal-popup",
              },
          }).then((result) => {
              if (result.isConfirmed) {
                document.getElementById("phase").innerText="Phase 2: Data Transmission"
                  document.getElementById("P4").style.display='inline';

         speak('Now, the data transmission begins. The path remains reserved for Device 4 and 1 for the entire duration of the session.');

        //data-packet sent
                setTimeout(() => {
                  myMove_D4_S4("P4") 
                  }, 1000); 

                setTimeout(() => {
                  myMove_S4_S3("P4")
                  }, 4500); 

                setTimeout(() => {
                  myMove_S3_S1("P4")
                  }, 7500); 
                  setTimeout(() => {
                  myMove_S1_D1("P4")
                  }, 11500);

                  //ALERT DATA received
                  setTimeout(() => {
                  Swal.fire({
                    title: "Data Received!!",
                    html: `The data has been received by ${formValues.receiver}.`,
                    icon: "success",
                    target: '.main-box ',
                    customClass:{
                      container:"position-absolute",
                      popup:"swal-popup",
                    },
                }).then((result) => {
                    if (result.isConfirmed) {
                      document.getElementById("phase").innerText="Phase 3: Connection Termination"
                        remove("P4") 
                        
                         speak('When communication ends, the circuit is released, making the links available for other users.')

                      //connection-terminated
                      setTimeout(() => {
                      document.getElementById("hr1").classList.remove('connection_R_L');
                     document.getElementById("hr1").classList.add('terminate_L_R');
                      }, 1000);
                      
                      setTimeout(() => {
                        document.getElementById("hr1").classList.remove('terminate_L_R');
                        document.getElementById("hr1").style.border='2px dashed black';
                        document.getElementById("hr4").classList.remove('connection_R_L');
                        document.getElementById("hr4").classList.add('terminate_L_R');
                      }, 3000);

                      setTimeout(() => {  
                        document.getElementById("hr4").classList.remove('terminate_L_R');
                        document.getElementById("hr4").style.border='2px dashed black';
                         document.getElementById("hr5").classList.remove('connection_R_L');
                       document.getElementById("hr5").classList.add('terminate_L_R');
                      }, 5000);

                      setTimeout(() => {
                          
                        document.getElementById("hr5").classList.remove('terminate_L_R');
                        document.getElementById("hr5").style.border='2px dashed black';
                        document.getElementById("hr8").classList.remove('connection_R_L');
                        document.getElementById("hr8").classList.add('terminate_L_R');
                      }, 7000);

                      setTimeout(() => {      
                        document.getElementById("hr8").classList.remove('terminate_L_R');
                        document.getElementById("hr8").style.border='2px dashed black';
                      }, 9000);


                    //ALERT TERMINATE
                      setTimeout(() =>
                      {
                        alert_terminate(formValues.sender,formValues.receiver);
                        document.getElementById('start').disabled=false;
                      },10000);
                    }
                 });
                   }, 15500);

                          }
                    });
                  
                }, 22000);
              }
    }
  
  
    //  Device1-----device5
    else if((formValues.sender=="Device 1" && formValues.receiver=="Device 5") || 
      (formValues.sender=="Device 5" && formValues.receiver=="Device 1"))
      {
        if(formValues.sender=="Device 1" && formValues.receiver=="Device 5")
        {
          speak('Device 1 initiates a connection to Device 5. The request passes through intermediate switches, which only know their immediate neighbors.')

        setTimeout(() =>{
        document.getElementById("hr1").classList.add('move_L_R');
        },2000);
        

        setTimeout(() =>{
        document.getElementById("hr4").classList.add('move_L_R');
        },4000);
        
        setTimeout(() =>{
        document.getElementById("hr9").classList.add('move_L_R');
        },6000);

        setTimeout(() =>{
            // send acknowledgement
             speak('Once the destination is found, an acknowledgment is sent back. Each switch reserves the path for exclusive communication.')
        },12000);

          setTimeout(() =>{ 
          document.getElementById("hr9").classList.remove('move_L_R');
          document.getElementById("hr9").classList.add('connection_R_L');
            },13000);

             setTimeout(() =>{ 
          document.getElementById("hr4").classList.remove('move_L_R');
          document.getElementById("hr4").classList.add('connection_R_L');
            },15000);

              setTimeout(() =>{ 
          document.getElementById("hr1").classList.remove('move_L_R');
          document.getElementById("hr1").classList.add('connection_R_L');
            },17000);

         
         setTimeout(() =>{ 
        // ALERT-CONNECTION ESTABLISH
          Swal.fire({
                title: "Connection established!!",
                html: `A dedicated path is set up between ${formValues.sender} and ${formValues.receiver}. The actual data is sent over this reserved path.`,
                icon: "success",
                target: '.main-box ',
                customClass:{
                  container:"position-absolute",
                  popup:"swal-popup",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                  document.getElementById("phase").innerText="Phase 2: Data Transmission"
                  document.getElementById("P1").style.display='inline';

                  speak('Now, the data transmission begins. The path remains reserved for Device 1 and 5 for the entire duration of the session.');

                  //data-packet sent
                  setTimeout(() => {
                    myMove_D1_S1("P1")
                    }, 1000);   
                  setTimeout(() => {
                    myMove_S1_S3("P1")
                    }, 3000);   
                  setTimeout(() => {
                    myMove_S3_D5("P1")
                    }, 6000);   
                    
                    //ALERT PACKET received
                    setTimeout(() => {
                    Swal.fire({
                      title: "Data Received!!",
                      html: `The data has been received by ${formValues.receiver}.`,
                      icon: "success",
                      target: '.main-box ',
                      customClass:{
                      container:"position-absolute",
                      popup:"swal-popup",
                        },
                  }).then((result) => {
                      if (result.isConfirmed) {
                        document.getElementById("phase").innerText="Phase 3: Connection Termination"
                          remove("P1")
                      
                          speak('When communication ends, the circuit is released, making the links available for other users.')

                  // connection terminate
                       setTimeout(() =>{
                      document.getElementById("hr9").classList.remove('connection_R_L');
                      document.getElementById("hr9").classList.add('terminate_R_L');
                     },1000);

                  setTimeout(() =>{
                document.getElementById("hr9").classList.remove('terminate_R_L');  
                document.getElementById("hr9").style.border='2px dashed black';
                document.getElementById("hr4").classList.remove('connection_R_L');
                document.getElementById("hr4").classList.add('terminate_R_L');
                  },3000);

                  setTimeout(() =>{
                document.getElementById("hr4").classList.remove('terminate_R_L');  
                document.getElementById("hr4").style.border='2px dashed black';
                document.getElementById("hr1").classList.remove('connection_R_L');
                document.getElementById("hr1").classList.add('terminate_R_L');
                  },5000);

                  setTimeout(() =>{
                document.getElementById("hr1").classList.remove('terminate_R_L');  
                document.getElementById("hr1").style.border='2px dashed black';
                   },7000);

                  // ALERT TERMINATE
                setTimeout(() =>
                {
                alert_terminate(formValues.sender,formValues.receiver);
                document.getElementById('start').disabled=false;
                  },9000);
                }
              });
                    }, 14000); //packet end

                          }
                      });
                  }, 
                24000);
          }

       // Device5-------device1
        else{
        speak('device 5 initiates a connection to device 1. The request passes through intermediate switches, which only know their intermediate neighbors')
          
            setTimeout(() => {
              document.getElementById("hr9").classList.add('move_R_L');            
            }, 2000);  

            setTimeout(() => {
            document.getElementById("hr4").classList.add('move_R_L');
            }, 4000); 

            setTimeout(() => {
            document.getElementById("hr1").classList.add('move_R_L');
            },6000);

            setTimeout(() => {
            // send acknowledgement
            speak('once the destination is found, an acknowledgement is sent back. Each switch reserves the path for exclusive communication')
             },12000);

          setTimeout(() =>{ 
          document.getElementById("hr1").classList.remove('move_R_L');
          document.getElementById("hr1").classList.add('connection_L_R');
            },13000);

          setTimeout(() =>{ 
          document.getElementById("hr4").classList.remove('move_R_L');
          document.getElementById("hr4").classList.add('connection_L_R');
            },15000);

          setTimeout(() =>{ 
          document.getElementById("hr9").classList.remove('move_R_L');
          document.getElementById("hr9").classList.add('connection_L_R');
            },17000);

          setTimeout(() =>{ 
        // ALERT-CONNECTION ESTABLISH
          Swal.fire({
                title: "Connection established!!",
                html: `A dedicated path is set up between ${formValues.sender} and ${formValues.receiver}. The actual data is sent over this reserved path.`,
                icon: "success",
                target: '.main-box ',
                customClass:{
                container:"position-absolute",
                popup:"swal-popup",
                  },
            }).then((result) => {
                if (result.isConfirmed) {
                  document.getElementById("phase").innerText="Phase 2: Data Transmission"
                    document.getElementById("P5").style.display='inline';
                    
                    speak('Now, the data transmission begins. The path remains reserved for Device5 and 1 for the entire duration of the session');
                    //data-packet sent
                    setTimeout(() => {
                    myMove_D5_S3("P5")
                    }, 1000); 

                    setTimeout(() => {
                     remove("P5")
                    document.getElementById("P4").style.display='inline';
                    myMove_S3_S1("P4")
                    }, 6000); 

                    setTimeout(() => {
                    myMove_S1_D1("P4")
                    }, 9000);
                    //ALERT PACKET received
                    setTimeout(() => {
                    Swal.fire({
                      title: "Data Received!!",
                      html: `The data has been received by ${formValues.receiver}.`,
                      icon: "success",
                      target: '.main-box ',
                      customClass:{
                        container:"position-absolute",
                        popup:"swal-popup",
                      },
                  }).then((result) => {
                      if (result.isConfirmed) {
                          document.getElementById("phase").innerText="Phase 3: Connection Termination"
                          remove("P4")
                       
                          speak('when communication ends, the circuit is released, making the links available for other users.' )
                        //connection-terminated
                        setTimeout(() => {
                        document.getElementById("hr1").classList.remove('connection_L_R');
                        document.getElementById("hr1").classList.add('terminate_L_R');

                     
                        }, 3000);

                        setTimeout(() => {
                        document.getElementById("hr1").classList.remove('terminate_L_R');
                        document.getElementById("hr1").style.boarder='2px  dashed black';
                        document.getElementById("hr4").classList.remove('connection_L_R');
                        document.getElementById("hr4").classList.add('terminate_L_R');
                        }, 5000);

                        setTimeout(() => {
                        document.getElementById("hr4").classList.remove('terminate_L_R');
                        document.getElementById("hr4").style.boarder='2px  dashed black';
                        document.getElementById("hr9").classList.remove('connection_L_R');
                        document.getElementById("hr9").classList.add('terminate_L_R');
                        },7000);

                        setTimeout(() => {
                        document.getElementById("hr9").classList.remove('terminate_L_R');
                        document.getElementById("hr9").style.boarder='2px  dashed black';
                         },9000);

                      //ALERT TERMINATE
                        setTimeout(() =>
                        {
                          alert_terminate(formValues.sender,formValues.receiver);
                          document.getElementById('start').disabled=false;
                        },10000);
                      }

                      });
                    }, 13000);

                          }
                      });
                  }, 
                  22000);
          } 

      }
    
// d1-6
    else if((formValues.sender=="Device 1" && formValues.receiver=="Device 6") ||
    (formValues.sender=="Device 6" && formValues.receiver=="Device 1"))
     {
      if(formValues.sender=="Device 1" && formValues.receiver=="Device 6")
      {
        speak('Device 1 initiates a connection to Device 6. The request passes through intermediate switches, which only know their immediate neighbors.')

        setTimeout(() => {
        document.getElementById("hr1").classList.add('move_L_R');
        }, 2000); 
        
        setTimeout(() => {
        document.getElementById("hr4").classList.add('move_L_R');
        }, 4000);  

        setTimeout(() => {
        document.getElementById("hr7").classList.add('move_L_R');
        }, 6000); 

        setTimeout(() => {
        document.getElementById("hr10").classList.add('move_L_R');
        }, 8000);  

        setTimeout(() => {
         //send acknowledgement
        speak('Once the destination is found, an acknowledgment is sent back. Each switch reserves the path for exclusive communication.')
        }, 10000);  


        setTimeout(() => {
        document.getElementById("hr10").classList.remove('move_L_R');
        document.getElementById("hr10").classList.add('connection_R_L');
        }, 12000); 
        
        setTimeout(() => { 
          document.getElementById("hr7").classList.remove('move_L_R');
          document.getElementById("hr7").classList.add('connection_R_L');
        }, 14000);  

        setTimeout(() => {
         document.getElementById("hr4").classList.remove('move_L_R');
         document.getElementById("hr4").classList.add('connection_R_L');
        }, 16000); 

        setTimeout(() => {
           document.getElementById("hr1").classList.remove('move_L_R');
           document.getElementById("hr1").classList.add('connection_R_L');
        }, 18000); 

        

        setTimeout(() => {
        
        // ALERT-CONNECTION ESTABLISH
        Swal.fire({
              title: "Connection Established!!",
              html: `A dedicated path is set up between ${formValues.sender} and ${formValues.receiver}. The actual data is sent over this reserved path.`,
              icon: "success",
              target: '.main-box ',
              customClass:{
                container:"position-absolute",
                popup:"swal-popup",
              },   
          }).then((result) => {
              if (result.isConfirmed) {
                document.getElementById("phase").innerText="Phase 2: Data Transmission"
                  document.getElementById("P1").style.display='inline';

                  speak('Now, the data transmission begins. The path remains reserved for Device 1 and 6 for the entire duration of the session.');

                  //data-packet sent
                    setTimeout(() => {
                    myMove_D1_S1("P1")
                    }, 1000);   
                  setTimeout(() => {
                    myMove_S1_S3("P1")
                    }, 3000);   
                  setTimeout(() => {
                    myMove_S3_S5("P1")
                    }, 5000);   
                  setTimeout(() => {
                    myMove_S5_D6("P1")
                    }, 8000);   
                
                
                  //ALERT DATA received
                  setTimeout(() => {
                  Swal.fire({
                    title: "Data Received!!", 
                    html: `The data has been received by ${formValues.receiver}.`,  
                    icon: "success",
                    target: '.main-box ',
                    customClass:{
                      container:"position-absolute",
                      popup:"swal-popup",
                    },
                }).then((result) => {
                    if (result.isConfirmed) {
                      document.getElementById("phase").innerText="Phase 3: Connection Termination"
                        remove("P1");

                        speak('When communication ends, the circuit is released, making the links available for other users.')

                      //connection-terminated
                      setTimeout(() => {
                     document.getElementById("hr10").classList.remove('connection_R_L');
                       document.getElementById("hr10").classList.add('terminate_R_L');
                      }, 1000);
                      
                      setTimeout(() => {
                          document.getElementById("hr10").classList.remove('terminate_R_L');
                          document.getElementById("hr10").style.border='2px dashed black';
                           document.getElementById("hr7").classList.remove('connection_R_L');
                          document.getElementById("hr7").classList.add('terminate_R_L');                
                      }, 3000);

                      setTimeout(() => {
                          document.getElementById("hr7").classList.remove('terminate_R_L');
                          document.getElementById("hr7").style.border='2px dashed black';
                          document.getElementById("hr4").classList.remove('connection_R_L');
                          document.getElementById("hr4").classList.add('terminate_R_L');                   
                      }, 5000);

                      setTimeout(() => {
                         document.getElementById("hr4").classList.remove('terminate_R_L');
                         document.getElementById("hr4").style.border='2px dashed black';
                         
                      document.getElementById("hr1").classList.remove('connection_R_L');
                        document.getElementById("hr1").classList.add('terminate_R_L');
                    
                      }, 7000);

                       setTimeout(() => {
                          document.getElementById("hr1").classList.remove('terminate_R_L');
                          document.getElementById("hr1").style.border='2px dashed black';
                      }, 9000);
               

                      //ALERT TERMINATE
                      setTimeout(() =>
                      {
                        alert_terminate(formValues.sender,formValues.receiver);
                        document.getElementById('start').disabled=false;
                      },10000);
                    }
                });
                  }, 11000);

                        }
                    });
                }, 24000);

              }

 // d6-d1
         else{ 
         speak('Device 6 initiates a connection to Device 1. The request passes through intermediate switches, which only know their immediate neighbors.')

        setTimeout(() => {
        document.getElementById("hr10").classList.add('move_R_L');
        }, 2000);  

        setTimeout(() => {
        document.getElementById("hr7").classList.add('move_R_L');
        }, 4000);  

        setTimeout(() => {
        document.getElementById("hr4").classList.add('move_R_L');
        }, 6000); 

        setTimeout(() => {
        document.getElementById("hr1").classList.add('move_R_L');
        }, 8000);  


         setTimeout(() => {
          // send acknowledgement
           speak('Once the destination is found, an acknowledgment is sent back. Each switch reserves the path for exclusive communication.')
          }, 12000);  

          setTimeout(() => {
          document.getElementById("hr1").classList.remove('move_R_L');
          document.getElementById("hr1").classList.add('connection_L_R');
          }, 14000); 

          setTimeout(() => {
          document.getElementById("hr4").classList.remove('move_R_L');
          document.getElementById("hr4").classList.add('connection_L_R');
          }, 16000); 

           setTimeout(() => {
          document.getElementById("hr7").classList.remove('move_R_L');
          document.getElementById("hr7").classList.add('connection_L_R');
          }, 18000); 

           setTimeout(() => {
          document.getElementById("hr10").classList.remove('move_R_L');
          document.getElementById("hr10").classList.add('connection_L_R');
          }, 20000); 

           setTimeout(() => {

        // ALERT-CONNECTION ESTABLISH
        Swal.fire({
              title: "Connection established!!",
              html: `A dedicated path is set up between ${formValues.sender} and ${formValues.receiver}. The actual data is sent over this reserved path.`, 
              icon: "success",
              target: '.main-box ',
              customClass:{
                container:"position-absolute",
                popup:"swal-popup",
              },
          }).then((result) => {
              if (result.isConfirmed) {
                document.getElementById("phase").innerText="Phase 2: Data Transmission"
                  document.getElementById("P6").style.display='inline';

         speak('Now, the data transmission begins. The path remains reserved for Device 6 and 1 for the entire duration of the session.');

        //data-packet sent
                    setTimeout(() => {
                myMove_D6_S5("P6")
                }, 1000); 

                setTimeout(() => {
                myMove_S5_S3("P6")
                }, 4000); 

                setTimeout(() => {
                remove("P6")
                document.getElementById("P4").style.display='inline'; 
                myMove_S3_S1("P4")
                }, 7000);

                setTimeout(() => {
                myMove_S1_D1("P4")
                }, 10000);

                  //ALERT DATA received
                  setTimeout(() => {
                  Swal.fire({
                    title: "Data Received!!",
                    html: `The data has been received by ${formValues.receiver}.`,
                    icon: "success",
                    target: '.main-box ',
                    customClass:{
                      container:"position-absolute",
                      popup:"swal-popup",
                    },
                }).then((result) => {
                    if (result.isConfirmed) {
                      document.getElementById("phase").innerText="Phase 3: Connection Termination"
                        remove("P4") 
                        
                         speak('When communication ends, the circuit is released, making the links available for other users.')

                      //connection-terminated-animation

                      setTimeout(() => {
                      document.getElementById("hr1").classList.remove('connection_L_R');
                     document.getElementById("hr1").classList.add('terminate_L_R');
                      }, 1000);
                      
                      setTimeout(() => {
                        document.getElementById("hr1").classList.remove('terminate_L_R');
                        document.getElementById("hr1").style.border='2px dashed black';
                        document.getElementById("hr4").classList.remove('connection_L_R');
                        document.getElementById("hr4").classList.add('terminate_L_R');
                      }, 3000);

                      setTimeout(() => {  
                        document.getElementById("hr4").classList.remove('terminate_L_R');
                        document.getElementById("hr4").style.border='2px dashed black';
                         document.getElementById("hr7").classList.remove('connection_L_R');
                       document.getElementById("hr7").classList.add('terminate_L_R');
                      }, 5000);

                      setTimeout(() => {
                          
                        document.getElementById("hr7").classList.remove('terminate_L_R');
                        document.getElementById("hr7").style.border='2px dashed black';
                        document.getElementById("hr10").classList.remove('connection_L_R');
                        document.getElementById("hr10").classList.add('terminate_L_R');
                      }, 7000);

                      setTimeout(() => {      
                        document.getElementById("hr10").classList.remove('terminate_L_R');
                        document.getElementById("hr10").style.border='2px dashed black';
                      }, 9000);


                    //ALERT TERMINATE
                      setTimeout(() =>
                      {
                        alert_terminate(formValues.sender,formValues.receiver);
                        document.getElementById('start').disabled=false;
                      },9500);
                    }
                 });
                   }, 13000);

                          }
                    });
                  
                }, 24000);
              }
    }   

    // d1-d3
   else if((formValues.sender=="Device 1" && formValues.receiver=="Device 3") ||
    (formValues.sender=="Device 3" && formValues.receiver=="Device 1"))
     {
      if(formValues.sender=="Device 1" && formValues.receiver=="Device 3")
      {
        speak('Device 1 initiates a connection to Device 3. The request passes through intermediate switches, which only know their immediate neighbors.')

        setTimeout(() => {
        document.getElementById("hr1").classList.add('move_L_R');
        }, 2000); 
        
        setTimeout(() => {
        document.getElementById("hr4").classList.add('move_L_R');
        }, 4000);  

        setTimeout(() => {
        document.getElementById("hr6").classList.add('move_R_L');
        }, 6000); 

        setTimeout(() => {
        document.getElementById("hr3").classList.add('move_R_L');
        }, 8000);  

        setTimeout(() => {
         //send acknowledgement
        speak('Once the destination is found, an acknowledgment is sent back. Each switch reserves the path for exclusive communication.')
        }, 10000);  


        setTimeout(() => {
        document.getElementById("hr3").classList.remove('move_R_L');
        document.getElementById("hr3").classList.add('connection_L_R');
        }, 12000); 
        
        setTimeout(() => { 
          document.getElementById("hr6").classList.remove('move_R_L');
          document.getElementById("hr6").classList.add('connection_L_R');
        }, 14000);  

        setTimeout(() => {
         document.getElementById("hr4").classList.remove('move_L_R');
         document.getElementById("hr4").classList.add('connection_R_L');
        }, 16000); 

        setTimeout(() => {
           document.getElementById("hr1").classList.remove('move_L_R');
           document.getElementById("hr1").classList.add('connection_R_L');
        }, 18000); 

        

        setTimeout(() => {
        
        // ALERT-CONNECTION ESTABLISH
        Swal.fire({
              title: "Connection Established!!",
              html: `A dedicated path is set up between ${formValues.sender} and ${formValues.receiver}. The actual data is sent over this reserved path.`,
              icon: "success",
              target: '.main-box ',
              customClass:{
                container:"position-absolute",
                popup:"swal-popup",
              },   
          }).then((result) => {
              if (result.isConfirmed) {
                document.getElementById("phase").innerText="Phase 2: Data Transmission"
                  document.getElementById("P1").style.display='inline';

                  speak('Now, the data transmission begins. The path remains reserved for Device 1 and 3 for the entire duration of the session.');

                     //data-packet sent
                  setTimeout(() => {
                    myMove_D1_S1("P1")
                    }, 1000);   
                  setTimeout(() => {
                    myMove_S1_S3("P1")
                    }, 3000);   
                  setTimeout(() => {
                    myMove_S3_S2("P1")
                    }, 6000);   
                  setTimeout(() => {
                    myMove_S2_D3("P1")
                    }, 9000);   
                    
                
                  //ALERT DATA received
                  setTimeout(() => {
                  Swal.fire({
                    title: "Data Received!!", 
                    html: `The data has been received by ${formValues.receiver}.`,  
                    icon: "success",
                    target: '.main-box ',
                    customClass:{
                      container:"position-absolute",
                      popup:"swal-popup",
                    },
                }).then((result) => {
                    if (result.isConfirmed) {
                      document.getElementById("phase").innerText="Phase 3: Connection Termination"
                        remove("P1");

                        speak('When communication ends, the circuit is released, making the links available for other users.')

                      //connection-terminated
                      setTimeout(() => {
                     document.getElementById("hr3").classList.remove('connection_L_R');
                       document.getElementById("hr3").classList.add('terminate_L_R');
                      }, 1000);
                      
                      setTimeout(() => {
                          document.getElementById("hr3").classList.remove('terminate_L_R');
                          document.getElementById("hr3").style.border='2px dashed black';
                           document.getElementById("hr6").classList.remove('connection_L_R');
                          document.getElementById("hr6").classList.add('terminate_L_R');                
                      }, 3000);

                      setTimeout(() => {
                          document.getElementById("hr6").classList.remove('terminate_L_R');
                          document.getElementById("hr6").style.border='2px dashed black';
                          document.getElementById("hr4").classList.remove('connection_R_L');
                          document.getElementById("hr4").classList.add('terminate_R_L');                   
                      }, 5000);

                      setTimeout(() => {
                         document.getElementById("hr4").classList.remove('terminate_R_L');
                         document.getElementById("hr4").style.border='2px dashed black';
                         
                      document.getElementById("hr1").classList.remove('connection_R_L');
                        document.getElementById("hr1").classList.add('terminate_R_L');
                    
                      }, 7000);

                       setTimeout(() => {
                          document.getElementById("hr1").classList.remove('terminate_R_L');
                          document.getElementById("hr1").style.border='2px dashed black';
                      }, 9000);
               

                      //ALERT TERMINATE
                      setTimeout(() =>
                      {
                        alert_terminate(formValues.sender,formValues.receiver);
                        document.getElementById('start').disabled=false;
                      },10000);
                    }
                });
                  }, 12000);

                        }
                    });
                }, 22000);

              } 
    // d3--d1
       else{ 
         speak('Device 3 initiates a connection to Device 1. The request passes through intermediate switches, which only know their immediate neighbors.')

        setTimeout(() => {
        document.getElementById("hr3").classList.add('move_L_R');
        }, 2000);  

        setTimeout(() => {
        document.getElementById("hr6").classList.add('move_L_R');
        }, 4000);  

        setTimeout(() => {
        document.getElementById("hr4").classList.add('move_R_L');
        }, 6000); 

        setTimeout(() => {
        document.getElementById("hr1").classList.add('move_R_L');
        }, 8000);  


         setTimeout(() => {
          // send acknowledgement
           speak('Once the destination is found, an acknowledgment is sent back. Each switch reserves the path for exclusive communication.')
          }, 12000);  

          setTimeout(() => {
          document.getElementById("hr1").classList.remove('move_R_L');
          document.getElementById("hr1").classList.add('connection_L_R');
          }, 14000); 

          setTimeout(() => {
          document.getElementById("hr4").classList.remove('move_R_L');
          document.getElementById("hr4").classList.add('connection_L_R');
          }, 16000); 

           setTimeout(() => {
          document.getElementById("hr6").classList.remove('move_L_R');
          document.getElementById("hr6").classList.add('connection_R_L');
          }, 18000); 

           setTimeout(() => {
          document.getElementById("hr3").classList.remove('move_L_R');
          document.getElementById("hr3").classList.add('connection_R_L');
          }, 20000); 

           setTimeout(() => {

        // ALERT-CONNECTION ESTABLISH
        Swal.fire({
              title: "Connection established!!",
              html: `A dedicated path is set up between ${formValues.sender} and ${formValues.receiver}. The actual data is sent over this reserved path.`, 
              icon: "success",
              target: '.main-box ',
              customClass:{
                container:"position-absolute",
                popup:"swal-popup",
              },
          }).then((result) => {
              if (result.isConfirmed) {
                document.getElementById("phase").innerText="Phase 2: Data Transmission"
                  document.getElementById("P3").style.display='inline';

         speak('Now, the data transmission begins. The path remains reserved for Device 3 and 1 for the entire duration of the session.');

        //data-packet sent
        setTimeout(() => {
        myMove_D3_S2("P3")
        }, 1000); 

        setTimeout(() => {
        myMove_S2_S3("P3")
        }, 4000); 

        setTimeout(() => {
        remove("P3")
          document.getElementById("P4").style.display='inline';
        myMove_S3_S1("P4")
        }, 6000);

        setTimeout(() => {
        myMove_S1_D1("P4")
        }, 8000);
      
                  //ALERT DATA received
                  setTimeout(() => {
                  Swal.fire({
                    title: "Data Received!!",
                    html: `The data has been received by ${formValues.receiver}.`,
                    icon: "success",
                    target: '.main-box ',
                    customClass:{
                      container:"position-absolute",
                      popup:"swal-popup",
                    },
                }).then((result) => {
                    if (result.isConfirmed) {
                      document.getElementById("phase").innerText="Phase 3: Connection Termination"
                        remove("P4") 
                        
                         speak('When communication ends, the circuit is released, making the links available for other users.')

                      //connection-terminated
                      setTimeout(() => {
                      document.getElementById("hr1").classList.remove('connection_L_R');
                     document.getElementById("hr1").classList.add('terminate_L_R');
                      }, 1000);
                      
                      setTimeout(() => {
                        document.getElementById("hr1").classList.remove('terminate_L_R');
                        document.getElementById("hr1").style.border='2px dashed black';
                        document.getElementById("hr4").classList.remove('connection_L_R');
                        document.getElementById("hr4").classList.add('terminate_L_R');
                      }, 3000);

                      setTimeout(() => {  
                        document.getElementById("hr4").classList.remove('terminate_L_R');
                        document.getElementById("hr4").style.border='2px dashed black';
                         document.getElementById("hr6").classList.remove('connection_R_L');
                       document.getElementById("hr6").classList.add('terminate_R_L');
                      }, 5000);

                      setTimeout(() => {
                          
                        document.getElementById("hr6").classList.remove('terminate_R_L');
                        document.getElementById("hr6").style.border='2px dashed black';
                        document.getElementById("hr3").classList.remove('connection_R_L');
                        document.getElementById("hr3").classList.add('terminate_R_L');
                      }, 7000);

                      setTimeout(() => {      
                        document.getElementById("hr3").classList.remove('terminate_R_L');
                        document.getElementById("hr3").style.border='2px dashed black';
                      }, 9000);


                    //ALERT TERMINATE
                      setTimeout(() =>
                      {
                        alert_terminate(formValues.sender,formValues.receiver);
                        document.getElementById('start').disabled=false;
                      },10000);
                    }
                 });
                   }, 13000);

                          }
                    });
                  
                }, 25000);
              }
    } 

    // d1-d2
   else if((formValues.sender=="Device 1" && formValues.receiver=="Device 2") ||
    (formValues.sender=="Device 2" && formValues.receiver=="Device 1"))
     {
      if(formValues.sender=="Device 1" && formValues.receiver=="Device 2")
      {
        speak('Device 1 initiates a connection to Device 2. The request passes through intermediate switches, which only know their immediate neighbors.')

        setTimeout(() => {
        document.getElementById("hr1").classList.add('move_L_R');
        }, 2000); 
        
        setTimeout(() => {
        document.getElementById("hr4").classList.add('move_L_R');
        }, 4000);  

        setTimeout(() => {
        document.getElementById("hr2").classList.add('move_R_L');
        }, 6000); 

        setTimeout(() => {
         //send acknowledgement
        speak('Once the destination is found, an acknowledgment is sent back. Each switch reserves the path for exclusive communication.')
        }, 10000);  


        setTimeout(() => {
        document.getElementById("hr2").classList.remove('move_R_L');
        document.getElementById("hr2").classList.add('connection_L_R');
        }, 12000); 
        
        setTimeout(() => { 
          document.getElementById("hr4").classList.remove('move_L_R');
          document.getElementById("hr4").classList.add('connection_R_L');
        }, 14000);  

        setTimeout(() => {
         document.getElementById("hr1").classList.remove('move_L_R');
         document.getElementById("hr1").classList.add('connection_R_L');
        }, 16000); 

        setTimeout(() => {
        
        // ALERT-CONNECTION ESTABLISH
        Swal.fire({
              title: "Connection Established!!",
              html: `A dedicated path is set up between ${formValues.sender} and ${formValues.receiver}. The actual data is sent over this reserved path.`,
              icon: "success",
              target: '.main-box ',
              customClass:{
                container:"position-absolute",
                popup:"swal-popup",
              },   
          }).then((result) => {
              if (result.isConfirmed) {
                document.getElementById("phase").innerText="Phase 2: Data Transmission"
                  document.getElementById("P1").style.display='inline';

                  speak('Now, the data transmission begins. The path remains reserved for Device 1 and 2 for the entire duration of the session.');

                //   //data-packet sent
                  setTimeout(() => {
                    myMove_D1_S1("P1")
                    }, 1000);   
                  setTimeout(() => {
                    myMove_S1_S3("P1")
                    }, 3000);   
                  setTimeout(() => {
                    document.getElementById("P1").style.top='';
                    document.getElementById("P1").style.left='';
                    document.getElementById("P1").style.display='none';
                    document.getElementById("P2").style.display='inline';
                    myMove_S3_D2("P2")
                    }, 6000);   
                  
                  //ALERT DATA received
                  setTimeout(() => {
                  Swal.fire({
                    title: "Data Received!!", 
                    html: `The data has been received by ${formValues.receiver}.`,  
                    icon: "success",
                    target: '.main-box ',
                    customClass:{
                      container:"position-absolute",
                      popup:"swal-popup",
                    },
                }).then((result) => {
                    if (result.isConfirmed) {
                      document.getElementById("phase").innerText="Phase 3: Connection Termination"
                        remove("P2");

                        speak('When communication ends, the circuit is released, making the links available for other users.')

                      //connection-terminated
                      setTimeout(() => {
                     document.getElementById("hr2").classList.remove('connection_L_R');
                    document.getElementById("hr2").classList.add('terminate_L_R');
                      }, 1000);
                      
                      setTimeout(() => {
                          document.getElementById("hr2").classList.remove('terminate_L_R');
                          document.getElementById("hr2").style.border='2px dashed black';
                          document.getElementById("hr4").classList.remove('connection_R_L');
                          document.getElementById("hr4").classList.add('terminate_R_L');                
                      }, 3000);

                      setTimeout(() => {
                          document.getElementById("hr4").classList.remove('terminate_R_L');
                          document.getElementById("hr4").style.border='2px dashed black';
                          document.getElementById("hr1").classList.remove('connection_R_L');
                          document.getElementById("hr1").classList.add('terminate_R_L');                   
                      }, 5000);

                      setTimeout(() => {
                         document.getElementById("hr1").classList.remove('terminate_R_L');
                         document.getElementById("hr1").style.border='2px dashed black';
                      },7000);

                      //ALERT TERMINATE
                      setTimeout(() =>
                      {
                        alert_terminate(formValues.sender,formValues.receiver);
                        document.getElementById('start').disabled=false;
                      },9000);
                    }
                });
                  }, 10000);

                        }
                    });
                }, 23000);

              }

// d2-d1
       else{ 
         speak('Device 2 initiates a connection to Device 1. The request passes through intermediate switches, which only know their immediate neighbors.')

        setTimeout(() => {
        document.getElementById("hr2").classList.add('move_L_R');
        }, 2000);  

        setTimeout(() => {
        document.getElementById("hr4").classList.add('move_R_L');
        }, 4000);  

        setTimeout(() => {
        document.getElementById("hr1").classList.add('move_R_L');
        }, 6000); 

         setTimeout(() => {
          // send acknowledgement
           speak('Once the destination is found, an acknowledgment is sent back. Each switch reserves the path for exclusive communication.')
          }, 10000);  

          setTimeout(() => {
          document.getElementById("hr1").classList.remove('move_R_L');
          document.getElementById("hr1").classList.add('connection_L_R');
          }, 12000); 

          setTimeout(() => {
          document.getElementById("hr4").classList.remove('move_R_L');
          document.getElementById("hr4").classList.add('connection_L_R');
          }, 14000); 

           setTimeout(() => {
          document.getElementById("hr2").classList.remove('move_L_R');
          document.getElementById("hr2").classList.add('connection_R_L');
          }, 16000); 
 
           setTimeout(() => {

        // ALERT-CONNECTION ESTABLISH
        Swal.fire({
              title: "Connection established!!",
              html: `A dedicated path is set up between ${formValues.sender} and ${formValues.receiver}. The actual data is sent over this reserved path.`, 
              icon: "success",
              target: '.main-box ',
              customClass:{
                container:"position-absolute",
                popup:"swal-popup",
              },
          }).then((result) => {
              if (result.isConfirmed) {
                document.getElementById("phase").innerText="Phase 2: Data Transmission"
                  document.getElementById("P2").style.display='inline';

         speak('Now, the data transmission begins. The path remains reserved for Device 2 and 1 for the entire duration of the session.');

        //data-packet sent
          setTimeout(() => {
            myMove_D2_S3("P2")
            }, 1000); 

            setTimeout(() => {
              remove("P2")
              document.getElementById("P4").style.display='inline';
            myMove_S3_S1("P4")
            }, 6000); 

            setTimeout(() => {
            myMove_S1_D1("P4")
            }, 9000); 

                  //ALERT DATA received
                  setTimeout(() => {
                  Swal.fire({
                    title: "Data Received!!",
                    html: `The data has been received by ${formValues.receiver}.`,
                    icon: "success",
                    target: '.main-box ',
                    customClass:{
                      container:"position-absolute",
                      popup:"swal-popup",
                    },
                }).then((result) => {
                    if (result.isConfirmed) {
                      document.getElementById("phase").innerText="Phase 3: Connection Termination"
                        remove("P4") 
                        
                         speak('When communication ends, the circuit is released, making the links available for other users.')

                      //connection-terminated
                      setTimeout(() => {
                      document.getElementById("hr1").classList.remove('connection_L_R');
                     document.getElementById("hr1").classList.add('terminate_L_R');
                      }, 1000);
                      
                      setTimeout(() => {
                        document.getElementById("hr1").classList.remove('terminate_L_R');
                        document.getElementById("hr1").style.border='2px dashed black';
                        document.getElementById("hr4").classList.remove('connection_L_R');
                        document.getElementById("hr4").classList.add('terminate_L_R');
                      }, 3000);

                      setTimeout(() => {  
                        document.getElementById("hr4").classList.remove('terminate_L_R');
                        document.getElementById("hr4").style.border='2px dashed black';
                         document.getElementById("hr2").classList.remove('connection_R_L');
                       document.getElementById("hr2").classList.add('terminate_R_L');
                      }, 5000);

                      setTimeout(() => {
                          
                        document.getElementById("hr2").classList.remove('terminate_R_L');
                        document.getElementById("hr2").style.border='2px dashed black';
                      }, 7000);

                   
                    //ALERT TERMINATE
                      setTimeout(() =>
                      {
                        alert_terminate(formValues.sender,formValues.receiver);
                        document.getElementById('start').disabled=false;
                      },9000);
                    }
                 });
                   }, 13000);

                          }
                    });
                  
                }, 23000);
              }
    }


    //device2-----device3
    else if ((formValues.sender=="Device 2" && formValues.receiver=="Device 3") || 
      (formValues.sender=="Device 3" && formValues.receiver=="Device 2"))
      {
        if(formValues.sender=="Device 2" && formValues.receiver=="Device 3")
        {
          speak('Device 2 tries to connect to Device 3, but a link failure prevents it.')
    
        setTimeout(() =>{
       document.getElementById("hr2").classList.add('move_L_R');
        },2000)

        setTimeout(() =>{
       document.getElementById("hr6").classList.add('move_R_L');
        },4000)

        setTimeout(() =>{
       document.getElementById("hr3").classList.add('move_error_R_L');
        },6000)
        

          setTimeout(() =>{
        // ALERT-CONNECTION ESTABLISH
          Swal.fire({
                title: "Link Failure!!",
                html: `A path setup <b style='color:red'>fails</b> between ${formValues.sender} and ${formValues.receiver}; therefore, a connection has not been established.`,
                icon: "error",
                target: '.main-box ',
                customClass:{
                  container:"position-absolute",
                  popup:"swal-popup",
                },
            }).then((result) => {
                if (result.isConfirmed) {

                  speak('Data transmission is not possible because the connection has not been established.')
                 document.getElementById("phase").style.visibility='hidden'
                  setTimeout(() =>{
                    document.getElementById("hr3").classList.remove('move_error_R_L');
                   },2000)

                  
                  setTimeout(() =>{
                    document.getElementById("hr6").classList.remove('move_R_L');
                   },3000)
                    
                    setTimeout(() =>{
                    document.getElementById("hr2").classList.remove('move_L_R');
                    document.getElementById("start").disabled=false;
                   },4000)

                   setTimeout(() =>{
                    Swal.fire({
                          title: "Try Again!!",
                          html: `Please try for another devices.`,
                          icon: "info",
                          target: '.main-box ',
                          customClass:{
                            container:"position-absolute",
                            popup:"swal-popup",
                          },
                      })
                       document.getElementById("phase").innerText="Phase 1: Connection Establishment";
    document.getElementById("phase").style.visibility='hidden'
                     },5000)

                }
              });
            },8000);
          }

    // device3-----device2
              else{
                speak('Device 3 starts a connection to Device 2 via switches aware only of their immediate neighbors.')
                

                  setTimeout(() => {
                    document.getElementById("hr3").classList.add('move_L_R');
                  }, 2000);  

                  setTimeout(() => {
                document.getElementById("hr6").classList.add('move_L_R');
                  }, 4000); 

                   setTimeout(() => {
                document.getElementById("hr2").classList.add('move_R_L');
                  }, 6000); 

                  setTimeout(() => {
                  // send acknowledgement
                  speak('Once the destination is found, an acknowledgment is sent and the path is reserved by each switch.')
                  }, 8000);

                   setTimeout(() => {
                    document.getElementById("hr2").classList.remove('move_R_L');
                    document.getElementById("hr2").classList.add('connection_L_R');
                    }, 10000); 

                    setTimeout(() => {
                    document.getElementById("hr6").classList.remove('move_L_R');
                    document.getElementById("hr6").classList.add('connection_R_L');
                    }, 12000); 

                    setTimeout(() => {
                    document.getElementById("hr3").classList.remove('move_L_R');
                    document.getElementById("hr3").classList.add('connection_R_L');
                    }, 14000); 
          


                  setTimeout(() => {
                // ALERT-CONNECTION ESTABLISH
                    Swal.fire({
                      title: "Connection Established!!",
                      html: `A dedicated path is set up between ${formValues.sender} and ${formValues.receiver}. The actual data is sent over this reserved path.`,
                      icon: "success",
                      target: '.main-box ',
                      customClass:{
                        container:"position-absolute",
                        popup:"swal-popup",
                      },
                  }).then((result) => {
                      if (result.isConfirmed) {
                        document.getElementById("phase").innerText="Phase 2: Data Transmission"
                          document.getElementById("P3").style.display='inline';
                          speak('Data transmission begins, but a sudden link failure between Switch 3 and \
                            Device 2 disrupts the circuit, resulting in an interruption of communication.');
                          

                        //data-packet sent
                          setTimeout(() => {
                         myMove_D3_S2("P3")
                          }, 1000); 

                            setTimeout(() => {
                            myMove_S2_S3("P3")
                            }, 4000); 

                        setTimeout(() => {
                          remove("P3")
                            document.getElementById("P3").style.top='';
                            document.getElementById("P3").style.left='';
                            document.getElementById("P3").style.display='none';
                            document.getElementById("P2").style.display='inline';
                            myMove_S3_D2_error("P2")
                            }, 6000);

                            setTimeout(() => {
                            document.getElementById("hr2").classList.remove('connection_L_R');
                            document.getElementById("hr2").style.border='2px dashed black';
                            }, 8000);

                            setTimeout(() => {
                            // alert connection fail
                            Swal.fire({
                          title: "Link Failure!!",
                          html: `A path setup <b style='color:red'>fails</b> between <b>Switch 3</b> and <b>Device 2</b>; therefore, a data cannot be transmitted further.`,
                          icon: "error",
                          target: '.main-box ',
                          customClass:{
                            container:"position-absolute",
                            popup:"swal-popup",
                          },
                          }).then((result) => {
                              if (result.isConfirmed) {
                      document.getElementById("phase").innerText="Phase 3: Connection Termination"
                      speak('As the link between Switch 3 and Device 2 has just broken, communication is disrupted, and the reserved path will be released for future use.')

                        setTimeout(() =>{
                        document.getElementById("P2").style.top='';
                        document.getElementById("P2").style.left='';
                        document.getElementById("P2").style.display='none';
                        document.getElementById("hr6").classList.remove('connection_R_L');
                        document.getElementById("hr6").classList.add('terminate_R_L');
                        },6000)

                        
                        setTimeout(() =>{
                        document.getElementById("hr3").classList.remove('connection_R_L');
                        document.getElementById("hr6").classList.remove('terminate_R_L');
                        document.getElementById("hr6").style.border='2px dashed black';
                        document.getElementById("hr3").classList.add('terminate_R_L');
                        },8000)
                          
                          setTimeout(() =>{
                          document.getElementById("hr3").classList.remove('terminate_R_L');
                          document.getElementById("hr3").style.boarder='2px  dashed black';
                          document.getElementById("start").disabled=false;
                        },10000)

                        setTimeout(() =>{
                          Swal.fire({
                                title: "Try Again!!",
                                html: `Please try for another devices.`,
                                icon: "info",
                                target: '.main-box ',
                                customClass:{
                                  container:"position-absolute",
                                  popup:"swal-popup",
                                },
                            })
                             document.getElementById("phase").innerText="Phase 1: Connection Establishment";
    document.getElementById("phase").style.visibility='hidden'
                          },11000)

                      }
                    });
                            }, 11000);
                                      }
                                  });
                              }, 17000); 
                            
          }
      }

    // device2----device4
   else if((formValues.sender=="Device 2" && formValues.receiver=="Device 4") ||
    (formValues.sender=="Device 4" && formValues.receiver=="Device 2"))
     {
      if(formValues.sender=="Device 2" && formValues.receiver=="Device 4")
      {

        speak('Device 2 starts a connection to Device 4 via switches aware only of their immediate neighbors.')
                

        setTimeout(() => {
        document.getElementById("hr2").classList.add('move_L_R');
        }, 2000); 
        
        setTimeout(() => {
        document.getElementById("hr5").classList.add('move_L_R');
        }, 4000);  

        setTimeout(() => {
        document.getElementById("hr8").classList.add('move_L_R');
        }, 6000);  

        setTimeout(() => {
         //send acknowledgement
        speak('Once the destination is found, an acknowledgment is sent and the path is reserved by each switch.')
                  }, 8000); 


        setTimeout(() => {
        document.getElementById("hr8").classList.remove('move_L_R');
        document.getElementById("hr8").classList.add('connection_R_L');
        }, 10000); 
        
        setTimeout(() => { 
          document.getElementById("hr5").classList.remove('move_L_R');
          document.getElementById("hr5").classList.add('connection_R_L');
        }, 12000);  

        setTimeout(() => {
         document.getElementById("hr2").classList.remove('move_L_R');
         document.getElementById("hr2").classList.add('connection_R_L');
        }, 14000); 


        setTimeout(() => {
        
        // ALERT-CONNECTION ESTABLISH
        Swal.fire({
              title: "Connection Established!!",
              html: `A dedicated path is set up between ${formValues.sender} and ${formValues.receiver}. The actual data is sent over this reserved path.`,
              icon: "success",
              target: '.main-box ',
              customClass:{
                container:"position-absolute",
                popup:"swal-popup",
              },   
          }).then((result) => {
              if (result.isConfirmed) {
                document.getElementById("phase").innerText="Phase 2: Data Transmission"
                  document.getElementById("P2").style.display='inline';

                  speak('Now, the data transmission begins. The path remains reserved for Device 2 and 4 for the entire duration of the session.');

                    //data-packet sent
                  setTimeout(() => {
                    myMove_D2_S3("P2")
                    }, 1500);   
                  setTimeout(() =>{
                    remove("P2")
                    document.getElementById("P1").style.display='inline';
                    myMove_S3_S4("P1")
                    }, 6000);   
                  setTimeout(() => {
                  
                    myMove_S4_D4("P1")
                    }, 8000);   

                  //ALERT DATA received
                  setTimeout(() => {
                  Swal.fire({
                    title: "Data Received!!", 
                    html: `The data has been received by ${formValues.receiver}.`,  
                    icon: "success",
                    target: '.main-box ',
                    customClass:{
                      container:"position-absolute",
                      popup:"swal-popup",
                    },
                }).then((result) => {
                    if (result.isConfirmed) {
                      document.getElementById("phase").innerText="Phase 3: Connection Termination"
                        remove("P1");

                        speak('When communication ends, the circuit is released, making the links available for other users.')

                      //connection-terminated
                      setTimeout(() => {
                     document.getElementById("hr8").classList.remove('connection_R_L');
                       document.getElementById("hr8").classList.add('terminate_R_L');
                      }, 1000);
                      
                      setTimeout(() => {
                          document.getElementById("hr8").classList.remove('terminate_R_L');
                          document.getElementById("hr8").style.border='2px dashed black';
                           document.getElementById("hr5").classList.remove('connection_R_L');
                          document.getElementById("hr5").classList.add('terminate_R_L');                
                      }, 3000);

                      setTimeout(() => {
                          document.getElementById("hr5").classList.remove('terminate_R_L');
                          document.getElementById("hr5").style.border='2px dashed black';
                          document.getElementById("hr2").classList.remove('connection_R_L');
                          document.getElementById("hr2").classList.add('terminate_R_L');                   
                      }, 5000);

                      setTimeout(() => {
                         document.getElementById("hr2").classList.remove('terminate_R_L');
                         document.getElementById("hr2").style.border='2px dashed black';
                         
                      }, 7000);

               

                      //ALERT TERMINATE
                      setTimeout(() =>
                      {
                        alert_terminate(formValues.sender,formValues.receiver);
                        document.getElementById('start').disabled=false;
                      },9000);
                    }
                });
                  }, 12000);

                        }
                    });
                }, 17000);

              }

              
    //  device4-----device2
        
        else
        {
           
          speak('Device 4 tries to connect to Device 2, but a link failure prevents it.')
    
        setTimeout(() =>{
          document.getElementById("phase").innerText="Phase 1: Connection Establishment"
       document.getElementById("hr8").classList.add('move_R_L');
        },2000)

        setTimeout(() =>{
       document.getElementById("hr5").classList.add('move_R_L');
        },4000)

        setTimeout(() =>{
       document.getElementById("hr2").classList.add('move_error_R_L');
        },6000)
        

          setTimeout(() =>{
        // ALERT-CONNECTION ESTABLISH
          Swal.fire({
                title: "Link failure!!",
                html: `A path setup <b style='color:red'>fails</b> between ${formValues.sender} and ${formValues.receiver}; therefore, a connection has not been established.`,
                icon: "error",
                target: '.main-box ',
                customClass:{
                  container:"position-absolute",
                  popup:"swal-popup",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                  document.getElementById("phase").style.visibility='hidden'
                  speak('Data transmission is not possible because the connection has not been established.')

                  setTimeout(() =>{
                    document.getElementById("hr2").classList.remove('move_error_R_L');
                   },2000)

                  
                  setTimeout(() =>{
                    document.getElementById("hr5").classList.remove('move_R_L');
                   },3000)
                    
                    setTimeout(() =>{
                    document.getElementById("hr8").classList.remove('move_R_L');
                    document.getElementById("start").disabled=false;
                   },4000)

                   setTimeout(() =>{
                    Swal.fire({
                          title: "Try Again!!",
                          html: `Please try for another devices.`,
                          icon: "info",
                          target: '.main-box ',
                          customClass:{
                            container:"position-absolute",
                            popup:"swal-popup",
                          },
                      })
                       document.getElementById("phase").innerText="Phase 1: Connection Establishment";
    document.getElementById("phase").style.visibility='hidden'
                     },5000)

                }
              });
            },8000);
        }
        
      }

    // device2-----device5
    else if((formValues.sender=="Device 2" && formValues.receiver=="Device 5") || 
      (formValues.sender=="Device 5" && formValues.receiver=="Device 2"))
      {
        if(formValues.sender=="Device 2" && formValues.receiver=="Device 5")
        {
          speak('Device 2 initiates a connection to Device 5. The request passes through intermediate switches, which only know their immediate neighbors.')

        setTimeout(() =>{
        document.getElementById("hr2").classList.add('move_L_R');
        },2000);
        

        setTimeout(() =>{
        document.getElementById("hr9").classList.add('move_L_R');
        },4000);
        
        setTimeout(() =>{
            // send acknowledgement
             speak('Once the destination is found, an acknowledgment is sent back. Each switch reserves the path for exclusive communication.')
        },12000);

          setTimeout(() =>{ 
          document.getElementById("hr9").classList.remove('move_L_R');
          document.getElementById("hr9").classList.add('connection_R_L');
            },13000);

             setTimeout(() =>{ 
          document.getElementById("hr2").classList.remove('move_L_R');
          document.getElementById("hr2").classList.add('connection_R_L');
            },15000);

         setTimeout(() =>{ 
        // ALERT-CONNECTION ESTABLISH
          Swal.fire({
                title: "Connection established!!",
                html: `A dedicated path is set up between Device 2 and Device 5. The actual data is sent over this reserved path.`,
                icon: "success",
                target: '.main-box ',
                customClass:{
                  container:"position-absolute",
                  popup:"swal-popup",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                  document.getElementById("phase").innerText="Phase 2: Data Transmission"
                  document.getElementById("P2").style.display='inline';

                  speak('Now, the data transmission begins. The path remains reserved for Device 1 and 5 for the entire duration of the session.');

                  //data-packet sent
                 
                  setTimeout(() => {
                    myMove_D2_S3("P2")
                    }, 1000);   
                  setTimeout(() =>{
                    remove("P2")
                    document.getElementById("P1").style.display='inline';
                    myMove_S3_D5("P1")
                    }, 5500);
                    
                  //ALERT PACKET received
                    setTimeout(() => {
                    Swal.fire({
                      title: "Data Received!!",
                      html: `The data has been received by ${formValues.receiver}.`,
                      icon: "success",
                      target: '.main-box ',
                      customClass:{
                      container:"position-absolute",
                      popup:"swal-popup",
                        },
                  }).then((result) => {
                      if (result.isConfirmed) {
                        document.getElementById("phase").innerText="Phase 3: Connection Termination"
                          remove("P1")
                      
                          speak('When communication ends, the circuit is released, making the links available for other users.')

                  // connection terminate
                       setTimeout(() =>{
                      document.getElementById("hr9").classList.remove('connection_R_L');
                      document.getElementById("hr9").classList.add('terminate_R_L');
                     },1000);

                  setTimeout(() =>{
                document.getElementById("hr9").classList.remove('terminate_R_L');  
                document.getElementById("hr9").style.border='2px dashed black';
                document.getElementById("hr2").classList.remove('connection_R_L');
                document.getElementById("hr2").classList.add('terminate_R_L');
                  },3000);

                  setTimeout(() =>{
                document.getElementById("hr2").classList.remove('terminate_R_L');  
                document.getElementById("hr2").style.border='2px dashed black';
                  },5000);

                  // ALERT TERMINATE
                setTimeout(() =>
                {
                alert_terminate(formValues.sender,formValues.receiver);
                document.getElementById('start').disabled=false;
                  },9000);
                }
              });
                    }, 13000); //packet end

                          }
                      });
                  }, 
                24000);
          }
  
    // device5-----device2
  else{

          speak('Device 5 starts a connection to Device 2 via switches aware only of their immediate neighbors.')
                
            setTimeout(() => {
              document.getElementById("hr9").classList.add('move_R_L');            
            }, 2000);  

            setTimeout(() => {
            document.getElementById("hr2").classList.add('move_R_L');
            }, 4000); 

            setTimeout(() => {
            // send acknowledgement
            speak('Once the destination is found, an acknowledgment is sent and the path is reserved by each switch.')
             },12000);

          setTimeout(() =>{ 
          document.getElementById("hr2").classList.remove('move_R_L');
          document.getElementById("hr2").classList.add('connection_L_R');
            },13000);

          setTimeout(() =>{ 
          document.getElementById("hr9").classList.remove('move_R_L');
          document.getElementById("hr9").classList.add('connection_L_R');
            },15000);

          setTimeout(() =>{ 
        // ALERT-CONNECTION ESTABLISH
          Swal.fire({
                title: "Connection established!!",
                html: `A dedicated path is set up between ${formValues.sender} and ${formValues.receiver}. The actual data is sent over this reserved path.`,
                icon: "success",
                target: '.main-box ',
                customClass:{
                container:"position-absolute",
                popup:"swal-popup",
                  },
            }).then((result) => {
                if (result.isConfirmed) {
                  document.getElementById("phase").innerText="Phase 2: Data Transmission"
                    document.getElementById("P5").style.display='inline';
                    
                    speak('Now, the data transmission begins. The path remains reserved for Device5 and 2 for the entire duration of the session');
                    
                    //data-packet sent
                      setTimeout(() => {
                      myMove_D5_S3("P5")
                      }, 1000); 
                      setTimeout(() => {
                      remove("P5")
                      document.getElementById("P5").style.top='';
                      document.getElementById("P5").style.left='';
                      document.getElementById("P5").style.display='none';
                      document.getElementById("P2").style.display='inline';
                      myMove_S3_D2("P2")
                      }, 6000); 

                    //ALERT PACKET received
                    setTimeout(() => {
                    Swal.fire({
                      title: "Data Received!!",
                      html: `The data has been received by ${formValues.receiver}.`,
                      icon: "success",
                      target: '.main-box ',
                      customClass:{
                        container:"position-absolute",
                        popup:"swal-popup",
                      },
                  }).then((result) => {
                      if (result.isConfirmed) {
                          document.getElementById("phase").innerText="Phase 3: Connection Termination"
                          remove("P2")
                       
                          speak('when communication ends, the circuit is released, making the links available for other users.' )
                        //connection-terminated
                        setTimeout(() => {
                         document.getElementById("hr2").classList.remove('connection_L_R');
                        document.getElementById("hr2").classList.add('terminate_L_R');
                        }, 3000);

                        setTimeout(() => {
                        document.getElementById("hr2").classList.remove('terminate_L_R');
                        document.getElementById("hr2").style.boarder='2px  dashed black';
                         document.getElementById("hr9").classList.remove('connection_L_R');
                        document.getElementById("hr9").classList.add('terminate_L_R');
                        }, 5000);

                        setTimeout(() => {
                        document.getElementById("hr9").classList.remove('terminate_L_R');
                         document.getElementById("hr9").style.boarder='2px  dashed black';
                        },7000);

                      //ALERT TERMINATE
                        setTimeout(() =>
                        {
                          alert_terminate(formValues.sender,formValues.receiver);
                          document.getElementById('start').disabled=false;
                        },9000);
                      }

                      });
                    }, 9000);

                          }
                      });
                  }, 
                  23000);
          } 

    }

    // device2------device6
     else if((formValues.sender=="Device 2" && formValues.receiver=="Device 6") ||
    (formValues.sender=="Device 6" && formValues.receiver=="Device 2"))
     {
      if(formValues.sender=="Device 2" && formValues.receiver=="Device 6")
      {

        speak('Device 2 starts a connection to Device 6 via switches aware only of their immediate neighbors.')
                

        setTimeout(() => {
        document.getElementById("hr2").classList.add('move_L_R');
        }, 2000); 
        
        setTimeout(() => {
        document.getElementById("hr7").classList.add('move_L_R');
        }, 4000);  

        setTimeout(() => {
        document.getElementById("hr10").classList.add('move_L_R');
        }, 6000);  

        setTimeout(() => {
         //send acknowledgement
        speak('Once the destination is found, an acknowledgment is sent and the path is reserved by each switch.')
                  }, 8000); 


        setTimeout(() => {
        document.getElementById("hr10").classList.remove('move_L_R');
        document.getElementById("hr10").classList.add('connection_R_L');
        }, 10000); 
        
        setTimeout(() => { 
          document.getElementById("hr7").classList.remove('move_L_R');
          document.getElementById("hr7").classList.add('connection_R_L');
        }, 12000);  

        setTimeout(() => {
         document.getElementById("hr2").classList.remove('move_L_R');
         document.getElementById("hr2").classList.add('connection_R_L');
        }, 14000); 


        setTimeout(() => {
        
        // ALERT-CONNECTION ESTABLISH
        Swal.fire({
              title: "Connection Established!!",
              html: `A dedicated path is set up between ${formValues.sender} and ${formValues.receiver}. The actual data is sent over this reserved path.`,
              icon: "success",
              target: '.main-box ',
              customClass:{
                container:"position-absolute",
                popup:"swal-popup",
              },   
          }).then((result) => {
              if (result.isConfirmed) {
                document.getElementById("phase").innerText="Phase 2: Data Transmission"
                  document.getElementById("P2").style.display='inline';

                  speak('Now, the data transmission begins. The path remains reserved for Device 2 and 6 for the entire duration of the session.');

                    //data-packet sent
                     setTimeout(() => {
                    myMove_D2_S3("P2")
                    }, 1000);   
                  setTimeout(() => {
                    remove("P2")
                    document.getElementById("P1").style.display='inline';
                    myMove_S3_S5("P1")
                    }, 6000);   
                  setTimeout(() => {
                    myMove_S5_D6("P1")
                    }, 9000);   

                  //ALERT DATA received
                  setTimeout(() => {
                  Swal.fire({
                    title: "Data Received!!", 
                    html: `The data has been received by ${formValues.receiver}.`,  
                    icon: "success",
                    target: '.main-box ',
                    customClass:{
                      container:"position-absolute",
                      popup:"swal-popup",
                    },
                }).then((result) => {
                    if (result.isConfirmed) {
                      document.getElementById("phase").innerText="Phase 3: Connection Termination"
                        remove("P1");

                        speak('When communication ends, the circuit is released, making the links available for other users.')

                      //connection-terminated
                      setTimeout(() => {
                     document.getElementById("hr10").classList.remove('connection_R_L');
                       document.getElementById("hr10").classList.add('terminate_R_L');
                      }, 1000);
                      
                      setTimeout(() => {
                          document.getElementById("hr10").classList.remove('terminate_R_L');
                          document.getElementById("hr10").style.border='2px dashed black';
                           document.getElementById("hr7").classList.remove('connection_R_L');
                          document.getElementById("hr7").classList.add('terminate_R_L');                
                      }, 3000);

                      setTimeout(() => {
                          document.getElementById("hr7").classList.remove('terminate_R_L');
                          document.getElementById("hr7").style.border='2px dashed black';
                          document.getElementById("hr2").classList.remove('connection_R_L');
                          document.getElementById("hr2").classList.add('terminate_R_L');                   
                      }, 5000);

                      setTimeout(() => {
                         document.getElementById("hr2").classList.remove('terminate_R_L');
                         document.getElementById("hr2").style.border='2px dashed black';
                         
                      }, 7000);

               

                      //ALERT TERMINATE
                      setTimeout(() =>
                      {
                        alert_terminate(formValues.sender,formValues.receiver);
                        document.getElementById('start').disabled=false;
                      },9000);
                    }
                });
                  }, 13000);

                        }
                    });
                }, 17000);

      }

      // device6-----device2
       else{ 
         speak('Device 6 initiates a connection to Device 2. The request passes through intermediate switches, which only know their immediate neighbors.')

        setTimeout(() => {
        document.getElementById("hr10").classList.add('move_R_L');
        }, 2000);  

        setTimeout(() => {
        document.getElementById("hr7").classList.add('move_R_L');
        }, 4000);  

        setTimeout(() => {
        document.getElementById("hr2").classList.add('move_R_L');
        }, 6000); 


         setTimeout(() => {
          // send acknowledgement
           speak('Once the destination is found, an acknowledgment is sent back. Each switch reserves the path for exclusive communication.')
          }, 12000);  

          setTimeout(() => {
          document.getElementById("hr2").classList.remove('move_R_L');
          document.getElementById("hr2").classList.add('connection_L_R');
          }, 14000); 

          setTimeout(() => {
          document.getElementById("hr7").classList.remove('move_R_L');
          document.getElementById("hr7").classList.add('connection_L_R');
          }, 16000); 

           setTimeout(() => {
          document.getElementById("hr10").classList.remove('move_R_L');
          document.getElementById("hr10").classList.add('connection_L_R');
          }, 20000); 

           setTimeout(() => {

        // ALERT-CONNECTION ESTABLISH
        Swal.fire({
              title: "Connection established!!",
              html: `A dedicated path is set up between ${formValues.sender} and ${formValues.receiver}. The actual data is sent over this reserved path.`, 
              icon: "success",
              target: '.main-box ',
              customClass:{
                container:"position-absolute",
                popup:"swal-popup",
              },
          }).then((result) => {
              if (result.isConfirmed) {
                document.getElementById("phase").innerText="Phase 2: Data Transmission"
                  document.getElementById("P6").style.display='inline';

         speak('Now, the data transmission begins. The path remains reserved for Device 6 and 2 for the entire duration of the session.');

                //data-packet sent
                setTimeout(() => {
                    myMove_D6_S5("P6")
                    }, 1000); 
                    setTimeout(() => {
                    myMove_S5_S3("P6")
                    }, 4000); 
                    setTimeout(() => {
                      remove("P6")
                      document.getElementById("P6").style.top='';
                      document.getElementById("P6").style.left='';
                      document.getElementById("P6").style.display='none';
                      document.getElementById("P2").style.display='inline';
                    myMove_S3_D2("P2")
                    }, 7000); 

                  //ALERT DATA received
                  setTimeout(() => {
                  Swal.fire({
                    title: "Data Received!!",
                    html: `The data has been received by ${formValues.receiver}.`,
                    icon: "success",
                    target: '.main-box ',
                    customClass:{
                      container:"position-absolute",
                      popup:"swal-popup",
                    },
                }).then((result) => {
                    if (result.isConfirmed) {
                      document.getElementById("phase").innerText="Phase 3: Connection Termination"
                        remove("P2") 
                        
                         speak('When communication ends, the circuit is released, making the links available for other users.')

                      //connection-terminated-animation

                      setTimeout(() => {
                      document.getElementById("hr2").classList.remove('connection_L_R');
                     document.getElementById("hr2").classList.add('terminate_L_R');
                      }, 1000);
                      
                      setTimeout(() => {
                        document.getElementById("hr2").classList.remove('terminate_L_R');
                        document.getElementById("hr2").style.border='2px dashed black';
                        document.getElementById("hr7").classList.remove('connection_L_R');
                        document.getElementById("hr7").classList.add('terminate_L_R');
                      }, 3000);

                      setTimeout(() => {  
                        document.getElementById("hr7").classList.remove('terminate_L_R');
                        document.getElementById("hr7").style.border='2px dashed black';
                         document.getElementById("hr10").classList.remove('connection_L_R');
                       document.getElementById("hr10").classList.add('terminate_L_R');
                      }, 5000);

                      setTimeout(() => {
                          
                        document.getElementById("hr10").classList.remove('terminate_L_R');
                        document.getElementById("hr10").style.border='2px dashed black';
                      }, 7000);

                    //ALERT TERMINATE
                      setTimeout(() =>
                      {
                        alert_terminate(formValues.sender,formValues.receiver);
                        document.getElementById('start').disabled=false;
                      },9500);
                    }
                 });
                   }, 13000);

                          }
                    });
                  
                }, 24000);
              }

    }

    //device3------device4
    else if((formValues.sender=="Device 3" && formValues.receiver=="Device 4") || 
      (formValues.sender=="Device 4" && formValues.receiver=="Device 3"))
      {
        if(formValues.sender=="Device 3" && formValues.receiver=="Device 4")
        {
          speak('Device 3 starts a connection to Device 4 via switches aware only of their immediate neighbors.')
            
        setTimeout(() => {
            document.getElementById("hr3").classList.add('move_L_R');
            }, 2000);
        
        setTimeout(() => {
            document.getElementById("hr6").classList.add('move_L_R');
            }, 4000);
       
            setTimeout(() => {
            document.getElementById("hr5").classList.add('move_L_R');
            }, 6000);
       
            setTimeout(() => {
            document.getElementById("hr8").classList.add('move_L_R');
            }, 8000);

          setTimeout(() => {
            // send acknowledgement
            speak('Once the destination is found, an acknowledgment is sent and the path is reserved by each switch.')
            }, 10000);

        setTimeout(() => {
            document.getElementById("hr8").classList.remove('move_L_R');
            document.getElementById("hr8").classList.add('connection_R_L');
            }, 12000);

           setTimeout(() => {
            document.getElementById("hr5").classList.remove('move_L_R');
            document.getElementById("hr5").classList.add('connection_R_L');
            }, 14000);

               setTimeout(() => {
            document.getElementById("hr6").classList.remove('move_L_R');
            document.getElementById("hr6").classList.add('connection_R_L');
            }, 16000);

               setTimeout(() => {
            document.getElementById("hr3").classList.remove('move_L_R');
            document.getElementById("hr3").classList.add('connection_R_L');
            }, 18000);

           setTimeout(() => {   
        // ALERT-CONNECTION ESTABLISH
          Swal.fire({
                title: "Connection established!!",
                html: `A dedicated path is set up between ${formValues.sender} and ${formValues.receiver}. The actual data is sent over this reserved path.`,
                icon: "success",
                target: '.main-box ',
                customClass:{
                  container:"position-absolute",
                  popup:"swal-popup",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                  document.getElementById("phase").innerText="Phase 2: Data Transmission"
                  document.getElementById("P3").style.display='inline';
                  speak('Data transmission begins, but a sudden link failure between Switch 3 and \
                            switch 4 disrupts the circuit, resulting in an interruption of communication.');
                          
                    //data-packet sent
                  setTimeout(() => {
                    myMove_D3_S2("P3")
                    }, 2000);   
                  setTimeout(() => {
                    myMove_S2_S3("P3")
                    }, 5000);   
                  setTimeout(() => {
                    remove("P3")
                    document.getElementById("P3").style.top='';
                    document.getElementById("P3").style.left='';
                    document.getElementById("P3").style.display='none';
                    document.getElementById("P1").style.display='inline';
                    myMove_S3_S4_error("P1")
                    }, 7000);   

                     setTimeout(() => {
                            document.getElementById("hr5").classList.remove('connection_R_L');
                            document.getElementById("hr5").style.border='2px dashed black';
                            }, 9000);
                   
                     setTimeout(() => {
                    //ALERT connection fail
                    Swal.fire({
                      title: "Link Failure!!",
                      html: `A path setup <b style='color:red'>fails</b> between <b>Switch 3</b> and <b>Switch 4</b>; therefore, a data cannot be transmitted further.`,
                      icon: "error",
                      target: '.main-box ',
                      customClass:{
                        container:"position-absolute",
                        popup:"swal-popup",
                      },
                  }).then((result) => {
                      if (result.isConfirmed) {
                        document.getElementById("phase").innerText="Phase 3: Connection Termination"
                        speak('As the link between Switch 3 and Switch 4 has just broken, communication is disrupted, and the reserved path will be released for future use.')

                   setTimeout(() =>{
                      document.getElementById("P1").style.top='';
                      document.getElementById("P1").style.left='';
                      document.getElementById("P1").style.display='none';
                        document.getElementById("hr8").classList.remove('connection_R_L');
                        document.getElementById("hr8").classList.add('terminate_R_L');
                  },4000);

                setTimeout(() =>{
                  document.getElementById("hr8").classList.remove('terminate_R_L');
                    document.getElementById("hr8").style.boarder='2px  dashed black';
                  
              
                    document.getElementById("hr6").classList.remove('connection_R_L');
                    document.getElementById("hr6").classList.add('terminate_R_L');
                
                },6000)
                  

                  setTimeout(() =>{
                    document.getElementById("hr6").classList.remove('terminate_R_L');
                    document.getElementById("hr6").style.boarder='2px  dashed black';
                 document.getElementById("hr3").classList.remove('connection_R_L');
                    document.getElementById("hr3").classList.add('terminate_R_L');
                    
                  },8000)

                 , setTimeout(() =>{
                   document.getElementById("hr3").classList.remove('terminate_R_L');
                    document.getElementById("hr3").style.boarder='2px  dashed black';
                    document.getElementById("start").disabled=false;
                  },10000)
                 
                  setTimeout(() =>{
                          Swal.fire({
                                title: "Try Again!!",
                                html: `Please try for another devices.`,
                                icon: "info",
                                target: '.main-box ',
                                customClass:{
                                  container:"position-absolute",
                                  popup:"swal-popup",
                                },
                            })
                             document.getElementById("phase").innerText="Phase 1: Connection Establishment";
                             document.getElementById("phase").style.visibility='hidden';
                          },11000)

                      }
                    });
                            }, 12000);
                                      }
                                  });
                              }, 20000); 
                            
        }

    // device4------device3
    else{ 
        speak('Device 4 initiates a connection to Device 3. The request passes through intermediate switches, which only know their immediate neighbors.')

      setTimeout(() => {
      document.getElementById("hr8").classList.add('move_R_L');
      }, 2000);  

      setTimeout(() => {
      document.getElementById("hr5").classList.add('move_R_L');
      }, 4000);  

      setTimeout(() => {
      document.getElementById("hr6").classList.add('move_R_L');
      }, 6000); 

        setTimeout(() => {
      document.getElementById("hr3").classList.add('move_R_L');
      }, 8000); 

        setTimeout(() => {
        // send acknowledgement
          speak('Once the destination is found, an acknowledgment is sent back. Each switch reserves the path for exclusive communication.')
        }, 12000);  

        setTimeout(() => {
        document.getElementById("hr3").classList.remove('move_R_L');
        document.getElementById("hr3").classList.add('connection_L_R');
        }, 14000); 

        setTimeout(() => {
        document.getElementById("hr6").classList.remove('move_R_L');
        document.getElementById("hr6").classList.add('connection_L_R');
        }, 16000); 

          setTimeout(() => {
        document.getElementById("hr5").classList.remove('move_R_L');
        document.getElementById("hr5").classList.add('connection_L_R');
        }, 18000); 

        setTimeout(() => {
        document.getElementById("hr8").classList.remove('move_R_L');
        document.getElementById("hr8").classList.add('connection_L_R');
        }, 20000); 

          setTimeout(() => {

      // ALERT-CONNECTION ESTABLISH
      Swal.fire({
            title: "Connection established!!",
            html: `A dedicated path is set up between ${formValues.sender} and ${formValues.receiver}. The actual data is sent over this reserved path.`, 
            icon: "success",
            target: '.main-box ',
            customClass:{
              container:"position-absolute",
              popup:"swal-popup",
            },
        }).then((result) => {
            if (result.isConfirmed) {
              document.getElementById("phase").innerText="Phase 2: Data Transmission"
                document.getElementById("P4").style.display='inline';

        speak('Now, the data transmission begins. The path remains reserved for Device 4 and 3 for the entire duration of the session.');

              //data-packet sent
                   setTimeout(() => {
                    myMove_D4_S4("P4")
                    }, 1000); 

                    setTimeout(() => {
                    myMove_S4_S3("P4")
                    }, 4000); 

                    setTimeout(() => {
                    remove("P4")
                    document.getElementById("P1").style.display='inline'; 
                    myMove_S3_S2("P1")
                    }, 8000);

                    setTimeout(() => {
                    myMove_S2_D3("P1")
                    }, 12000);

                //ALERT DATA received
                setTimeout(() => {
                Swal.fire({
                  title: "Data Received!!",
                  html: `The data has been received by ${formValues.receiver}.`,
                  icon: "success",
                  target: '.main-box ',
                  customClass:{
                    container:"position-absolute",
                    popup:"swal-popup",
                  },
              }).then((result) => {
                  if (result.isConfirmed) {
                    document.getElementById("phase").innerText="Phase 3: Connection Termination"
                      remove("P1") 
                      
                        speak('When communication ends, the circuit is released, making the links available for other users.')

                    //connection-terminated-animation

                    setTimeout(() => {
                    document.getElementById("hr3").classList.remove('connection_L_R');
                    document.getElementById("hr3").classList.add('terminate_L_R');
                    }, 1000);
                    
                    setTimeout(() => {
                      document.getElementById("hr3").classList.remove('terminate_L_R');
                      document.getElementById("hr3").style.border='2px dashed black';
                      document.getElementById("hr6").classList.remove('connection_L_R');
                      document.getElementById("hr6").classList.add('terminate_L_R');
                    }, 3000);

                    setTimeout(() => {  
                      document.getElementById("hr6").classList.remove('terminate_L_R');
                      document.getElementById("hr6").style.border='2px dashed black';
                      document.getElementById("hr5").classList.remove('connection_L_R');
                      document.getElementById("hr5").classList.add('terminate_L_R');
                    }, 5000);
                  
                    setTimeout(() => {
                      document.getElementById("hr5").classList.remove('terminate_L_R');
                      document.getElementById("hr5").style.border='2px dashed black';
                       document.getElementById("hr8").classList.remove('connection_L_R');
                      document.getElementById("hr8").classList.add('terminate_L_R');
                    }, 7000);

                    setTimeout(() => {
                        
                      document.getElementById("hr8").classList.remove('terminate_L_R');
                      document.getElementById("hr8").style.border='2px dashed black';
                    }, 7000);
                  //ALERT TERMINATE
                    setTimeout(() =>
                    {
                      alert_terminate(formValues.sender,formValues.receiver);
                      document.getElementById('start').disabled=false;
                    },9500);
                  }
                });
                  }, 15000);

                        }
                  });
                
              }, 24000);
            }

      }

    // device3-----device5
      else if((formValues.sender=="Device 3" && formValues.receiver=="Device 5") || 
      (formValues.sender=="Device 5" && formValues.receiver=="Device 3"))
      {
        if(formValues.sender=="Device 3" && formValues.receiver=="Device 5")
        {
          speak('Device 3 initiates a connection to Device 5. The request passes through intermediate switches, which only know their immediate neighbors.')

        setTimeout(() =>{
        document.getElementById("hr3").classList.add('move_L_R');
        },2000);
        

        setTimeout(() =>{
        document.getElementById("hr6").classList.add('move_L_R');
        },4000);
        
        setTimeout(() =>{
        document.getElementById("hr9").classList.add('move_L_R');
        },6000);

        setTimeout(() =>{
            // send acknowledgement
             speak('Once the destination is found, an acknowledgment is sent back. Each switch reserves the path for exclusive communication.')
        },12000);

          setTimeout(() =>{ 
          document.getElementById("hr9").classList.remove('move_L_R');
          document.getElementById("hr9").classList.add('connection_R_L');
            },13000);

             setTimeout(() =>{ 
          document.getElementById("hr6").classList.remove('move_L_R');
          document.getElementById("hr6").classList.add('connection_R_L');
            },15000);
             setTimeout(() =>{ 
          document.getElementById("hr3").classList.remove('move_L_R');
          document.getElementById("hr3").classList.add('connection_R_L');
            },17000);
          
            setTimeout(() =>{ 
        // ALERT-CONNECTION ESTABLISH
          Swal.fire({
                title: "Connection Established!!",
                html: `A dedicated path is set up between Device 3 and Device 5. The actual data is sent over this reserved path.`,
                icon: "success",
                target: '.main-box ',
                customClass:{
                  container:"position-absolute",
                  popup:"swal-popup",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                  document.getElementById("phase").innerText="Phase 2: Data Transmission"
                  document.getElementById("P3").style.display='inline';

                  speak('Now, the data transmission begins. The path remains reserved for Device 5 and 3 for the entire duration of the session.');

                  //data-packet sent
                  setTimeout(() => {
                    myMove_D3_S2("P3")
                    }, 1000);   
                  setTimeout(() => {
                    myMove_S2_S3("P3")
                    }, 4000);   
                  setTimeout(() => {
                    remove("P3")
                    document.getElementById("P3").style.top='';
                    document.getElementById("P3").style.left='';
                    document.getElementById("P3").style.display='none';
                    document.getElementById("P1").style.display='inline';
                    myMove_S3_D5("P1")
                    }, 6000);
  
                    //ALERT PACKET received
                    setTimeout(() => {
                    Swal.fire({
                      title: "Data Received!!",
                      html: `The data has been received by ${formValues.receiver}.`,
                      icon: "success",
                      target: '.main-box ',
                      customClass:{
                      container:"position-absolute",
                      popup:"swal-popup",
                        },
                  }).then((result) => {
                      if (result.isConfirmed) {
                        document.getElementById("phase").innerText="Phase 3: Connection Termination"
                          remove("P1")
                      
                          speak('When communication ends, the circuit is released, making the links available for other users.')

                  // connection terminate
                       setTimeout(() =>{
                         document.getElementById("hr9").classList.remove('connection_R_L');
                        document.getElementById("hr9").classList.add('terminate_R_L');
                     },1000);

                  setTimeout(() =>{
                document.getElementById("hr9").classList.remove('terminate_R_L');  
                document.getElementById("hr9").style.border='2px dashed black';
                document.getElementById("hr6").classList.remove('connection_R_L');
                document.getElementById("hr6").classList.add('terminate_R_L');
                  },3000);

                  setTimeout(() =>{
                document.getElementById("hr6").classList.remove('terminate_R_L');  
                document.getElementById("hr6").style.border='2px dashed black';
                document.getElementById("hr3").classList.remove('connection_R_L');
                document.getElementById("hr3").classList.add('terminate_R_L');
                  },5000);

                  setTimeout(() =>{
                document.getElementById("hr3").classList.remove('terminate_R_L');  
                document.getElementById("hr3").style.border='2px dashed black';
                   },7000);

                  // ALERT TERMINATE
                setTimeout(() =>
                {
                alert_terminate(formValues.sender,formValues.receiver);
                document.getElementById('start').disabled=false;
                  },8000);
                }
              });
                    }, 13000); //packet end

                          }
                      });
                  }, 
                22000);
          }

    // device5------device3
      else{ 
         speak('Device 5 initiates a connection to Device 3. The request passes through intermediate switches, which only know their immediate neighbors.')

        setTimeout(() => {
        document.getElementById("hr9").classList.add('move_R_L');
        }, 2000);  

        setTimeout(() => {
        document.getElementById("hr6").classList.add('move_R_L');
        }, 4000);  

        setTimeout(() => {
        document.getElementById("hr3").classList.add('move_R_L');
        }, 6000); 

         setTimeout(() => {
          // send acknowledgement
           speak('Once the destination is found, an acknowledgment is sent back. Each switch reserves the path for exclusive communication.')
          }, 8000);  

          setTimeout(() => {
          document.getElementById("hr3").classList.remove('move_R_L');
          document.getElementById("hr3").classList.add('connection_L_R');
          }, 12000); 

          setTimeout(() => {
          document.getElementById("hr6").classList.remove('move_R_L');
          document.getElementById("hr6").classList.add('connection_L_R');
          }, 14000); 

           setTimeout(() => {
          document.getElementById("hr9").classList.remove('move_R_L');
          document.getElementById("hr9").classList.add('connection_L_R');
          }, 16000); 


           setTimeout(() => {

        // ALERT-CONNECTION ESTABLISH
        Swal.fire({
              title: "Connection established!!",
              html: `A dedicated path is set up between Device 5 and Device 3. The actual data is sent over this reserved path.`, 
              icon: "success",
              target: '.main-box ',
              customClass:{
                container:"position-absolute",
                popup:"swal-popup",
              },
          }).then((result) => {
              if (result.isConfirmed) {
                document.getElementById("phase").innerText="Phase 2: Data Transmission"
                  document.getElementById("P5").style.display='inline';

         speak('Now, the data transmission begins. The path remains reserved for Device 5 and 3 for the entire duration of the session.');

        //data-packet sent
          setTimeout(() => {
                    myMove_D5_S3("P5")
                    }, 1000); 

                    setTimeout(() => {
                    remove("P5")
                    document.getElementById("P5").style.top='';
                    document.getElementById("P5").style.left='';
                    document.getElementById("P5").style.display='none';
                    document.getElementById("P1").style.display='inline';
                    myMove_S3_S2("P1")
                    }, 6000); 

                    setTimeout(() => {
                    myMove_S2_D3("P1")
                    }, 9000);      
        

                  //ALERT DATA received
                  setTimeout(() => {
                  Swal.fire({
                    title: "Data Received!!",
                    html: `The data has been received by ${formValues.receiver}.`,
                    icon: "success",
                    target: '.main-box ',
                    customClass:{
                      container:"position-absolute",
                      popup:"swal-popup",
                    },
                }).then((result) => {
                    if (result.isConfirmed) {
                      document.getElementById("phase").innerText="Phase 3: Connection Termination"
                        remove("P1") 
                        
                         speak('When communication ends, the circuit is released, making the links available for other users.')

                      //connection-terminated
                      setTimeout(() => {
                      document.getElementById("hr3").classList.remove('connection_L_R');
                     document.getElementById("hr3").classList.add('terminate_L_R');
                      }, 1000);
                      
                      setTimeout(() => {
                        document.getElementById("hr3").classList.remove('terminate_L_R');
                        document.getElementById("hr3").style.border='2px dashed black';
                        document.getElementById("hr6").classList.remove('connection_L_R');
                        document.getElementById("hr6").classList.add('terminate_L_R');
                      }, 3000);

                      setTimeout(() => {  
                        document.getElementById("hr6").classList.remove('terminate_L_R');
                        document.getElementById("hr6").style.border='2px dashed black';
                         document.getElementById("hr9").classList.remove('connection_L_R');
                       document.getElementById("hr9").classList.add('terminate_L_R');
                      }, 5000);

                      setTimeout(() => {
                          
                        document.getElementById("hr9").classList.remove('terminate_L_R');
                        document.getElementById("hr9").style.border='2px dashed black';
                      }, 7000);


                    //ALERT TERMINATE
                      setTimeout(() =>
                      {
                        alert_terminate(formValues.sender,formValues.receiver);
                        document.getElementById('start').disabled=false;
                      },9000);
                    }
                 });
                   }, 12000);

                          }
                    });
                  
                }, 20000);
              }
      }

      // device3-----device6
      else if((formValues.sender=="Device 3" && formValues.receiver=="Device 6") ||
    (formValues.sender=="Device 6" && formValues.receiver=="Device 3"))
     {
      if(formValues.sender=="Device 3" && formValues.receiver=="Device 6")
      {
        speak('Device 3 initiates a connection to Device 6. The request passes through intermediate switches, which only know their immediate neighbors.')

        setTimeout(() => {
        document.getElementById("hr3").classList.add('move_L_R');
        }, 2000); 
        
        setTimeout(() => {
        document.getElementById("hr6").classList.add('move_L_R');
        }, 4000);  

        setTimeout(() => {
        document.getElementById("hr7").classList.add('move_L_R');
        }, 6000); 

        setTimeout(() => {
        document.getElementById("hr10").classList.add('move_L_R');
        }, 8000);  

        setTimeout(() => {
         //send acknowledgement
        speak('Once the destination is found, an acknowledgment is sent back. Each switch reserves the path for exclusive communication.')
        }, 10000);  


        setTimeout(() => {
        document.getElementById("hr10").classList.remove('move_L_R');
        document.getElementById("hr10").classList.add('connection_R_L');
        }, 12000); 
        
        setTimeout(() => { 
          document.getElementById("hr7").classList.remove('move_L_R');
          document.getElementById("hr7").classList.add('connection_R_L');
        }, 14000);  

        setTimeout(() => {
         document.getElementById("hr6").classList.remove('move_L_R');
         document.getElementById("hr6").classList.add('connection_R_L');
        }, 16000); 

        setTimeout(() => {
           document.getElementById("hr3").classList.remove('move_L_R');
           document.getElementById("hr3").classList.add('connection_R_L');
        }, 18000); 

        

        setTimeout(() => {
        
        // ALERT-CONNECTION ESTABLISH
        Swal.fire({
              title: "Connection Established!!",
              html: `A dedicated path is set up between ${formValues.sender} and ${formValues.receiver}. The actual data is sent over this reserved path.`,
              icon: "success",
              target: '.main-box ',
              customClass:{
                container:"position-absolute",
                popup:"swal-popup",
              },   
          }).then((result) => {
              if (result.isConfirmed) {
                document.getElementById("phase").innerText="Phase 2: Data Transmission"
                  document.getElementById("P3").style.display='inline';

                  speak('Now, the data transmission begins. The path remains reserved for Device 1 and 6 for the entire duration of the session.');

                  //data-packet sent
                   setTimeout(() => {
                    myMove_D3_S2("P3")
                    }, 1000); 

                  setTimeout(() => {
                    myMove_S2_S3("P3")
                    }, 5000); 

                  setTimeout(() => {
                    remove("P3")
                    document.getElementById("P1").style.display='inline';
                    myMove_S3_S5("P1")
                    }, 7000); 

                  setTimeout(() => {
                    myMove_S5_D6("P1")
                    }, 10000);
  
                
                
                  //ALERT DATA received
                  setTimeout(() => {
                  Swal.fire({
                    title: "Data Received!!", 
                    html: `The data has been received by ${formValues.receiver}.`,  
                    icon: "success",
                    target: '.main-box ',
                    customClass:{
                      container:"position-absolute",
                      popup:"swal-popup",
                    },
                }).then((result) => {
                    if (result.isConfirmed) {
                      document.getElementById("phase").innerText="Phase 3: Connection Termination"
                        remove("P1");

                        speak('When communication ends, the circuit is released, making the links available for other users.')

                      //connection-terminated
                      setTimeout(() => {
                     document.getElementById("hr10").classList.remove('connection_R_L');
                       document.getElementById("hr10").classList.add('terminate_R_L');
                      }, 1000);
                      
                      setTimeout(() => {
                          document.getElementById("hr10").classList.remove('terminate_R_L');
                          document.getElementById("hr10").style.border='2px dashed black';
                           document.getElementById("hr7").classList.remove('connection_R_L');
                          document.getElementById("hr7").classList.add('terminate_R_L');                
                      }, 3000);

                      setTimeout(() => {
                          document.getElementById("hr7").classList.remove('terminate_R_L');
                          document.getElementById("hr7").style.border='2px dashed black';
                          document.getElementById("hr6").classList.remove('connection_R_L');
                          document.getElementById("hr6").classList.add('terminate_R_L');                   
                      }, 5000);

                      setTimeout(() => {
                         document.getElementById("hr6").classList.remove('terminate_R_L');
                         document.getElementById("hr6").style.border='2px dashed black';
                         
                        document.getElementById("hr3").classList.remove('connection_R_L');
                        document.getElementById("hr3").classList.add('terminate_R_L');
                    
                      }, 7000);

                       setTimeout(() => {
                          document.getElementById("hr3").classList.remove('terminate_R_L');
                          document.getElementById("hr3").style.border='2px dashed black';
                      }, 9000);
               

                      //ALERT TERMINATE
                      setTimeout(() =>
                      {
                        alert_terminate(formValues.sender,formValues.receiver);
                        document.getElementById('start').disabled=false;
                      },10000);
                    }
                });
                  }, 14000);

                        }
                    });
                }, 24000);

              }
    // device6------device3
    else{ 
         speak('Device 6 initiates a connection to Device 3. The request passes through intermediate switches, which only know their immediate neighbors.')

        setTimeout(() => {
        document.getElementById("hr10").classList.add('move_R_L');
        }, 2000);  

        setTimeout(() => {
        document.getElementById("hr7").classList.add('move_R_L');
        }, 4000);  

        setTimeout(() => {
        document.getElementById("hr6").classList.add('move_R_L');
        }, 6000); 

        setTimeout(() => {
        document.getElementById("hr3").classList.add('move_R_L');
        }, 8000);  


         setTimeout(() => {
          // send acknowledgement
           speak('Once the destination is found, an acknowledgment is sent back. Each switch reserves the path for exclusive communication.')
          }, 12000);  

          setTimeout(() => {
          document.getElementById("hr3").classList.remove('move_R_L');
          document.getElementById("hr3").classList.add('connection_L_R');
          }, 14000); 

          setTimeout(() => {
          document.getElementById("hr6").classList.remove('move_R_L');
          document.getElementById("hr6").classList.add('connection_L_R');
          }, 16000); 

           setTimeout(() => {
          document.getElementById("hr7").classList.remove('move_R_L');
          document.getElementById("hr7").classList.add('connection_L_R');
          }, 18000); 

           setTimeout(() => {
          document.getElementById("hr10").classList.remove('move_R_L');
          document.getElementById("hr10").classList.add('connection_L_R');
          }, 20000); 

           setTimeout(() => {

        // ALERT-CONNECTION ESTABLISH
        Swal.fire({
              title: "Connection established!!",
              html: `A dedicated path is set up between ${formValues.sender} and ${formValues.receiver}. The actual data is sent over this reserved path.`, 
              icon: "success",
              target: '.main-box ',
              customClass:{
                container:"position-absolute",
                popup:"swal-popup",
              },
          }).then((result) => {
              if (result.isConfirmed) {
                document.getElementById("phase").innerText="Phase 2: Data Transmission"
                  document.getElementById("P6").style.display='inline';

         speak('Now, the data transmission begins. The path remains reserved for Device 6 and 3 for the entire duration of the session.');

        //data-packet sent
        setTimeout(() => {
                    myMove_D6_S5("P6")
                    }, 1000); 

                  setTimeout(() => {
                    myMove_S5_S3("P6")
                    }, 4000); 

                  setTimeout(() => {
                    remove("P6")
                    document.getElementById("P1").style.display='inline';
                    myMove_S3_S2("P1")
                    }, 8000); 

                    setTimeout(() => {
                    myMove_S2_D3("P1")
                    }, 12000);


                  //ALERT DATA received
                  setTimeout(() => {
                  Swal.fire({
                    title: "Data Received!!",
                    html: `The data has been received by ${formValues.receiver}.`,
                    icon: "success",
                    target: '.main-box ',
                    customClass:{
                      container:"position-absolute",
                      popup:"swal-popup",
                    },
                }).then((result) => {
                    if (result.isConfirmed) {
                      document.getElementById("phase").innerText="Phase 3: Connection Termination"
                        remove("P1") 
                        
                         speak('When communication ends, the circuit is released, making the links available for other users.')

                      //connection-terminated-animation

                      setTimeout(() => {
                      document.getElementById("hr3").classList.remove('connection_L_R');
                      document.getElementById("hr3").classList.add('terminate_L_R');
                      }, 1000);
                      
                      setTimeout(() => {
                        document.getElementById("hr3").classList.remove('terminate_L_R');
                        document.getElementById("hr3").style.border='2px dashed black';
                        document.getElementById("hr6").classList.remove('connection_L_R');
                        document.getElementById("hr6").classList.add('terminate_L_R');
                      }, 3000);

                      setTimeout(() => {  
                        document.getElementById("hr6").classList.remove('terminate_L_R');
                        document.getElementById("hr6").style.border='2px dashed black';
                         document.getElementById("hr7").classList.remove('connection_L_R');
                       document.getElementById("hr7").classList.add('terminate_L_R');
                      }, 5000);

                      setTimeout(() => {
                          
                        document.getElementById("hr7").classList.remove('terminate_L_R');
                        document.getElementById("hr7").style.border='2px dashed black';
                        document.getElementById("hr10").classList.remove('connection_L_R');
                        document.getElementById("hr10").classList.add('terminate_L_R');
                      }, 7000);

                      setTimeout(() => {      
                        document.getElementById("hr10").classList.remove('terminate_L_R');
                        document.getElementById("hr10").style.border='2px dashed black';
                      }, 9000);


                    //ALERT TERMINATE
                      setTimeout(() =>
                      {
                        alert_terminate(formValues.sender,formValues.receiver);
                        document.getElementById('start').disabled=false;
                      },9500);
                    }
                 });
                   }, 16000);

                          }
                    });
                  
                }, 24000);
              }
    }  

    // device4------device5
    else if((formValues.sender=="Device 4" && formValues.receiver=="Device 5") || 
      (formValues.sender=="Device 5" && formValues.receiver=="Device 4"))
      {
         if(formValues.sender=="Device 4" && formValues.receiver=="Device 5")
        {
           speak('A connection will be established between Device 4 and Device 5 via switches, creating a dedicated path.')
         
         setTimeout(() => {
        document.getElementById("hr8").classList.add('move_R_L');
        }, 2000); 
        
        setTimeout(() => {
        document.getElementById("hr5").classList.add('move_R_L');
        }, 4000);  

        setTimeout(() => {
        document.getElementById("hr9").classList.add('move_L_R');
        }, 6000); 


        setTimeout(() => {
         //send acknowledgement
       speak('As the destination has been found, an acknowledgment is sent, and the path is reserved by each switch.')
        }, 10000);  


        setTimeout(() => {
        document.getElementById("hr9").classList.remove('move_L_R');
        document.getElementById("hr9").classList.add('connection_R_L');
        }, 12000); 
        
        setTimeout(() => { 
          document.getElementById("hr5").classList.remove('move_R_L');
          document.getElementById("hr5").classList.add('connection_L_R');
        }, 14000);  

        setTimeout(() => {
         document.getElementById("hr8").classList.remove('move_R_L');
         document.getElementById("hr8").classList.add('connection_L_R');
        }, 16000); 

        setTimeout(() =>{
        
        // ALERT-CONNECTION ESTABLISH
          Swal.fire({
                title: "Connection established!!",
                html: `A dedicated path is set up between ${formValues.sender} and ${formValues.receiver}. The actual data is sent over this reserved path.`,
                icon: "success",
                target: '.main-box ',
                customClass:{
                  container:"position-absolute",
                  popup:"swal-popup",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                  document.getElementById("phase").innerText="Phase 2: Data Transmission"
                    document.getElementById("P4").style.display='inline';

                    speak('Now, the data transmission begins, and data will flow through the reserved path.');

                    //data-packet sent
                  setTimeout(() => {
                    myMove_D4_S4("P4")
                    }, 1000);   
                  setTimeout(() => {
                    myMove_S4_S3("P4")
                    }, 4000);   
                  setTimeout(() => {
                    remove("P4")
                    document.getElementById("P1").style.display='inline';
                    myMove_S3_D5("P1")
                    }, 6000);   
                    
                    //ALERT PACKET received
                    setTimeout(() => {
                    Swal.fire({
                      title: "Data Received!!",
                      html: `The data has been received by ${formValues.receiver}.`,
                      icon: "success",
                      target: '.main-box ',
                      customClass:{
                        container:"position-absolute",
                        popup:"swal-popup",
                      },
                  }).then((result) => {
                      if (result.isConfirmed) {
                        document.getElementById("phase").innerText="Phase 3: Connection Termination"
                         remove("P1")
                        speak('When communication ends, the circuit is released, making the links available for other users.')

                       //connection-terminated
                      setTimeout(() => {
                     document.getElementById("hr9").classList.remove('connection_R_L');
                       document.getElementById("hr9").classList.add('terminate_R_L');
                      }, 1000);
                      
                      setTimeout(() => {
                          document.getElementById("hr9").classList.remove('terminate_R_L');
                          document.getElementById("hr9").style.border='2px dashed black';
                           document.getElementById("hr5").classList.remove('connection_L_R');
                          document.getElementById("hr5").classList.add('terminate_L_R');                
                      }, 3000);

                      setTimeout(() => {
                          document.getElementById("hr5").classList.remove('terminate_L_R');
                          document.getElementById("hr5").style.border='2px dashed black';
                          document.getElementById("hr8").classList.remove('connection_L_R');
                          document.getElementById("hr8").classList.add('terminate_L_R');                   
                      }, 5000);

                      setTimeout(() => {
                         document.getElementById("hr8").classList.remove('terminate_L_R');
                         document.getElementById("hr8").style.border='2px dashed black';
                      }, 7000);

                  // ALERT TERMINATE
                setTimeout(() =>
                {
                alert_terminate(formValues.sender,formValues.receiver);
                document.getElementById('start').disabled=false;
                  },8000);
                      }
                    });
                  },10000);

                }
              });
            },18000)
          }
        // device5--------device4
        else{ 
         speak('Device 5 initiates a connection to Device 4. The request passes through intermediate switches, which only know their immediate neighbors.')

        setTimeout(() => {
        document.getElementById("hr9").classList.add('move_R_L');
        }, 2000);  

        setTimeout(() => {
        document.getElementById("hr5").classList.add('move_L_R');
        }, 4000);  

        setTimeout(() => {
        document.getElementById("hr8").classList.add('move_L_R');
        }, 6000); 

         setTimeout(() => {
          // send acknowledgement
           speak('Once the destination is found, an acknowledgment is sent back. Each switch reserves the path for exclusive communication.')
          }, 12000);  

          setTimeout(() => {
          document.getElementById("hr8").classList.remove('move_L_R');
          document.getElementById("hr8").classList.add('connection_R_L');
          }, 14000); 

          setTimeout(() => {
          document.getElementById("hr5").classList.remove('move_L_R');
          document.getElementById("hr5").classList.add('connection_R_L');
          }, 16000); 

           setTimeout(() => {
          document.getElementById("hr9").classList.remove('move_R_L');
          document.getElementById("hr9").classList.add('connection_L_R');
          }, 18000); 
 
           setTimeout(() => {

        // ALERT-CONNECTION ESTABLISH
        Swal.fire({
              title: "Connection established!!",
              html: `A dedicated path is set up between ${formValues.sender} and ${formValues.receiver}. The actual data is sent over this reserved path.`, 
              icon: "success",
              target: '.main-box ',
              customClass:{
                container:"position-absolute",
                popup:"swal-popup",
              },
          }).then((result) => {
              if (result.isConfirmed) {
                document.getElementById("phase").innerText="Phase 2: Data Transmission"
                  document.getElementById("P5").style.display='inline';

         speak('Now, the data transmission begins. The path remains reserved for Device 5 and 4 for the entire duration of the session.');

                    //data-packet sent
                    setTimeout(() => {
                    myMove_D5_S3("P5")
                    }, 1000); 

                    setTimeout(() => {
                     remove("P5")
                    document.getElementById("P5").style.top='';
                    document.getElementById("P5").style.left='';
                    document.getElementById("P5").style.display='none';
                    document.getElementById("P1").style.display='inline';
                    myMove_S3_S4("P1")
                    }, 6000); 

                    setTimeout(() => {
                    myMove_S4_D4("P1")
                    }, 8000);

                  //ALERT DATA received
                  setTimeout(() => {
                  Swal.fire({
                    title: "Data Received!!",
                    html: `The data has been received by ${formValues.receiver}.`,
                    icon: "success",
                    target: '.main-box ',
                    customClass:{
                      container:"position-absolute",
                      popup:"swal-popup",
                    },
                }).then((result) => {
                    if (result.isConfirmed) {
                      document.getElementById("phase").innerText="Phase 3: Connection Termination"
                        remove("P1") 
                        
                         speak('When communication ends, the circuit is released, making the links available for other users.')

                      //connection-terminated
                      setTimeout(() => {
                      document.getElementById("hr8").classList.remove('connection_R_L');
                     document.getElementById("hr8").classList.add('terminate_R_L');
                      }, 1000);
                      
                      setTimeout(() => {
                        document.getElementById("hr8").classList.remove('terminate_R_L');
                        document.getElementById("hr8").style.border='2px dashed black';
                        document.getElementById("hr5").classList.remove('connection_R_L');
                        document.getElementById("hr5").classList.add('terminate_R_L');
                      }, 3000);

                      setTimeout(() => {  
                        document.getElementById("hr5").classList.remove('terminate_R_L');
                        document.getElementById("hr5").style.border='2px dashed black';
                         document.getElementById("hr9").classList.remove('connection_L_R');
                       document.getElementById("hr9").classList.add('terminate_L_R');
                      }, 5000);

                      setTimeout(() => {
                          
                        document.getElementById("hr9").classList.remove('terminate_L_R');
                        document.getElementById("hr9").style.border='2px dashed black';
                      }, 7000);

                   
                    //ALERT TERMINATE
                      setTimeout(() =>
                      {
                        alert_terminate(formValues.sender,formValues.receiver);
                        document.getElementById('start').disabled=false;
                      },9000);
                    }
                 });
                   }, 13000);

                          }
                    });
                  
                }, 22000);
              }
      }

    // device4------device6
    else if((formValues.sender=="Device 4" && formValues.receiver=="Device 6") || 
      (formValues.sender=="Device 6" && formValues.receiver=="Device 4"))
      {
       if(formValues.sender=="Device 4" && formValues.receiver=="Device 6")
        {
           speak('A connection will be established between Device 4 and Device 6 via switches, creating a dedicated path.')

            //lines 8,5,7,10

           setTimeout(() => {  
            document.getElementById("hr8").classList.add('move_R_L');
            }, 2000); 

        setTimeout(() => {
        document.getElementById("hr5").classList.add('move_R_L');
        }, 4000); 
        
        setTimeout(() => {
        document.getElementById("hr7").classList.add('move_L_R');
        }, 6000);  

        setTimeout(() => {
        document.getElementById("hr10").classList.add('move_L_R');
        }, 8000); 


        setTimeout(() => {
         //send acknowledgement
       speak('As the destination has been found, an acknowledgment is sent, and the path is reserved by each switch.')
        }, 10000);  


        setTimeout(() => {
        document.getElementById("hr10").classList.remove('move_L_R');
        document.getElementById("hr10").classList.add('connection_R_L');
        }, 12000); 
        
        setTimeout(() => { 
          document.getElementById("hr7").classList.remove('move_L_R');
          document.getElementById("hr7").classList.add('connection_R_L');
        }, 14000);  

        setTimeout(() => {
         document.getElementById("hr5").classList.remove('move_R_L');
         document.getElementById("hr5").classList.add('connection_L_R');
        }, 16000); 

        setTimeout(() => {
         document.getElementById("hr8").classList.remove('move_R_L');
         document.getElementById("hr8").classList.add('connection_L_R');
        }, 18000); 


          setTimeout(() =>{
          
        // ALERT-CONNECTION ESTABLISH
          Swal.fire({
                title: "Connection Established!!",
                html: `A dedicated path is set up between ${formValues.sender} and ${formValues.receiver}. The actual data is sent over this reserved path.`,
                icon: "success",
                target: '.main-box ',
                customClass:{
                  container:"position-absolute",
                  popup:"swal-popup",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    document.getElementById("phase").innerText="Phase 2: Data Transmission"
                    document.getElementById("P4").style.display='inline';

                    speak('Now, the data transmission begins, and data will flow through the reserved path.');

                    //data-packet sent
                  setTimeout(() => {
                    myMove_D4_S4("P4")
                    }, 1000); 

                    setTimeout(() =>{
                    myMove_S4_S3("P4")
                    }, 4000); 
                      
                  setTimeout(() =>{
                    remove("P4")
                    document.getElementById("P1").style.display='inline';
                    myMove_S3_S5("P1")
                    }, 7000);  

                  setTimeout(() => {
                    document.getElementById('s_img_5').src='images/switch_error_5.png';
                    document.getElementById("hr10").classList.remove('connection_R_L');
                    document.getElementById("hr10").style.border='2px dashed black';
                    }, 10000);   
                  
                    //ALERT PACKET received
                    setTimeout(() => {
                    Swal.fire({
                      title: "Switch Failure!!",
                      html: `The data transmission stopped due to an <b style='color:red'>error</b> occurred at <b>Port 5</b> of <b>Switch 5</b>.`,
                      icon: "error",
                      target: '.main-box ',
                      customClass:{
                        container:"position-absolute",
                        popup:"swal-popup",
                      },
                  }).then((result) => {
                      if (result.isConfirmed) {
                         speak('After a timeout, the data will be retransmitted through the reserved path.');
                         remove("P1")
                         document.getElementById("P4").style.display='inline';
                         
                            //data-packet sent
                          setTimeout(() => {
                            myMove_D4_S4("P4")
                            }, 1000); 

                            setTimeout(() =>{
                            myMove_S4_S3("P4")
                            }, 4000); 
                              
                          setTimeout(() =>{
                            remove("P4")
                            document.getElementById("P1").style.display='inline';
                            myMove_S3_S5("P1")
                            }, 7000);  


                          setTimeout(() => {
                          Swal.fire({
                            title: "Switch Failure!!",
                            html: `The data transmission stopped due to an <b style='color:red'>error</b> occurred at <b>Port 5</b> of <b>Switch 5</b>.`,
                            icon: "error",
                            target: '.main-box ',
                            customClass:{
                              container:"position-absolute",
                              popup:"swal-popup",
                            },
                        }).then((result) => {

                            if (result.isConfirmed) {
                              document.getElementById("phase").innerText="Phase 3: Connection Termination"
                              remove("P1");
                              speak('After timeout, the resource termination will start')
                            
                                 //connection-terminated

                            setTimeout(() => {
                                document.getElementById("hr7").classList.remove('connection_R_L');
                                document.getElementById("hr7").classList.add('terminate_R_L');                
                            }, 1000);

                            setTimeout(() => {
                                document.getElementById("hr7").classList.remove('terminate_R_L');
                                document.getElementById("hr7").style.border='2px dashed black';
                                document.getElementById("hr5").classList.remove('connection_L_R');
                                document.getElementById("hr5").classList.add('terminate_L_R');                   
                            }, 3000);

                            setTimeout(() => {
                              document.getElementById("hr5").classList.remove('terminate_L_R');
                              document.getElementById("hr5").style.border='2px dashed black';
                              document.getElementById("hr8").classList.remove('connection_L_R');
                                document.getElementById("hr8").classList.add('terminate_L_R');   
                            }, 5000);

                            setTimeout(() => {
                              document.getElementById("hr8").classList.remove('terminate_L_R');
                              document.getElementById("hr8").style.border='2px dashed black';
                              document.getElementById('s_img_5').src='images/switch.png';
                            }, 8000);

                            // ALERT TERMINATE

                            setTimeout(() =>
                            {
                              alert_terminate(formValues.sender,formValues.receiver);
                              document.getElementById('start').disabled=false;
                            },9000);

                            }
                          
                            },8000);
                          
                          },10000);

                    }});
                  },12000);
                }
              });
            },20000);
          }

      //device6--------device4
      else 
      {
          speak('Device 6 initiates a connection to Device 4. The request passes through intermediate switches, which only know their immediate neighbors.')

        setTimeout(() =>{
        document.getElementById("hr10").classList.add('move_R_L');
        },2000);
        
        setTimeout(() =>{
        document.getElementById("hr7").classList.add('move_R_L');
        },4000);
        
        setTimeout(() =>{
        document.getElementById("hr5").classList.add('move_L_R');
        },6000);

         setTimeout(() =>{
        document.getElementById("hr8").classList.add('move_L_R');
        },8000);

        setTimeout(() =>{
            // send acknowledgement
             speak('Once the destination is found, an acknowledgment is sent back. Each switch reserves the path for exclusive communication.')
        },12000);

          setTimeout(() =>{ 
          document.getElementById("hr8").classList.remove('move_L_R');
          document.getElementById("hr8").classList.add('connection_R_L');
            },14000);

             setTimeout(() =>{ 
          document.getElementById("hr5").classList.remove('move_L_R');
          document.getElementById("hr5").classList.add('connection_R_L');
            },16000);

             setTimeout(() =>{ 
          document.getElementById("hr7").classList.remove('move_R_L');
          document.getElementById("hr7").classList.add('connection_L_R');
            },18000);

             setTimeout(() =>{ 
          document.getElementById("hr10").classList.remove('move_R_L');
          document.getElementById("hr10").classList.add('connection_L_R');
            },20000);

         setTimeout(() =>{ 
        // ALERT-CONNECTION ESTABLISH
          Swal.fire({
                title: "Connection Established!!",
                html: `A dedicated path is set up between Device6 and Device 4. The actual data is sent over this reserved path.`,
                icon: "success",
                target: '.main-box ',
                customClass:{
                  container:"position-absolute",
                  popup:"swal-popup",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                  document.getElementById("phase").innerText="Phase 2: Data Transmission"
                  document.getElementById("P6").style.display='inline';

                  speak('Now, the data transmission begins. The path remains reserved for Device 6 and 4 for the entire duration of the session.');

                  //data-packet sent
                  setTimeout(() => {
                    myMove_D6_S5("P6")
                    }, 1000); 

                    setTimeout(() => {
                    myMove_S5_S3("P6")
                    }, 4000); 

                    setTimeout(() => {
                      remove("P6")
                      document.getElementById("P6").style.top='';
                      document.getElementById("P6").style.left='';
                      document.getElementById("P6").style.display='none';
                      document.getElementById("P1").style.display='inline';
                    myMove_S3_S4("P1")
                    }, 6000);

                    setTimeout(() => {
                    myMove_S4_D4("P1")
                    }, 8000);
                    
                    //ALERT PACKET received
                    setTimeout(() => {
                    Swal.fire({
                      title: "Data Received!!",
                      html: `The data has been received by ${formValues.receiver}.`,
                      icon: "success",
                      target: '.main-box ',
                      customClass:{
                      container:"position-absolute",
                      popup:"swal-popup",
                        },
                  }).then((result) => {
                      if (result.isConfirmed) {
                        document.getElementById("phase").innerText="Phase 3: Connection Termination"
                          remove("P1")
                      
                          speak('When communication ends, the circuit is released, making the links available for other users.')

                  // connection terminate
                       setTimeout(() =>{
                      document.getElementById("hr8").classList.remove('connection_R_L');
                      document.getElementById("hr8").classList.add('terminate_R_L');
                     },1000);

                  setTimeout(() =>{
                document.getElementById("hr8").classList.remove('terminate_R_L');  
                document.getElementById("hr8").style.border='2px dashed black';
                document.getElementById("hr5").classList.remove('connection_R_L');
                document.getElementById("hr5").classList.add('terminate_R_L');
                  },3000);

                  setTimeout(() =>{
                document.getElementById("hr5").classList.remove('terminate_R_L');  
                document.getElementById("hr5").style.border='2px dashed black';
                document.getElementById("hr7").classList.remove('connection_L_R');
                document.getElementById("hr7").classList.add('terminate_L_R');
                  },5000);

                  setTimeout(() =>{
                document.getElementById("hr7").classList.remove('terminate_L_R');  
                document.getElementById("hr7").style.border='2px dashed black';
                 document.getElementById("hr10").classList.remove('connection_L_R');
                document.getElementById("hr10").classList.add('terminate_L_R');
                   },7000);

                    setTimeout(() =>{
                      
                      document.getElementById("hr10").classList.remove('terminate_L_R');  
                      document.getElementById("hr10").style.border='2px dashed black'; 
                      },9000);

                  // ALERT TERMINATE
                setTimeout(() =>
                {
                alert_terminate(formValues.sender,formValues.receiver);
                document.getElementById('start').disabled=false;
                  },10000);
                }
              });
                    }, 12000); //packet end

                          }
                      });
                  }, 
                22000);
                }
              
      }

    // device5-----device6
    else if((formValues.sender=="Device 5" && formValues.receiver=="Device 6") || 
      (formValues.sender=="Device 6" && formValues.receiver=="Device 5"))
      {
        if(formValues.sender=="Device 5" && formValues.receiver=="Device 6")
        {
           speak('A connection will be established between Device 5 and Device 6 via switches, creating a dedicated path.')
           setTimeout(() => {
        document.getElementById("hr9").classList.add('move_R_L');
        }, 2000); 
        
        setTimeout(() => {
        document.getElementById("hr7").classList.add('move_L_R');
        }, 4000);  

        setTimeout(() => {
        document.getElementById("hr10").classList.add('move_L_R');
        }, 6000); 


        setTimeout(() => {
         //send acknowledgement
       speak('As the destination has been found, an acknowledgment is sent, and the path is reserved by each switch.')
        }, 10000);  


        setTimeout(() => {
        document.getElementById("hr10").classList.remove('move_L_R');
        document.getElementById("hr10").classList.add('connection_R_L');
        }, 12000); 
        
        setTimeout(() => { 
          document.getElementById("hr7").classList.remove('move_L_R');
          document.getElementById("hr7").classList.add('connection_R_L');
        }, 14000);  

        setTimeout(() => {
         document.getElementById("hr9").classList.remove('move_R_L');
         document.getElementById("hr9").classList.add('connection_L_R');
        }, 16000); 


          setTimeout(() =>{
          
        // ALERT-CONNECTION ESTABLISH
          Swal.fire({
                title: "Connection Established!!",
                html: `A dedicated path is set up between ${formValues.sender} and ${formValues.receiver}. The actual data is sent over this reserved path.`,
                icon: "success",
                target: '.main-box ',
                customClass:{
                  container:"position-absolute",
                  popup:"swal-popup",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    document.getElementById("phase").innerText="Phase 2: Data Transmission"
                    document.getElementById("P5").style.display='inline';

                    speak('Now, the data transmission begins, and data will flow through the reserved path.');

                    //data-packet sent
                  setTimeout(() => {
                    myMove_D5_S3("P5")
                    }, 1000); 
                      
                  setTimeout(() =>{
                    remove("P5")
                    document.getElementById("P1").style.display='inline';
                    myMove_S3_S5("P1")
                    }, 6000);  

                  setTimeout(() => {
                    document.getElementById('s_img_5').src='images/switch_error_5.png';
                    document.getElementById("hr10").classList.remove('connection_R_L');
                    document.getElementById("hr10").style.border='2px dashed black';
                    }, 8000);   
                  
                    //ALERT PACKET received
                    setTimeout(() => {
                    Swal.fire({
                      title: "Switch Failure!!",
                      html: `The data transmission stopped due to an <b style='color:red'>error</b> occurred at <b>Port 5</b> of <b>Switch 5</b>.`,
                      icon: "error",
                      target: '.main-box ',
                      customClass:{
                        container:"position-absolute",
                        popup:"swal-popup",
                      },
                  }).then((result) => {
                      if (result.isConfirmed) {
                         speak('After a timeout, the data will be retransmitted through the reserved path.');
                         remove("P1")
                         document.getElementById("P5").style.display='inline';
                          //data-packet sent
                        setTimeout(() => {
                          myMove_D5_S3("P5")
                          }, 1000); 
                            
                        setTimeout(() =>{
                          remove("P5")
                          document.getElementById("P1").style.display='inline';
                          myMove_S3_S5("P1")
                          }, 6000);  

                          setTimeout(() => {
                          Swal.fire({
                            title: "Switch Failure!!",
                            html: `The data transmission stopped due to an <b style='color:red'>error</b> occurred at <b>Port 5</b> of <b>Switch 5</b>.`,
                            icon: "error",
                            target: '.main-box ',
                            customClass:{
                              container:"position-absolute",
                              popup:"swal-popup",
                            },
                        }).then((result) => {

                            if (result.isConfirmed) {
                              document.getElementById("phase").innerText="Phase 3: Connection Termination"
                              remove("P1");
                              speak('After timeout, the resource termination will start')
                            
                                 //connection-terminated
                      
                            
                            setTimeout(() => {
                          
                                document.getElementById("hr7").classList.remove('connection_R_L');
                                document.getElementById("hr7").classList.add('terminate_R_L');                
                            }, 1000);

                            setTimeout(() => {
                                document.getElementById("hr7").classList.remove('terminate_R_L');
                                document.getElementById("hr7").style.border='2px dashed black';
                                document.getElementById("hr9").classList.remove('connection_L_R');
                                document.getElementById("hr9").classList.add('terminate_L_R');                   
                            }, 3000);

                            setTimeout(() => {
                              document.getElementById("hr9").classList.remove('terminate_L_R');
                              document.getElementById("hr9").style.border='2px dashed black';
                              document.getElementById('s_img_5').src='images/switch.png';
                            }, 5000);

                            // ALERT TERMINATE

                            setTimeout(() =>
                            {
                              alert_terminate(formValues.sender,formValues.receiver);
                              document.getElementById('start').disabled=false;
                            },6000);

                            }
                          
                            },8000);
                          
                          },8000);

                    }});
                  },10000);
                }
              });
            },18000);
          }
    

    //device6------device5
    else{ 
         speak('Device 6 initiates a connection to Device 5. The request passes through intermediate switches, which only know their immediate neighbors.')

        setTimeout(() => {
        document.getElementById("hr10").classList.add('move_R_L');
        }, 2000);  

        setTimeout(() => {
        document.getElementById("hr7").classList.add('move_R_L');
        }, 4000);  

        setTimeout(() => {
        document.getElementById("hr9").classList.add('move_L_R');
        }, 6000); 

         setTimeout(() => {
          // send acknowledgement
           speak('Once the destination is found, an acknowledgment is sent back. Each switch reserves the path for exclusive communication.')
          }, 12000);  

          setTimeout(() => {
          document.getElementById("hr9").classList.remove('move_L_R');
          document.getElementById("hr9").classList.add('connection_R_L');
          }, 14000); 

          setTimeout(() => {
          document.getElementById("hr7").classList.remove('move_R_L');
          document.getElementById("hr7").classList.add('connection_L_R');
          }, 16000); 

           setTimeout(() => {
          document.getElementById("hr10").classList.remove('move_R_L');
          document.getElementById("hr10").classList.add('connection_L_R');
          }, 18000); 
 
           setTimeout(() => {

        // ALERT-CONNECTION ESTABLISH
        Swal.fire({
              title: "Connection Established!!",
              html: `A dedicated path is set up between ${formValues.sender} and ${formValues.receiver}. The actual data is sent over this reserved path.`, 
              icon: "success",
              target: '.main-box ',
              customClass:{
                container:"position-absolute",
                popup:"swal-popup",
              },
          }).then((result) => {
              if (result.isConfirmed) {
                document.getElementById("phase").innerText="Phase 2: Data Transmission"
                  document.getElementById("P6").style.display='inline';

         speak('Now, the data transmission begins. The path remains reserved for Device 6 and 5 for the entire duration of the session.');

                    //data-packet sent
                       setTimeout(() => {
            myMove_D6_S5("P6")
            }, 1000); 

            setTimeout(() => {
            myMove_S5_S3("P6")
            }, 4000); 

            setTimeout(() => {
            remove("P6")
            myMove_S3_D5("P1")
            document.getElementById("P1").style.display='inline';
            }, 7000); 

                  //ALERT DATA received
                  setTimeout(() => {
                  Swal.fire({
                    title: "Data Received!!",
                    html: `The data has been received by ${formValues.receiver}.`,
                    icon: "success",
                    target: '.main-box ',
                    customClass:{
                      container:"position-absolute",
                      popup:"swal-popup",
                    },
                }).then((result) => {
                    if (result.isConfirmed) {
                      document.getElementById("phase").innerText="Phase 3: Connection Termination"
                        remove("P1") 
                        
                         speak('When communication ends, the circuit is released, making the links available for other users.')

                      //connection-terminated
                      setTimeout(() => {
                        document.getElementById("hr9").classList.remove('connection_R_L');
                       document.getElementById("hr9").classList.add('terminate_R_L');
                      }, 1000);
                      
                      setTimeout(() => {
                         document.getElementById("hr9").classList.remove('terminate_R_L');
                        document.getElementById("hr9").style.border='2px dashed black';
                        
                        document.getElementById("hr7").classList.remove('connection_L_R');
                        document.getElementById("hr7").classList.add('terminate_L_R');
                      }, 3000);

                      setTimeout(() => {  
                        document.getElementById("hr7").classList.remove('terminate_L_R');
                        document.getElementById("hr7").style.border='2px dashed black';
                        document.getElementById("hr10").classList.remove('connection_L_R');
                     document.getElementById("hr10").classList.add('terminate_L_R'); 
                      }, 5000);

                      setTimeout(() => {
                      document.getElementById("hr10").classList.remove('terminate_L_R');
                        document.getElementById("hr10").style.border='2px dashed black';    
                       
                      }, 7000);

                   
                    //ALERT TERMINATE
                      setTimeout(() =>
                      {
                        alert_terminate(formValues.sender,formValues.receiver);
                        document.getElementById('start').disabled=false;
                      },9000);
                    }
                 });
                   }, 13000);

                          }
                    });
                  
                }, 24000);
              }
      
      }
  
  }
)();
}


}

function remove(id)
{
  document.getElementById(id).style.top='';
  document.getElementById(id).style.left='';
  document.getElementById(id).style.display='none';
}

let speechReady = false;
async function speak(text, callback) {
if (!speechReady) {
        // Prime the engine with a silent utterance
        const dummy = new SpeechSynthesisUtterance('...');
        dummy.volume = 0; // Silent
        window.speechSynthesis.speak(dummy);
    
        await new Promise(res => {
          dummy.onend = () => {
            speechReady = true;
            res();
          };
        });
    
        // Optional: small delay after dummy
        await new Promise(res => setTimeout(res, 300));
      }
    
      // Real utterance
      const msg = new SpeechSynthesisUtterance(text);

      const voices = speechSynthesis.getVoices();
    //   msg.voice = voices.find(voice => voice.name === 'Microsoft Ravi - English (India)');
      msg.voice = voices.find(voice => voice.name.includes("Ravi")) || voices[0];
      msg.volume = 1;
      msg.rate = .7;
      msg.pitch = 1;
    
      msg.onend = () => {
        if (callback) callback();
      };

    setTimeout(window.speechSynthesis.speak(msg), 600);
    //  window.speechSynthesis.cancel();
    }

      window.addEventListener('beforeunload', function () {
          window.speechSynthesis.cancel();
  });