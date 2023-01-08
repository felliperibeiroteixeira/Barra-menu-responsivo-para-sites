class Cabeçalho {
    constructor(abrirMenu, ulMenu, liLinks, fecharLista) {
        this.abrirMenu = document.querySelector(abrirMenu);
        this.ulMenu = document.querySelector(ulMenu);
        this.liLinks = document.querySelectorAll(liLinks);
        this.fecharLista = document.querySelector(fecharLista);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }

    animarLinks() {
       this.liLinks.forEach((link, index) => {
           console.log(index/ 7 + 0.3);
           link.style.animation? (link.style.animation = ""): (link.style.animation = `liFade 0.5s ease forwards ${index / 7 + 0.3}s`);
       });
    }
    
    handleClick() {
        console.log(this);
        this.abrirMenu.classList.toggle(this.activeClass);
        this.ulMenu.classList.toggle(this.activeClass);
        this.animarLinks();        
    }

    addClickEvent() {
        this.abrirMenu.addEventListener("click", this.handleClick);
        this.fecharLista.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.abrirMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const cabeçalho = new Cabeçalho(
    "#btnMenu",
    "ul",
    "li",
    "#btnFechar",
);
cabeçalho.init();
