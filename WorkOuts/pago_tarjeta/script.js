//compra carrito
const cards=document.getElementById('cards');
const items=document.getElementById('items');
const footer=document.getElementById('footer');
const templateCard=document.getElementById('template-card').content;
const templateFooter=document.getElementById('template-footer').content; 
const templateCarrito=document.getElementById('template-carrito').content; 
const fragment=document.createDocumentFragment();
let carrito={};
document.addEventListener("DOMContentLoaded", () => {
	fetchData();
});
cards.addEventListener('click',e=>{
addCarrito(e);
});

items.addEventListener('click', e=>{
    btnAccion(e)
})

const fetchData = async () => {
	try {
		const res = await fetch("cursos.json");
		const data = await res.json();
	    pintarCards(data);
	} catch (error) {
		console.log(error);
	}
};

const pintarCards=data =>{
    data.forEach(producto => {
        templateCard.querySelector('h1').textContent=producto.clase;
        templateCard.querySelector('img').setAttribute("src", producto.imagen);
        templateCard.querySelectorAll('h6')[0].textContent=producto.descripcion;
        templateCard.querySelector('span').textContent=producto.precio;
        templateCard.querySelector('button').dataset.id=producto.id;
        
        const clone=templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
}

const addCarrito=(e)=>{
    
    if(e.target.classList.contains('btn-dark')){
        
        setCarrito(e.target.parentElement);
    }
    //evita que se generen otros eventos
    e.stopPropagation();
}

const setCarrito = objeto=>{
    const producto= {
        id:objeto.querySelector('button').dataset.id,
        clase:objeto.querySelector('h1').textContent,
        precio:objeto.querySelector('span').textContent,
        cantidad:1
        //total:precio*cantidad
    }
    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad=carrito[producto.id].cantidad+1
    }
    carrito[producto.id]={...producto}
    pintarCarrito();
}

const pintarCarrito=()=>{
    items.innerHTML=''
Object.values(carrito).forEach(producto=>{    
    templateCarrito.querySelectorAll('td')[0].textContent=producto.clase
    templateCarrito.querySelectorAll('td')[1].textContent=producto.cantidad
    templateCarrito.querySelector('.btn-info').dataset.id=producto.id
    templateCarrito.querySelector('.btn-danger').dataset.id=producto.id
    templateCarrito.querySelector('span').textContent=producto.cantidad*producto.precio

    const clone = templateCarrito.cloneNode(true)
    fragment.appendChild(clone)
})
items.appendChild(fragment)

pintarFooter()
}

const pintarFooter=()=>{
    footer.innerHTML=''
    if(Object.keys(carrito).length===0){
        footer.innerHTML='<th>Carrito vacio</th>'
    return
    }


    const nCantidad= Object.values(carrito).reduce((acc,{cantidad})=>acc+cantidad,0)
    const nPrecio= Object.values(carrito).reduce((acc,{cantidad,precio})=>acc+cantidad*precio,0)

    templateFooter.querySelectorAll('td')[1].textContent=nCantidad
    templateFooter.querySelector('span').textContent=nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnVaciar=document.getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click',()=>{
        carrito={}
        pintarCarrito()
    })
   
}

const btnAccion= e=>{
   if(e.target.classList.contains('btn-info')){

const producto=carrito[e.target.dataset.id];
producto.cantidad++
//producto.cantidad=carrito[e.target.dataset.id].cantidad+1;
carrito[e.target.dataset.id]={...producto};   

pintarCarrito()
}
if(e.target.classList.contains('btn-danger')){

    const producto=carrito[e.target.dataset.id];
    producto.cantidad--
    //producto.cantidad=carrito[e.target.dataset.id].cantidad-1;
    if(producto.cantidad===0){
        delete carrito[e.target.dataset.id]
    }       
    pintarCarrito()
    }
    e.stopPropagation()
}
