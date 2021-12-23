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

 function pintarFilasEnBodyCalendario(mostrarDatosJson,nombreEquipo){
     let filaTarifas
    mostrarDatosJson.forEach(datos => {
        bodyCalendario.innerHTML += `
                <tr id="filaTarifas"></tr>			
                `;
                filaTarifas = document.querySelectorAll("#filaTarifas");
                
         if(datos.codigo!=-1){
             let datosCalendarioCadena=datos.calendario             
                let datosCalendarioTransformados=JSON.parse(datosCalendarioCadena)
        console.log(datosCalendarioTransformados)   
         }
     });
      console.log(filaTarifas)
      mostrarDatosJson.forEach(datos => {
     for (let i = 0; i < filaTarifas.length; i++) {       
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
        
    } })
 }

function pintarDatosCalendario(datosCalendario) {
	datosCalendario.forEach((element) => {
		if (element.codigo === -1) {
			calendario.forEach(element => {
				console.log(element)
			});
				
		/* 	cabeceraTabla.innerHTML += `
				<th><p class="dias">${element.calendario[1].DescripcionDia}</p></th>
		`;  */
	};
});
}

const pintarDatosJson=async()=>{
	let informacionServicio=await traerDatosJson()
	pintarDivsEquipos(informacionServicio);
	pintarDatosCalendario(informacionServicio);
    pintarDivsTarifas(informacionServicio);
    pintarFilasEnBodyCalendario(informacionServicio);
}
pintarDatosJson();	

let inputFiltrarEquipo = document.getElementById("inputFiltrarEquipo");
inputFiltrarEquipo.addEventListener("keyup", filtrar);
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