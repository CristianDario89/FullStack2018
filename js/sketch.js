var cont;
var cont2;
function setup() {
 bgcolor=color(200);  
  
 canvas = createCanvas(90,100);
canvas.parent("#centrar2");

//canvas.position(100,100)
//parrafo  = select(''.pers p'');
 cont = select('#centrar');
 cont.mouseOver(changeStyle);
cont.mouseOut(revertStyle);

cont2 = select('#alertando');
 cont2.mouseOver(changeStyle2);


 button = createButton("click");
 button.parent("#centrar2");
 button.mousePressed(changeColor);
// createElement('br');  
}

		//Funciones Funciones
function changeStyle() {
cont.style('color','green');
cont.style('padding','3px');
cont.style('font-size','21px');
}
function revertStyle() {
cont.style('color','red');
cont.style('padding','1px');
cont.style('font-size','15px');
}

function changeStyle2() {
alert('jdjdkdkkdndnd');
}
function revertStyle2() {

}

function changeColor() {
bgcolor = color(random(255),random(255),random(255));
}
function overPara(){
h1.html('eeeeeeeeeeee')
}  
function outPara(){
h1.html('ahhhhhhh')
}  
//Fin Funciones Funciones
	//Fin Funciones Funciones
		//Fin Funciones Funciones
  
  function draw() {
  background(bgcolor);
  stroke(255);
  }
  
  setTimeout(function () {
    $('.head').css('background','aqua');
    }, 5000);
  