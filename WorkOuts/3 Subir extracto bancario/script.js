let opcionArchivo = document.getElementById("opcionArchivo");
let on = document.getElementById("on");
	let checked = document.getElementById("checked");
function archivo() {	

	if (on.checked) {
		console.log("esta on");
		checked.classList.remove("checked");
	} else {
		console.log("esta off");
		checked.classList.add("checked");
	}
}

let opcionBanco = document.getElementById("opcionBanco");
let opcionCuenta = document.getElementById("opcionCuenta");
let opcionFecha = document.getElementById("opcionFecha");



let banco = document.querySelector(".banco");
let cuenta = document.querySelector(".cuenta");
function validarMes() {
	let fecha = document.querySelector('input[type="month"]');
	if (fecha.value == 0 || fecha.value == "") {
		opcionFecha.classList.add("error");
		document.querySelectorAll(".imgMensaje")[1].innerHTML = "Debe seleccionar"+"<br>"+"una fecha" ;
		console.log("seleccione una fecha");
	} else {
		console.log("ya selecciono una fecha");
		opcionFecha.classList.remove("error");
		document.querySelectorAll(".imgMensaje")[1].innerHTML = "" ;
	}
}

function validarBanco() {
	if (banco.value == 0 || banco.value == "") {
		console.log("seleccione una banco");
		document.querySelectorAll(".imgMensaje")[2].innerHTML = "Debe seleccionar"+"<br>"+"un banco" ;
		opcionBanco.classList.add("error");
	} else {
		console.log("ya selecciono una banco");
		opcionBanco.classList.remove("error");
		document.querySelectorAll(".imgMensaje")[2].innerHTML = "" ;
	}
}

function validarCuenta() {
	if (cuenta.value == 0 || cuenta.value == "") {
		opcionCuenta.classList.add("error");
		document.querySelectorAll(".imgMensaje")[3].innerHTML = "Debe seleccionar"+"<br>"+"una cuenta" ;
		console.log("seleccione una cuenta");
	} else {
		console.log("ya selecciono una cuenta");
		opcionCuenta.classList.remove("error");
		document.querySelectorAll(".imgMensaje")[3].innerHTML = "" ;
	}
}
let validoArchivo="";

function validarArchivo() {	
	let archivo = document.querySelector('input[type="file"]');
	if (archivo.value == 0 || archivo.value == "") {		
		opcionArchivo.classList.add("error");
		document.querySelectorAll(".imgMensaje")[0].innerHTML = "Debe seleccionar"+"<br>"+"un archivo" ;
		console.log("seleccione una archivo");
	} else {
		opcionArchivo.classList.remove("error");
		console.log("ya selecciono una archivo");
		document.querySelectorAll(".imgMensaje")[0].innerHTML = "" ;
	}
}

let estaOn = document.getElementById("estaOn");
function conciliacion() {	

	if (estaOn.checked) {
		console.log("esta on");
		document.querySelector("p").innerHTML = "Esta paz y salvo" ;
	} else {
		console.log("esta off");
		document.querySelector("p").innerHTML = "Queda en mora" ;
	}
}





let lleno = document.getElementById("lleno");
let falta = document.getElementById("falta");



function validarCampos() {
	
	if (banco.value == 0 ||banco.value == "" && cuenta.value == 0 ||cuenta.value == "" && fecha.value == 0 ||fecha.value == "") {
		falta.classList.add("falta");
		lleno.classList.remove("lleno");
		
		//document.querySelector("b").innerHTML = "agrego";
		console.log("no selecciono todas");
	} else {
		falta.classList.remove("falta");
		lleno.classList.add("lleno");
		console.log("seleccione todas");
	}


}

const boton = document.querySelector("button");

boton.addEventListener("click", validarCampos);

opcionFecha.addEventListener("click",validarMes);
opcionFecha.addEventListener("change",validarMes);
opcionCuenta.addEventListener("click",validarCuenta);
opcionBanco.addEventListener("click",validarBanco);
opcionArchivo.addEventListener("click",validarArchivo);
opcionArchivo.addEventListener("change",validarArchivo);


function fecha(){
	agregarFecha =  new Date();
	let año = agregarFecha.getFullYear();
	let mes = agregarFecha.getMonth() + 1;
	let dia = agregarFecha.getDate();
	
	let hora = agregarFecha.getHours();

	let horaFinal;
	if(hora>12){
		horaFinal=hora-12;
	}
	let minutos = agregarFecha.getMinutes();
	let segundos = agregarFecha.getSeconds();
	document.getElementById("date").innerHTML = "Fecha: " + dia + "/" + mes + "/" + año + " " +horaFinal+ ":" +minutos+":" + segundos;
}
setInterval(fecha,1000)