const traerDatosJson = () => {
  return fetch("./InformacionServicio.json").then((data) => data.json());
};

const pintarDatosJson = async () => {
  let informacionServicio = await traerDatosJson();
  pintarDivsEquipos(informacionServicio);
  pintarDiasCalendario(informacionServicio);
  pintarDivsTarifas(informacionServicio);
  pintarFilasEnBodyCalendario(informacionServicio);
  agregarOpcionesSelectEquipo(informacionServicio);
};
pintarDatosJson();

let seccionesEquipos = document.querySelector(".seccionesEquipos");
function pintarDivsEquipos(mostrarDatosJson) {
  mostrarDatosJson.forEach((dato) => {
    seccionesEquipos.innerHTML += `
            <div class="divEquipo">
                <h6 id = ''>${dato.nombreEquipo}</h6>
                <img id="eliminarEquipo" onclick="eliminarEquipo('${dato.nombreEquipo}')" src="./icons/eliminarEquipo.svg" alt="">
		    </div>                 
            `;
  });
  
}

let seccionesTarifas = document.querySelector(".seccionesTarifas");
let tarifaPGR
let tarifaRI
function pintarDivsTarifas(mostrarDatosJson) {
  mostrarDatosJson.forEach((data) => {
    seccionesTarifas.innerHTML += `
                <div class="divTarifas">
                    <span>$ ${data.tarifaPGR}</span>
                    <span>$ ${data.tarifaRI}</span>
                </div>                     
                `;   
                tarifaPGR=data.tarifaPGR
                tarifaRI=data.tarifaRI
  });
}

function pintarFilasEnBodyCalendario(mostrarDatosJson) {
  let filaTarifas;
  let datosCalendarioTransformados;
  let conversionDatosCalendario;
  mostrarDatosJson.forEach((datos) => {
    bodyCalendario.innerHTML += `
                <tr id="filaTarifas"></tr>			
                `;
    filaTarifas = document.querySelectorAll("#filaTarifas");
    if (datos.codigo != -1) {
      let datosCalendarioCadena = datos.calendario;
      datosCalendarioTransformados = JSON.parse(datosCalendarioCadena);
      conversionDatosCalendario = Object.keys(datosCalendarioTransformados).map(
        (key) => [Number(key), datosCalendarioTransformados[key]]        
      );
      console.log(conversionDatosCalendario)
     
    }
  });
 
  for (let i = 0; i < conversionDatosCalendario.length; i++) {    
    for (let i = 0; i < filaTarifas.length; i++) {
      let todosSelectCalendario = document.querySelectorAll(
        "#selectDatoCalendario"
      );    

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
                console.log(conversionDatosCalendario[i][1].Editable)
                if (conversionDatosCalendario[i][1].Editable=='0') {
                  console.log("editable");  
                }else if(conversionDatosCalendario[i][1].Editable=='1'){
                  console.log("no editable"); 
                }
    }
   
  } 

}

function pintarDiasCalendario(mostrarDatosJson) {
  mostrarDatosJson.forEach((data) => {
    if (data.codigo === -1) {
      let dias = data.calendario;
      let conversionDatosCalendario = Object.keys(dias).map((key) => [Number(key),dias[key]]);
      for (let i = 0; i < conversionDatosCalendario.length; i++) {
        cabeceraTabla.innerHTML += `
				<th><p class="dias">${conversionDatosCalendario[i][1].DescripcionDia.substring(0,2)}</p><p>${conversionDatosCalendario[i][1].Fecha.substring(0,2)}</p></th>
			`;
      }
    }
  });
}

let botonInformacion = document.getElementById("botonInformacion");
let tablaInformacionTarifas = document.getElementById(
  "tablaInformacionTarifas"
);
let botonAgregarEquipo = document.getElementById("botonAgregarEquipo");
let botonCerrarModalAgregar = document.getElementById(
  "botonCerrarModalAgregar"
);
let modalAgregarEquipos = document.querySelector(".modalAgregar");
let botonMostrarTarifas = document.getElementById("botonMostrarTarifas");
let botonCerrarTarifas = document.getElementById("botonCerrarTarifas");
let tarifas = document.querySelector(".tarifas");
let botonAgregarNuevoEquipo = document.getElementById(
  "botonAgregarNuevoEquipo"
);
let inputFiltrarEquipo = document.getElementById("inputFiltrarEquipo");
let botonConsultar = document.getElementById("botonConsultar");
let scroll = document.querySelector(".scroll");

