window.addEventListener('load', initGraphAndDraw, false);
var context, canvas, canvas2, context2;
var temp_x, temp_y, temp_z;
var angel_X = 0;
var angel_Y = 0;
var angel_Z = 0;
var scaleGraph = 17;
var vertex_list = new Array;
var trans_vertex_list = new Array;
var step = 1;

var imgW=390;
var imgH=590;

var xc1 = {prop:490};//500
var yc1 = {prop:0};

var stepM = 145;

var xc2 = {prop:490 - 100 - stepM};
var yc2 = {prop:0};

var xc3 = {prop:xc2.prop - 100 - stepM};
var yc3 = {prop:0};

var xc4 = {prop:0};
var yc4 = {prop:100+stepM};

var xc5 = {prop:0};
var yc5 = {prop:yc4.prop+100+stepM};

var xc6 = {prop:0};
var yc6 = {prop:yc5.prop+100+stepM-1};

var xc7 = {prop:100+stepM};
var yc7 = {prop:yc6.prop};

var xc8 = {prop:xc7.prop+100+stepM};
var yc8 = {prop:yc6.prop};

var xc9 = {prop:490};
var yc9 = {prop:yc6.prop-100-stepM};

var xc10 = {prop:490};
var yc10 = {prop:yc9.prop-100-stepM};

var delta = 0.5;
var delta1 = 1;

 var object1 = {
        prop: 45
    };

function initGraphAndDraw() {
    var x, y, z;

    for (var i = -130; i <= 130; i += step) {

        x = 2 * i * (Math.PI / 180) - 4 * Math.sin(i * (Math.PI / 180));
        y = 2 - 4 * Math.cos(i * (Math.PI / 180));
        z = 0;
        vertex_list.push({ x: x, y: y, z: z });
        trans_vertex_list.push({ x: x, y: y, z: z });
    }
    initContext();
    initContext2();
    initContext3();
    draw();
    displayphoto();
}

function displayphoto(){
    
      context3.clearRect(0, 0, canvas3.width, canvas3.height);
     
      context3.drawImage(document.getElementById('doc'), 100, 144, 390, 590);//410, 611   
      context3.drawImage(document.getElementById('c1'), xc1.prop, yc1.prop, 100, 144);//90, 129 
      context3.drawImage(document.getElementById('c2'), xc2.prop, yc2.prop, 100, 144);//90, 129
      context3.drawImage(document.getElementById('c3'), xc3.prop, yc3.prop, 100, 144);//90, 129
      context3.drawImage(document.getElementById('c4'), xc4.prop, yc4.prop, 100, 144);//90, 129
      context3.drawImage(document.getElementById('c5'), xc5.prop, yc5.prop, 100, 144);//90, 129
      context3.drawImage(document.getElementById('c6'), xc6.prop, yc6.prop, 100, 144);//90, 129
      context3.drawImage(document.getElementById('c7'), xc7.prop, yc7.prop, 100, 144);//90, 129
      context3.drawImage(document.getElementById('c8'), xc8.prop, yc8.prop, 100, 144);//90, 129
      context3.drawImage(document.getElementById('c9'), xc9.prop, yc9.prop, 100, 144);//90, 129
      context3.drawImage(document.getElementById('c10'), xc10.prop, yc10.prop, 100, 144);//90, 129
        
      /*movec1(xc1, yc1);
      movec1(xc2, yc2);
      movec1(xc3, yc3);
      movec1(xc4, yc4);
      movec1(xc5, yc5);
      movec1(xc6, yc6);
      movec1(xc7, yc7);
      movec1(xc8, yc8);
      movec1(xc9, yc9);
      movec1(xc10, yc10);*/
      //chan(object1)
      //alert(object1.prop);
      /*if(xc1 > 0 && yc1 == 0)
      {
        xc1=xc1-delta;
      }
      else if(xc1 == 0 && yc1<740)//611+129
      {
        yc1=yc1+delta;
      }
      else if(xc1<500 && yc1==740)//410+90
      {
        xc1=xc1+delta;       
      }
      else if(xc1==500 && yc1>0)//410+90
      {
        yc1=yc1-delta;
      }*/
      
      //document.getElementById("rtx").innerHTML=xc6.prop;
      //document.getElementById("rty").innerHTML=yc6.prop;
      requestAnimationFrame(displayphoto);
      //setTimeout(displayphoto, 0.25);
}

function chan(xc){
    xc.prop = 67;
}

