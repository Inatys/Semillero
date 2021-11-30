class botonMensaje extends HTMLElement {
	constructor() {
		super();
		this._divMensaje;
		this._boton;
		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
        <style>    
        p{
            font-size:20px;
        }   
        </style>
        <button>Show</button>
        `;
	}
	connectedCallback() {
		this._textoMensaje = this.getAttribute("text");
		this._botonShow = this.shadowRoot.querySelector("button");
		this.shadowRoot.appendChild(this._botonShow);
		this._botonShow.addEventListener("click", this._mostrarMensaje.bind(this));
	}
	_mostrarMensaje() {
		this._botonShow.style.display = "none";
		this._botonHide = document.createElement("button");
		this._botonHide.textContent = "Hide";
		this.shadowRoot.appendChild(this._botonHide);

		this._divMensaje = document.createElement("p");
		this._divMensaje.textContent = this._textoMensaje;
		this.shadowRoot.appendChild(this._divMensaje);

		this._botonHide.addEventListener("click", this._ocultarMensaje.bind(this));
	}
	_ocultarMensaje() {
		this._botonHide.style.display = "none";
		this._botonShow.style.display = "block";
		this.shadowRoot.removeChild(this._divMensaje);
	}
}
customElements.define("ng-boton-mensaje", botonMensaje);
