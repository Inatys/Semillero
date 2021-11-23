let imagenCarroAmpliado = document.getElementById("carroAmpliado");
let agregarImagen = document.getElementById("upload");
let nuevaImagen;
let reader;
function mostrarImagenAgregada() {
	let archivo = document.getElementById("upload").files[0];
	reader = new FileReader();
	if (upload) {
		reader.readAsDataURL(archivo);
		reader.onloadend = function () {
			document.getElementById("img").src = reader.result;
		};
	}
}
function ampliarImagen() {
	imagenCarroAmpliado.style.display = "flex";
	imagenCarroAmpliado.innerHTML = `
    <img src="./imagenes/carroAmpliado.png" id="imagenAmpliadaAgregada" alt="">
    <button class="botonGuardarCerrar"  onclick="cerrarImagenAmpliada()">Cerrar</button>
    `;
	nuevaImagen = document.getElementById("imagenAmpliadaAgregada");
	if (nuevaImagen.src == "") {
		nuevaImagen.src = reader.result;
	} else {
		nuevaImagen.src = reader.result;
	}
}
function cerrarImagenAmpliada() {
	imagenCarroAmpliado.style.display = "none";
}

let seccionControl = document.querySelector(".seccionControl");
let seccionMantenimiento = document.querySelector(".seccionMantenimiento");
let seccionCombustible = document.querySelector(".seccionCombustible");
let seccionTarifas = document.querySelector(".seccionTarifas");
let seccionNeumaticos = document.querySelector(".seccionNeumaticos");
let seccionMenuControl = document.querySelector(".control");
let seccionMenuMantenimiento = document.querySelector(".mantenimiento");
let seccionMenuCombustible = document.querySelector(".combustible");
let seccionMenuTarifas = document.querySelector(".tarifas");
let seccionMenuNeumaticos = document.querySelector(".neumaticos");

mostrarControl();
function mostrarControl() {
	seccionMenuControl.classList.add("seleccionado");
	seccionMenuMantenimiento.classList.remove("seleccionado");
	seccionMenuCombustible.classList.remove("seleccionado");
	seccionMenuTarifas.classList.remove("seleccionado");
	seccionMenuNeumaticos.classList.remove("seleccionado");
	seccionControl.style.display = "flex";
	seccionMantenimiento.style.display = "none";
	seccionCombustible.style.display = "none";
	seccionTarifas.style.display = "none";
	seccionNeumaticos.style.display = "none";
}

function mostrarMantenimiento() {
	seccionMenuMantenimiento.classList.add("seleccionado");
	seccionMenuControl.classList.remove("seleccionado");
	seccionMenuCombustible.classList.remove("seleccionado");
	seccionMenuTarifas.classList.remove("seleccionado");
	seccionMenuNeumaticos.classList.remove("seleccionado");
	seccionMantenimiento.style.display = "flex";
	seccionControl.style.display = "none";
	seccionCombustible.style.display = "none";
	seccionTarifas.style.display = "none";
	seccionNeumaticos.style.display = "none";
}

function mostrarCombustible() {
	seccionMenuCombustible.classList.add("seleccionado");
	seccionMenuControl.classList.remove("seleccionado");
	seccionMenuMantenimiento.classList.remove("seleccionado");
	seccionMenuTarifas.classList.remove("seleccionado");
	seccionMenuNeumaticos.classList.remove("seleccionado");
	seccionCombustible.style.display = "flex";
	seccionMantenimiento.style.display = "none";
	seccionControl.style.display = "none";
	seccionTarifas.style.display = "none";
	seccionNeumaticos.style.display = "none";
}

function mostrarTarifas() {
	seccionMenuTarifas.classList.add("seleccionado");
	seccionMenuControl.classList.remove("seleccionado");
	seccionMenuMantenimiento.classList.remove("seleccionado");
	seccionMenuCombustible.classList.remove("seleccionado");
	seccionMenuNeumaticos.classList.remove("seleccionado");
	seccionTarifas.style.display = "flex";
	seccionMantenimiento.style.display = "none";
	seccionControl.style.display = "none";
	seccionCombustible.style.display = "none";
	seccionNeumaticos.style.display = "none";
}

function mostrarNeumaticos() {
	seccionMenuNeumaticos.classList.add("seleccionado");
	seccionMenuControl.classList.remove("seleccionado");
	seccionMenuMantenimiento.classList.remove("seleccionado");
	seccionMenuCombustible.classList.remove("seleccionado");
	seccionMenuTarifas.classList.remove("seleccionado");
	seccionNeumaticos.style.display = "flex";
	seccionMantenimiento.style.display = "none";
	seccionControl.style.display = "none";
	seccionTarifas.style.display = "none";
	seccionCombustible.style.display = "none";
}

