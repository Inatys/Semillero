const listaTabla = document.getElementById("listaTabla");
const listaAccesos = document.getElementById("lista");
document.addEventListener("DOMContentLoaded", () => {
	fetchData();
});

const fetchData = async () => {
	try {
		const res = await fetch("CoordinadoraDeCalidad.json");
		const data = await res.json();
        const res2 = await fetch("NivelesDeAceso.json");
		const data2 = await res2.json();
	    mostrarCoordinadores(data);
        mostrarAccesos(data2);
	} catch (error) {
		console.log(error);
	}
};

const mostrarCoordinadores=data =>{
    data.forEach(coordinador => {
        console.log("entro ccor");
	const datoTabla = document.createElement("div");
    datoTabla.setAttribute("class","datoTabla");
    const divNombre = document.createElement("div");
    divNombre.setAttribute("class","nombre");
    const checkbox = document.createElement("input");
    checkbox.type="checkbox";
    const nombre = document.createElement("h6");
    nombre.textContent = coordinador.Nombre;
    const loggin = document.createElement("h6");
    loggin.textContent = coordinador.Loggin;
    const homologacion = document.createElement("h6");
    homologacion.textContent = coordinador.Homologacion;

	listaTabla.append(datoTabla);
    datoTabla.append(divNombre);
    divNombre.append(checkbox,nombre);
    datoTabla.append(loggin,homologacion);
    });
}

const mostrarAccesos=data2 =>{
    data2.forEach(acceso => {
        console.log("entro");
	const dato = document.createElement("button");
    dato.setAttribute("class","dato");
    const accesos = document.createElement("h5");
    accesos.textContent = acceso.Descripcion;
    const cantidadAcceso = document.createElement("h6");
    cantidadAcceso.textContent = acceso.Cantidad;

	listaAccesos.append(dato);
    dato.append(accesos,cantidadAcceso);

    });
}