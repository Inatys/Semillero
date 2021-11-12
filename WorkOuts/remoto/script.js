const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	nit: /^[a-zA-Z0-9\s]{1,20}$/, // Letras y espacios, pueden llevar acentos.
	incoveniente: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	telefono: /^[0-9]{1,11}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};
const campos = {
	nombre: false,
	nit: false,
	incoveniente: false,
	telefono: false,
	email: false,
};

let formulario = document.getElementById("formulario");
let inputs = document.querySelectorAll("#formulario input");

let validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		document.getElementById(`grupo_${campo}`).classList.remove("grupos_incorrecto");
		campos[campo] = true;
	} else {
		document.getElementById(`grupo_${campo}`).classList.add("grupos_incorrecto");
		campos[campo] = false;
	}
};

let validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, "nombre");
			break;
		case "nit":
			validarCampo(expresiones.nit, e.target, "nit");
			break;
		case "incoveniente":
			validarCampo(expresiones.incoveniente, e.target, "incoveniente");
			break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, "telefono");
			break;
		case "email":
			validarCampo(expresiones.email, e.target, "email");
			break;
	}
};


inputs.forEach((input) => {
	input.addEventListener("keyup", validarFormulario);
	input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
	e.preventDefault();
    const terminos=document.getElementById('terminos');
	if (campos.nombre && campos.nit && campos.incoveniente && campos.telefono && campos.email && terminos.checked) {
		formulario.reset();
		document.getElementById("mensaje_correcto").classList.add("mensaje_correcto_activo");
		document.getElementById("mensaje_error").classList.remove("mensaje_error_activo");
	} else {
		document.getElementById("mensaje_error").classList.add("mensaje_error_activo");
        document.getElementById("mensaje_correcto").classList.remove("mensaje_correcto_activo");
	}
});
