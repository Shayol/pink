import "../scss/main.scss";

window.addEventListener('load', function() {
    var controls = {
        elements: document.querySelectorAll(".price__controls .controls__link"),
        table: document.querySelector(".table"),
        addListeners: function() {
            for(let i=0; i < this.elements.length; i++) {
                let el= this.elements[i];
                el.addEventListener('click', e => {
                    let left = !i ? 5 : "-" + (90*1 - 5);
                    this.table.style.left = left + "vw";
                    for(var n of this.elements) {
                        n.classList.remove("controls__link--active");
                    }
                    el.classList.add("controls__link--active")
                });
            }
        }
    };

    controls.addListeners();
});