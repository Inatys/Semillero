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
document.getElementById("nuevoTipo").addEventListener("submit", crear);

function crear(e) {
	codigo = document.getElementById("codigo").value;
	descripcion = document.getElementById("descripcion").value;
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
	leer();
	document.getElementById("nuevoTipo").reset();
	e.preventDefault();
}
function leer() {
	let tipos = JSON.parse(localStorage.getItem("Tipos"));
	document.getElementById("tiposTabla").innerHTML = "";
	
	for (let i = 0; i < tipos.length; i++) {
		let codigo = tipos[i].codigo;
		let descripcion = tipos[i].descripcion;
		let interno = tipos[i].interno;

		document.getElementById("tiposTabla").innerHTML += `<tr>
	<td>${codigo}</td>
	<td>${descripcion}</td>
	<td>${interno}</td>
	<td><button id="editar" class="accion" onclick="editar('${codigo}')"><img src="./design/pen.png" alt=""></button><button class="accion" onclick="eliminar('${codigo}')"><img src="./design/bin.png" alt=""></button></td>
	</tr>`;	
	}
}
leer();

function editar(codigo) {
	let tipos = JSON.parse(localStorage.getItem("Tipos"));
	for (let i = 0; i < tipos.length; i++) {		
		if (tipos[i].codigo === codigo) {
			console.log("la i es:"+i)
			formularioEditar.classList.add("mostrarFormulario");
			document.getElementById("editaTipo").innerHTML = `	
							<label for=""> Codigo</label>
							<input id="newcodigo" class="inputForm" type="number" placeholder="${tipos[i].codigo}"/>
							<label for=""> Descripcion</label>
							<input id="newdescripcion" class="inputForm" type="text" placeholder="${tipos[i].descripcion}" />
							<label for=""> interno</label>
							<input id="newinterno" class="inputForm" type="number" placeholder="${tipos[i].interno}"/>
							<br>
							<button class="agrega" type="submit" onclick="actualizar('${i}')">Actualizar</button>							
	`;	
		}
	}
	
}
function actualizar(i){
	let tipos = JSON.parse(localStorage.getItem("Tipos"));
	tipos[i].codigo=document.getElementById("newcodigo").value;
	tipos[i].descripcion=document.getElementById("newdescripcion").value;
	tipos[i].interno=document.getElementById("newinterno").value;
localStorage.setItem("Tipos",JSON.stringify(tipos));
}
function eliminar(codigo){
	let tipos = JSON.parse(localStorage.getItem("Tipos"));
	for (let i = 0; i < tipos.length; i++) {
		if (tipos[i].codigo === codigo) {
			tipos.splice(i,1);
		}
	}
	localStorage.setItem("Tipos",JSON.stringify(tipos));
	leer();
}
