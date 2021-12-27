class tiposSecciones extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
        <style>   
        .tipoSeccion {
            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            height: 100%;
        }
        .tituloSeccion {
            font-size: 18px;
            color: #b3b3b3;
            margin: 0px;
            font-weight: 600;
        }
        .tipoTablas {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            height: 84%;
        }
        </style>
        <div class="tipoSeccion">
            <div class="tituloSeccion"></div>
			<div class="tipoTablas"></div>
        </div>

        `
    }
    connectedCallback() {
        this._divSeccion=this.shadowRoot.querySelector(".tipoSeccion");

        this._tituloSeccion=this.shadowRoot.querySelector(".tituloSeccion");
        this._textoTitulo = this.getAttribute("nombreSeccion");
        this._tituloSeccion.textContent = this._textoTitulo;
        this._divSeccion.appendChild(this._tituloSeccion);
    }
}
customElements.define("ng-tipos-secciones", tiposSecciones);