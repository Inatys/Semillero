//perfiles
const cards=document.getElementById('cards');
const items=document.getElementById('items');
const templateCard=document.getElementById('template-card').content;
const fragment=document.createDocumentFragment();
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

const pintarPerfil=data =>{
    data.forEach(perfiles => {
        templateCard.querySelector('img').setAttribute("src", perfiles.imagen);
        templateCard.querySelector('h1').textContent=perfiles.nombre;
       
        templateCard.querySelectorAll('h6')[0].textContent=perfiles.correo;
        templateCard.querySelectorAll('h6')[1].textContent=perfiles.telefono;
        templateCard.querySelectorAll('h6')[2].textContent=perfiles.idioma;
        templateCard.querySelectorAll('h6')[3].textContent=perfiles.titulo;
        templateCard.querySelectorAll('h6')[4].textContent=perfiles.cargo;
        
        const clone=templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
}


