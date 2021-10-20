let divFiltro = document.querySelector(".filtros");
let divConsulta = document.querySelector(".datos");

document.addEventListener("DOMContentLoaded", () => {
	paginaInicio();
});

function paginaInicio() {
	divFiltro.innerHTML = ` 
					<div class="fechas">
						<div   class="fecha">
							<img src="./img/calendar.svg" alt="" />
							<p id="mensajeFecha"></p>
							<label for=""
								>Fecha inicial
								<br />
								<input id="fechaInicial" type="date" onChange="validarFechas()" />
							</label>
						</div>
						<div class="fecha">
							<img src="./img/calendar.svg" alt="" />
							<label for=""
								>Fecha final
								<br />
								<input id="fechaFinal" type="date" onChange="validarFechas()"/>
								
							</label>
						</div>
					</div>
                    <div class="botones">
                       <button id="consultar" class="boton" onClick="consultar()">Consultar</button>
                    </div>
					
					<div class="factura">
						<div class="opcion">
							<img src="./img/factura.svg" alt="" />
							<label for=""
								>Orden de facturacion
								<br />
								<input id="factura" type="text" placeholder="Numero de orden de facturacion" />
							</label>
						</div>
						<div class="opcion">
							<img src="./img/cliente.svg" alt="" />
							<label for=""
								>Cliente
								<br />
								<input id="cliente" type="text" placeholder="Buscar el cliente" />
							</label>
						</div>
						<div class="opcion">
							<img src="./img/icono modelo de negocio.svg" alt="" />
							<label for=""
								>Modelo de negocio
								<br />
								<input id="modelo" type="text" placeholder="Buscar el modelo de negocio" />
							</label>
						</div>
						<div class="opcion">
							<img src="./img/billete.svg" alt="" />
							<label for=""
								>Moneda
								<br />
								<select name="" id="monedas">
								<option value="0">Selecciona Moneda</option>
                                </select>
							</label>
						</div>		
    `;
	fetch("../moneda.json")
		.then((response) => response.json())
		.then((data) => {
			data.forEach((dato) => {
				monedas.innerHTML += `		
			<option id="valorMoneda">${dato.abreviatura}-${dato.descripcion}</option>
			`;
			});
		});
	divConsulta.innerHTML = `    
					<img class="imagenFiltro" src="./img/imagenFiltro.svg" alt="" />
	`;
	fechaInicial = document.getElementById("fechaInicial");
	fechaFinal = document.getElementById("fechaFinal");
	inputFactura = document.getElementById("factura");
	inputCliente = document.getElementById("cliente");
	inputModelo = document.getElementById("modelo");
	mensajeFecha = document.getElementById("mensajeFecha");
	monedas = document.getElementById("monedas");
	valorMoneda = document.getElementById("valorMoneda");
}
let fechaInicial;
let fechaFinal;
let inputFactura;
let inputCliente;
let inputModelo;
let mensajeFecha;
let monedas;
let valorMoneda;

