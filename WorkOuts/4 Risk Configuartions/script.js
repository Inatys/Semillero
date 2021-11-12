let imagenFondo = document.getElementById("imagenFondo");
//-----eventos iniciales impacto-------
let muestraImpacto = document.getElementById("impacto");
let tablaImpacto = document.getElementById("tablaImpacto");
muestraImpacto.addEventListener("click", () => {
	tablaImpacto.classList.add("mostarTablaActivo");
	imagenFondo.classList.add("fondoOculto");
	tablaEvaluacion.classList.remove("mostarTablaActivo");
	tablaProbabilidad.classList.remove("mostarTablaActivo");
	tablaTipo.classList.remove("mostarTablaActivo");
});
let nuevoImpacto = document.getElementById("buttonNuevoImpacto");
let formularioCreaImpacto = document.getElementById("agregaElementoImpacto");
let formularioEditaImpacto = document.getElementById("editaElementoImpacto");
let cerrarCrearImpacto = document.getElementById("cerrarCrearImpacto");
let cerrarEditarImpacto = document.getElementById("cerrarEditarImpacto");

cerrarEditarImpacto.addEventListener("click", () => { formularioEditaImpacto.classList.remove("mostrarFormulario");});
nuevoImpacto.addEventListener("click", () => { formularioCreaImpacto.classList.add("mostrarFormulario");});
cerrarCrearImpacto.addEventListener("click", () => { formularioCreaImpacto.classList.remove("mostrarFormulario");});

//-----eventos iniciales probabilidad-------
let muestraProbabilidad = document.getElementById("probabilidad");
let tablaProbabilidad = document.getElementById("tablaProbabilidad");
muestraProbabilidad.addEventListener("click", () => {
	tablaProbabilidad.classList.add("mostarTablaActivo");
	imagenFondo.classList.add("fondoOculto");
	tablaEvaluacion.classList.remove("mostarTablaActivo");
	tablaImpacto.classList.remove("mostarTablaActivo");
	tablaTipo.classList.remove("mostarTablaActivo");
});
let nuevoProbabilidad = document.getElementById("buttonNuevoProbabilidad");
let formularioCreaProbabilidad = document.getElementById("agregaElementoProbabilidad");
let formularioEditaProbabilidad = document.getElementById("editaElementoProbabilidad");
let cerrarCrearProbabilidad = document.getElementById("cerrarCrearProbabilidad");
let cerrarEditarProbabilidad = document.getElementById("cerrarEditarProbabilidad");

cerrarEditarProbabilidad.addEventListener("click", () => { formularioEditaProbabilidad.classList.remove("mostrarFormulario");});
nuevoProbabilidad.addEventListener("click", () => {	formularioCreaProbabilidad.classList.add("mostrarFormulario");});
cerrarCrearProbabilidad.addEventListener("click", () => { formularioCreaProbabilidad.classList.remove("mostrarFormulario");});

//-----eventos iniciales tipo-------
let muestraTipo = document.getElementById("tipo");
let tablaTipo = document.getElementById("tablaTipo");
muestraTipo.addEventListener("click", () => {
	tablaTipo.classList.add("mostarTablaActivo");
	imagenFondo.classList.add("fondoOculto");
	tablaEvaluacion.classList.remove("mostarTablaActivo");
	tablaProbabilidad.classList.remove("mostarTablaActivo");
	tablaImpacto.classList.remove("mostarTablaActivo");
});
let nuevoTipo = document.getElementById("buttonNuevoTipo");
let formularioCreaTipo = document.getElementById("agregaElementoTipo");
let formularioEditaTipo = document.getElementById("editaElementoTipo");
let cerrarCrearTipo = document.getElementById("cerrarCrearTipo");
let cerrarEditarTipo = document.getElementById("cerrarEditarTipo");

cerrarEditarTipo.addEventListener("click", () => { formularioEditaTipo.classList.remove("mostrarFormulario");});
nuevoTipo.addEventListener("click", () => {	formularioCreaTipo.classList.add("mostrarFormulario");});
cerrarCrearTipo.addEventListener("click", () => { formularioCreaTipo.classList.remove("mostrarFormulario");});

