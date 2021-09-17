
const fetchData = async () => {
	try {
		const res = await fetch("perfiles.json");
        
		const data = await res.json();
	} catch (error) {
		console.log(error);
	}
};

var imagen=document.getElementById("imagen").value;
var nombre=document.getElementById("nombre").value;
var correo=document.getElementById("correo").value;
var telefono=document.getElementById("telefono").value;
var habilidad=document.getElementById("habilidad").value;
var idioma=document.getElementById("idioma").value;
var referencia=document.getElementById("referencia").value;
var inicioe=document.getElementById("inicioe").value;
var fine=document.getElementById("fine").value;
var titulo=document.getElementById("titulo").value;
var universidad=document.getElementById("universidad").value;
var iniciop=document.getElementById("iniciop").value;
var finp=document.getElementById("finp").value;
var cargo=document.getElementById("cargo").value;
var empresa=document.getElementById("empresa").value;
var tarea=document.getElementById("tarea").value;


function crearPerfil(){
  
    var nuevoPerfil= {
        "id":3,   
        "imagen":imagen,
        "nombre":nombre,
        "correo":correo,
        "telefono":telefono,
        "habilidad":habilidad,
        "idioma":idioma,
        "referencia":referencia,
        "fechaInicioEducacion":inicioe,
        "fechaFinEducacion":fine,
        "titulo":titulo,
        "universidad":universidad,
        "fechaInicioExperiencia":iniciop,
        "fechaFinExperiencia":finp,
        "cargo":cargo,
        "empresa":empresa,
        "tareas":tarea
    };
    data.push(nuevoPerfil);
    console.log(data);
} 