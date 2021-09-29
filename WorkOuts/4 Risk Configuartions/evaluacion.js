let nuevo = document.getElementById("nuevo");
let formulario = document.getElementById("agregaElemento");
let formularioEditar = document.getElementById("editaElemento");
let cerrar = document.getElementById("cerrar");
let cerrar2 = document.getElementById("cerrar2");

cerrar2.addEventListener("click", () => {
	formularioEditar.classList.remove("mostrarFormulario");
});
nuevo.addEventListener("click", () => {
	formulario.classList.add("mostrarFormulario");
});
cerrar.addEventListener("click", () => {
	formulario.classList.remove("mostrarFormulario");
});

//eventos formulario
document.getElementById("nuevoEvaluacion").addEventListener("submit", crear);

function crear(e) {
	codigo = document.getElementById("codigo").value;
	descripcion = document.getElementById("descripcion").value;
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
	leer();
	document.getElementById("nuevoEvaluacion").reset();
	e.preventDefault();
}
function leer() {
	let evaluaciones = JSON.parse(localStorage.getItem("Evaluaciones"));
	document.getElementById("evaluacionesTabla").innerHTML = "";
	
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
	<td><button id="editar" class="accion" onclick="editar('${codigo}')"><img src="./design/pen.png" alt=""></button><button class="accion" onclick="eliminar('${codigo}')"><img src="./design/bin.png" alt=""></button></td>
	</tr>`;	
	}
}
leer();

function editar(codigo) {
	let evaluaciones = JSON.parse(localStorage.getItem("Evaluaciones"));
	for (let i = 0; i < evaluaciones.length; i++) {		
		if (evaluaciones[i].codigo === codigo) {
			console.log("la i es:"+i)
			formularioEditar.classList.add("mostrarFormulario");
			document.getElementById("editaEvaluacion").innerHTML = `	
							<label for=""> Codigo</label>
							<input id="newcodigo" class="inputForm" type="number" placeholder="${evaluaciones[i].codigo}"/>
							<label for=""> Descripcion</label>
							<input id="newdescripcion" class="inputForm" type="text" placeholder="${evaluaciones[i].descripcion}" />
							<label for=""> valor Minimo</label>
							<input id="newvalorMin" class="inputForm" type="number" placeholder="${evaluaciones[i].valorMin}"/>
							<label for=""> valor Maximo</label>
							<input id="newvalorMax" class="inputForm" type="number" placeholder="${evaluaciones[i].valorMax}"/>
							<br>
							<button class="agrega" type="submit" onclick="actualizar('${i}')">Actualizar</button>							
	`;	
		}
	}
	
}
function actualizar(i){
	let evaluaciones = JSON.parse(localStorage.getItem("Evaluaciones"));
	evaluaciones[i].codigo=document.getElementById("newcodigo").value;
	evaluaciones[i].descripcion=document.getElementById("newdescripcion").value;
	evaluaciones[i].valorMin=document.getElementById("newvalorMin").value;
	evaluaciones[i].valorMax=document.getElementById("newvalorMax").value;
localStorage.setItem("Evaluaciones",JSON.stringify(evaluaciones));
}
function eliminar(codigo){
	let evaluaciones = JSON.parse(localStorage.getItem("Evaluaciones"));
	for (let i = 0; i < evaluaciones.length; i++) {
		if (evaluaciones[i].codigo === codigo) {
			evaluaciones.splice(i,1);
		}
	}
	localStorage.setItem("Evaluaciones",JSON.stringify(evaluaciones));
	leer();
}