function movec1(xc, yc){
      
      if(xc.prop > 0 && yc.prop == 0)
      {
        xc.prop=xc.prop-delta;
      }
      else if(xc.prop == 0 && yc.prop<imgH+144)//611+129
      {
        yc.prop=yc.prop+delta;
      }
      else if(xc.prop<imgW+100 && yc.prop==imgH+144)//410+90
      {
        xc.prop=xc.prop+delta;       
      }
      else if(xc.prop==imgW+100 && yc.prop>0)//410+90
      {
        yc.prop=yc.prop-delta;
      }
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context2.clearRect(0, 0, canvas2.width, canvas2.height);

    context.lineWidth = 5;
    context.strokeStyle = "blue";
    context2.lineWidth = 5;
    context2.strokeStyle = "green";

    for (var index = 0; index < vertex_list.length; index++) {
        scale(trans_vertex_list[index], vertex_list[index]);
        rotate_on_XYZ(trans_vertex_list[index]);

        trans_vertex_list[index].x = trans_vertex_list[index].x + 150;
        trans_vertex_list[index].y = trans_vertex_list[index].y + 130;
        trans_vertex_list[index].z = trans_vertex_list[index].z + 150;
    }
    context.beginPath();

    context.moveTo(trans_vertex_list[0].x, trans_vertex_list[0].y);
    for (var j = 1; j < trans_vertex_list.length; j++) {
        context.lineTo(trans_vertex_list[j].x, trans_vertex_list[j].y);
    }

    context.stroke();
    context.closePath();
    
    for (var index = 0; index < vertex_list.length; index++) {
      trans_vertex_list[index].y = 150 * 2 - trans_vertex_list[index].y;
    }

    context2.beginPath();

    context2.moveTo(trans_vertex_list[0].x, trans_vertex_list[0].y);
    for (var j = 1; j < trans_vertex_list.length; j++) {
        context2.lineTo(trans_vertex_list[j].x, trans_vertex_list[j].y);
    }

    context2.stroke();
    context2.closePath();

    setTimeout(draw, 1);
    angel_Y-=0.5;
    if (angel_Y >= 360)
        angel_Y = 0;
}

function scale(vertex_trans, vertex) {
    vertex_trans.x = vertex.x * scaleGraph;
    vertex_trans.y = vertex.y * scaleGraph;
    vertex_trans.z = vertex.z * scaleGraph;
}

function rotate_on_XYZ(vertex_trans) {
    temp_x = vertex_trans.x;
    temp_y = vertex_trans.y;
    temp_z = vertex_trans.z;

    vertex_trans.x = temp_x * Math.cos(angel_Z * (Math.PI / 180)) * Math.cos(angel_Y * (Math.PI / 180)) + temp_y * (-Math.sin(angel_Z * (Math.PI / 180)) * Math.cos(angel_Y * (Math.PI / 180))) + temp_z * Math.sin(angel_Y * (Math.PI / 180));
    vertex_trans.y = temp_x * (Math.sin(angel_Z * (Math.PI / 180)) * Math.cos(angel_X * (Math.PI / 180)) + Math.cos(angel_Z * (Math.PI / 180)) * (-Math.sin(angel_Y * (Math.PI / 180))) * Math.sin(angel_X * (Math.PI / 180))) + temp_y * (Math.cos(angel_Z * (Math.PI / 180)) * Math.cos(angel_X * (Math.PI / 180)) - Math.sin(angel_Z * (Math.PI / 180)) * (-Math.sin(angel_Y * (Math.PI / 180))) * Math.sin(angel_X * (Math.PI / 180))) + temp_z * Math.cos(angel_Y * (Math.PI / 180)) * Math.sin(angel_X * (Math.PI / 180));
}

function initContext() {
    canvas = document.getElementById('myCanvas');
    if (!canvas || !canvas.getContext) {
        return;
    }
    context = canvas.getContext('2d');
    if (!context) {
        return;
    }
}

function initContext2() {
    canvas2 = document.getElementById('myCanvas2');
    if (!canvas2 || !canvas2.getContext) {
        return;
    }
    context2 = canvas2.getContext('2d');
    if (!context2) {
        return;
    }
}

function initContext3() {
    canvas3 = document.getElementById('myCanvas3');
    if (!canvas3 || !canvas3.getContext) {
        return;
    }
    context3 = canvas3.getContext('2d');
    if (!context3) {
        return;
    }
}