function asignacionEventos() {
  botonInformacion.addEventListener("mouseenter", mostrarInformacionTarifas);
  botonInformacion.addEventListener("mouseleave", ocultarInformacionTarifas);
  botonAgregarEquipo.addEventListener("click", mostrarModalAgregarEquipos);
  botonCerrarModalAgregar.addEventListener("click", ocultarModalAgregarEquipos);
  botonMostrarTarifas.addEventListener("click", mostrarSeccionTarifas);
  botonCerrarTarifas.addEventListener("click", ocultarSeccionTarifas);
  botonAgregarNuevoEquipo.addEventListener("click", crearNuevoEquipos); 
  botonConsultar.addEventListener("click", mostrarSeccionCalendario);
  inputFiltrarEquipo.addEventListener("keyup", filtrar);
  seccionesEquipos.addEventListener("scroll", hizoScroll);
}
asignacionEventos();

function mostrarInformacionTarifas() {
  tablaInformacionTarifas.style.display = "block";
}
function ocultarInformacionTarifas() {
  tablaInformacionTarifas.style.display = "none";
}
function mostrarModalAgregarEquipos() {
  modalAgregarEquipos.style.display = "flex";
}
function ocultarModalAgregarEquipos() {
  modalAgregarEquipos.style.display = "none";
}

function mostrarSeccionTarifas() {
  tarifas.style.display = "block";
  botonMostrarTarifas.style.display = "none";
}
function ocultarSeccionTarifas() {
  tarifas.style.display = "none";
  botonMostrarTarifas.style.display = "inline";
}

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

function filtrar() {
  var filter,
    seccionFiltro,
    divEntreSeccionFiltro,
    textosFiltrar,
    valorTextoFiltrado;
  filter = inputFiltrarEquipo.value.toUpperCase();
  seccionFiltro = document.querySelector(".seccionesEquipos");
  divEntreSeccionFiltro = document.querySelectorAll(".divEquipo");
  divTarifas = document.querySelectorAll(".divTarifas");
  for (let i = 0; i < divEntreSeccionFiltro.length; i++) {
    textosFiltrar = divEntreSeccionFiltro[i].querySelectorAll("h6")[0];
    valorTextoFiltrado = textosFiltrar.textContent;
    if (valorTextoFiltrado.toUpperCase().indexOf(filter) > -1) {
      divEntreSeccionFiltro[i].style.display = "";
    } else {
      divEntreSeccionFiltro[i].style.display = "none";
    }
  }
}

function hizoScroll() {
  let scrollTopSeccionesEquipos = seccionesEquipos.scrollTop;
  scroll.scrollTop = scrollTopSeccionesEquipos;
  seccionesTarifas.scrollTop = scrollTopSeccionesEquipos;
}

let selectEquipo = document.querySelectorAll(".selectEquipos");
function agregarOpcionesSelectEquipo(mostrarDatosJson) {
    for (let i = 0; i < selectEquipo.length; i++) {
		mostrarDatosJson.forEach((data) => {
            selectEquipo[i].innerHTML += `		
                        <option >${data.nombreEquipo}</option>
                    `;
          });
	}  
}

const todosDatos = [];
fetch("./InformacionServicio.json")
  .then((blob) => blob.json())
  .then((data) => todosDatos.push(...data));
function crearNuevoEquipos(){
    let selectAgregarEquipo = document.getElementById("SelectAgregarEquipo");
    let nombreEquipo = selectAgregarEquipo.options[selectAgregarEquipo.selectedIndex].innerText;
     seccionesEquipos.innerHTML += `
            <div class="divEquipo">
                <h6>${nombreEquipo}</h6>
                <img id="eliminarEquipo" onclick="eliminarEquipo('${nombreEquipo}')" src="./icons/eliminarEquipo.svg" alt="">
		    </div>                 
            `;
            pintarDivsTarifas(todosDatos)
            pintarFilasEnBodyCalendario(todosDatos)
            let nuevoEquipo={nombreEquipo,tarifaPGR,tarifaRI}
            todosDatos.push(nuevoEquipo)            
}