//CREAR
//CONTENEDOR 1
//crear los contenedores y ponerles un nombre de clase
let div_contenedor1 = document.createElement("div");
div_contenedor1.setAttribute("class", "contenedor1");

//crear los div que van dentro de los contenedores y ponerles un nombre de clase
let div_caja1 = document.createElement("div");
div_caja1.setAttribute("class", "uno");

let div_caja2 = document.createElement("div");
div_caja2.setAttribute("class", "dos");

let imagen1 = document.createElement("img");
imagen1.setAttribute("class", "imagen1");
imagen1.src = "images/creativity.svg";

let texto = document.createElement("p");
texto.setAttribute("class", "texto");
texto.innerText = "¡Descubre tu creatividad aqui!";

let input = document.createElement("input");
input.placeholder = "Digita tu correo";

let button = document.createElement("button");
button.innerText = "Inscribir";

//CONTENEDOR 2
//crear los div que van dentro de los contenedores y ponerles un nombre de clase
let div_contenedor2 = document.createElement("div");
div_contenedor2.setAttribute("class", "contenedor2");

//crea otros divs que van a llevar lo mismo que div_caja1 y div_caja2
let div_caja3 = div_caja1.cloneNode(true);
let div_caja4 = div_caja2.cloneNode(true);

let imagen2 = document.createElement("img");
imagen2.setAttribute("class", "imagen2");
imagen2.src = "images/education.svg";

let texto2 = texto.cloneNode(true);
texto2.innerText = "Crea graficas increibles";

//INSERTAR

//insertar los contenedor en el body
document.body.append(div_contenedor1);
document.body.append(div_contenedor2);

//CONTENEDOR 1
//insertar los divs que van dentro de los contenedor1
div_contenedor1.append(div_caja1);
div_contenedor1.append(div_caja2);

div_caja1.append(imagen1);

div_contenedor1.append(input);
div_contenedor1.append(button);

div_caja2.append(texto);

//CONTENEDOR 2
//insertar los divs que van dentro de los contenedor2
div_contenedor2.append(div_caja3);
div_contenedor2.append(div_caja4);

div_caja3.append(imagen2);
div_caja4.append(texto2);