//-----eventos iniciales evaluacion-------
let muestraEvaluacion = document.getElementById("evaluacion");
let tablaEvaluacion = document.getElementById("tablaEvaluacion");
muestraEvaluacion.addEventListener("click", () => {
	tablaEvaluacion.classList.add("mostarTablaActivo");
	imagenFondo.classList.add("fondoOculto");
	tablaImpacto.classList.remove("mostarTablaActivo");
	tablaProbabilidad.classList.remove("mostarTablaActivo");
	tablaTipo.classList.remove("mostarTablaActivo");
});
let nuevoEvaluacion = document.getElementById("buttonNuevoEvaluacion");
let formulariocreaEvaluacion = document.getElementById("agregaElementoEvaluacion");
let formularioEditarEvaluacion = document.getElementById("editaElementoEvaluacion");
let cerrarCrearEvaluacion = document.getElementById("cerrarCrearEvaluacion");
let cerrarEditarEvaluacion = document.getElementById("cerrarEditarEvaluacion");

cerrarEditarEvaluacion.addEventListener("click", () => { formularioEditarEvaluacion.classList.remove("mostrarFormulario");});
nuevoEvaluacion.addEventListener("click", () => { formulariocreaEvaluacion.classList.add("mostrarFormulario");});
cerrarCrearEvaluacion.addEventListener("click", () => {	formulariocreaEvaluacion.classList.remove("mostrarFormulario");});

//--------funciones de impacto-------
document.getElementById("nuevoImpacto").addEventListener("submit", crearImpacto);
function crearImpacto(e) {
	codigo = document.getElementById("codigoImpacto").value;
	descripcion = document.getElementById("descripcionImpacto").value;
	valor = document.getElementById("valorImpacto").value;
	let impacto = {
		codigo,
		descripcion,
		valor,
	};
	if (localStorage.getItem("Impactos") === null) {
		let impactos = [];
		impactos.push(impacto);
		localStorage.setItem("Impactos", JSON.stringify(impactos));
	} else {
		let impactos = JSON.parse(localStorage.getItem("Impactos"));
		impactos.push(impacto);
		localStorage.setItem("Impactos", JSON.stringify(impactos));
	}
/*} else {
	let impactos = JSON.parse(localStorage.getItem("Impactos"));
	//let codigosLocal = impactos[i].codigo;

	if(codigo==codigosLocal){
		console.log("son iguales")
	}else{
		console.log("no iguales")
		impactos.push(impacto);
localStorage.setItem("Impactos", JSON.stringify(impactos));
	} 
}) */

	leerImpacto();
	document.getElementById("nuevoImpacto").reset();
	e.preventDefault();
}
function leerImpacto() {
	let impactos = JSON.parse(localStorage.getItem("Impactos"));
	document.getElementById("impactosTabla").innerHTML = "";
	if (impactos != null) { 
	for (let i = 0; i < impactos.length; i++) {
		let codigo = impactos[i].codigo;
		let descripcion = impactos[i].descripcion;
		let valor = impactos[i].valor;
		document.getElementById("impactosTabla").innerHTML += `<tr>
	<td>${codigo}</td>
	<td>${descripcion}</td>
	<td>${valor}</td>
	<td><button id="editar" class="accion" onclick="editarImpacto('${codigo}')"><img src="./design/pen.png" alt=""></button><button class="accion" onclick="eliminarImpacto('${codigo}')"><img src="./design/bin.png" alt=""></button></td>
	</tr>`;
	}}
}
leerImpacto();
function editarImpacto(codigo) {
	let impactos = JSON.parse(localStorage.getItem("Impactos"));
	for (let i = 0; i < impactos.length; i++) {
		if (impactos[i].codigo === codigo) {
			
			formularioEditaImpacto.classList.add("mostrarFormulario");
			document.getElementById("editaImpacto").innerHTML = `	
			<label for=""> Codigo</label>
							<label for=""> ${impactos[i].codigo}</label>
							<label for=""> Descripcion</label>
							<input id="newdescripcion" class="inputForm" type="text" placeholder="${impactos[i].descripcion}" />
							<label for=""> Valor</label>
							<input id="newvalor" class="inputForm" type="number" placeholder="${impactos[i].valor}"/>
							<br>
							<button class="agrega" type="submit" onclick="actualizarImpacto('${i}')">Actualizar</button>							
	`;
		}
	}
}

