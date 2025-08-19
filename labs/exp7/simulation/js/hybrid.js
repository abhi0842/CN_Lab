

    var pcount; var output;  var ak;  var lcount;  var comon; var value; 
    var i;   var j; var k; var l ; var m; var n;
    var isw;   var swon;      var swcount;  var bk; var count=1; var hcount=0; var scount=0;
    
    pcount=0;   pccount=0;       lcount=0;   comon =0;   value=0;
    isw=0;    swon=0;    swcount=0;   
    m=11;  n=21;
 
    var flag_pc=0; var flag_lp=0; var flag_hb=0; var flag_sw=0;var conn=0;

    var sourceArray = [];
    var targetArray = [];
  


    function initialise(){
          pccount=0;      lcount=0;   comon =0;   value=0;
        isw=0;    swon=0;    swcount=0;   
        m=11;  n=21;
        Swal.fire({
          backdrop:false,
          target:'#mid',
          customClass: {
          container: 'position-absolute'
          },
            title:"Hybrid Toplogy",
            text:"It is a combination of two or more different topologies. Here we create a hybrid topology of ring and star topologies.",
            icon:"info",
            });
     
      

        }


    function imgDraw(id){
      
        if(id=="com" || id=="lap"){       
            comon=1;
            ak=id;

            if(comon==1)
            {
              
            if(ak=="com" && count==1)
            {
              document.getElementById('com').onclick = null;
              document.getElementById('com').style.opacity = 0.5;
      
              document.getElementById('lap').onclick = null;
              document.getElementById('lap').style.opacity = 0.5;
      
             var x=document.getElementById('PCH1');
             x.style.visibility='visible';
        
             var x=document.getElementById('PCH2');
             x.style.visibility='visible';
         
                       
             flag_pc=1;  
             pcount++;
      
        }

        if(ak=="com" && count==2)
        {
          document.getElementById('com').onclick = null;
              document.getElementById('com').style.opacity = 0.5;
      
              document.getElementById('lap').onclick = null;
              document.getElementById('lap').style.opacity = 0.5;
  
            
         var x=document.getElementById('PCH3');
         x.style.visibility='visible';
 
         var x=document.getElementById('PCH4');
         x.style.visibility='visible';
          
         if(pcount==1)
         {
          document.getElementById("p3").innerHTML = "PC-3";
          document.getElementById("p4").innerHTML = "PC-4";
         }
         flag_pc=2;  
         
  
    }
      
                  if(ak=="lap" && count==1){
      
                    document.getElementById('com').onclick = null;
                    document.getElementById('com').style.opacity = 0.5;
            
                    document.getElementById('lap').onclick = null;
                    document.getElementById('lap').style.opacity = 0.5;
      
             var x=document.getElementById('LPH1');
             x.style.visibility='visible';
        
             var x=document.getElementById('LPH2');
             x.style.visibility='visible';
         
               
            flag_lp=1;
            lcount++;
                }

              if(ak=="lap" && count==2){
      
                document.getElementById('com').onclick = null;
                document.getElementById('com').style.opacity = 0.5;
        
                document.getElementById('lap').onclick = null;
                document.getElementById('lap').style.opacity = 0.5;
  
         
         var x=document.getElementById('LPH3');
         x.style.visibility='visible';

         var x=document.getElementById('LPH4');
         x.style.visibility='visible';
    
         flag_lp=2;
         if(lcount==1)
         {
          document.getElementById("l3").innerHTML = "Laptop-3";
          document.getElementById("l4").innerHTML = "Laptop-4";
         }
            }  
                  comon =0;
                
          }}

       if(id=="iswitch" || id=="iswitch1"){
            swon=1;   bk=id;   
            if(swon==1){
         
              if(bk=="iswitch" && count==1)
              {
                document.getElementById('iswitch').onclick = null;
                document.getElementById('iswitch').style.opacity = 0.5;
  
                document.getElementById('iswitch1').onclick = null;
                document.getElementById('iswitch1').style.opacity = 0.5;
              
  
                var x=document.getElementById('HUBH1');
                x.style.visibility='visible';
  
                var x=document.getElementById('HUBH2');
                x.style.visibility='visible';

                flag_hb=1;
               hcount++;
   
            }

            if(bk=="iswitch" && count==2)
              {
                document.getElementById('iswitch').onclick = null;
                document.getElementById('iswitch').style.opacity = 0.5;
  
                document.getElementById('iswitch1').onclick = null;
                document.getElementById('iswitch1').style.opacity = 0.5;
              
                  var x=document.getElementById('HUBH3');
                x.style.visibility='visible';
                flag_hb=2;

            if(hcount==1)
           {
            document.getElementById("h3").innerHTML = "HUB-3";
           
           }
   
            }
  
              if(bk=="iswitch1" && count==1)
              {
                document.getElementById('iswitch1').onclick = null;
                document.getElementById('iswitch1').style.opacity = 0.5;
  
                document.getElementById('iswitch').onclick = null;
                document.getElementById('iswitch').style.opacity = 0.5;
  
                var x=document.getElementById('SWITCHH1');
                x.style.visibility='visible';
                var x=document.getElementById('SWITCHH2');
                x.style.visibility='visible';
               
                flag_sw=1;
                     scount++;           
          }

          if(bk=="iswitch1" && count==2)
          {
            document.getElementById('iswitch1').onclick = null;
            document.getElementById('iswitch1').style.opacity = 0.5;

            document.getElementById('iswitch').onclick = null;
            document.getElementById('iswitch').style.opacity = 0.5;

            var x=document.getElementById('SWITCHH3');
            x.style.visibility='visible';
         
            flag_sw=2;
            if(scount==1)
            {
             document.getElementById("s3").innerHTML = "SWITCH-3";
            
            }
                            
      }
              
              swon =0;
             
          } 
            } 
            connection();
        }
       

        function connection()
        {
         
          var c = document.getElementById("mid");
          instance = jsPlumb.getInstance({});
          instance.setContainer('c');

       
      //PC for ring
      instance.bind("ready", function() {
        if(flag_pc==1 && count==1)
        {
          var p11 = instance.addEndpoint("PCH1", {
            endpoint: ['Dot', { radius:8}],
            enabled: false, //dragging disabled
            anchor: ["LeftMiddle"], //position
            isSource: true,
            isTarget: true,
            uuid:"p11",
            connector: 'Straight',
            connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
            endpointStyle:{ fill:"black"},
            connectionsDetachable: false,
          }); 

          var p12 = instance.addEndpoint("PCH1", {
            endpoint: ['Dot', { radius:8}],
            enabled: false, //dragging disabled
            anchor: ["RightMiddle"], //position
            isSource: true,
            isTarget: true,
            uuid:"p12",
            connector: 'Straight',
            connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
            endpointStyle:{ fill:"black"},
            connectionsDetachable: false,
          }); 

        var p21=instance.addEndpoint("PCH2", {
          endpoint: 'Dot',
          enabled: false, 
          anchor: ["LeftMiddle"],
          isSource: true,
          isTarget: true,
          uuid:"p21",
          connector: 'Straight',
          connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
          endpointStyle:{ fill:"black",radius:8},
          connectionsDetachable: false,
        });

        var p22=instance.addEndpoint("PCH2", {
          endpoint: 'Dot',
          enabled: false, 
          anchor: ["RightMiddle"],
          isSource: true,
          isTarget: true,
          uuid:"p22",
          connector: 'Straight',
          connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
          endpointStyle:{ fill:"black",radius:8},
          connectionsDetachable: false,
        });
       
  
        }
        // PC for star
        if(flag_pc==2 && count==2)
        {

  
      var p3 = instance.addEndpoint("PCH3", {
        endpoint: ['Dot', { radius:8}],
        enabled: false, 
        anchor: ["RightMiddle"],
        isSource: true,
        isTarget: true,
        uuid:"p3",
        connector: 'Straight',
        connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
        endpointStyle:{ fill:"black"},
        connectionsDetachable: false,
      });
  
   var p4 = instance.addEndpoint("PCH4", {
      endpoint: ['Dot', { radius:8}],
      enabled: false, 
        anchor: ["LeftMiddle"],
      isSource: true,
      isTarget: true,
      uuid:"p4",
      connector: 'Straight',
      connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
      endpointStyle:{ fill:"black"},
      connectionsDetachable: false,
    });

  
        }
//PC for hybrid
        if(flag_pc==2  && count==3)
        {
          var p23=instance.addEndpoint("PCH2", {
            endpoint: 'Dot',
            enabled: false, 
            anchor: [[0,0,0,0,50,90]],
            isSource: true,
            isTarget: true,
            uuid:"p23",
            connector: 'Straight',
            connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
            endpointStyle:{ fill:"black",radius:8},
            connectionsDetachable: false,
          });
        }
      //LAPTOP 
     if(flag_lp==1 && count==1)
{
  var l11 = instance.addEndpoint("LPH1", {
    endpoint: "Dot",
    anchor: [[ 0, 0, 0, 1,108,70]],
    enabled: false, 
    isSource: true,
    isTarget: true,
    uuid:"l11",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"black",  radius:6 },
    connectionsDetachable: false,   
  });

  var l12 = instance.addEndpoint("LPH1", {
    endpoint: "Dot",
    anchor: [[ 0, 0, 0, 1,1,70]],
    enabled: false, 
    isSource: true,
    isTarget: true,
    uuid:"l12",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"black",  radius:6 },
    connectionsDetachable: false,   
  }); 
  
  var l21  = instance.addEndpoint("LPH2", {
    endpoint: "Dot",
    anchor: [[ 0, 0, 0, 1,1,70]],
    enabled: false, 
    isSource: true,
    isTarget: true,
    uuid:"l21",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"black",  radius:6 },
    connectionsDetachable: false,
    });

  var l22  = instance.addEndpoint("LPH2", {
  endpoint: "Dot",
  anchor: [[ 0, 0, 0, 1,108,70]],
  enabled: false, 
  isSource: true,
  isTarget: true,
  uuid:"l22",
  connector: 'Straight',
  connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
  endpointStyle:{ fill:"black",  radius:6 },
  connectionsDetachable: false,
  });



       }
  
     //laptop for star
     if(flag_lp==2 && count==2)
     {
           
       var l3 = instance.addEndpoint("LPH3", {
       endpoint: "Dot",
       enabled: false, 
       anchor: [[ 0, 0, 0, 1,108,70]],
       isSource: true,
       isTarget: true,
       uuid:"l3",
       connector: 'Straight',
       connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
       endpointStyle:{ fill:"black",  radius:6 },
       connectionsDetachable: false,
       });
     
       
      var l4 = instance.addEndpoint("LPH4", {
       endpoint: "Dot",
       enabled: false, 
       anchor: [[ 0, 0, 0, 1,1,70]],
       isSource: true,
       isTarget: true,
       uuid:"l4",
       connector: 'Straight',
         connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
         endpointStyle:{ fill:"black",  radius:6 },
         connectionsDetachable: false,
       });
            } 
