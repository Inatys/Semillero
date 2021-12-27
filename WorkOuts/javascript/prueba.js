var todosImpactos=[
	{codigo:1, descripcion:"atributo"},
    {codigo:2, descripcion:"atributo"}
];
window.onload=dibujarTabla;
function dibujarTabla(){
    console.log("dibuja")
	let cuerpotabla=document.getElementById('equipos-tabla');
    console.log(todosImpactos)
	let tablaLlena="";
for(let i=0; i<todosImpactos.length;i++){
    console.log("entra")
    console.log(todosImpactos[i])
	tablaLlena+="<tr><td>"+todosImpactos[i].codigo+"</td><td>"+todosImpactos[i].descripcion+"</td></tr>";
}
cuerpotabla.innerHTML=tablaLlena;
}


function agregarImpacto(event){
	event.preventDefault();
    let inputEquipo=document.getElementById('equipo').value;
let inputPuntos=document.getElementById('puntos').value;
	console.log("hizo")
	var nuevoImpacto={codigo:inputEquipo, descripcion:inputPuntos};
	//var nuevoImpacto={codigo: 2,descripcion: "opcion",	id: 3,	valor: 3,	accion: "b"};
	todosImpactos.push(nuevoImpacto);
	dibujarTabla()
}
document.getElementById('nuevo-equipo').addEventListener('submit',agregarImpacto);


let nuevo=document.getElementById('nuevo');
let formulario =document.getElementById('agregaElemento');
let cerrar=document.getElementById('cerrar');

nuevo.addEventListener('click',()=>{
    console.log("dioclick")
    formulario.classList.add('mostrarFormulario');
});
cerrar.addEventListener('click',()=>{
    formulario.classList.remove('mostrarFormulario');
});