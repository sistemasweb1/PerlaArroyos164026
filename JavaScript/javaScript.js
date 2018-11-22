//JS
//window.alert("Esta pagina contiene derechos de autor");


//para mostrar la fecha
function startDate(){
	var d = new Date();
	document.getElementById("fecha").innerHTML = d.toDateString();
}
//para mostrar la hora actual
function startTime(){
	today=new Date();
	h=today.getHours();
	m=today.getMinutes();
	s=today.getSeconds();
	m=checkTime(m);
	s=checkTime(s);
	h=checkTime(h);
	var saludo = Saludo(h);
	document.getElementById('reloj').innerHTML=saludo+"! "+h+":"+m+":"+s;
	t=setTimeout('startTime()',500);
}
function checkTime(i){if (i<10) {i="0" + i;}return i;}

function Saludo(i){
	if(i>=1 && i<=5){
		return "Linda madrugada";
	}else if(i>=6 && i<=11){
		return "Buenos dias";
	}else if(i>=12 && i<=18){
		return "Buenas tardes";
	}else if(i>=19 && i<=23){
		return "Buenas noches";
	}
}

window.onload=function(){startTime(); startDate(); Blink();}//para iniciar algunas funciones cuando se abre la pagina

//window.onload=function(){alert('Bienvenido a esta pagina');}
//window.onunload=function(){alert('Vuelva en otro momento');}

//para los vinculos en las paginas
function sobreVinc1(){
	document.getElementById('vinc').style.fontSize='1.2em';
}
function fueraVinc1(){
	document.getElementById('vinc').style.fontSize='1em';
}
function sobreVinc2(){
	document.getElementById('vinc2').style.fontSize='1.2em';
}
function fueraVinc2(){
	document.getElementById('vinc2').style.fontSize='1em';
}
function sobreVinc3(){
	document.getElementById('vinc3').style.fontSize='1.2em';
}
function fueraVinc3(){
	document.getElementById('vinc3').style.fontSize='1em';
}


//para los iconos de redes sociales
var x =document.getElementsByClassName("tam");
function sobreIcon1(){
	x[0].style.width="35px"; 
	x[0].style.height="35px";
}
function sobreIcon2(){
	x[1].style.width="35px"; 
	x[1].style.height="35px";
}
function sobreIcon3(){
	x[2].style.width="35px"; 
	x[2].style.height="35px";
}
function fueraIcon1(){
	x[0].style.width="30px"; 
	x[0].style.height="30px";
}
function fueraIcon2(){
	x[1].style.width="30px"; 
	x[1].style.height="30px";
}
function fueraIcon3(){
	x[2].style.width="30px"; 
	x[2].style.height="30px";
}

//parpadear 
window.setInterval(Blink, 1000);
var color = "black";
function Blink(){
	var blink = document.getElementById("blink");
	color = (color == "rgb(230,230,230)")? "black" : "rgb(230,230,230)";
	blink.style.color = color;
	<!--[if lte IE 9]>blink.style.color = rgb(0,0,250);<![endif]-->
}

function mostrarNoticia(){
	document.getElementById("p1").innerHTML = "Según los datos ofrecidos por el WSJ, en el interior encontraríamos el nuevo procesador Exynos 9820 de la marca fabricado en 8 nanómetros, se incorporaría un panel de 6,7 pulgadas que abarcaría gran parte del frontal, se añadirían cuatro cámaras traseras del mismo modo que ya vimos en el Galaxy A9 y doble cámara frontal. Cambios drásticos en el diseño que marcarían el futuro de la gama Galaxy.";
	document.getElementById("p2").innerHTML = "Los rumores que tenemos hablan de un lector de huellas integrado en la pantalla y además tendríamos soporte para 5G. Una compatibilidad que estaría reservada únicamente a este modelo 'Beyond X' y por tanto no lo tendríamos en los otros tres modelos del Galaxy S10.";
	document.getElementById("p3").innerHTML = "A principios de noviembre durante su conferencia para desarrolladores, Samsung mostró, además de su pantalla plegable, varias pantallas con el 'notch' incluido. Sin embargo el tamaño era muy reducido o colocado en posiciones no tan habituales. Una de estas cuatro 'pantallas infinity' era un panel que va de borde a borde, aunque se desconoce tanto su funcionamiento exacto como si será finalmente la elegida por este enigmático Samsung 'Beyond X'."
}
