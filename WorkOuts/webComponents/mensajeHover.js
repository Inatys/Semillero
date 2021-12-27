class mensajeHover extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
        <style>
        h1{
            margin:0px;
        }
            .signoInterrogacion{
                border-radius:50%;
                background: black;
                color:white;
                width:18px;
                height:18px;
                text-align:center;
            }
            .mensajeSignoInterrogacion{
                background: black;
                margin:2px;
                display:none;
                width:188px;
                height:18px;
                color:white;
                font-size:12px;
            }
        </style>    
        <h1>Let's test this new Tooltip!</h1>   
		<div class="signoInterrogacion">? 
        <div class="mensajeSignoInterrogacion"></div>
        </div>
        
        `
    }
    connectedCallback(){
        this._signoInterrogacion=this.shadowRoot.querySelector(".signoInterrogacion");
        this._mensajeSignoInterrogacion=this.shadowRoot.querySelector(".mensajeSignoInterrogacion");
        this._signoInterrogacion.appendChild(this._mensajeSignoInterrogacion);
        this._textoMensajeSignoInterrogacion = this.getAttribute("text");
		this._mensajeSignoInterrogacion.textContent = this._textoMensajeSignoInterrogacion;
        this._signoInterrogacion.addEventListener("mouseenter", this._mostrarMensaje.bind(this));
        this._signoInterrogacion.addEventListener("mouseleave", this._ocultarMensaje.bind(this));
    }
    _mostrarMensaje(){
        this._mensajeSignoInterrogacion.style.display="block"
    }
    _ocultarMensaje(){
        this._mensajeSignoInterrogacion.style.display="none"
    }
}
customElements.define("ng-mensaje-hover",mensajeHover);