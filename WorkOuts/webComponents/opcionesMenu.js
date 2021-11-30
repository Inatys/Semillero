class opcionesMenu extends HTMLElement{
    constructor() {
		super();      
        this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
        <style>    
        .divOpcionesMenu {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 86px;
            border: 0.3px solid #e5e5e5;
            border-radius: 10px;
            background: #ffffff;
            margin: 2px 0px 2px 0px;
        }
        .imagenHover {
            display: none;
        }
        h6 {
            margin: 0px 5px 0px 5px;
            color: #676565;
        }
        .lineaSeccionesMenu {
            bottom: -15px;
            position: relative;
            width: 96%;
            height: 0px;
            border: 2px solid #e8cc5a;
            display: none;
            background: #e8cc5a;
        }
        .divOpcionesMenu:hover {
            background: #f1eeee;
        }
        .divOpcionesMenu:hover .imagenNormal {
            display: none;
        }
        .divOpcionesMenu:hover .imagenHover {
            display: block;
        }
        .divOpcionesMenu:hover .lineaSeccionesMenu {
            display: block;
        }
        .seleccionado {
            background: #f1eeee;
        }
        .seleccionado .imagenHover {
            display: block;
        }
        .seleccionado .imagenNormal {
            display: none;
        }
        .seleccionado .lineaSeccionesMenu {
            display: block;
        }
        </style>
        <div class="divOpcionesMenu">
            <h6></h6>
			<div class="lineaSeccionesMenu"></div>
        </div>
        `;  
    }
    connectedCallback() {       
        this._divOpcionesMenu = this.shadowRoot.querySelector(".divOpcionesMenu");
        this.shadowRoot.appendChild(this._divOpcionesMenu);

        this._h6textoMensaje = this.shadowRoot.querySelector("h6");  
        this._divOpcionesMenu.appendChild(this._h6textoMensaje);
        this._textoMensaje = this.getAttribute("text");
        this._h6textoMensaje.textContent = this._textoMensaje;

        this._lineaSeccionesMenu = this.shadowRoot.querySelector(".lineaSeccionesMenu");
        this._divOpcionesMenu.appendChild(this._lineaSeccionesMenu);  
        
        this._divOpcionesMenu.addEventListener("click", this._mostrarControl.bind(this));
    }
    _mostrarControl() {
        this._divOpcionesMenu.classList.add("seleccionado");
    }
}
customElements.define("ng-opciones-menu", opcionesMenu);