function actualizarImpacto(i) {
	let impactos = JSON.parse(localStorage.getItem("Impactos"));
	impactos[i].descripcion = document.getElementById("newdescripcion").value;
	impactos[i].valor = document.getElementById("newvalor").value;
	localStorage.setItem("Impactos", JSON.stringify(impactos));
}

function eliminarImpacto(codigo) {
	let impactos = JSON.parse(localStorage.getItem("Impactos"));
	for (let i = 0; i < impactos.length; i++) {
		if (impactos[i].codigo === codigo) {
			impactos.splice(i, 1);
		}
	}
	localStorage.setItem("Impactos", JSON.stringify(impactos));
	leerImpacto();
}

//--------funciones de probabilidad-------
document.getElementById("nuevoProbabilidad").addEventListener("submit", crearProbabilidad);
function crearProbabilidad(e) {
	codigo = document.getElementById("codigoProbabilidad").value;
	descripcion = document.getElementById("descripcionProbabilidad").value;
	valor = document.getElementById("valorProbabilidad").value;
	let probabilidad = {
		codigo,
		descripcion,
		valor,
	};
	if (localStorage.getItem("Probabilidades") === null) {
		let probabilidades = [];
		probabilidades.push(probabilidad);
		localStorage.setItem("Probabilidades", JSON.stringify(probabilidades));
	} else {
		let probabilidades = JSON.parse(localStorage.getItem("Probabilidades"));
		probabilidades.push(probabilidad);
		localStorage.setItem("Probabilidades", JSON.stringify(probabilidades));
	}
	leerProbabilidad();
	document.getElementById("nuevoImpacto").reset();
	e.preventDefault();
}
function leerProbabilidad() {
	let probabilidades = JSON.parse(localStorage.getItem("Probabilidades"));
	document.getElementById("probabilidadesTabla").innerHTML = "";
	if (probabilidades != null) { 
	for (let i = 0; i < probabilidades.length; i++) {
		let codigo = probabilidades[i].codigo;
		let descripcion = probabilidades[i].descripcion;
		let valor = probabilidades[i].valor;
		document.getElementById("probabilidadesTabla").innerHTML += `<tr>
	<td>${codigo}</td>
	<td>${descripcion}</td>
	<td>${valor}</td>
	<td><button id="editar" class="accion" onclick="editarProbabilidad('${codigo}')"><img src="./design/pen.png" alt=""></button><button class="accion" onclick="eliminarProbabilidad('${codigo}')"><img src="./design/bin.png" alt=""></button></td>
	</tr>`;
	}}
}
leerProbabilidad();
function editarProbabilidad(codigo) {
	let probabilidades = JSON.parse(localStorage.getItem("Probabilidades"));
	for (let i = 0; i < probabilidades.length; i++) {
		if (probabilidades[i].codigo === codigo) {
			formularioEditaProbabilidad.classList.add("mostrarFormulario");
			document.getElementById("editaProbabilidad").innerHTML = `	
							<label for=""> Codigo</label>
							<label for=""> ${probabilidades[i].codigo}</label>
							<label for=""> Descripcion</label>
							<input id="newdescripcion" class="inputForm" type="text" placeholder="${probabilidades[i].descripcion}" />
							<label for=""> Valor</label>
							<input id="newvalor" class="inputForm" type="number" placeholder="${probabilidades[i].valor}"/>
							<br>
							<button class="agrega" type="submit" onclick="actualizarProbabilidad('${i}')">Actualizar</button>							
	`;
		}
	}
}
function actualizarProbabilidad(i) {
	let probabilidades = JSON.parse(localStorage.getItem("Probabilidades"));
	probabilidades[i].descripcion = document.getElementById("newdescripcion").value;
	probabilidades[i].valor = document.getElementById("newvalor").value;
	localStorage.setItem("Probabilidades", JSON.stringify(probabilidades));
}
function eliminarProbabilidad(codigo) {
	//recupera los valores del localStorage mediante la clave probabilidades
	//JSON.parse(analiza toda la informacion del localstorage en JSON)
	let probabilidades = JSON.parse(localStorage.getItem("Probabilidades"));
	//recorre cada valor
	for (let i = 0; i < probabilidades.length; i++) {
		//si ese valor de codigo es igual al codigo seleccionado
		if (probabilidades[i].codigo === codigo) {
			//elimina ese elemento en el array splice para eliminar es (posicion a eliminar,cuantos elementos elimina) para agregar(en que posicion desea agregar, 0, que desea agregar)
			probabilidades.splice(i, 1);
		}
	}
	//agrega los valores al localStorage mediante la clave probabilidades
	//JSON.stringify(toda la informacion del localstorage la devuelve en un string)
	localStorage.setItem("Probabilidades", JSON.stringify(probabilidades));
	leerProbabilidad();
}

