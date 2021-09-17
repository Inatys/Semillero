//hoja de vida
const cards = document.getElementById("cards");
const items = document.getElementById("items");
const templateHoja = document.getElementById("template-hoja").content;
const fragment = document.createDocumentFragment();

document.addEventListener("DOMContentLoaded", () => {
	fetchData();
});

const fetchData = async () => {
	try {
		const res = await fetch("perfiles.json");
		const data = await res.json();
		pintarPerfil(data);
	} catch (error) {
		console.log(error);
	}
};

const pintarPerfil = (data) => {
	data.forEach((perfiles) => {
		templateHoja.querySelector("img").setAttribute("src", perfiles.imagen);
		templateHoja.querySelectorAll("h1")[0].textContent = perfiles.nombre;
		templateHoja.querySelectorAll("h1")[1].textContent = perfiles.correo;
		templateHoja.querySelectorAll("h1")[2].textContent = perfiles.telefono;

		templateHoja.querySelectorAll("h3")[0].textContent = perfiles.habilidad;
        templateHoja.querySelectorAll("h3")[1].textContent = perfiles.idioma;
		templateHoja.querySelectorAll("h3")[2].textContent = perfiles.referencia;

        templateHoja.querySelectorAll("h4")[0].textContent = perfiles.fechaInicioEducacion;
        templateHoja.querySelectorAll("h4")[1].textContent = perfiles.fechaFinEducacion;
        templateHoja.querySelectorAll("h6")[0].textContent = perfiles.titulo;
		templateHoja.querySelectorAll("h6")[1].textContent = perfiles.universidad;

        templateHoja.querySelectorAll("h4")[2].textContent = perfiles.fechaInicioExperiencia;
        templateHoja.querySelectorAll("h4")[3].textContent = perfiles.fechaFinExperiencia;
        templateHoja.querySelectorAll("h6")[2].textContent = perfiles.cargo;
        templateHoja.querySelectorAll("h6")[3].textContent = perfiles.empresa;
        templateHoja.querySelectorAll("h6")[5].textContent = perfiles.tareas;
        
        const clone = templateHoja.cloneNode(true);
		fragment.appendChild(clone);
	});
	cards.appendChild(fragment);
};