// laptop for hybrid
            if(flag_lp==2 && count==3)
            {
              var l23  = instance.addEndpoint("LPH2", {
                endpoint: "Dot",
                anchor: ["Bottom"],
                enabled: false, 
                isSource: true,
                isTarget: true,
                uuid:"l23",
                connector: 'Straight',
                connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
                endpointStyle:{ fill:"black",  radius:6 },
                connectionsDetachable: false,
                });
            }
      //HUB for ring
      if(flag_hb==1 && count==1)
{
  var h11 = instance.addEndpoint("HUBH1", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,46,54]],
    isSource: true,
    isTarget: true,
    uuid:"h11",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"red", radius:4 },
    connectionsDetachable: false,
  } );

 var h12= instance.addEndpoint("HUBH1", {
  endpoint: "Dot",
  enabled: false, 
  anchor: [[ 0, 0, 0, 1,64,54]],
  isSource: true,
  isTarget: true,
  uuid:"h12",
  connector: 'Straight',
  connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
  endpointStyle:{ fill:"red", radius:4 },
  connectionsDetachable: false,
  });

  var h21 = instance.addEndpoint("HUBH2", {
  endpoint: "Dot",
  enabled: false, 
  anchor: [[ 0, 0, 0, 1,46,54]],
  isSource: true,
  isTarget: true,
  uuid:"h21",
  connector: 'Straight',
  connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
  endpointStyle:{ fill:"red", radius:4 },
  connectionsDetachable: false,
  } );

 var h22 = instance.addEndpoint("HUBH2", {
  endpoint: "Dot",
  enabled: false, 
  anchor: [[ 0, 0, 0, 1,64,54]],
  isSource: true,
  isTarget: true,
  uuid:"h22",
  connector: 'Straight',
  connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
  endpointStyle:{ fill:"red", radius:4 },
  connectionsDetachable: false,
  });

      }

      //HUB for star
      if(flag_hb==2 && count==2)
{


  var h31 = instance.addEndpoint("HUBH3", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,26,54]],
    isSource: true,
    isTarget: true,
    uuid:"h31",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"red", radius:4 },
    connectionsDetachable: false,
    } );
  

    var h33 = instance.addEndpoint("HUBH3", {
      endpoint: "Dot",
      enabled: false, 
      anchor: [[ 0, 0, 0, 1,84,54]],
      isSource: true,
      isTarget: true,
      uuid:"h33",
      connector: 'Straight',
      connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
      endpointStyle:{ fill:"red", radius:4 },
      connectionsDetachable: false,
      });
      }

      //hub for hybrid
     if(flag_hb==2 && count==3)
{
  var h32 = instance.addEndpoint("HUBH3", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,64,54]],
    isSource: true,
    isTarget: true,
    uuid:"h32",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"red", radius:4 },
    connectionsDetachable: false,
    });
       }

     //SWITCH
     if(flag_sw==1 && count==1)
{
  var s11 = instance.addEndpoint("SWITCHH1", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,35,46]],
    isSource: true,
    isTarget: true,
    uuid:"s11",
    connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"red", radius:7 },
    connectionsDetachable: false,
  } );

  var s12 = instance.addEndpoint("SWITCHH1", {
  endpoint: "Dot",
  enabled: false, 
  anchor: [[ 0, 0, 0, 1,63,46]],
  isSource: true,
  isTarget: true,
  connector: 'Straight',
  uuid:"s12",
  connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
  endpointStyle:{ fill:"red", radius:7 },
  connectionsDetachable: false,
  } );

 var s21 = instance.addEndpoint("SWITCHH2", {
  endpoint: "Dot",
  enabled: false, 
  anchor: [[ 0, 0, 0, 1,35,46]],
  isSource: true,
  isTarget: true,
  uuid:"s21",
  connector: 'Straight',
    connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
    endpointStyle:{ fill:"red", radius:7 },
    connectionsDetachable: false,
  });

  var s22 = instance.addEndpoint("SWITCHH2", {
  endpoint: "Dot",
  enabled: false, 
  anchor: [[ 0, 0, 0, 1,63,46]],
  isSource: true,
  isTarget: true,
  uuid:"s22",
  connector: 'Straight',
  connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
  endpointStyle:{ fill:"red", radius:7 },
  connectionsDetachable: false,
  });
  
 
     }  

     //switch for  star
     if(flag_sw==2 && count==2)
     {
    
       
         var s31 = instance.addEndpoint("SWITCHH3", {
         endpoint: "Dot",
         enabled: false, 
         anchor: [[ 0, 0, 0, 1,16,46]],
         isSource: true,
         isTarget: true,
         uuid:"s31",
         connector: 'Straight',
         connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
         endpointStyle:{ fill:"red", radius:7 },
         connectionsDetachable: false,
       });
     
      
     
      var s33 = instance.addEndpoint("SWITCHH3", {
       endpoint: "Dot",
       enabled: false, 
       anchor: [[ 0, 0, 0, 1,84,46]],
       isSource: true,
       isTarget: true,
       uuid:"s33",
       connector: 'Straight',
         connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
         endpointStyle:{ fill:"red", radius:7 },
         connectionsDetachable: false,
       });
     
      
          }  

          //switch for hybrid
         if(flag_sw==2 && count==3)
{
  var s32 = instance.addEndpoint("SWITCHH3", {
    endpoint: "Dot",
    enabled: false, 
    anchor: [[ 0, 0, 0, 1,50,46]],
    isSource: true,
    isTarget: true,
    uuid:"s32",
    connector: 'Straight',
      connectorStyle: {  color:'black',stroke:"black",strokeWidth:3 },
      endpointStyle:{ fill:"red", radius:7 },
      connectionsDetachable: false,
    });
        }

     if(flag_pc==1 && flag_hb==1 && count==1) 
      { 
        //for enabling dragging
        p11.setEnabled(true);p12.setEnabled(true);p21.setEnabled(true);p22.setEnabled(true); 
        h11.setEnabled(true);h12.setEnabled(true);h21.setEnabled(true);h22.setEnabled(true);
      }
      else if(flag_pc==2 && flag_hb==2 && count==2) 
      { 
        //for enabling dragging
       p3.setEnabled(true);p4.setEnabled(true);
       h31.setEnabled(true); h33.setEnabled(true);
      }
      else if(flag_pc==1 && flag_sw==1 && count==1) 
      { 
        //for enabling dragging
        p11.setEnabled(true);p12.setEnabled(true);p21.setEnabled(true);p22.setEnabled(true); 
        s11.setEnabled(true); s12.setEnabled(true); s21.setEnabled(true); s22.setEnabled(true);
      }
      else if(flag_pc==2 && flag_sw==2 && count==2) 
      { 
        //for enabling dragging
        p3.setEnabled(true);p4.setEnabled(true);  
        s31.setEnabled(true); s33.setEnabled(true);
      }
      else if(flag_lp ==1 && flag_hb==1 && count==1) 
      { 
        //for enabling dragging
        l11.setEnabled(true);l12.setEnabled(true);l21.setEnabled(true);l22.setEnabled(true); 
        h11.setEnabled(true);h12.setEnabled(true);h21.setEnabled(true);h22.setEnabled(true);
      }
      else if(flag_lp ==2 && flag_hb==2 && count==2) 
      { 
        //for enabling dragging
        l3.setEnabled(true);l4.setEnabled(true);
        h31.setEnabled(true); h33.setEnabled(true);
      }
      else if(flag_lp ==1 && flag_sw==1 && count==1) 
      { 
        //for enabling dragging
        l11.setEnabled(true);l12.setEnabled(true);l21.setEnabled(true);l22.setEnabled(true); 
        s11.setEnabled(true); s12.setEnabled(true); s21.setEnabled(true); s22.setEnabled(true);
       
      }  
      else if(flag_lp ==2 && flag_sw==2 && count==2) 
      { 
        //for enabling dragging
        l3.setEnabled(true);l4.setEnabled(true);
        s31.setEnabled(true); s33.setEnabled(true);
      } 
    else if(flag_lp ==2 && flag_sw==2 && count==3)
    {
     
      l23.setEnabled(true);
      s32.setEnabled(true);
    }
    else if(flag_lp ==2 && flag_hb==2 && count==3)
    {
      h32.setEnabled(true);
      l23.setEnabled(true);
    }
    else if(flag_pc ==2 && flag_hb==2 && count==3)
    {
      p23.setEnabled(true);
      h32.setEnabled(true);
    }
    else if(flag_pc ==2 && flag_sw==2 && count==3)
    {
      p23.setEnabled(true);
      s32.setEnabled(true);
    }
         
      }); 
     
      
       
        instance.bind('connection', function(info, ev) { //whenever connection is made an event is ocurred;
          var con = info.connection; //this is the new connection
          var sid = con.sourceId;
          var tid = con.targetId;
          sourceArray.push(sid);
          targetArray.push(tid);
          console.log(con);
          conn=conn+1;
        });
      }
      

      

    function redirect() { 
           
            if(document.getElementById("dropdown").value=="hybrid"){
            window.location.replace("hybrid.html");}
    else if (document.getElementById("dropdown").value=="star"){ 
      reset();
      document.getElementById("con-head").innerHTML = "Network Toplogies : Star ";
      window.location.replace("index.html");
    }
    else if (document.getElementById("dropdown").value=="bus"){

      window.location.replace("bus.html");
    }
    else if (document.getElementById("dropdown").value=="ring"){
      window.location.replace("ring.html");
      
      
    }
    else if (document.getElementById("dropdown").value=="mesh"){
 
      window.location.replace("mesh.html");
    }
        }
    
    function reset(){      
           window.location.reload();
                 }    

           
            function sleep(ms) {
              return new Promise(resolve => setTimeout(resolve, ms));
           }

     function evaltop(){
            selectElement =  
                    document.querySelector('#dropdown');             
                    output = selectElement.value; 
           console.log(conn);
           if(flag_lp==0 && flag_pc==0)
           {
           
            Swal.fire({
              backdrop:false,
              target:'#mid',
              customClass: {
                container: 'position-absolute'
              }, 
             title:"End devices missing",
             text:"First add end device by clicking on PC or Laptop.",
             position:'center',
          
             });  

           }
           else if(flag_hb==0 && flag_sw==0)
           {
            Swal.fire({
              backdrop:false,
              target:'#mid',
              customClass: {
                container: 'position-absolute'
              }, 
              title:"Central device missing",
              text:"First add central device by clicking on hub or switch.",
       
              });  
          
           }
           else if(conn==0){
            Swal.fire({
              backdrop:false,
              target:'#mid',
              customClass: {
                container: 'position-absolute'
              },
              title:"No connection",
              text:"Follow the instructions to connect the devices.",
              icon:"info",
              });
          
          }
          else if(count==1)
                    {
                     var n=0;
                     for(var i=0;i<4;i++)
                     {
                      console.log(sourceArray[i]);
                      console.log(targetArray[i]);
                     
                      if(
                      (((sourceArray[i] == "PCH1" || sourceArray[i] == "LPH1") && (targetArray[i] == "HUBH1" || targetArray[i] == "SWITCHH1")) || ((targetArray[i] == "PCH1" || targetArray[i] == "LPH1") && (sourceArray[i] == "HUBH1" || sourceArray[i] == "SWITCHH1"))) || 
                      (((sourceArray[i] == "PCH1" || sourceArray[i] == "LPH1") && (targetArray[i] == "HUBH2" || targetArray[i] == "SWITCHH2")) || ((targetArray[i] == "PCH1" || targetArray[i] == "LPH1") && (sourceArray[i] == "HUBH2" || sourceArray[i] == "SWITCHH2"))) ||  
                      (((sourceArray[i] == "PCH2" || sourceArray[i] == "LPH2") && (targetArray[i] == "HUBH1" || targetArray[i] == "SWITCHH1")) || ((targetArray[i] == "PCH2" || targetArray[i] == "LPH2") && (sourceArray[i] == "HUBH1" || sourceArray[i] == "SWITCHH1"))) || 
                      (((sourceArray[i] == "PCH2" || sourceArray[i] == "LPH2") && (targetArray[i] == "HUBH2" || targetArray[i] == "SWITCHH2")) || ((targetArray[i] == "PCH2" || targetArray[i] == "LPH2") && (sourceArray[i] == "HUBH2" || sourceArray[i] == "SWITCHH2"))))
                      {
                        n = n + 1;
                        if (n == 4) 
                        {
                          
                          Swal.fire({
                            backdrop:false,
                            target:'#mid',
                            customClass: {
                           container: 'position-absolute'
                             },
                            title:"Connection Established!",
                            text:"The devices are connected in Ring Topology.",
                            icon:"success",
           
                            });   
                            count=2;
                            
                            document.getElementById('com').onclick;
                            document.getElementById('com').onclick = function(){ 
                             imgDraw('com'); 
                           };
                            document.getElementById('com').style.opacity = 1;
                    
                            document.getElementById('lap').onclick;
                            document.getElementById('lap').onclick = function(){ 
                             imgDraw('lap'); 
                           };
                            document.getElementById('lap').style.opacity = 1;

                            document.getElementById('iswitch').onclick;
                            document.getElementById('iswitch').onclick = function(){ 
                             imgDraw('iswitch'); 
                           };
                            
                            document.getElementById('iswitch').style.opacity = 1;

                            document.getElementById('iswitch1').onclick;
                            document.getElementById('iswitch1').onclick = function(){ 
                             imgDraw('iswitch1'); 
                           };
                          
                            document.getElementById('iswitch1').style.opacity = 1;
                          
                          break;
                        }
                      }
                      
                     
                      else{  
                       
                        Swal.fire({
                        backdrop:false,
                        target:'#mid',
                        customClass: {
                        container: 'position-absolute'
                        },
                          title:"Oops...",
                          text:"Wrong connection, Click on Reset and Try Again.",
                          icon:"error",
                          });
                   
                      }
                  }
                     }

          else if(count==2)
                    {
                     var n=0;
                     for(var i=4;i<6;i++)
                     {
                      console.log(sourceArray[i]);
                      console.log(targetArray[i]);
                     
                      if(
                      (((sourceArray[i] == "PCH3" || sourceArray[i] == "LPH3") && (targetArray[i] == "HUBH3" || targetArray[i] == "SWITCHH3")) || ((targetArray[i] == "PCH3" || targetArray[i] == "LPH3") && (sourceArray[i] == "HUBH3" || sourceArray[i] == "SWITCHH3"))) || 
                      (((sourceArray[i] == "PCH4" || sourceArray[i] == "LPH4") && (targetArray[i] == "HUBH3" || targetArray[i] == "SWITCHH3")) || ((targetArray[i] == "PCH4" || targetArray[i] == "LPH4") && (sourceArray[i] == "HUBH3" || sourceArray[i] == "SWITCHH3"))) )
                      {
                        n = n + 1;
                        if (n == 2) 
                        {
                          
                          Swal.fire({
                            backdrop:false,
                            target:'#mid',
                            customClass: {
                           container: 'position-absolute'
                             },
                            title:"Connection Established!",
                            text:"The devices are connected in Star Topology.",
                            icon:"success",
                            });   
                            count=3;
                          connection();
                          
                          break;
                        }
                      }
                      else{  
                       
                        Swal.fire({
                        backdrop:false,
                        target:'#mid',
                        customClass: {
                        container: 'position-absolute'
                        },
                          title:"Oops...",
                          text:"Wrong connection, Click on Reset and Try Again.",
                          icon:"error",
                          });
                   
                      }
                      }
                                    
                    }
                    else if(count==3)
                  {
                                           
                    if(
                    ((sourceArray[6] == "PCH2" || sourceArray[6] == "LPH2") && (targetArray[6] == "HUBH3" || targetArray[6] == "SWITCHH3")) || ((targetArray[6] == "PCH2" || targetArray[6] == "LPH2") && (sourceArray[6] == "HUBH3" || sourceArray[6] == "SWITCHH3"))
                     )
                    {
                
                        Swal.fire({
                          backdrop:false,
                          target:'#mid',
                          customClass: {
                         container: 'position-absolute'
                           },
                          title:"Connection Established!",
                          text:"The devices are connected in Hybrid Topology.",
                          icon:"success",
                          });                       
                     
                    }
                  
                 
                    else{  
                       
                      Swal.fire({
                      backdrop:false,
                      target:'#mid',
                      customClass: {
                      container: 'position-absolute'
                      },
                        title:"Oops...",
                        text:"Wrong connection, Click on Reset and Try Again.",
                        icon:"error",
                        });
                 
                    }
              
                 }
                  }
                  
                