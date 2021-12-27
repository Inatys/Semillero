const formulario=document.getElementById('formularioRegistro');
function guardar(){
    const formData=new FormData(formulario)
}
(()=>{
    formulario.addEventListener('submit',guardar),

})