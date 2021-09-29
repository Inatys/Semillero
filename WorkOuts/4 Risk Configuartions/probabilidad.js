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
document.getElementById("nuevoprobabilidad").addEventListener("submit", crear);

function crear(e) {
	codigo = document.getElementById("codigo").value;
	descripcion = document.getElementById("descripcion").value;
	valor = document.getElementById("valor").value;
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
	leer();
	document.getElementById("nuevoImpacto").reset();
	e.preventDefault();
}
function leer() {
	let probabilidades = JSON.parse(localStorage.getItem("Probabilidades"));
	document.getElementById("probabilidadesTabla").innerHTML = "";
	
	for (let i = 0; i < probabilidades.length; i++) {
		let codigo = probabilidades[i].codigo;
		let descripcion = probabilidades[i].descripcion;
		let valor = probabilidades[i].valor;

		document.getElementById("probabilidadesTabla").innerHTML += `<tr>
	<td>${codigo}</td>
	<td>${descripcion}</td>
	<td>${valor}</td>
	<td><button id="editar" class="accion" onclick="editar('${codigo}')"><img src="./design/pen.png" alt=""></button><button class="accion" onclick="eliminar('${codigo}')"><img src="./design/bin.png" alt=""></button></td>
	</tr>`;	
	}
}
leer();

function editar(codigo) {
	let probabilidades = JSON.parse(localStorage.getItem("Probabilidades"));
	for (let i = 0; i < probabilidades.length; i++) {		
		if (probabilidades[i].codigo === codigo) {
			console.log("la i es:"+i)
			formularioEditar.classList.add("mostrarFormulario");
			document.getElementById("editaProbabilidad").innerHTML = `	
							<label for=""> Codigo</label>
							<input id="newcodigo" class="inputForm" type="number" placeholder="${probabilidades[i].codigo}"/>
							<label for=""> Descripcion</label>
							<input id="newdescripcion" class="inputForm" type="text" placeholder="${probabilidades[i].descripcion}" />
							<label for=""> Valor</label>
							<input id="newvalor" class="inputForm" type="number" placeholder="${probabilidades[i].valor}"/>
							<br>
							<button class="agrega" type="submit" onclick="actualizar('${i}')">Actualizar</button>							
	`;	
		}
	}
	
}
function actualizar(i){
	let probabilidades = JSON.parse(localStorage.getItem("Probabilidades"));
	probabilidades[i].codigo=document.getElementById("newcodigo").value;
	probabilidades[i].descripcion=document.getElementById("newdescripcion").value;
	probabilidades[i].valor=document.getElementById("newvalor").value;
localStorage.setItem("Probabilidades",JSON.stringify(probabilidades));
}
function eliminar(codigo){
	//recupera los valores del localStorage mediante la clave probabilidades
	//JSON.parse(analiza toda la informacion del localstorage en JSON) 
	let probabilidades = JSON.parse(localStorage.getItem("Probabilidades"));
	//recorre cada valor
	for (let i = 0; i < probabilidades.length; i++) {
			//si ese valor de codigo es igual al codigo seleccionado
		if (probabilidades[i].codigo === codigo) {
			//elimina ese elemento en el array splice para eliminar es (posicion a eliminar,cuantos elementos elimina) para agregar(en que posicion desea agregar, 0, que desea agregar)
			probabilidades.splice(i,1);
		}
	}
		//agrega los valores al localStorage mediante la clave probabilidades
		//JSON.stringify(toda la informacion del localstorage la devuelve en un string) 
	localStorage.setItem("Probabilidades",JSON.stringify(probabilidades));
	leer();
}
