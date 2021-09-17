const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,66}$/, // Letras y espacios, pueden llevar acentos.
	codigo: /^[a-zA-Z0-9]{1,10}$/,
	numero: /^[0-9]{1,16}$/,
};
const campos = {
	tarjeta:false,
	cuota:false,
	nombre:false,
    codigo:false,
	cedula:false 
};
let formulario = document.getElementById("pago");
let inputs = document.querySelectorAll("#pago input");

let validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		document.getElementById(`grupo_${campo}`).classList.remove("grupos_incorrecto");
        campos[campo]=true;
	} else {
		document.getElementById(`grupo_${campo}`).classList.add("grupos_incorrecto");
        campos[campo]=false;
	}
};

let validarFormulario = (e) => {
	switch (e.target.name) {
		case "tarjeta":
			validarCampo(expresiones.numero, e.target, "tarjeta");

			break;
		case "cuota":
			validarCampo(expresiones.numero, e.target, "cuota");
			break;
			case "nombre":
			validarCampo(expresiones.nombre, e.target, "nombre");
			break;
			case "codigo":
			validarCampo(expresiones.codigo, e.target, "codigo");
			break;
			case "cedula":
			validarCampo(expresiones.numero, e.target, "cedula");
			break;
	}
};

inputs.forEach((input) => {
	input.addEventListener("keyup", validarFormulario);
	input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
	e.preventDefault();
    if(campos.tarjeta &&campos.cuota &&campos.nombre &&campos.codigo &&campos.cedula){

document.getElementById("mensaje_error").classList.remove("mensaje_error_activo");

document.getElementById("myPopup").classList.add("show");
formulario.reset();
    }else{
		document.getElementById("mensaje_error").classList.add("mensaje_error_activo");
    }
	
});