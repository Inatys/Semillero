import { InformacionServicio } from "./InformacionServicio.js";
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

function crearEquipos() {
	let selectAgregarEquipo = document.getElementById("SelectAgregarEquipo");
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
function agregarEquipos() {
	let equipos = JSON.parse(localStorage.getItem("equipos"));
	if (equipos != null) {
		seccionesEquipos.innerHTML = "";
		seccionesTarifas.innerHTML = "";
		for (let i = 0; i < equipos.length; i++) {
			let nombreEquipo = equipos[i].nombreEquipo;
			seccionesEquipos.innerHTML += `
            <div class="divEquipo">
                <h6>${nombreEquipo}</h6>
                <img onclick="eliminarEquipo('${nombreEquipo}')" src="./icons/eliminarEquipo.svg" alt="">
		    </div>
                 
            `;
			InformacionServicio.forEach((equipo) => {
						if (nombreEquipo === equipo.nombreEquipo) {
							console.log("igual");
							seccionesTarifas.innerHTML += `
					<div class="divTarifas">
						<span>$ ${equipo.tarifaPCR}</span>
						<span>$ ${equipo.tarifaRI}</span>
					</div>
						 
					`;
						}
					});
		}
	}
}
agregarEquipos();

function eliminarEquipo(nombreEquipo) {
	let equipos = JSON.parse(localStorage.getItem("equipos"));
	for (let i = 0; i < equipos.length; i++) {
		if (equipos[i].nombreEquipo === nombreEquipo) {
			equipos.splice(i, 1);
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
botonConsultar.addEventListener("click", mostrarSeccionCalendario);
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