//--------funciones de tipo-------
document.getElementById("nuevoTipo").addEventListener("submit", crearTipo);
function crearTipo(e) {
	codigo = document.getElementById("codigoTipo").value;
	descripcion = document.getElementById("descripcionTipo").value;
	interno = document.getElementById("interno").value;
	let tipo = {
		codigo,
		descripcion,
		interno,
	};
	if (localStorage.getItem("Tipos") === null) {
		let tipos = [];
		tipos.push(tipo);
		localStorage.setItem("Tipos", JSON.stringify(tipos));
	} else {
		let tipos = JSON.parse(localStorage.getItem("Tipos"));
		tipos.push(tipo);
		localStorage.setItem("Tipos", JSON.stringify(tipos));
	}
	leerTipo();
	document.getElementById("nuevoTipo").reset();
	e.preventDefault();
}
function leerTipo() {
	let tipos = JSON.parse(localStorage.getItem("Tipos"));
	document.getElementById("tiposTabla").innerHTML = "";
	if (tipos != null) { 
	for (let i = 0; i < tipos.length; i++) {
		let codigo = tipos[i].codigo;
		let descripcion = tipos[i].descripcion;
		let interno = tipos[i].interno;
		document.getElementById("tiposTabla").innerHTML += `<tr>
	<td>${codigo}</td>
	<td>${descripcion}</td>
	<td>${interno}</td>
	<td><button id="editar" class="accion" onclick="editarTipo('${codigo}')"><img src="./design/pen.png" alt=""></button><button class="accion" onclick="eliminarTipo('${codigo}')"><img src="./design/bin.png" alt=""></button></td>
	</tr>`;
	}}
}
leerTipo();
function editarTipo(codigo) {
	let tipos = JSON.parse(localStorage.getItem("Tipos"));
	for (let i = 0; i < tipos.length; i++) {
		if (tipos[i].codigo === codigo) {
			
			formularioEditaTipo.classList.add("mostrarFormulario");
			document.getElementById("editaTipo").innerHTML = `	
							<label for=""> Codigo</label>
							<label for=""> ${tipos[i].codigo}</label>
							<label for=""> Descripcion</label>
							<input id="newdescripcion" class="inputForm" type="text" placeholder="${tipos[i].descripcion}" />
							<label for=""> interno</label>
							<input id="newinterno" class="inputForm" type="number" placeholder="${tipos[i].interno}"/>
							<br>
							<button class="agrega" type="submit" onclick="actualizarTipo('${i}')">Actualizar</button>							
	`;
		}
	}
}
function actualizarTipo(i) {
	let tipos = JSON.parse(localStorage.getItem("Tipos"));
	tipos[i].descripcion = document.getElementById("newdescripcion").value;
	tipos[i].interno = document.getElementById("newinterno").value;
	localStorage.setItem("Tipos", JSON.stringify(tipos));
}
function eliminarTipo(codigo) {
	let tipos = JSON.parse(localStorage.getItem("Tipos"));
	for (let i = 0; i < tipos.length; i++) {
		if (tipos[i].codigo === codigo) {
			tipos.splice(i, 1);
		}
	}
	localStorage.setItem("Tipos", JSON.stringify(tipos));
	leerTipo();
}

