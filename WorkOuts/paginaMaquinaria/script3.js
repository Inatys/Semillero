const traerDatosJson=()=>{
	return fetch("./InformacionServicio.json").then((data)=>data.json())
}
const pintarDatosJson=async()=>{
	let informacionServicio=await traerDatosJson()
	pintarDivsEquipos(informacionServicio);
	pintarDatosCalendario(informacionServicio);
    pintarDivsTarifas(informacionServicio);
    pintarFilasEnBodyCalendario(informacionServicio);
}
pintarDatosJson();	

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

  function pintarFilasEnBodyCalendario(mostrarDatosJson){
     let filaTarifas
     let datosCalendarioTransformados
     let conversionDatosCalendario
    mostrarDatosJson.forEach(datos => {
         bodyCalendario.innerHTML += `
                <tr id="filaTarifas"></tr>			
                `;
                filaTarifas = document.querySelectorAll("#filaTarifas");             
                if(datos.codigo!=-1){           
                    let datosCalendarioCadena=datos.calendario          
                       datosCalendarioTransformados=JSON.parse(datosCalendarioCadena)   
                        conversionDatosCalendario=Object.keys(datosCalendarioTransformados).map((key) => [Number(key), datosCalendarioTransformados[key]]);    
                                            
                }
     });      
      
     for (let i = 0; i < conversionDatosCalendario.length; i++) {
        for (let i = 0; i < filaTarifas.length; i++) {  
            
            let todosSelectCalendario=document.querySelectorAll("#selectDatoCalendario")
            console.log(conversionDatosCalendario[i][1].Editable)     
            
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
           
           
        
    
    }   }
     
 } 

function pintarDatosCalendario(datosCalendario) {
    datosCalendario.forEach(data=>{
        
        if(data.codigo===-1){           
            let dias=data.calendario
            let conversionDatosCalendario=Object.keys(dias).map((key) => [Number(key), dias[key]]);              
            for (let i = 0; i < conversionDatosCalendario.length; i++) {
                cabeceraTabla.innerHTML += `
				<th><p class="dias">${conversionDatosCalendario[i][1].DescripcionDia.substring(0, 2)}</p><p>${conversionDatosCalendario[i][1].Fecha.substring(0, 2)}</p></th>
			`;
                
            }
               
        }
    })
       

}


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

seccionesEquipos.addEventListener("scroll",hizoScroll)
let scroll=document.querySelector(".scroll")
let seccionTarifas=document.querySelector(".seccionesTarifas")
function hizoScroll(){
	let scrollTopSeccionesEquipos=seccionesEquipos.scrollTop
	scroll.scrollTop=scrollTopSeccionesEquipos
	seccionTarifas.scrollTop=scrollTopSeccionesEquipos
} 