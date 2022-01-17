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
    if (dato.codigo != -1) {
      seccionesEquipos.innerHTML += `
              <div class="divEquipo">
                  <h6 id = ''>${dato.nombreEquipo}</h6>
                  <img id="eliminarEquipo" onclick="eliminarEquipo('${dato.nombreEquipo}')" src="./icons/eliminarEquipo.svg" alt="">
                  </div>                 
              `;
    }
  });
}

let seccionesTarifas = document.querySelector(".seccionesTarifas");
let tarifaPGR;
let tarifaRI;
function pintarDivsTarifas(mostrarDatosJson) {
  mostrarDatosJson.forEach((data) => {
    if (data.codigo != -1) {
      seccionesTarifas.innerHTML += `
                  <div class="divTarifas">
                      <span>$ ${data.tarifaPGR}</span>
                      <span>$ ${data.tarifaRI}</span>
                  </div>                     
                  `;
      tarifaPGR = data.tarifaPGR;
      tarifaRI = data.tarifaRI;
    }
  });
}
let conversionDatosCalendario;
function pintarFilasEnBodyCalendario(mostrarDatosJson) {
  let filaTarifas;
  let datosCalendarioTransformados;  
  mostrarDatosJson.forEach((datos) => {
    let trFilaCalendario = document.createElement("tr");
    bodyCalendario.appendChild(trFilaCalendario);
    filaTarifas = document.querySelectorAll("#filaTarifas");

    if (datos.codigo != -1) {
      let datosCalendarioCadena = datos.calendario;
      datosCalendarioTransformados = JSON.parse(datosCalendarioCadena);
      conversionDatosCalendario = Object.keys(datosCalendarioTransformados).map(
        (key) => [Number(key), datosCalendarioTransformados[key]]
      );
      /*  console.log(conversionDatosCalendario)  */
      for (let i = 0; i < conversionDatosCalendario.length; i++) {
        let disable;
        if (conversionDatosCalendario[i][1].Editable == "1") {
          disable = "disabled";
        } else {
          disable = "";
        }
        trFilaCalendario.innerHTML +=
          `
                  <td>
                      <select id="selectDatoCalendario" ` + disable + `>
                        <option  value="" disabled selected>${conversionDatosCalendario[i][1].Estado}</option>
                        <option>M</option>
                        <option>I</option>
                        <option>T1</option>
                        <option>T2</option>
                        <option>TP</option>
                        <option>A</option>		
                      </select>
                  </td>				
                                  `;                  
      }
    }
  });
}

function pintarDiasCalendario(mostrarDatosJson) {
  mostrarDatosJson.forEach((data) => {
    if (data.codigo === -1) {
      let dias = data.calendario;
      let conversionDatosEncabezadoCalendario = Object.keys(dias).map((key) => [
        Number(key),
        dias[key],
      ]);
      for (let i = 0; i < conversionDatosEncabezadoCalendario.length; i++) {
        cabeceraTabla.innerHTML += 
                `
                  <th>
                  <p class="dias">${conversionDatosEncabezadoCalendario[i][1].DescripcionDia.substring(0,2)}</p>
                  <p>${conversionDatosEncabezadoCalendario[i][1].Fecha.substring(0,2)}</p></th>
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
  e.preventDefault();
  valorInputFecha=inputFecha.value
  console.log(valorInputFecha)
  let mesInputFecha=valorInputFecha.substring(5,7)
  let añoInputFecha=valorInputFecha.substring(0,4)
  console.log("mesInputFecha"+mesInputFecha)
  console.log("añoInputFecha"+añoInputFecha)
  let mesCalendario
  let añoCalendario
  todosDatos.forEach(element => {   
   if (element.codigo != -1) {
        for (let i = 0; i < conversionDatosCalendario.length; i++) {
        console.log(conversionDatosCalendario[i][1].Fecha)
        mesCalendario=conversionDatosCalendario[i][1].Fecha.substring(3,5)
        añoCalendario=conversionDatosCalendario[i][1].Fecha.substring(6,10)
        console.log("mesCalendario"+mesCalendario)
        console.log("añoCalendario"+añoCalendario)
         if ((mesInputFecha===mesCalendario)&&(añoInputFecha===añoCalendario)&& (selectObra.value != 0)) {
          console.log("contiene y lleno todo")          
        }else{
          console.log("no")
                    } 
      } 
    }   
  });

  
  /* if (inputFecha.value != "" && selectObra.value != 0) {
    imagenCalendario.style.display = "none";
    informacionCalendario.style.display = "flex";
  } else {
    alertaConsultar.style.display = "flex";
    setTimeout(() => {
      alertaConsultar.style.display = "none";
    }, 2000);
  } */
  
}

function filtrar() {
  var filter,
    seccionFiltro,
    divEntreSeccionFiltro,
    textosFiltrar,
    divSeccionTarifas,
    divFilaCalendario,
    valorTextoFiltrado;
  filter = inputFiltrarEquipo.value.toUpperCase();
  seccionFiltro = document.querySelector(".seccionesEquipos");
  divEntreSeccionFiltro = document.querySelectorAll(".divEquipo");
  divSeccionTarifas = document.querySelectorAll(".divTarifas");
  divFilaCalendario = document.querySelectorAll("#filaTarifas");
  for (let i = 0; i < divEntreSeccionFiltro.length; i++) {
    for (let i = 0; i < divSeccionTarifas.length; i++) {
      for (let i = 0; i < divFilaCalendario.length; i++) {
        textosFiltrar = divEntreSeccionFiltro[i].querySelectorAll("h6")[0];
        valorTextoFiltrado = textosFiltrar.textContent;
        if (valorTextoFiltrado.toUpperCase().indexOf(filter) > -1) {
          divEntreSeccionFiltro[i].style.display = "";
          divSeccionTarifas[i].style.display = "";
          divFilaCalendario[i].style.display = "";
        } else {
          divEntreSeccionFiltro[i].style.display = "none";
          divSeccionTarifas[i].style.display = "none";
          divFilaCalendario[i].style.display = "none";
        }
      }
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
function crearNuevoEquipos() {
  let selectAgregarEquipo = document.getElementById("SelectAgregarEquipo");
  let nombreEquipo =
    selectAgregarEquipo.options[selectAgregarEquipo.selectedIndex].innerText;
  seccionesEquipos.innerHTML += `
              <div class="divEquipo">
                  <h6>${nombreEquipo}</h6>
                  <img id="eliminarEquipo" onclick="eliminarEquipo('${nombreEquipo}')" src="./icons/eliminarEquipo.svg" alt="">
              </div>                 
              `;
  pintarDivsTarifas(todosDatos);
  pintarFilasEnBodyCalendario(todosDatos);
  let nuevoEquipo = { nombreEquipo, tarifaPGR, tarifaRI };
  todosDatos.push(nuevoEquipo);
}

/* function eliminarEquipo(nombreEquipo) {
      todosDatos.forEach((datos=>{
      if (equipos[i].nombreEquipo === nombreEquipo) {
        equipos.splice(i, 1);
        
  }
    })
      
  }
   */
