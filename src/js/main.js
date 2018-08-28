import "../scss/main.scss";

window.addEventListener('load', function() {
    var controls = {
        elements: document.querySelectorAll(".price__controls .controls__link"),
        table: document.querySelector(".table"),
        addListeners: function() {
            for(let i=0; i < this.elements.length; i++) {
                let el= this.elements[i];
                el.addEventListener('click', e => {
                    let left = !i ? 6.25 : "-" + (87.5*1 - 6.25);
                    this.table.style.left = left + "vw";
                    for(var n of this.elements) {
                        n.classList.remove("controls__link--active");
                    }
                    el.classList.add("controls__link--active")
                });
            }
        }
    };

    let menu = {
        element: document.querySelector(".menu"),
        open: document.querySelector(".menu__open-icon"),
        close: document.querySelector(".menu__close-icon"),

        addListeners: function() {
            this.open.addEventListener('click', e => {
                this.element.classList.add("menu--open");
            });
            this.close.addEventListener('click', e => {
                this.element.classList.remove("menu--open");
            });
        }
    }

    controls.addListeners();

    menu.addListeners();
});