import "./style.css";
const form = document.forms.form;
const inputName = document.querySelector(`.communication__input[name="name"]`);
const inputMesto = document.querySelector(`.communication__input[name="mesto"]`);
const button = document.querySelector(".communication__button");


class Popup {
  constructor(element, item) {
    this.element = element;
    this.item = item;
    this.element.addEventListener("click", this.open);
    this.item.addEventListener("click", this.close);
  }
  open(event) {
    if(event.target === document.querySelector(".header__container")) {
      document.querySelector(".header__popup").classList.remove("visibility");
    }
    if(event.target === document.querySelector(".header__button_theme_country")) {
      document.querySelector(".header__minipopup-country").classList.remove("visibility");
    }
    if(event.target === document.querySelector(".header__button_theme_date")) {
      document.querySelector(".header__minipopup").classList.remove("visibility");
    }
    if(event.target === document.querySelector(".header__button_theme_travel")) {
      document.querySelector(".header__minipopup-travel").classList.remove("visibility");
    }
  }
  close(event) {
    if(event.target === document.querySelector(".header__close")) {
      document.querySelector(".header__popup").classList.add("visibility");
    }
    if(event.target === document.querySelector(".header__close-black")) {
      document.querySelector(".header__minipopup-country").classList.add("visibility");
    }
    if(event.target === document.querySelector("#secondClose")) {
      document.querySelector(".header__minipopup-travel").classList.add("visibility");
    }
    
  }
}
class Validate {
  constructor(input) {
    this.input = input;
    this.input.addEventListener(`input`, this.handleValidate.bind(this));
  }
  validate() {
    if(!this.input.checkValidity()) {
      this.errorMessage();
      if(!inputMesto.checkValidity() || !inputName.checkValidity()) {
        button.setAttribute("disabled", true);
      }
    }
    if(this.input.checkValidity()) {
      this.resetError();
      if(inputMesto.checkValidity() && inputName.checkValidity()) {
        button.removeAttribute("disabled");
      }
    }
  }
  errorMessage() {
    let element = this.input;
    let error = element.nextElementSibling;
    if (element.validity.valueMissing === true) {
      error.textContent = "Пожалуйста, заполните поле";
    }
  }
  resetError() {
    this.input.nextElementSibling.textContent = "";
  }
  handleValidate(event) {
    this.validate(event.target);
  }
}

const firstInput = new Validate(inputName);
const secondInput = new Validate(inputMesto); 
const popupOpened = new Popup(document.querySelector(".header__container"), document.querySelector(".header__close"));
const popupCountry = new Popup(document.querySelector(".header__button_theme_country"), document.querySelector('.header__close-black'));
const popupTravel = new Popup(document.querySelector(".header__button_theme_travel"), document.querySelector('#secondClose'));

const  submitForm = event => {
  event.preventDefault();
    let name = form.elements.name;
    let tel = form.elements.tel;
    let mesto = form.elements.mesto;
    let data = form.elements.data;
    //отправляем данные на сервер или еще что то
    form.reset();
};