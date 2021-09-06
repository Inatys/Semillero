//FUNCIONES
function crearElemento(elemento){
    let elementos = document.createElement(elemento);
    return elementos;
}
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

function crearCajas(clase,url,herramienta,concepto){
    let div_caja = crearDiv(clase);    
let imagen_caja = crearImagen(url);
let div_descripcion = crearDiv("descripcion");
let h5 = crearTexto("h5", herramienta);
let h6 = crearTexto("h6", concepto);

main.append(div_caja);
div_caja.append(imagen_caja,div_descripcion);
div_descripcion.append(h5,h6);
return div_caja;
}


//CREAR
//main
let main = crearElemento("main");

//titulo
let div_titulo = crearDiv("titulo");
let h1 = crearTexto("h1", "Reliable, efficient delivery");
let br = crearElemento("br");
let b = crearTexto("b", "Powered by Technology");
let h3 = crearTexto("h3","Our Artificial Intelligence powered tools use millions of project data points to ensure that your projects is successful");

//caja1
let div_caja1 = crearDiv("caja1");
let img_supervisor = crearImagen("img/icon-supervisor.svg");
let div_descripcion_supervisor = crearDiv("descripcion");
let h5_supervisor = crearTexto("h5", "Supervisor");
let h6_supervisor = crearTexto("h6", "Monitors activity to identify project roadblocks");

//caja2
let div_caja2 = crearDiv("caja2");
let img_builder = crearImagen("img/icon-team-builder.svg");
let div_descripcion_builder = crearDiv("descripcion");
let h5_builder = crearTexto("h5", "Team Builder");
let h6_builder = crearTexto("h6","Scans our talent network to create the optimal team for your project");

//caja3
 let div_caja3 = crearDiv("caja3");
let img_calculator = crearImagen("img/icon-calculator.svg");
let div_descripcion_calculator = crearDiv("descripcion");
let h5_calculator = crearTexto("h5", "Calculator");
let h6_calculator = crearTexto("h6","Uses data from past projects to provide better delivery estimates");

//caja4
/* let div_caja4 = crearDiv("caja4");
let img_karma = crearImagen("img/icon-karma.svg");
let div_descripcion_karma = crearDiv("descripcion");
let h5_karma = crearTexto("h5", "Karma");
let h6_karma = crearTexto("h6", "Regularly evaluates cur talent to ensure quality");
 */


//INSERTAR
//insertar de manera normal
document.body.append(main);


main.append(div_titulo);

div_titulo.append(h1);
h1.append(br);
h1.append(b);
div_titulo.append(h3);

main.append(div_caja1);
div_caja1.append(img_supervisor);
div_caja1.append(div_descripcion_supervisor);
div_descripcion_supervisor.append(h5_supervisor);
div_descripcion_supervisor.append(h6_supervisor);

main.append(div_caja2);
div_caja2.append(img_builder);
div_caja2.append(div_descripcion_builder);
div_descripcion_builder.append(h5_builder);
div_descripcion_builder.append(h6_builder);

main.append(div_caja3);
div_caja3.append(img_calculator);
div_caja3.append(div_descripcion_calculator);
div_descripcion_calculator.append(h5_calculator);
div_descripcion_calculator.append(h6_calculator); 

/* main.append(div_caja4);
div_caja4.append(img_karma);
div_caja4.append(div_descripcion_karma);
div_descripcion_karma.append(h5_karma);
div_descripcion_karma.append(h6_karma); */

//insertar con funciones
//main.append(crearCajas("caja1","img/icon-supervisor.svg","Supervisor","Monitors activity to identify project roadblocks"));
//main.append(crearCajas("caja2","img/icon-team-builder.svg","Team Builder","Scans our talent network to create the optimal team for your project"));
//main.append(crearCajas("caja3","img/icon-calculator.svg","Calculator","Uses data from past projects to provide better delivery estimates"));
main.append(crearCajas("caja4","img/icon-karma.svg","Karma","Regularly evaluates cur talent to ensure quality"));




//crear de manera normal
//titulo
/* let div_titulo = document.createElement("div");
div_titulo.setAttribute("class", "titulo"); */
/* let h1=document.createElement("h1");
h1.innerText="Reliable, efficient delivery"; */
/* let b=document.createElement("b");
b.innerText="Powered by Technology"; */
/* let h3=document.createElement("h3");
h3.innerText="Our Artificial Intelligence powered tools use millions of project data points to ensure that your projects is successful";
 */
//caja1
/* let div_caja1=document.createElement("div");
div_caja1.setAttribute("class","caja1"); */
/* let img_supervisor=document.createElement("img");
img_supervisor.src="img/icon-supervisor.svg"; */
/* let div_descripcion_karma = document.createElement("div"); */
/* let h5_supervisor=document.createElement("h5");
h5_supervisor.innerText="Supervisor"; */
/* let h6_supervisor=document.createElement("h6");
h6_supervisor.innerText="Monitors activity to identify project roadblocks";
 */
//caja2
/* let div_caja2=document.createElement("div");
div_caja2.setAttribute("class","caja2"); */
/* let img_builder=document.createElement("img");
img_builder.src="img/icon-team-builder.svg"; */
/* let div_descripcion_karma = document.createElement("div"); */
/* let h5_builder=document.createElement("h5");
h5_builder.innerText="Team Builder"; */
/* let h6_builder=document.createElement("h6");
h6_builder.innerText="Scans our talent network to create the optimal team for your project";
 */
//caja3
/* let div_caja3=document.createElement("div");
div_caja3.setAttribute("class","caja3"); */
/* let img_calculator=document.createElement("img");
img_calculator.src="img/icon-calculator.svg"; */
/* let div_descripcion_karma = document.createElement("div"); */
/* let h5_calculator=document.createElement("h5");
h5_calculator.innerText="Calculator"; */
/* let h6_calculator=document.createElement("h6");
h6_calculator.innerText="Uses data from past projects to provide better delivery estimates";
 */
//caja4
/* let div_caja4=document.createElement("div");
div_caja4.setAttribute("class","caja4"); */
/* let img_karma=document.createElement("img");
img_karma.src="img/icon-karma.svg"; */
/* let div_descripcion_karma = document.createElement("div"); */
/* let h5_karma=document.createElement("h5");
h5_karma.innerText="Karma"; */
/* let h6_karma=document.createElement("h6");
h6_karma.innerText="Regularly evaluates cur talent to ensure quality"; 
 */