function crearDiv(clase) {
	let divs = document.createElement("div");
	divs.setAttribute("class", clase);
	return divs;
}

function crearImagen(url) {
	let imagenes = document.createElement("img");
	imagenes.src = url;
	return imagenes;
}

function crearTexto(etiqueta, texto) {
	let textos = document.createElement(etiqueta);
	textos.innerText = texto;
	return textos;
}

function crearInput(nombre_input) {
	let inputs = document.createElement("input");
	inputs.type = "button";
	inputs.value = nombre_input;
	inputs.addEventListener("click",function (){
		agregarFiltro(nombre_input) 
	});
	return inputs;
}


let cajas = crearDiv("cajas");

function crearCajas(clases,url, empresa, profesion, tiempo, id_etiqueta) {
	let div_caja = crearDiv(clases);
	let div_perfil = crearDiv("perfil");
	let imagen_caja = crearImagen(url);
	let div_texto = crearDiv("texto");
	let h3_texto = crearTexto("h3", empresa);
	let h1 = crearTexto("h1", profesion);
	let h4 = crearTexto("h4", tiempo);
	let div_etiquetas = crearDiv("etiquetas");
	div_etiquetas.setAttribute("id", id_etiqueta);

	cajas.append(div_caja);
	div_caja.append(div_perfil);
	div_perfil.append(imagen_caja, div_texto);
	div_texto.append(h3_texto, h1, h4);
	div_caja.append(div_etiquetas);

	return div_caja;
}

document.getElementById("section").append(cajas);
cajas.append(
	crearCajas(
		"caja senior frontend fullstack  junior",
		"images/photosnap.svg",
		"Photosnap",
		"Senior Frontend Developer",
		"1d ago . Full Time . USA only",
		"photosnap"
	)
);
cajas.append(
	crearCajas(
		"caja frontend fullstack ",
		"images/manage.svg",
		"Manage",
		"Fullstack Developer",
		"1d ago . Part Time . Remote",
		"manage"
	)
);
cajas.append(
	crearCajas(
		"caja frontend",
		"images/account.svg",
		"Account",
		"Junior Frontend Developer",
		"2d ago . Part Time . USA only",
		"account"
	)
);

/*
function crearFiltros(value_input){
	let input = crearInput(value_input);
document.getElementById(etiqueta).append(input);
return input;
}
document.getElementById("photosnap").append(input_photosnap_fron);
*/

//photosnap
let input_photosnap_fron = crearInput("frontend");
document.getElementById("photosnap").append(input_photosnap_fron);

let input_photosnap_full = crearInput("fullstack");
document.getElementById("photosnap").append(input_photosnap_full);
let input_photosnap_jun = crearInput("junior");
document.getElementById("photosnap").append(input_photosnap_jun);

//manage
let input_manage_fron = crearInput("frontend");
document.getElementById("manage").append(input_manage_fron);
let input_manage_full = crearInput("fullstack");
document.getElementById("manage").append(input_manage_full);

//account
let input_account_fron = crearInput("frontend");
document.getElementById("account").append(input_account_fron);
/* let input_account_full = crearInput("fullstack");
document.getElementById("account").append(input_account_full);
 */
let todos_inputs = document.querySelectorAll(".etiquetas input");
let valores_inputs;
console.log(todos_inputs);

let filtros;



function agregarFiltro(texto) {
	//let imput=input.cloneNode(true);
	let input2 = document.createElement("input");
	input2.type = "button";
	input2.value = texto;


	document.getElementById("busqueda").append(input2);
	let cajas=document.querySelectorAll(".busqueda input");
	console.log(cajas)
	//console.log(cajas)
	function filtar(){
		let prueba = document.querySelectorAll("."+texto);
console.log(prueba);

for(i=0;i<prueba.length;i++){
	
	if(texto !== prueba ){

		prueba[i].style.display='none';
		console.log("diferente");
	}else{
		prueba[i].style.display='flex';
		console.log("igual");
	}
	
}




	/* 	for(i=0;i<cajas.length;i++){
			
			console.log(cajas[i]);
		} 
		// 	if(cajas !== prueba){
		// 		//  console.log("click")
		// 		// cajas.classList.add('cajaInvisible');
		// 		console.log('hoal');
		// 	} 
		// 	prueba[i].style.display='none';
		// }
		
				//console.log(cajas)
				



 
/* for(i=0;i<prueba.length;i++){
	prueba[i].style.display='none';
}

		console.log(cajas)
		
		 if(cajas !== prueba){
			//  console.log("click")
			// cajas.classList.add('cajaInvisible');
			console.log('hoal');
		}  */
 
	}
	filtar();
 	/*  filtros = document.querySelectorAll(".busqueda input");
	 for (let f = 0; f < filtros.length; f++) {
	 	console.log(filtros[f].value);
		 if(texto!=filtros[f].value){
		
		 }else{
			 console.log("ya esta creado")
		 }
	 }  */
	 
}



//console.log(todos_inputs);
/* for (let i = 0; i < todos_inputs.length; i++) {
	valores_inputs = todos_inputs[i].value;

	todos_inputs[i].addEventListener("click", () => {
		agregarFiltro("nataly");
	});

	console.log(valores_inputs);
} */

//let div_busqueda = document.getElementById("busqueda");

/* function eliminaUno() {
	console.log("click");
	input2.remove();
	//input2.parentNode.removeChild(input2);
} */

/* function eliminaTodo(){
    console.log("click");
    filtros.remove();
} */
