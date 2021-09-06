function crearElementos(elemento) {
	let elementos = document.createElement(elemento);
	return elementos;
}
function crearDivs(nombre_clase, nombre_id) {
	let divs = document.createElement("div");
	divs.setAttribute("class", nombre_clase);
	divs.setAttribute("id", nombre_id);
	return divs;
}
function crearTextos(etiqueta, nombre_id_texto, texto) {
	let textos = document.createElement(etiqueta);
	textos.setAttribute("id", nombre_id_texto);
	textos.innerHTML = texto;
	return textos;
}
function crearImagenes(nombre_clase_img, url) {
	let imagenes = document.createElement("img");
	imagenes.setAttribute("class", nombre_clase_img);
	imagenes.src = url;
	return imagenes;
}

function crearInputs(tipo_input, placeholder, nombre) {
	let inputs = document.createElement("input");
	inputs.type = tipo_input;
	inputs.placeholder = placeholder;
	inputs.name = nombre;
	return inputs;
}

let main = crearElementos("main");
let div_texto = crearDivs("texto", null);
let h1 = crearTextos("h1", null, "<b>Learn to code by watching others</b>");
let h4 = crearTextos(
	"h4",
	null,
	"See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable."
);
let div_suscribir = crearDivs("suscribir", null);
let div_promocion = crearDivs("promocion", null);
let h5 = crearTextos("h5", null, "<b>Try it free 7 days</b> then $20/mo. thereafter");
let form = crearElementos("form");
form.setAttribute("id", "formulario");

let div_grupo_nombre = crearDivs("grupos", "grupo_nombre");
let div_grupo_input_nombre = crearDivs("grupo_input", "nombre");
let input_nombre = crearInputs("text", "First Name", "nombre");
let img_error_nombre = crearImagenes("validacion", "./images/icon-error.svg");
let p_nombre = crearTextos("p", "error", "First Name cannot by empty");

let div_grupo_apellido = crearDivs("grupos", "grupo_apellido");
let div_grupo_input_apellido = crearDivs("grupo_input", "apellido");
let input_apellido = crearInputs("text", "Last Name", "apellido");
let img_error_apellido = crearImagenes("validacion", "./images/icon-error.svg");
let p_apellido = crearTextos("p", "error", "First Name cannot by empty");

let div_grupo_email = crearDivs("grupos", "grupo_email");
let div_grupo_input_email = crearDivs("grupo_input", "email");
let input_email = crearInputs("email", "Email Address", "email");
let img_error_email = crearImagenes("validacion", "./images/icon-error.svg");
let p_email = crearTextos("p", "error", "First Name cannot by empty");

let div_grupo_password = crearDivs("grupos", "grupo_password");
let div_grupo_input_password = crearDivs("grupo_input", "password");
let input_password = crearInputs("password", "Password", "password");
let img_error_password = crearImagenes("validacion", "./images/icon-error.svg");
let p_password = crearTextos("p", "error", "First Name cannot by empty");

let button = crearElementos("button");
button.innerHTML = "<b>CLAIM YOUR FREE TRIAL</b>";
button.type = "submit";

let div_terminos = crearDivs("terminos", null);
div_terminos.innerHTML =
	"By cliking the button, you are agreeing to our <b>Terms and Services</b>";

document.body.append(main);
main.append(div_texto);
div_texto.append(h1, h4);
main.append(div_suscribir);
div_suscribir.append(div_promocion);
div_promocion.append(h5);
div_suscribir.append(form);

form.append(div_grupo_nombre);
div_grupo_nombre.append(div_grupo_input_nombre, p_nombre);
div_grupo_input_nombre.append(input_nombre, img_error_nombre);

form.append(div_grupo_apellido);
div_grupo_apellido.append(div_grupo_input_apellido, p_apellido);
div_grupo_input_apellido.append(input_apellido, img_error_apellido);

form.append(div_grupo_email);
div_grupo_email.append(div_grupo_input_email, p_email);
div_grupo_input_email.append(input_email, img_error_email);

form.append(div_grupo_password);
div_grupo_password.append(div_grupo_input_password, p_password);
div_grupo_input_password.append(input_password, img_error_password);

form.append(button);

//validar formulario
const expresiones = {
	nombre_apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{4,12}$/, // 4 a 12 digitos.
};
const campos = {
	nombre: false,
	apellido: false,
	email: false,
	password: false
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
	}
};

inputs.forEach((input) => {
	input.addEventListener("keyup", validarFormulario);
	input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
	e.preventDefault();
	if (campos.nombre && campos.apellido && campos.email && campos.password ) {
		console.log("Diligencio de manera correcta");
		formulario.reset();
	} else {
		console.log("Diligencio de manera incorrecta");
	}
});
