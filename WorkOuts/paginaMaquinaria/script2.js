import { informacion } from "./InformacionServicio.js";

let tablaInformacionTarifas = document.getElementById("tablaInformacionTarifas");
let botonInformacion = document.getElementById("botonInformacion");
botonInformacion.addEventListener("mouseenter", mostrarInformacionTarifas);
botonInformacion.addEventListener("mouseleave", ocultarInformacionTarifas);
function mostrarInformacionTarifas() {
	tablaInformacionTarifas.style.display = "block";
}
function ocultarInformacionTarifas() {
	tablaInformacionTarifas.style.display = "none";
}

let modalAgregarEquipos = document.querySelector(".modalAgregar");
let botonAgregarEquipo = document.getElementById("botonAgregarEquipo");
let botonCerrarModalAgregar = document.getElementById("botonCerrarModalAgregar");
botonAgregarEquipo.addEventListener("click", mostrarModalAgregarEquipos);
botonCerrarModalAgregar.addEventListener("click", ocultarModalAgregarEquipos);
function mostrarModalAgregarEquipos() {
	modalAgregarEquipos.style.display = "flex";
}
function ocultarModalAgregarEquipos() {
	modalAgregarEquipos.style.display = "none";
}

let tarifas = document.querySelector(".tarifas");
let botonMostrarTarifas = document.getElementById("botonMostrarTarifas");
let botonCerrarTarifas = document.getElementById("botonCerrarTarifas");
botonMostrarTarifas.addEventListener("click", mostrarTarifas);
botonCerrarTarifas.addEventListener("click", ocultarTarifas);
function mostrarTarifas() {
	tarifas.style.display = "block";
	botonMostrarTarifas.style.display = "none";
}
function ocultarTarifas() {
	tarifas.style.display = "none";
	botonMostrarTarifas.style.display = "inline";
}

let botonConsultar = document.getElementById("botonConsultar");

let seccionesEquipos = document.querySelector(".seccionesEquipos");
let seccionesTarifas = document.querySelector(".seccionesTarifas");
let divEquipos;
let botonAgregarNuevoEquipo = document.getElementById("botonAgregarNuevoEquipo");
botonAgregarNuevoEquipo.addEventListener("click", crearEquipos);
let selectAgregarEquipo = document.getElementById("SelectAgregarEquipo");
function crearEquipos() {
	let nombreEquipo = selectAgregarEquipo.options[selectAgregarEquipo.selectedIndex].innerText;
	let equipo = { nombreEquipo };
	if (localStorage.getItem("equipos") == null) {
		let equipos = [];
		equipos.push(equipo);
		localStorage.setItem("equipos", JSON.stringify(equipos));
	} else {
		let equipos = JSON.parse(localStorage.getItem("equipos"));
		equipos.push(equipo);
		localStorage.setItem("equipos", JSON.stringify(equipos));
	}
	agregarEquipos();
}
let bodyCalendario = document.getElementById("bodyCalendario");
let botonEliminarEquipo
function agregarEquipos() {
	let selectDatoCalendario;
	let filaTarifas;
	let equipos = JSON.parse(localStorage.getItem("equipos"));
	if (equipos != null) {
		seccionesEquipos.innerHTML = "";
		seccionesTarifas.innerHTML = "";
		for (let i = 0; i < equipos.length; i++) {
			let nombreEquipo = equipos[i].nombreEquipo;
			seccionesEquipos.innerHTML += `
            <div class="divEquipo">
                <h6>${nombreEquipo}</h6>
                <img id="eliminarEquipo" onclick="eliminarEquipo('${nombreEquipo}')" src="./icons/eliminarEquipo.svg" alt="">
		    </div>
                 
            `;
			botonEliminarEquipo=document.querySelectorAll("#eliminarEquipo")
			informacion.table2.forEach((data) => {
				if (nombreEquipo === data.equipo) {
					seccionesTarifas.innerHTML += `
					<div class="divTarifas">
						<span>$ ${data.pgr}</span>
						<span>$ ${data.ri}</span>
					</div>
						 
					`;
					bodyCalendario.innerHTML += `
					<tr id="filaTarifas"></tr>			
					`;
					filaTarifas = document.querySelectorAll("#filaTarifas");
				}
			});
		}
		for (let i = 0; i < filaTarifas.length; i++) {
			informacion.table1.forEach((data2) => {
				filaTarifas[i].innerHTML += `
					<td>
						<select id="selectDatoCalendario"></select>
					</td>				
					`;
			});
		}
		selectDatoCalendario = document.querySelectorAll("#selectDatoCalendario");
		for (let i = 0; i < selectDatoCalendario.length; i++) {
			informacion.table1.forEach((data2) => {
				console.log(data2.infoEquipo)
				if (data2.infoEquipo === null) {
					selectDatoCalendario[i].innerHTML = `
					<option  value="" disabled selected>Tarifas</option>
					<option>M</option>
					<option>I</option>
					<option>T1</option>
					<option>T2</option>
					<option>TP</option>
					<option>A</option>			
				`;
				} else {
					selectDatoCalendario[i].innerHTML += `
					<option>${data2.infoEquipo.EquipoMaq}</option>	
				`;
				}
			});
		}
	}
}
agregarEquipos();
botonEliminarEquipo
function eliminarEquipo(nombreEquipo) {
	let equipos = JSON.parse(localStorage.getItem("equipos"));
	for (let i = 0; i < equipos.length; i++) {
		for (let i = 0; i < botonEliminarEquipo.length; i++) {
			if (equipos[i].nombreEquipo === nombreEquipo) {
				equipos.splice(i, 1);
			}			
		}		
	}
	localStorage.setItem("equipos", JSON.stringify(equipos));
	agregarEquipos();
}

