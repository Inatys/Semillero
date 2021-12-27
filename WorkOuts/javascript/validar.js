const expresiones = {
	nombre_apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{4,12}$/, // 4 a 12 digitos.
};
const campos = {
	nombre:false,
    apellido:false , 
	email: false,
	password:false
};

let formulario = document.getElementById("formulario");
let inputs = document.querySelectorAll("#formulario input");

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
		case "nombre":
			validarCampo(expresiones.nombre_apellido, e.target, "nombre");

			break;
		case "apellido":
			validarCampo(expresiones.nombre_apellido, e.target, "apellido");
			break;
		case "email":
			validarCampo(expresiones.email, e.target, "email");
			break;
		case "password":
			validarCampo(expresiones.password, e.target, "password");
			break;
		case "confirm_password":
			validarRepetirPassword();
			break;
	}
};

let validarRepetirPassword = () => {
	let password1 = document.getElementById("password1");
	let password2 = document.getElementById("password2");
	if (password1.value !== password2.value) {
		document.getElementById(`grupo_confirm_password`).classList.add("grupos_incorrecto");
        //campos['password']=false;
	} else {
        document.getElementById(`grupo_confirm_password`).classList.remove("grupos_incorrecto");
        //campos['password']=true;
	}
};

inputs.forEach((input) => {
	input.addEventListener("keyup", validarFormulario);
	input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
	e.preventDefault();
    if(campos.nombre &&campos.apellido &&campos.email &&campos.password){
formulario.reset();
document.getElementById("mensaje_correcto").classList.add("mensaje_correcto_activo");
document.getElementById("mensaje_error").classList.remove("mensaje_error_activo");
    }else{
        document.getElementById("mensaje_error").classList.add("mensaje_error_activo");
    }
});
