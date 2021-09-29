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
document.getElementById("nuevoImpacto").addEventListener("submit", crear);
//document.getElementById("nuevoprobabilidad").addEventListener("submit", crear);

function crear(e) {
	codigo = document.getElementById("codigo").value;
	descripcion = document.getElementById("descripcion").value;
	valor = document.getElementById("valor").value;
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
	leer();
	document.getElementById("nuevoImpacto").reset();
	e.preventDefault();
}
function leer() {
	let impactos = JSON.parse(localStorage.getItem("Impactos"));
	document.getElementById("impactosTabla").innerHTML = "";
	
	for (let i = 0; i < impactos.length; i++) {
		let codigo = impactos[i].codigo;
		let descripcion = impactos[i].descripcion;
		let valor = impactos[i].valor;

		document.getElementById("impactosTabla").innerHTML += `<tr>
	<td>${codigo}</td>
	<td>${descripcion}</td>
	<td>${valor}</td>
	<td><button id="editar" class="accion" onclick="editar('${codigo}')"><img src="./design/pen.png" alt=""></button><button class="accion" onclick="eliminar('${codigo}')"><img src="./design/bin.png" alt=""></button></td>
	</tr>`;	
	}
}
leer();

function editar(codigo) {
	let impactos = JSON.parse(localStorage.getItem("Impactos"));
	for (let i = 0; i < impactos.length; i++) {		
		if (impactos[i].codigo === codigo) {
			console.log("la i es:"+i)
			formularioEditar.classList.add("mostrarFormulario");
			document.getElementById("editaImpacto").innerHTML = `	
							<label for=""> Codigo</label>
							<input id="newcodigo" class="inputForm" type="number" placeholder="${impactos[i].codigo}"/>
							<label for=""> Descripcion</label>
							<input id="newdescripcion" class="inputForm" type="text" placeholder="${impactos[i].descripcion}" />
							<label for=""> Valor</label>
							<input id="newvalor" class="inputForm" type="number" placeholder="${impactos[i].valor}"/>
							<br>
							<button class="agrega" type="submit" onclick="actualizar('${i}')">Actualizar</button>							
	`;	
		}
	}
	
}
function actualizar(i){
	let impactos = JSON.parse(localStorage.getItem("Impactos"));
	impactos[i].codigo=document.getElementById("newcodigo").value;
	impactos[i].descripcion=document.getElementById("newdescripcion").value;
	impactos[i].valor=document.getElementById("newvalor").value;
localStorage.setItem("Impactos",JSON.stringify(impactos));
}
function eliminar(codigo){
	let impactos = JSON.parse(localStorage.getItem("Impactos"));
	for (let i = 0; i < impactos.length; i++) {
		if (impactos[i].codigo === codigo) {
			impactos.splice(i,1);
		}
	}
	localStorage.setItem("Impactos",JSON.stringify(impactos));
	leer();
}
