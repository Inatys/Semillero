 let porcentajes = document.querySelectorAll(".porcentaje");
let porcentaje;
for(let i=0;i<porcentajes.length;i++){
	console.log(porcentajes[i]);
	porcentajes[i].addEventListener('click',()=>{
		porcentaje=porcentajes[i].value;
		console.log("dio click");
	})
} 

let cinco_porcen = document.getElementById("cinco");
let diez_porcen = document.getElementById("diez");
let quince_porcen = document.getElementById("quince");
let veinticinco_porcen = document.getElementById("veinticinco");
let cincuenta_porcen = document.getElementById("cincuenta");
let porcent = document.getElementById("num_porcentaje");

 let porcentaje;
cinco_porcen.onclick = function () {
	porcentaje = 5;
	totales();
};
diez_porcen.onclick = function () {
	porcentaje = 10;
	totales();
};
quince_porcen.onclick = function () {
	porcentaje = 15;
	totales();
};
veinticinco_porcen.onclick = function () {
	porcentaje = 25;
	totales();
};
cincuenta_porcen.onclick = function () {
	porcentaje = 50;
	totales();
};
porcent.onclick = function () {
	porcentaje = document.getElementById("num_porcentaje").value;
	totales();
};  

function totales() {
	let precio_total = document.getElementById("precio").value;
	let cant_person = document.getElementById("personas").value;

	let porcent = parseInt(precio_total) * (parseFloat(porcentaje) / 100);
	document.getElementById("total_pre_propina").innerHTML = "$" + porcent;

	let precio = (parseInt(precio_total) + porcent) / parseInt(cant_person);

	document.getElementById("total_pre_persona").innerHTML = "$" + precio;

}

function limpiar(){
	location.reload();
}