function consultar() {
	let divCarga = document.querySelector(".carga");
	divCarga.style.display = "block";
	setTimeout(function () {
		divCarga.style.display = "none";
	}, 1000);

	divFiltro.innerHTML = `
    <div class="filtrado">
    <div class="divFiltro">
        <img src="./img/calendar.svg" alt="" />
        <label for=""
            >Fecha inicial
            <br />
            <span>${valorFechaInicial}</span>
        </label>
    </div>
    <div class="divFiltro">
        <img src="./img/calendar.svg" alt="" />
        <label for=""
            >Fecha final
            <br />
            <span>${valorFechaFinal}</span>
        </label>
    </div>
    <div class="divFiltro">
    <img src="./img/billete.svg" alt="" />
    <label for=""
        >Moneda
        <br />
        <span>${monedas.value}</span>
    </label>						
</div>
</div>
<div class="botones">
      <button class="boton" onClick="paginaInicio()">Filtrar</button>
      <button id="generar" class="boton" onClick="generarFactura()">Generar</button>
    </div>
    `;
	divConsulta.innerHTML = `
			<div class="scroll">
							<table border="solid">
								<thead>
									<td>Ver</td>
									<td>Orden de facturacion</td>
									<td>Fecha registro</td>
									<td>Cliente</td>
									<td>Modelo de negocio</td>
									<td>Descripcion</td>
									<td>Forma de pago</td>
									<td>Fecha vencimiento</td>
									<td>Valor total cobrar</td>
									<td>Valor anticipo</td>
									<td>Asociar anticipo</td>
									<td><img  class="iconosTabla" src="./img/noSeleccionado.svg" alt="" /></td>
								</thead>
								<tbody id="contenidoTabla">									
								</tbody>
							</table>
						</div> 
			`;
	contenidoTabla = document.getElementById("contenidoTabla");
	fetch("../datosFactura.json")
		.then((response) => response.json())
		.then((data) => {
			data.forEach((dato) => {
				contenidoTabla.innerHTML += `
			<tr id="tablaDato">
										<td>
											<img class="iconosTabla" src="./img/icono adobe verde.svg" alt="" />
											<img
											class="iconosTabla"
												src="./img/icono documento verde.svg"
												alt=""
											/>
										</td>
										<td id="textoFactura">${dato.codigoOrdenDeFacturacion}</td>
										<td id="textoFechaInicio">${dato.fechaRegistro}</td>
										<td id="textoCliente"><h4 class="descripcion">${dato.clienteIdentificacion}-${dato.clienteNombre}</td>
										<td id="textoModelo"><h4 class="descripcion">${dato.modeloNegocio}<h4></td>
										<td><h4 class="descripcion">${dato.descripcionOrdenFacturacion}<h4></td>
										<td>
										<select name="" id="dias" onChange="validarSelect(${dato.codigoOrdenDeFacturacion},${dato.valorTotalACobrar})">
											<option value="0">Selecciona Dias</option>
											<option value="1">5</option>
											<option value="2">10</option>
											<option value="3">15</option>
											<option value="4">20</option>
											<option value="5">25</option>
											<option value="6">30</option>
										</select>
									</td>
										<td id="textoFechaFinal">${dato.fechaVencimiento}</td>
										<td>$${dato.valorTotalACobrar}</td>
										<td>$${dato.valorAnticipo}</td>
										<td>$${dato.asociarAnticipo}</td>
										<td id="tdSeleccion"><img class="iconosTabla" id="imagenSeleccion" src="./img/noSeleccionado.svg" alt="" /></td>
									</tr>								
			`;
			});
			trTabla = document.querySelectorAll("#tablaDato");
			tdSeleccion = document.querySelectorAll("#tdSeleccion");
			habilitarSeleccion = document.querySelectorAll("#dias");
			habilitarSelecciones = Array.from(document.querySelectorAll("#dias"));
			diasSelect = document.getElementById("dias");
			filtrarFactura();
		});
	botonGenerar = document.getElementById("generar");
	botonGenerar.disabled = true;
}
let diasSelect;
let contenidoTabla;
let trTabla;
let li;
let tdSeleccion;
let habilitarSeleccion;
let habilitarSelecciones;
let botonGenerar;
let generaFactura;
let tbodyFactura = document.getElementById("tablaFactura");
let arr = [];
function validarSelect(dato1, dato2) {
	for (let i = 0; i < habilitarSeleccion.length; i++) {
		/* 	console.log(habilitarSeleccion[i]);
		console.log(tdSeleccion[i]);
		console.log(habilitarSeleccion[i].value); */
		if (habilitarSeleccion[i].value != "0") {
			tdSeleccion[
				i
			].innerHTML = `<img class="iconosTabla" id="imagenSeleccion" src="./img/seleccionado.svg" alt="" />`;
			botonGenerar.disabled = false;
			botonGenerar.style.background = "#2267a0";
			tbodyFactura.innerHTML += `
			<td>${dato1}</td>
						<td>FE</td>
						<td>SETT1150</td>
						<td>${dato2}</td>
						<td>
							<img class="iconosTabla" src="./img/icono adobe azul.svg" alt="" />
							<img class="iconosTabla" src="./img/icono documento azul.svg" alt="" />
						</td>
			`;
			/* console.log("selecciono")
			console.log(taba) */
		} else if (habilitarSeleccion[i].value === "0") {
			/* console.log("no selecciono"); */
			tdSeleccion[
				i
			].innerHTML = `<img class="iconosTabla" id="imagenSeleccion" src="./img/noSeleccionado.svg" alt="" />`;
		}
	}




function generarFactura() {
	generaFactura = document.querySelector(".generaFactura").style.display = "block";
	let cerrar = document.getElementById("cerrar").addEventListener("click", () => {
		generaFactura = document.querySelector(".generaFactura").style.display = "none";
	});
}

let valorFechaInicial;
let valorFechaFinal;

function validarFechas() {
	valorFechaInicial = fechaInicial.value;
	valorFechaFinal = fechaFinal.value;
	if (valorFechaInicial > valorFechaFinal) {
		mensajeFecha.innerText = `la fecha inicial no puede ser mayor a la fecha final`;
	} else {
		mensajeFecha.innerText = ``;
	}
}

//filtrar datos
function filtrarFactura() {
	let filterFactura, contenidoFactura, textoFactura;
	let filterCliente, contenidoCliente, textoCliente;
	let filterModelo, contenidoModelo, textoModelo;
	let filterFechaInicial, contenidoFechaInicial, textoFechaInicial;
	let filterFechaFinal, contenidoFechaFinal, textoFechaFinal;

	filterFactura = inputFactura.value.toUpperCase();
	filterCliente = inputCliente.value.toUpperCase();
	filterModelo = inputModelo.value.toUpperCase();
	filterFechaInicial = valorFechaInicial;
	filterFechaFinal = valorFechaFinal;
	for (let i = 0; i < trTabla.length; i++) {
		contenidoFactura = trTabla[i].querySelectorAll("#textoFactura")[0];
		contenidoCliente = trTabla[i].querySelectorAll("#textoCliente")[0];
		contenidoModelo = trTabla[i].querySelectorAll("#textoModelo")[0];
		contenidoFechaInicial = trTabla[i].querySelectorAll("#textoFechaInicio")[0];
		contenidoFechaFinal = trTabla[i].querySelectorAll("#textoFechaFinal")[0];

		textoFactura = contenidoFactura.textContent;
		textoCliente = contenidoCliente.textContent;
		textoModelo = contenidoModelo.textContent;
		textoFechaInicial = contenidoFechaInicial.textContent;
		textoFechaFinal = contenidoFechaFinal.textContent;
		console.log("texto factura" + textoFactura.toUpperCase().indexOf(filterFactura));
		console.log("texto cliente" + textoCliente.toUpperCase().indexOf(filterCliente));
		console.log("texto modelo" + textoModelo.toUpperCase().indexOf(filterModelo));
		console.log(
			"texto fecha inicial" + textoFechaInicial.toUpperCase().indexOf(filterFechaInicial)
		);
		console.log("texto fecha final" + textoFechaFinal.indexOf(filterFechaFinal));

		if (
			(textoFactura.toUpperCase().indexOf(filterFactura) ||
				textoCliente.toUpperCase().indexOf(filterCliente) ||
				textoModelo.toUpperCase().indexOf(filterModelo)) > -1
		) {
			trTabla[i].style.display = "";
			//trTabla[i].style.display = "none";
			console.log(" se encontraron");
		} else {
			trTabla[i].style.display = "none";
			console.log("los filtors no se encontraron");
			//trTabla[i].style.display = "";
		}

		//textoFechaInicial.indexOf(filterFechaInicial) ||
		//textoFechaFinal.indexOf(filterFechaFinal) ||
	}
}
