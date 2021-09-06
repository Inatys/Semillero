//FUNCIONES CREAR ELEMNTOS
function crearElementos(elemento) {
	let elementos = document.createElement(elemento);
	return elementos;
}

function crearDivs(tipo_clase, clase_div) {
	let divs = document.createElement("div");
	divs.setAttribute(tipo_clase, clase_div);
	return divs;
}

function crearImagenes(clase_imagen, url) {
	let imagenes = document.createElement("img");
	imagenes.setAttribute("class", clase_imagen);
	imagenes.src = url;
	return imagenes;
}
function crearTextos(etiqueta, tipo_clase, clase_etiqueta, texto) {
	let textos = document.createElement(etiqueta);
	textos.setAttribute(tipo_clase, clase_etiqueta);
	textos.innerText = texto;
	return textos;
}
//CREAR
let main = crearElementos("main");

let div_encabezado = crearDivs("class", "encabezado");
let img_logo = crearImagenes("logo", "images/logo.svg");
let div_opciones = crearDivs("class", "opciones");
let img_doc = crearImagenes(null, "images/docBtn.svg");
let img_folder = crearImagenes(null, "images/folderBtn.svg");
let img_upload = crearImagenes(null, "images/uploadBtn.svg");

let div_color = crearDivs("class", "color");
let h5_texto = document.createElement("h5");
h5_texto.setAttribute("class", "texto");
h5_texto.innerHTML = 'You´ve used <b id="GB_consumido">815 GB</b> of your storage';
let div_barra = crearDivs("class", "barra");
let div_degradado = crearDivs("id", "progresoBarra");
let div_punto = crearDivs("class", "punto");
let div_mensaje = crearDivs("id", "mensaje");
let h3 = crearTextos("h3", "id", "GB_no_consumido", "185");
let h4 = crearTextos("h4", null, null, "GB LEFT");

let div_GB = crearDivs("class", "GB");
let h5_cero = crearTextos("h5", "class", "cero", "0 GB");
let h5_mil = crearTextos("h5", "class", "mil", "1000 GB");

//AGREGAR
document.body.append(main);

main.append(div_encabezado);
div_encabezado.append(img_logo, div_opciones);
div_opciones.append(img_doc, img_folder, img_upload);

main.append(div_color);
div_color.append(h5_texto);
div_color.append(div_barra);
div_barra.append(div_degradado);
div_degradado.append(div_punto);
div_color.append(div_mensaje);
div_mensaje.append(h3, h4);

div_color.append(div_GB);
div_GB.append(h5_cero, h5_mil);

//FUNCIONES
let num = 1000;
let num2 = 0;
function cambiar_numeros() {
	if (num <= 186) {
		clearInterval(tempo);
	}
	num--;
	num2++;

	GB_no_consumido.innerText = num;
	GB_consumido.innerText = num2;
}
let tempo = setInterval(cambiar_numeros, 5);


let aumento = 0;
function color() {
	let progresoBarra = document.getElementById("progresoBarra");
	if (aumento == 80) {
		clearInterval(tempo2);
	}
	aumento++;
	progresoBarra.style.width = `${aumento}%`;
}
let tempo2 = setInterval(color, 50);