let imagenCalendario = document.querySelector(".imagenCalendario");
let informacionCalendario = document.querySelector(".informacionCalendario");
let inputFecha = document.getElementById("inputFecha");
let selectObra = document.getElementById("selectObra");
let alertaConsultar = document.querySelector(".alertaConsultar");
/* botonConsultar.addEventListener("click", mostrarSeccionCalendario);
function mostrarSeccionCalendario(e) {
	if (inputFecha.value != "" && selectObra.value != 0) {
		imagenCalendario.style.display = "none"; 
		informacionCalendario.style.display = "flex"; 
	} else {
		alertaConsultar.style.display = "flex";
		setTimeout(() => {
			alertaConsultar.style.display = "none";
		}, 2000);
	}
	e.preventDefault();
}
 */

let cabeceraTabla = document.getElementById("cabeceraTabla");

function pintarDatosTabla() {
	informacion.table1.forEach((element) => {
		cabeceraTabla.innerHTML += `
				<th><p class="dias">${element.diaDesc.substring(0, 2)}</p><p>${element.fecha.substring(0, 2)}</p></th>
			`;
	});
}

pintarDatosTabla();

let selectEquipo = document.querySelectorAll("#selectEquipo");
function agregarOpcionesSelectEquipo() {
	for (let i = 0; i < selectEquipo.length; i++) {
		informacion.table2.forEach((data) => {
			selectEquipo[i].innerHTML += `		
				<option id="valorMoneda">${data.equipo}</option>
			`;
		});
	}
	informacion.table2.forEach((data) => {
		selectAgregarEquipo.innerHTML += `		
			<option id="valorMoneda">${data.equipo}</option>
		`;
	});
}
agregarOpcionesSelectEquipo();
let inputFiltrarEquipo = document.getElementById("inputFiltrarEquipo");
inputFiltrarEquipo.addEventListener("keyup", filtrar);

function filtrar() {
	var filter, seccionFiltro, divEntreSeccionFiltro, textosFiltrar, valorTextoFiltrado;
	console.log(inputFiltrarEquipo);
	filter = inputFiltrarEquipo.value.toUpperCase();
	seccionFiltro = document.querySelector(".seccionesEquipos");
	divEntreSeccionFiltro = document.querySelectorAll(".divEquipo");
	for (let i = 0; i < divEntreSeccionFiltro.length; i++) {
		textosFiltrar = divEntreSeccionFiltro[i].querySelectorAll("h6")[0];
		valorTextoFiltrado = textosFiltrar.textContent || textosFiltrar.innerText;
		if (valorTextoFiltrado.toUpperCase().indexOf(filter) > -1) {
			divEntreSeccionFiltro[i].style.display = "";
		} else {
			divEntreSeccionFiltro[i].style.display = "none";
		}
	}
}

seccionesEquipos.addEventListener("scroll",hizoScroll)
let scroll=document.querySelector(".scroll")
let seccionTarifas=document.querySelector(".seccionesTarifas")
function hizoScroll(){
	let scrollTopSeccionesEquipos=seccionesEquipos.scrollTop
	scroll.scrollTop=scrollTopSeccionesEquipos
	seccionTarifas.scrollTop=scrollTopSeccionesEquipos
}