let menuCombustible = document.querySelector(".combustible");
let inputSwitchCombustible = document.getElementById("checkCombustible");
function mostrarMenuCombustible() {
	if (inputSwitchCombustible.checked == true) {
		menuCombustible.style.display = "flex";
	} else {
		menuCombustible.style.display = "none";
	}
}
let menuNeumaticos = document.querySelector(".neumaticos");
let inputSwitchNeumaticos = document.getElementById("checkNeumaticos");
function mostrarMenuNeumaticos() {
	if (inputSwitchNeumaticos.checked == true) {
		menuNeumaticos.style.display = "flex";
	} else {
		menuNeumaticos.style.display = "none";
	}
}

let seccionesDosMedidores = document.querySelector(".seccionesDosMedidores");
let seccionesDosMedidores2 = document.querySelector(".seccionesDosMedidores2");
let botonAgregar = document.querySelector(".botonAgregar");
let botonEliminar = document.querySelector(".botonEliminar");
let medidor2Control = document.querySelector(".medidor2Control");
let medidor2Mantenimiento = document.querySelector(".medidor2Mantenimiento");
function agregarSegundoMedidorControl() {
	botonAgregar.style.display = "none";
	botonEliminar.style.display = "block";
	medidor2Control.style.display = "block";
	medidor2Mantenimiento.style.display = "block";
	medidor2Control.innerHTML = `
    <div class="lineaMedidores"></div>
    <div class="encabezadoMedidor"> Medidor 2 </div>
    <form action="" class="formMedidores">
        <label for="">
            Medidor
            <select name="" id="selectControl">
                <option value="0">Selecciona</option>
                <option value="1">Horómetro(Hr)</option>
                <option value="2">Odómetro(Km)</option>
            </select>
        </label>
        <label for="">
            Medidor inicial
            <input type="number" id="inputControl">
        </label>
        <label for="">
            Fecha medidor inicial
            <input type="date" id="inputControl"/>
        </label>
        <label for="">
            Medidor actual
            <input type="text" placeholder="Este se llena automatico">
        </label>
        <label for="">
            Fecha medidor actual
            <input type="text" placeholder="Este se llena automatico">
        </label>
        <label for="">
            Trabajo acumulado
            <input type="text" placeholder="Este se llena automatico">
        </label>
    </form>
    `;

	medidor2Mantenimiento.innerHTML = `
    <div class="lineaMedidores2"></div>
    <div class="encabezadoMedidor"> Medidor 2 </div>
    <form action="" class="formMedidores">
        <label for="">
            Ciclo anterior OT
            <select name="" id="selectMantenimiento">
                <option value="0">Selecciona</option>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
        </label>
        <label for="">
            Medida anterior OT
            <select name="" id="selectMantenimiento">
                <option value="0">Selecciona</option>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
        </label>                                       
        <label for="">
            Acumulado Anterior OT
            <select name="" id="selectMantenimiento">
                <option value="0">Selecciona</option>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
        </label>  
    </form>
    `;
}
function EliminaSegundoMedidorControl() {
	botonAgregar.style.display = "block";
	botonEliminar.style.display = "none";
	medidor2Control.style.display = "none";
	medidor2Control.innerHTML = ``;
	medidor2Mantenimiento.style.display = "none";
	medidor2Mantenimiento.innerHTML = ``;
}

let tbodyCombustibleLibre = document.getElementById("tbodyCombustibleLibre");
let tablaCombustibleLibre = document.querySelector(".combustibleLibre");
let inputSwitchCombustibleLibre = document.getElementById("inputSwitchCombustibleLibre");
function mostrarCombustibleLibre() {
	if (inputSwitchCombustibleLibre.checked == true) {
		tablaCombustibleLibre.style.display = "table";
		tbodyCombustibleLibre.innerHTML = `
        <tr>
            <th>
                <select name="" id="selectCombustibleLibre" class="selectTable" required>
                    <option value="0">Selecciona</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </th>
            <th>
                <input type="number" class="inputTable" id="inputCombustibleLibre">
            </th>
            <th class="estiloFilaBotones">
                <button class="botonAgregarEliminar" onclick="agregarFilaCombustibleLibre()">+</button>
                <button class="botonAgregarEliminar">-</button>
            </th>
        </tr>
        `;
	} else {
		tablaCombustibleLibre.style.display = "none";
		tbodyCombustibleLibre.innerHTML = ``;
	}
}
function agregarFilaCombustibleLibre() {
	let inputCombustibleLibre = document.querySelector("#inputCombustibleLibre");
	let selectCombustibleLibre = document.querySelector("#selectCombustibleLibre");
	let lleno = 0;
	let lleno2 = 0;
	if (inputCombustibleLibre.value != "") {
		lleno = lleno + 1;
	} else if (inputCombustibleLibre.value === "") {
		lleno = lleno + 0;
	}

	if (selectCombustibleLibre.value != "0") {
		lleno2 = lleno2 + 1;
	} else if (selectCombustibleLibre.value === "0") {
		lleno2 = lleno2 + 0;
	}

	if ((lleno >= 1) && (lleno2 >= 1)) {
		tbodyCombustibleLibre.innerHTML += `
        <tr>
            <th>
                <select name="" id="selectCombustibleLibre" class="selectTable" required>
                    <option value="0">Selecciona</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </th>
            <th>
                <input type="number" class="inputTable" id="inputCombustibleLibre">
            </th>
            <th class="estiloFilaBotones">
                <button class="botonAgregarEliminar" onclick="agregarFilaCombustibleLibre()">+</button>
                <button class="botonAgregarEliminar">-</button>
            </th>
        </tr>
        `;
	} else{
        tbodyCombustibleLibre.innerHTML += ``;
		alertError.style.opacity = "1";
		alertError.innerText = "Debes diligenciar todos los campos para agregar una nueva fila";
		setTimeout(function () {
			alertError.innerText = "";
			alertError.style.opacity = "0";
		}, 2000);		
	}
}

