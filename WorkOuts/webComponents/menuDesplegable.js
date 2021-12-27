class menuDesplegable extends HTMLElement{
    constructor(){
        super();
        this._nav
        this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
        <style>
        .menu{
            z-index:-1;
            position:relative;
        }
        nav{
            width:250px;
            background:rgb(226, 226, 226);
            height:500px;
            position:absolute;
            z-index:65;
            display:none;
        }
        header{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            background:black;
            color:white;
            padding:5px;
            font-size:20px;
        }
        .botonesMenu{
            display:flex;
            justify-content: center;
        }
        .botonesMenu button{
            margin:10px 0px 0px 0px;
            background:white;
        }   
        .botonesMenu button:nth-of-type(1){
            background:black;
            color:white;
        }     
        ul{
            list-style-type:none;
        }
        li{
            margin:5px 0px 5px 0px;
        }
        </style>      
        <button class="botonAbrirMenu">Open Side Menu</button>  
        <nav>
            <header>
                Main Menu 
                <div id="botonCerrarMenu">x</div>
            </header>
            <div class="botonesMenu">
            <button>Navigation</button>
            <button>Contact</button>
            </div>
            
            <ul>
                <li>A link</li>
                <li>Another link</li>
                <li>A third link</li>
            </ul>
        </nav>
        `
    }
    connectedCallback(){
        this._botonCerrarMenu = this.shadowRoot.querySelector("#botonCerrarMenu");
        this._botonCerrarMenu.addEventListener("click",this._cerrarMenu.bind(this))
        this._botonAbrirMenu = this.shadowRoot.querySelector(".botonAbrirMenu");
        this._botonAbrirMenu.addEventListener("click",this._abrirMenu.bind(this))
        this._nav = this.shadowRoot.querySelector("nav");
    }
    _cerrarMenu(){
this._nav.style.display="none"
    }
    _abrirMenu(){
this._nav.style.display="block"
    }
}

customElements.define("ng-menu-desplegable", menuDesplegable)