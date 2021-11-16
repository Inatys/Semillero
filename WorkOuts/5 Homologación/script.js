const listaTabla = document.getElementById("listaTabla");
const listaAccesos = document.getElementById("lista");
document.addEventListener("DOMContentLoaded", () => {
	listaNivelesAcceso();
});

const listaNivelesAcceso = async () => {
	try {
		const res2 = await fetch("NivelesDeAceso.json");
		const data2 = await res2.json();
		mostrarAccesos(data2);
	} catch (error) {
		console.log(error);
	}
};
const tablaCoordinadores = async () => {
	try {
		const res = await fetch("CoordinadoraDeCalidad.json");
		const data = await res.json();
		mostrarTablaCoordinadores(data);
	} catch (error) {
		console.log(error);
	}
};

const tablaAccesosTotales = async () => {
	try {
		const res3 = await fetch("AccesoTotal.json");
		const data3 = await res3.json();
		mostrarTablaAccesosTotales(data3);
		//ids(data3);
	} catch (error) {
		console.log(error);
	}
};

const mostrarAccesos = (data2) => {
	data2.forEach((acceso) => {
		console.log("entro");
		const dato = document.createElement("button");
		dato.setAttribute("class", "dato");
		dato.setAttribute("id", "botonAcceso");
		const accesos = document.createElement("h5");
		accesos.setAttribute("id", "textoAcceso");
		accesos.textContent = acceso.Descripcion;
		const cantidadAcceso = document.createElement("h6");
		cantidadAcceso.textContent = acceso.Cantidad;

		listaAccesos.append(dato);
		dato.append(accesos, cantidadAcceso);

		if (acceso.Id == 1) {
			dato.addEventListener("click", () => {
				tablaAccesosTotales();
				/* const ids = (data3) => {
					data3.forEach((id)=>{
						let todosId=id.Id	
						localStorage.getItem(todosId)===null?null:id(todosId);
					});
					
				}  */
				function id(todosId) {
					console.log(localStorage.getItem(todosId));
					localStorage.getItem(todosId) === "true" ? inputs2(inputs) : null;
				}
			});
		} else if (acceso.Id == 32) {
			dato.addEventListener("click", tablaCoordinadores);
		}
	});
};
let datoTabla;

function inputs2(inputs) {
	console.log(inputs);
}

const mostrarTablaAccesosTotales = (data3) => {
	listaTabla.innerHTML = "";
	data3.forEach((accesoTotal) => {
		listaTabla.innerHTML += `<tr class="datoTabla">
        <td class="nombre">
            <input id="${
							accesoTotal.Id
						}"  onchange="cambiarEstado(this)" type="checkbox" />
            <h6>${accesoTotal.Nombre}</h6>
        </td>
        <td>
            <h6>${accesoTotal.Loggin}</h6>
        </td>
        <td>
            <h6 id="textoHomologacion">${
							accesoTotal.Homologacion === null ? "" : accesoTotal.Homologacion
						}</h6>
        </td>
    </tr>`;
	});

	inputs = document.querySelectorAll("input[type='checkbox']");
	h6 = document.querySelectorAll("#textoHomologacion");
	mantenerCheck();
};

let inputs;
document.getElementById("marcarTodos").addEventListener("click", marcarTodos);
function marcarTodos() {
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].checked = true;
	}
	cambiarEstado();
}
document.getElementById("desmarcarTodos").addEventListener("click", desmarcarTodos);
function desmarcarTodos() {
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].checked = false;
	}
	cambiarEstado();
}

/* function save() {
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].checked = false;
		localStorage.setItem("input[type='checkbox']", inputs[i].checked);
	}
} */

const mostrarTablaCoordinadores = (data) => {
	listaTabla.innerHTML = "";
	data.forEach((coordinador) => {
		listaTabla.innerHTML += `<tr class="datoTabla">
        <td class="nombre">
            <input id="${
							coordinador.Id
						}"  onchange="cambiarEstado(this)" type="checkbox" />
            <h6>${coordinador.Nombre}</h6>
        </td>
        <td>
            <h6>${coordinador.Loggin}</h6>
        </td>
        <td>
            <h6 id="textoHomologacion">${
							coordinador.Homologacion === null ? "" : coordinador.Homologacion
						}</h6>
        </td>
    </tr>`;
	});
	inputs = document.querySelectorAll("input[type='checkbox']");
	h6 = document.querySelectorAll("#textoHomologacion");
	mantenerCheck();
};

function filtrar() {
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById("myInput");
	console.log(input);
	filter = input.value.toUpperCase();
	console.log(filter);
	ul = document.getElementById("lista");
	console.log(ul);
	li = document.querySelectorAll("#botonAcceso");
	console.log(li);
	for (let i = 0; i < li.length; i++) {
		a = li[i].querySelectorAll("#textoAcceso")[0];
		console.log(a);
		txtValue = a.textContent || a.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}

let h6;
function cambiarEstado(check) {
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].checked == true) {
			console.log(inputs[i]);
			console.log("check");
			console.log(h6[i]);
			h6[i].innerText = "pendiente";
		} else {
			console.log(" no check");
			h6[i].innerText = "";
		}
	}
	let idCheck = check.id;
	let estadoCheck = check.checked;
	let checks = { idCheck, estadoCheck };

	if (localStorage.getItem("todoCheck") == null) {
		let todoCheck = [];
		todoCheck.push(checks);
		localStorage.setItem("todoCheck", JSON.stringify(todoCheck));
	} else {
		let todoCheck = JSON.parse(localStorage.getItem("todoCheck"));
		todoCheck.push(checks);
		localStorage.setItem("todoCheck", JSON.stringify(todoCheck));
	}
}

function mantenerCheck(check) {
	let verEstadoCheck = JSON.parse(localStorage.getItem("todoCheck"));
	if (verEstadoCheck != null) {  
	for (let i = 0; i < verEstadoCheck.length; i++) {
		for (let i = 0; i < inputs.length; i++) {
			console.log(verEstadoCheck[i].idCheck);
			console.log(inputs[i]);
			console.log(inputs[i].id);
			if (verEstadoCheck[i].idCheck == inputs[i].id) {
				if (verEstadoCheck[i].estadoCheck == true) {
					inputs[i].setAttribute('checked','checked');
				}
			}
		}}
	}
}
