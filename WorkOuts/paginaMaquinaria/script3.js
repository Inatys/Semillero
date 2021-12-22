const traerDatosJson=()=>{
	return fetch("./InformacionServicio.json").then((data)=>data.json())
}

let botonInformacion = document.getElementById("botonInformacion");
botonInformacion.addEventListener("mouseenter", mostrarInformacionTarifas);
botonInformacion.addEventListener("mouseleave", ocultarInformacionTarifas);
 let tablaInformacionTarifas = document.getElementById("tablaInformacionTarifas");
function mostrarInformacionTarifas() {
	tablaInformacionTarifas.style.display = "block";
}
function ocultarInformacionTarifas() {
	tablaInformacionTarifas.style.display = "none";
}

let botonMostrarTarifas = document.getElementById("botonMostrarTarifas");
botonMostrarTarifas.addEventListener("click", mostrarSeccionTarifas);
	botonCerrarTarifas.addEventListener("click", ocultarSeccionTarifas);
let tarifas = document.querySelector(".tarifas");
function mostrarSeccionTarifas() {
	tarifas.style.display = "block";
	botonMostrarTarifas.style.display = "none";
}
function ocultarSeccionTarifas() {
	tarifas.style.display = "none";
	botonMostrarTarifas.style.display = "inline";
}


let seccionesEquipos = document.querySelector(".seccionesEquipos");
function pintarDivsEquipos(mostrarDatosJson){
mostrarDatosJson.forEach((dato)=>{
console.log(dato.nombreEquipo)
seccionesEquipos.innerHTML += `
            <div class="divEquipo">
                <h6>${dato.nombreEquipo}</h6>
                <img id="eliminarEquipo" onclick="eliminarEquipo('${dato.nombreEquipo}')" src="./icons/eliminarEquipo.svg" alt="">
		    </div>                 
            `;
})
}

let seccionesTarifas = document.querySelector(".seccionesTarifas");
 function pintarDivsTarifas(mostrarDatosJson){
    mostrarDatosJson.forEach((data)=>{	
        console.log(data.tarifaPGR)
                seccionesTarifas.innerHTML += `
                <div class="divTarifas">
                    <span>$ ${data.tarifaPGR}</span>
                    <span>$ ${data.tarifaRI}</span>
                </div>
                     
                `;
               /*  bodyCalendario.innerHTML += `
                <tr id="filaTarifas"></tr>			
                `;
                filaTarifas = document.querySelectorAll("#filaTarifas");
                console.log(filaTarifas) */
        
        })
 }

function pintarDatosCalendario(datosCalendario) {
	datosCalendario.forEach((element) => {
		console.log(element.calendario)
		/* cabeceraTabla.innerHTML += `
				<th><p class="dias">${element.diaDesc.substring(0, 2)}</p><p>${element.fecha.substring(0, 2)}</p></th>
			`; */
	});
}



const pintarDatosJson=async()=>{
	let informacionServicio=await traerDatosJson()
	pintarDivsEquipos(informacionServicio);
	pintarDatosCalendario(informacionServicio);
    pintarDivsTarifas(informacionServicio)
}
pintarDatosJson();	