//--------funciones de evaluacion-------
document.getElementById("nuevoEvaluacion").addEventListener("submit", crearEvaluacion);
function crearEvaluacion(e) {
	codigo = document.getElementById("codigoEvaluacion").value;
	descripcion = document.getElementById("descripcionEvaluacion").value;
	valorMin = document.getElementById("valorMin").value;
	valorMax = document.getElementById("valorMax").value;


	let evaluacion = {
		codigo,
		descripcion,
		valorMin,
		valorMax,
	};
	if (localStorage.getItem("Evaluaciones") === null) {
		let evaluaciones = [];
		evaluaciones.push(evaluacion);
		localStorage.setItem("Evaluaciones", JSON.stringify(evaluaciones));
	} else {
		let evaluaciones = JSON.parse(localStorage.getItem("Evaluaciones"));
		evaluaciones.push(evaluacion);
		localStorage.setItem("Evaluaciones", JSON.stringify(evaluaciones));
	}
	leerEvaluacion();
	document.getElementById("nuevoEvaluacion").reset();
	e.preventDefault();

}
function leerEvaluacion() {
	let evaluaciones = JSON.parse(localStorage.getItem("Evaluaciones"));
	document.getElementById("evaluacionesTabla").innerHTML = "";
	if (evaluaciones != null) { 
	for (let i = 0; i < evaluaciones.length; i++) {
		let codigo = evaluaciones[i].codigo;
		let descripcion = evaluaciones[i].descripcion;
		let valorMin = evaluaciones[i].valorMin;
		let valorMax = evaluaciones[i].valorMax;
		
		document.getElementById("evaluacionesTabla").innerHTML += `<tr>
	<td>${codigo}</td>
	<td>${descripcion}</td>
	<td>${valorMin}</td>
	<td>${valorMax}</td>
	<td><button id="editar" class="accion" onclick="editarEvaluacion('${codigo}')"><img src="./design/pen.png" alt=""></button><button class="accion" onclick="eliminarEvaluacion('${codigo}')"><img src="./design/bin.png" alt=""></button></td>
	</tr>`;
	}}
}
leerEvaluacion();
function editarEvaluacion(codigo) {
	let evaluaciones = JSON.parse(localStorage.getItem("Evaluaciones"));
	for (let i = 0; i < evaluaciones.length; i++) {
		if (evaluaciones[i].codigo === codigo) {
			formularioEditarEvaluacion.classList.add("mostrarFormulario");
			document.getElementById("editaEvaluacion").innerHTML = `	
							<label for=""> Codigo</label>
							<label for=""> ${evaluaciones[i].codigo}</label>
							<label for=""> Descripcion</label>
							<input id="newdescripcion" class="inputForm" type="text" placeholder="${evaluaciones[i].descripcion}" />
							<label for=""> valor Minimo</label>
							<input id="newvalorMin" class="inputForm" type="number" placeholder="${evaluaciones[i].valorMin}"/>
							<label for=""> valor Maximo</label>
							<input id="newvalorMax" class="inputForm" type="number" placeholder="${evaluaciones[i].valorMax}"/>
							<br>
							<button class="agrega" type="submit" onclick="actualizarEvaluacion('${i}')">Actualizar</button>							
	`;
		}
	}
}
function actualizarEvaluacion(i) {
	let evaluaciones = JSON.parse(localStorage.getItem("Evaluaciones"));
	evaluaciones[i].descripcion = document.getElementById("newdescripcion").value;
	evaluaciones[i].valorMin = document.getElementById("newvalorMin").value;
	evaluaciones[i].valorMax = document.getElementById("newvalorMax").value;
	localStorage.setItem("Evaluaciones", JSON.stringify(evaluaciones));
}
function eliminarEvaluacion(codigo) {
	let evaluaciones = JSON.parse(localStorage.getItem("Evaluaciones"));
	for (let i = 0; i < evaluaciones.length; i++) {
		if (evaluaciones[i].codigo === codigo) {
			evaluaciones.splice(i, 1);
		}
	}
	localStorage.setItem("Evaluaciones", JSON.stringify(evaluaciones));
	leerEvaluacion();
}