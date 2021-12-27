let dato=[
	{
		"concepto": "Form",
		"descripcion":
			"La etiqueta se utiliza para crear un formulario HTML para la entrada del usuario.",
		"ejemplo": "<>"
	},
	{
		"concepto": "List",
		"descripcion": "Es una lista de elementos agrupados.",
		"ejemplo": "<>"
	},
];

let listaBuscador = document.getElementById("boxSearch");
function crearListaInicial(){
	console.log("es"+JSON.stringify(dato));	
	for(let i=0;i<dato.length;i++){
		listaBuscador.innerHTML+=`
		<button id="li" onclick="seleccionaTema('${dato[i].concepto}')"><p id="texto">${dato[i].concepto}</p></button>	
		`	
	}
}
crearListaInicial()

function mostrarMensaje() {
	let mensaje = document.querySelector(".mensaje");
	mensaje.style.display = "block";	
}



function agregarConceptos(){	
	let concepto=document.getElementById('concepto').value;
	let definicion=document.getElementById('definicion').value;
	let ejemplo=document.getElementById('ejemplo').value;
	let nuevoConcepto={"concepto": concepto, "descripcion":	definicion,	"ejemplo": ejemplo};
dato.push(nuevoConcepto)
console.log(nuevoConcepto)
let formulario=document.getElementById('formulario').reset();
}

function cerrar(){
	let cerrar=document.querySelector('.cerrar');
	let contenedorAgregar=document.querySelector('.contenedorAgregar');
contenedorAgregar.style.display="none";
}

 
function seleccionaTema(concepto) {
	let principal = document.getElementById("principal");
	principal.innerHTML = `
    <header class="header2">
        <img class="logo2" src="./img/logo.svg" alt="">
        <input type="text" id="inputSerch" class="search" onkeyup="mostrarLista2()" placeholder="Buscar el concepto">    
            <div id="boxSearch2">                
            </div>      
            <div class="ayuda">
                <img src="./img/ayuda.svg" alt="" onclick="mostrarMensaje()">
                <p class="mensaje">Esta pagina te permite agregar conceptos y ejemplos, para que tengas tu propio documento de estudio o te puedas guiar de los conceptos que ya existen.</p>
            </div>
    </header>
    <main class="main2"> 
         
    </main>
	<button class="botonAgregar" onclick="mostrarFormularioAgregar()">
			<img src="./img/iconoAgregarTexto.svg" alt="" />
		</button>
		
    `;
	let main2=document.querySelector(".main2");
	let listaSearch=document.getElementById("boxSearch2");
	for(let i=0;i<dato.length;i++){
		listaSearch.innerHTML+=`
		<button id="li" onclick="seleccionaTema('${dato[i].concepto}')"><p id="texto">${dato[i].concepto}</p></button>	
		` 
		if(concepto===dato[i].concepto){
			main2.innerHTML=`
			<h1>${dato[i].concepto}</h1>
		   <h4>${dato[i].descripcion}</h4>
	 <code class="ejemplo">${dato[i].ejemplo}</code>
			`	
		}	
	}	
}



function mostrarLista() {	
	let input, textoInput, elementoAFiltrar, textoElementoAFiltrar, txtValue;
	input = document.getElementById("inputSerch");
	textoInput = input.value.toUpperCase();
	elementoAFiltrar = document.querySelectorAll("#li");
	for (let i = 0; i < elementoAFiltrar.length; i++) {
		textoElementoAFiltrar = elementoAFiltrar[i].querySelectorAll("#texto")[0];
		txtValue = textoElementoAFiltrar.textContent;
		if (txtValue.toUpperCase().indexOf(textoInput) > -1) {
			elementoAFiltrar[i].style.display = "";
			listaBuscador.style.display = "block";
			if (textoInput === "") {
				listaBuscador.style.display = "none";
			}
		} else {
			elementoAFiltrar[i].style.display = "none";
		}
	}
}

function mostrarLista2() {
	let listaBuscador2 = document.getElementById("boxSearch2");
	let input, textoInput, elementoAFiltrar, textoElementoAFiltrar, txtValue;
	input = document.getElementById("inputSerch");
	textoInput = input.value.toUpperCase();
	elementoAFiltrar = document.querySelectorAll("#li");
	for (let i = 0; i < elementoAFiltrar.length; i++) {
		textoElementoAFiltrar = elementoAFiltrar[i].querySelectorAll("#texto")[0];
		txtValue = textoElementoAFiltrar.textContent;
		if (txtValue.toUpperCase().indexOf(textoInput) > -1) {
			elementoAFiltrar[i].style.display = "";
			listaBuscador2.style.display = "block";
			if (textoInput === "") {
				listaBuscador2.style.display = "none";
			}
		} else {
			elementoAFiltrar[i].style.display = "none";
		}
	}
}

let contenedorAgregar=document.querySelector('.contenedorAgregar');
function mostrarFormularioAgregar(){
contenedorAgregar.style.display="block";
}