let alertError = document.querySelector(".alertError");
let alertExito = document.querySelector(".alertExito");
let tbodyRendimiento = document.getElementById("tbodyRendimiento");
function agregarFilaRendimiento() {
	let selectCombustible = document.querySelector("#selectCombustible");
	let inputCombustible = document.querySelectorAll("#inputCombustible");
	let lleno=0;
    let lleno2=0;
    if (selectCombustible.value != "0") {
        lleno = lleno+1;
    } else if (selectCombustible.value === "0") {
        lleno = lleno+0;
    }

	for (let i = 0; i < inputCombustible.length; i++) {
		if (inputCombustible[i].value != "") {
			lleno2 = lleno2+1;
		} else if (inputCombustible[i].value === "") {
			lleno2 = lleno2+0;
		}
	}

	if ((lleno>=1)&&(lleno2>=2)) {
		tbodyRendimiento.innerHTML += `
    <tr>
        <th>
            <select name="" id="selectCombustible" class="selectTable" required>
                <option value="0">Selecciona</option>
                <option value="1">Abrego</option>
				<option value="2">Aguachica</option>
            </select>
        </th>
        <th>
            <input type="number" class="inputTable" id="inputCombustible" />
        </th>
        <th>
            <input type="number" class="inputTable" id="inputCombustible" />
        </th>
        <th class="estiloFilaBotones">
            <button class="botonAgregarEliminar" onclick="agregarFilaRendimiento()">+</button>
            <button class="botonAgregarEliminar">-</button>
        </th>
    </tr>
    `;
	} else {
		tbodyRendimiento.innerHTML += ``;
		alertError.style.opacity = "1";
		alertError.innerText = "Debes diligenciar todos los campos para agregar una nueva fila";
		setTimeout(function () {
			alertError.innerText = "";
			alertError.style.opacity = "0";
		}, 2000);
	}
}

let imagenTendido = document.querySelector(".imagenTendido");
function mostrarTendido() {
	let selectTendido = document.getElementById("selectTendido");
	imagenTendido.style.display = "flex";
	if (selectTendido.value === "0") {
		imagenTendido.innerHTML = ``;
	} else if (selectTendido.value === "1") {
		imagenTendido.innerHTML = `
        <img src="./imagenes/bus.png" alt="">
        <button class="botonGuardarCerrar" onclick="cerrarImagenTendido()">Cerrar</button>
    `;
	} else if (selectTendido.value === "2") {
		imagenTendido.innerHTML = `
        <img src="./imagenes/camion.png" alt="">
        <button class="botonGuardarCerrar" onclick="cerrarImagenTendido()">Cerrar</button>
    `;
	} else if (selectTendido.value === "3") {
		imagenTendido.innerHTML = `
        <img src="./imagenes/volqueta.png" alt="">
        <button class="botonGuardarCerrar" onclick="cerrarImagenTendido()">Cerrar</button>
    `;
	}
}
function cerrarImagenTendido() {
	imagenTendido.style.display = "none";
	imagenTendido.innerHTML = ``;
}

