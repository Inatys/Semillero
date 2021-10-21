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
								<input id="factura" type="number" placeholder="Numero de orden de facturacion" />
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
								<input id="modelo" onkeyup="validarModelo()" onblur="validarModelo()" type="text" placeholder="Buscar el modelo de negocio" />
							<b id="mensajeModelo"></b>
								</label>
						</div>
						<div class="opcion">
							<img src="./img/billete.svg" alt="" />
							<label for=""
								>Moneda
								<br />
								<select name="" id="monedas">
								<option  value="0">Selecciona Moneda</option>
                                </select>
							</label>
						</div>		
    `;
	fetch("../moneda.json")
		.then((response) => response.json())
		.then((data) => {
			data.forEach((dato) => {					
					monedas.innerHTML += `		
				<option id="valorMoneda">${dato.descripcion}</option>
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
	mensajeModelo = document.getElementById("mensajeModelo");
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
				if (inputFactura.value == dato.codigoOrdenDeFacturacion && inputCliente.value == dato.clienteNombre || inputCliente.value == dato.clienteNombre || inputFactura.value == dato.codigoOrdenDeFacturacion || valorFechaInicial == dato.fechaRegistro && valorFechaFinal == dato.fechaVencimiento || inputModelo.value == dato.modeloNegocio) {
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
										<td id="textoCliente"><h4 class="descripcion">${dato.clienteNombre}</td>
										<td id="textoModelo"><h4 class="descripcion">${dato.modeloNegocio}<h4></td>
										<td><h4 class="descripcion">${dato.descripcionOrdenFacturacion}<h4></td>
										<td>
										<select name="" id="dias" onChange="validarSelect()">
											<option value="0">Selecciona Dias</option>
											<option value=${dato.codigoOrdenDeFacturacion}">5</option>
											<option value="${dato.codigoOrdenDeFacturacion}">10</option>
											<option value="${dato.codigoOrdenDeFacturacion}">15</option>
											<option value="${dato.codigoOrdenDeFacturacion}">20</option>
											<option value="${dato.codigoOrdenDeFacturacion}">25</option>
											<option value="6">30</option>
										</select>
									</td>
										<td id="textoFechaFinal">${dato.fechaVencimiento}</td>
										<td>$${monedas.value==="US Dólar"?TotalMoneda=Math.round(dato.valorTotalACobrar*0.00026)+" USD":(monedas.value==="Euro"?TotalMoneda=Math.round(dato.valorTotalACobrar*0.00023)+" EUR":(monedas.value==="Balboa Panameña"?TotalMoneda=Math.round(dato.valorTotalACobrar*0.00027)+" PAB":(monedas.value==="Libra Esterlina"?TotalMoneda=Math.round(dato.valorTotalACobrar*0.00019)+" GBP":(monedas.value==="Peso Mexicano"?TotalMoneda=Math.round(dato.valorTotalACobrar*0.0054)+" MXN":(monedas.value==="Nuevo Sol"?TotalMoneda=Math.round(dato.valorTotalACobrar*0.0010)+" PEN":(monedas.value==="Bolivar Fuerte"?TotalMoneda=Math.round(dato.valorTotalACobrar*0.00110977)+" VEZ":(monedas.value==="Peso Dominicano"?TotalMoneda=Math.round(dato.valorTotalACobrar*0.015)+" DOP":(monedas.value==="Yuan"?TotalMoneda=Math.round(dato.valorTotalACobrar*0.0017)+" CNY":(monedas.value==="Guaraní"?TotalMoneda=Math.round(dato.valorTotalACobrar*1.82)+" PYG":(monedas.value==="Franco Suizo"?TotalMoneda=Math.round(dato.valorTotalACobrar*0.00024)+" CHF":(monedas.value==="Dólar Canadiense"?TotalMoneda=Math.round(dato.valorTotalACobrar*0.00033)+" CAD":TotalMoneda=dato.valorTotalACobrar+" COP")))))))))))}</td>
										<td>$${dato.valorAnticipo}</td>
										<td>$${dato.asociarAnticipo}</td>
										<td id="tdSeleccion"><img class="iconosTabla" id="imagenSeleccion" src="./img/noSeleccionado.svg" alt="" /></td>
									</tr>								
			`;
				}
			});
			trTabla = document.querySelectorAll("#tablaDato");
			tdSeleccion = document.querySelectorAll("#tdSeleccion");
			habilitarSeleccion = document.querySelectorAll("#dias");
			diasSelect = document.getElementById("dias");
			//filtrarFactura();
			botonGenerar.addEventListener("click", () => {
				data.forEach((dato) => {
					fetch("../modelosFactura.json")
						.then((response) => response.json())
						.then((data2) => {
							data2.forEach((elemento) => {
								for (let i = 0; i < habilitarSeleccion.length; i++) {
									if (
										dato.codigoOrdenDeFacturacion === elemento.codigoOrdenDeFacturacion &&
										habilitarSeleccion[i].value == dato.codigoOrdenDeFacturacion
									) {
										tbodyFactura.innerHTML += `
								<td>${dato.codigoOrdenDeFacturacion}</td>
											<td>${elemento.tipoDocumentoFacturaDiaria}</td>
											<td>${elemento.prefijo}</td>
											<td>$${monedas.value==="US Dólar"?TotalMoneda=Math.round(dato.valorTotalACobrar*0.00026)+" USD":(monedas.value==="Euro"?TotalMoneda=Math.round(dato.valorTotalACobrar*0.00023)+" EUR":(monedas.value==="Balboa Panameña"?TotalMoneda=Math.round(dato.valorTotalACobrar*0.00027)+" PAB":(monedas.value==="Libra Esterlina"?TotalMoneda=Math.round(dato.valorTotalACobrar*0.00019)+" GBP":(monedas.value==="Peso Mexicano"?TotalMoneda=Math.round(dato.valorTotalACobrar*0.0054)+" MXN":(monedas.value==="Nuevo Sol"?TotalMoneda=Math.round(dato.valorTotalACobrar*0.0010)+" PEN":(monedas.value==="Bolivar Fuerte"?TotalMoneda=Math.round(dato.valorTotalACobrar*0.00110977)+" VEZ":(monedas.value==="Peso Dominicano"?TotalMoneda=Math.round(dato.valorTotalACobrar*0.015)+" DOP":(monedas.value==="Yuan"?TotalMoneda=Math.round(dato.valorTotalACobrar*0.0017)+" CNY":(monedas.value==="Guaraní"?TotalMoneda=Math.round(dato.valorTotalACobrar*1.82)+" PYG":(monedas.value==="Franco Suizo"?TotalMoneda=Math.round(dato.valorTotalACobrar*0.00024)+" CHF":(monedas.value==="Dólar Canadiense"?TotalMoneda=Math.round(dato.valorTotalACobrar*0.00033)+" CAD":TotalMoneda=dato.valorTotalACobrar+" COP")))))))))))}</td>
											<td>
												<img class="iconosTabla" src="./img/icono adobe azul.svg" alt="" />
												<img class="iconosTabla" src="./img/icono documento azul.svg" alt="" />
											</td>
								`;
									} else {
										console.log("no");
									}
								}
							});
						});
				});
			});
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
function validarSelect() {
	for (let i = 0; i < habilitarSeleccion.length; i++) {
		if (habilitarSeleccion[i].value != "0") {
			tdSeleccion[
				i
			].innerHTML = `<img class="iconosTabla" id="imagenSeleccion" src="./img/seleccionado.svg" alt="" />`;
			botonGenerar.disabled = false;
			botonGenerar.style.background = "#2267a0";
		} else if (habilitarSeleccion[i].value === "0") {
			tdSeleccion[
				i
			].innerHTML = `<img class="iconosTabla" id="imagenSeleccion" src="./img/noSeleccionado.svg" alt="" />`;
		}
	}
}
function generarFactura() {
	generaFactura = document.querySelector(".generaFactura").style.display = "block";
	let cerrar = document.getElementById("cerrar").addEventListener("click", () => {
		generaFactura = document.querySelector(".generaFactura").style.display = "none";
		tbodyFactura.innerHTML = ``;
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
function validarModelo() {
	const expresiones = new RegExp("^[a-zA-ZÀ-ÿ\s]{1,180}$");
	if(expresiones.test(inputModelo.value)){ 
		mensajeModelo.innerText = ``;
	} else {
		mensajeModelo.innerText = `Solo se permiten letras, no numeros`;
	}  
}
let tipoMoneda
let TotalMoneda