import "../scss/main.scss";

window.addEventListener('load', function () {
    let controls = {
        elements: document.querySelectorAll(".price__controls .controls__link"),
        table: document.querySelector(".table"),
        addListeners: function () {
            for (let i = 0; i < this.elements.length; i++) {
                let el = this.elements[i];
                el.addEventListener('click', e => {
                    let left = !i ? 6.25 : "-" + (87.5 * 1 - 6.25);
                    this.table.style.left = left + "vw";
                    for (var n of this.elements) {
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
        hero: document.querySelector(".hero"),

        addListeners: function () {
            this.open.addEventListener('click', e => {
                this.element.classList.add("menu--open");
                this.hero.classList.add("hero--open");
            });
            this.close.addEventListener('click', e => {
                this.element.classList.remove("menu--open");
                this.hero.classList.remove("hero--open");
            });
        }
    };

    //add functionality to sliders

    (function () {
        let fillSlider = document.querySelector(".js-slider-fill");
        let contrast = document.querySelector(".js-slider-contrast");
        let image = document.querySelector(".js-upload-img");

        if (fillSlider && contrast && image) {
            fillSlider.addEventListener('input', (e) => {
                image.style.filter = `hue-rotate(${fillSlider.value}deg)`;
            });

            contrast.addEventListener('input', (e) => {
                image.style.filter = `contrast(${contrast.value}%)`;
            });
        }

    })();

    (function setActiveLocation() {
        let links = document.querySelectorAll(".js-menu-link");
        let currentHref = window.location.href;

        links.forEach(link => {
            if(currentHref == link.href) {
                link.classList.add("menu__link--active");
            }
            else if(currentHref == link.href) {
                link.classList.add("menu__link--active");
            }
        });
    })();

    let icons = {
        els: document.querySelectorAll(".js-upload-icon"),
        sliders: document.querySelectorAll(".js-slider"),

        addListeners() {
            this.els.forEach((el, index) => {
                el.addEventListener('click', () => {
                    this.els.forEach((icon) => icon.classList.remove("active-icon"));
                    el.classList.add("active-icon");

                    this.sliders.forEach(slider => slider.style.display = "none");
                    this.sliders[index].style.display = "block";
                });
            })
        }

    };

    let popups = {
        popups: document.querySelectorAll(".js-popup"),
        success: document.querySelector(".js-popup--success"),
        failure: document.querySelector(".js-popup--failure"),
        addListeners() {
            this.popups.forEach(popup => {
                popup.addEventListener('click', e => {
                    if (!e.target.classList.contains("js-popup-body")) {
                        popup.style.display = "none";
                    }
                })
            })
        },
        showSuccess() {
            this.success.style.display = "flex";
        },
        showFailure() {
            this.failure.style.display = "flex";
        }
    };

    let form = {
        el: document.querySelector('.js-form'),
        addListeners() {
            if (this.el) {
                this.el.addEventListener('submit', e => {
                    console.log(this.el.elements);
                    let fieldsWithErrors = Array.prototype.filter.call(this.el.elements, formEl => {
                        if (!formEl.validity.valid) {
                            formEl.classList.add("invalid");
                            return true;
                        }
                        return false;
                    });

                    if (fieldsWithErrors.length>0) {
                        e.preventDefault();
                        popups.showFailure();
                    }
                    else {
                        e.preventDefault(); //to see popup and not actually sibmit form
                        popups.showSuccess();
                    }
                });
            }
        }
    };



    controls.addListeners();

    menu.addListeners();

    icons.addListeners();

    popups.addListeners();

    form.addListeners();
});