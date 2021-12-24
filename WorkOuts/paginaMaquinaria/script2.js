function inicializarPaginas(){
	pintarDatosJson();	
	agregarEquipos();
	pintarDatosCalendario();
	agregarOpcionesSelectEquipo();
	asignacionEventos();
}
inicializarPaginas();

const traerDatosJson=()=>{
	return fetch("./InformacionServicio.json").then((data)=>data.json())
}

 const prueba=(mostrarDatosJson)=>{
mostrarDatosJson.table.forEach((dato)=>{
console.log(dato)
})
 }
 
const pintarDatosJson=async()=>{
	let informacionServicio=await traerDatosJson()
	prueba(informacionServicio)
	agregarDivsTarifas(informacionServicio)
	agregarSelectEnDivsTarifas(informacionServicio)
}


let botonInformacion = document.getElementById("botonInformacion");
let botonAgregarEquipo = document.getElementById("botonAgregarEquipo");
let botonCerrarModalAgregar = document.getElementById("botonCerrarModalAgregar");
let botonMostrarTarifas = document.getElementById("botonMostrarTarifas");
let botonCerrarTarifas = document.getElementById("botonCerrarTarifas");
let botonAgregarNuevoEquipo = document.getElementById("botonAgregarNuevoEquipo");
let inputFiltrarEquipo = document.getElementById("inputFiltrarEquipo");
let botonConsultar = document.getElementById("botonConsultar");
let seccionesEquipos = document.querySelector(".seccionesEquipos");

function asignacionEventos(){
	botonInformacion.addEventListener("mouseenter", mostrarInformacionTarifas);
	botonInformacion.addEventListener("mouseleave", ocultarInformacionTarifas);
	botonAgregarEquipo.addEventListener("click", mostrarModalAgregarEquipos);
	botonCerrarModalAgregar.addEventListener("click", ocultarModalAgregarEquipos);
	botonMostrarTarifas.addEventListener("click", mostrarBotonTarifas);
	botonCerrarTarifas.addEventListener("click", ocultarBotonTarifas);
	botonAgregarNuevoEquipo.addEventListener("click", crearEquipos);
	botonConsultar.addEventListener("click", mostrarSeccionCalendario);
	inputFiltrarEquipo.addEventListener("keyup", filtrar);
	seccionesEquipos.addEventListener("scroll",hizoScroll)
}


let tablaInformacionTarifas = document.getElementById("tablaInformacionTarifas");
function mostrarInformacionTarifas() {
	tablaInformacionTarifas.style.display = "block";
}
function ocultarInformacionTarifas() {
	tablaInformacionTarifas.style.display = "none";
}


let modalAgregarEquipos = document.querySelector(".modalAgregar");
function mostrarModalAgregarEquipos() {
	modalAgregarEquipos.style.display = "flex";
}
function ocultarModalAgregarEquipos() {
	modalAgregarEquipos.style.display = "none";
}



let tarifas = document.querySelector(".tarifas");
function mostrarBotonTarifas() {
	tarifas.style.display = "block";
	botonMostrarTarifas.style.display = "none";
}
function ocultarBotonTarifas() {
	tarifas.style.display = "none";
	botonMostrarTarifas.style.display = "inline";
}




let seccionesTarifas = document.querySelector(".seccionesTarifas");
let divEquipos;
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
let filaTarifas;
function agregarEquipos() {
	let selectDatoCalendario;
	
	let nombresEquipos
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
console.log(nombreEquipo)

			 agregarDivsTarifas("",nombreEquipo) 
		}
		
		agregarSelectEnDivsTarifas()
		
	/* 	let datosInfoEquipoTransformados
		for (let i = 0; i < selectDatoCalendario.length; i++) {
			console.log(selectDatoCalendario.length)
			InformacionServicio.table1.forEach((data2) => {
				console.log(nombresEquipos)
				let datosInfoEquipo=data2.infoEquipo;
				datosInfoEquipoTransformados=JSON.parse(datosInfoEquipo);				
				
				if (datosInfoEquipoTransformados === null) {
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
					datosInfoEquipoTransformados.forEach((data3)=>{
						if(nombresEquipos.indexOf(data3.Equipo)){
							console.log("contiene el id")
							console.log(data3.Estado);
							selectDatoCalendario[i].innerHTML += `
							<option>${data3.Estado}</option>	
						`;
						} 
						
					})			
				}
			});
			
		} */
		
	}
}


 function agregarDivsTarifas(mostrarDatosJson, nombreEquipo){
	console.log(nombreEquipo)
	mostrarDatosJson.table2.forEach((data)=>{
		
	console.log(data.equipo)
	/* nombresEquipos=data.equipo */
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
			console.log(filaTarifas)
		}
	})
	 }
	 function agregarSelectEnDivsTarifas(mostrarDatosJson){
		 console.log(filaTarifas)
		for (let i = 0; i < filaTarifas.length; i++) {
			mostrarDatosJson.table1.forEach((data2) => {
				filaTarifas[i].innerHTML += `
					<td>
						<select id="selectDatoCalendario">
						<option  value="" disabled selected>Tarifas</option>
					<option>M</option>
					<option>I</option>
					<option>T1</option>
					<option>T2</option>
					<option>TP</option>
					<option>A</option>
						</select>
					</td>				
					`;
			});
		}
		selectDatoCalendario = document.querySelectorAll("#selectDatoCalendario");
	}


botonEliminarEquipo
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


let cabeceraTabla = document.getElementById("cabeceraTabla");

function pintarDatosCalendario() {
	informacion.table1.forEach((element) => {
		cabeceraTabla.innerHTML += `
				<th><p class="dias">${element.diaDesc.substring(0, 2)}</p><p>${element.fecha.substring(0, 2)}</p></th>
			`;
	});
}



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



function filtrar() {
	var filter, seccionFiltro, divEntreSeccionFiltro, textosFiltrar, valorTextoFiltrado;
	filter = inputFiltrarEquipo.value.toUpperCase();
	seccionFiltro = document.querySelector(".seccionesEquipos");
	divEntreSeccionFiltro = document.querySelectorAll(".divEquipo");
	divTarifas = document.querySelectorAll(".divTarifas");
	for (let i = 0; i < divEntreSeccionFiltro.length; i++) {
		textosFiltrar = divEntreSeccionFiltro[i].querySelectorAll("h6")[0];
		valorTextoFiltrado = textosFiltrar.textContent 
		if (valorTextoFiltrado.toUpperCase().indexOf(filter) > -1) {
			divEntreSeccionFiltro[i].style.display = "";
		} else {
			divEntreSeccionFiltro[i].style.display = "none";
		}
	}
}


let scroll=document.querySelector(".scroll")
let seccionTarifas=document.querySelector(".seccionesTarifas")
function hizoScroll(){
	let scrollTopSeccionesEquipos=seccionesEquipos.scrollTop
	scroll.scrollTop=scrollTopSeccionesEquipos
	seccionTarifas.scrollTop=scrollTopSeccionesEquipos
} 


