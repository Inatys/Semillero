/* let probabilidad = [
	{
		codigo: 1,
		descripcion: "decribe",
		id: 1,
		valor: 5,
		accion: ""
	},
	{
		codigo: 2,
		descripcion: "decribe",
		id: 2,
		valor: 6,
		accion: ""
	}
];

let tipo = [
	{
		codigo: 1,
		descripcion: "decribe",
		id: 1,
		valor: 5,
		accion: ""
	},
	{
		codigo: 2,
		descripcion: "decribe",
		id: 2,
		valor: 6,
		accion: ""
	}
];

let evaluacion = [
	{
		codigo: 1,
		descripcion: "decribe",
		id: 1,
		valor: 5,
		accion: ""
	},
	{
		codigo: 2,
		descripcion: "decribe",
		id: 2,
		valor: 6,
		accion: ""
	}
]; */


let nuevo = document.getElementById("nuevo");
let formulario = document.getElementById("agregaElemento");
let formularioEditar = document.getElementById("editaElemento");
let cerrar = document.getElementById("cerrar");

nuevo.addEventListener("click", () => {
	console.log("dioclick");
	formulario.classList.add("mostrarFormulario");
});
cerrar.addEventListener("click", () => {
	formulario.classList.remove("mostrarFormulario");
});

//evento formulario
document.getElementById("nuevo-impacto").addEventListener("submit", crear);

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
	document.getElementById("nuevo-impacto").reset();
	console.log("impacto guardado");
	e.preventDefault();
}

function leer() {
	let impactos = JSON.parse(localStorage.getItem("Impactos"));
	document.getElementById("impactos-tabla").innerHTML = "";
	
	for (let i = 0; i < impactos.length; i++) {
		let codigo = impactos[i].codigo;
		let descripcion = impactos[i].descripcion;
		let valor = impactos[i].valor;

		document.getElementById("impactos-tabla").innerHTML += `<tr>
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
			document.getElementById("editaElemento").innerHTML = `
			
				<section class="agregarNuevo">
					<div class="nuevoEncabezado">
						<h3>EDITAR</h3>
						<button id="cerrar2">x</button>
					</div>
						<form  id="nuevo-impacto" action="">
							<label for=""> Codigo</label>
							<!-- id codigo -->
							<input id="newcodigo" class="inputForm" type="number" placeholder="${impactos[i].codigo}"/>
							
							<label for=""> Descripcion</label>
							<!-- id descripcion -->
							<input id="newdescripcion" class="inputForm" type="text" placeholder="${impactos[i].descripcion}" />
							
							<label for=""> Valor</label>
							<!-- id valor -->
							<input id="newvalor" class="inputForm" type="number" placeholder="${impactos[i].valor}"/>
							<br>
							<button class="agrega" type="submit" onclick="actualizar('${i}')">Actualizar</button>
						</form>
				</section>	
	`;	
		}
	}
	let cerrar2 = document.getElementById("cerrar2");
console.log(cerrar2)

	cerrar2.addEventListener("click", () => {
		console.log("dio")
		formularioEditar.classList.remove("mostrarFormulario");
	});
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
