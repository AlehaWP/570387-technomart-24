function modalShow(buttonName, formName){
  var links = document.querySelectorAll(buttonName);//Ищем кнопки вызова формы с указанным классом
  var popup = document.querySelector(formName);//Находим форму с указанным классом
  var close = popup.querySelector(".modal-close");//Ищем на форме кнопку закрыть
  //Добавляем кнопкам вызова формы событие клика, по которому форме назначается класс показа modal-show
  for (var i = 0; i < links.length; i++)  {
    links[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
    });
  }
  //Добавляем кнопке закрытия формы событие клика, по которому у формы убирается класс показа modal-show
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });
};

if(window.location.pathname.indexOf('index.html') + 1){
  //Назначаем кнопке "Напишите нам" форму отправки вопроса
  modalShow(".send-question-form-show", ".send-question-form");
  //Назначаем карте с адресом форму интерактивной карты
  modalShow(".big-map-show", ".big-map");

  // Переключение слайдера
  var slides = document.querySelectorAll(".offers-slide");
  var currentSlide = 1;

  var slidesButtonIndiate = document.querySelectorAll(".slider-btn-indicate");
  var currentButtonIndiate = 1;

  function nextSlide() {
    //Переключение слайдов
    slides[currentSlide].classList.add("visually-hidden");
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].classList.remove("visually-hidden");
    //Переключение кнопок индикаторов
    slidesButtonIndiate[currentButtonIndiate].classList.remove("actived");
    currentButtonIndiate= (currentButtonIndiate+1)%slides.length;
    slidesButtonIndiate[currentButtonIndiate].classList.add("actived");
  }
  //Добавляем на кнопки Стрелок переключение слайдера
  var buttonsSlide = document.querySelectorAll(".buttons-slide");
  for (var i = 0; i < buttonsSlide.length; i++)  {
    buttonsSlide[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      nextSlide();
    });
  }
  //Добавляем на кнопки индикаторы переключение слайдера
  for (var i = 0; i < slidesButtonIndiate.length; i++)  {
    slidesButtonIndiate[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      if (!this.classList.contains('actived')) {
        nextSlide();
      }
    });
  }
}
//Назначаем кнопке "Войти" форму ввода логина
modalShow(".login-form-show", ".login-form");
//Назначаем кнопке "Купить" форму подтверждения покупки
modalShow(".item-added-modal-show", ".item-added");
//Функция прибавления счетчиков в Закладки и Корзина
function setLinkCountersByButton(locStorName, elemClass, elemDescriptText, buttonClass){
  function setElemTextValue(){
    var el = document.querySelector(elemClass);
    el.textContent = elemDescriptText + localStorage[locStorName];
    el.classList.add("not-null");
  };

  if (localStorage.getItem(locStorName)==null){localStorage.setItem(locStorName, "0")};
  if(localStorage[locStorName]>0) {
    setElemTextValue();
  };

  var links = document.querySelectorAll(buttonClass);
  for (var i = 0; i < links.length; i++)  {
    links[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      localStorage[locStorName]=parseInt(localStorage[locStorName]) + 1;
      setElemTextValue();
    });
  }
}
//Назначаем кнопке 'В закладки' прибавления к счетчику уже добавленного +1
setLinkCountersByButton("bookmarks", ".bookmarks-value", "Закладки: ", ".catalog-item-bookmarks");
//Назначаем кнопке 'Купить' прибавления к счетчику уже добавленного +1
setLinkCountersByButton("basket", ".basket-value", "Корзина: ", ".item-added-modal-show");