let mantenimientoMenu = document.querySelector(".mantenimiento");
function guardarDatosControl() {
	let inputControl = document.querySelectorAll("#inputControl");
	let selectControl = document.querySelectorAll("#selectControl");
	let lleno = 0;
	let lleno2 = 0;
	for (let i = 0; i < selectControl.length; i++) {
		if (selectControl[i].value != "0") {
			lleno = lleno + 1;
		} else if (selectControl[i].value === "0") {
			lleno = lleno + 0;
		}
	}
	for (let i = 0; i < inputControl.length; i++) {
		if (inputControl[i].value != "") {
			lleno2 = lleno2 + 1;
		} else if (inputControl[i].value === "") {
			lleno2 = lleno + 0;
		}
	}
	if ((lleno >= 7) && (lleno2 >= 2)) {
		mantenimientoMenu.style.display = "flex";
		alertExito.style.opacity = "1";
		alertExito.innerText = "Los datos se han guardado exitosamente";
		setTimeout(function () {
			alertExito.innerText = "";
			alertExito.style.opacity = "0";
		}, 3000);
	} else {
		mantenimientoMenu.style.display = "none";
		alertError.style.opacity = "1";
		alertError.innerText = "Debes diligenciar todos los campos para guardar y habilitar la pestaña de mantenimiento";
		setTimeout(function () {
			alertError.innerText = "";
			alertError.style.opacity = "0";
		}, 3000);
	}
}
function guardarDatosMantenimiento() {
	let inputMantenimiento = document.querySelectorAll("#inputMantenimiento");
	let selectMantenimiento = document.querySelectorAll("#selectMantenimiento");
	let lleno = 0;
	let lleno2 = 0;
	for (let i = 0; i < selectMantenimiento.length; i++) {
		if (selectMantenimiento[i].value != "0") {
			lleno = lleno + 1;
		} else if (selectMantenimiento[i].value === "0") {
			lleno = lleno + 0;
		}
	}
	for (let i = 0; i < inputMantenimiento.length; i++) {
		if (inputMantenimiento[i].value != "") {
			lleno2 = lleno2 + 1;
		} else if (inputMantenimiento[i].value === "") {
			lleno2 = lleno2 + 0;
		}
	}
	if ((lleno >= 3) && (lleno2 >= 2)) {
		alertExito.style.opacity = "1";
		alertExito.innerText = "Los datos se han guardado exitosamente";
		setTimeout(function () {
			alertExito.innerText = "";
			alertExito.style.opacity = "0";
		}, 3000);
	} else {
		alertError.style.opacity = "1";
		alertError.innerText = "Debes diligenciar todos los campos para guardar";
		setTimeout(function () {
			alertError.innerText = "";
			alertError.style.opacity = "0";
		}, 3000);
	}
}
function guardarDatosCombustible() {
	let selectCombustible = document.querySelector("#selectCombustible");
	let inputCombustible = document.querySelectorAll("#inputCombustible");
	let lleno = 0;
	let lleno2 = 0;
	if (selectCombustible.value != "0") {
		lleno = lleno + 1;
	} else if (selectCombustible.value === "0") {
		lleno = lleno + 0;
	}

	for (let i = 0; i < inputCombustible.length; i++) {
		if (inputCombustible[i].value != "") {
			lleno2 = lleno2 + 1;
		} else if (inputCombustible[i].value === "") {
			lleno2 = lleno2 + 0;
		}
	}
	if ((lleno >= 1) && (lleno2 >= 5)) {
		alertExito.style.opacity = "1";
		alertExito.innerText = "Los datos se han guardado exitosamente";
		setTimeout(function () {
			alertExito.innerText = "";
			alertExito.style.opacity = "0";
		}, 3000);
	} else {
		alertError.style.opacity = "1";
		alertError.innerText = "Debes diligenciar todos los campos para guardar";
		setTimeout(function () {
			alertError.innerText = "";
			alertError.style.opacity = "0";
		}, 3000);
	}
}
function guardarDatosTarifas() {
	let inputTarifas = document.querySelectorAll("#inputTarifas");
	let selectTarifas = document.querySelectorAll("#selectTarifas");
	let lleno = 0;
	let lleno2 = 0;
	for (let i = 0; i < selectTarifas.length; i++) {
		if (selectTarifas[i].value != "0") {
			lleno = lleno + 1;
		} else if (selectTarifas[i].value === "0") {
			lleno = lleno + 0;
		}
	}
	for (let i = 0; i < inputTarifas.length; i++) {
		if (inputTarifas.value != "") {
			lleno2 = lleno2 + 1;
		} else if (inputTarifas.value === "") {
			lleno2 = lleno2 + 0;
		}
	}
	if (lleno >= 3 && lleno2 >= 4) {
		alertExito.style.opacity = "1";
		alertExito.innerText = "Los datos se han guardado exitosamente";
		setTimeout(function () {
			alertExito.innerText = "";
			alertExito.style.opacity = "0";
		}, 3000);
	} else {
		alertError.style.opacity = "1";
		alertError.innerText = "Debes diligenciar todos los campos para guardar";
		setTimeout(function () {
			alertError.innerText = "";
			alertError.style.opacity = "0";
		}, 3000);
	}
}
