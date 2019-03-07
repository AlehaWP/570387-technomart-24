function modalShow(buttonName, formName){
  var links = document.querySelectorAll(buttonName);
  var popup = document.querySelector(formName);
  var close = popup.querySelector(".modal-close");

  for (var i = 0; i < links.length; i++)  {
    links[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
    });
  }

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });
};

if(window.location.pathname.indexOf('index.html') + 1){
  modalShow(".send-question-form-show", ".send-question-form");
  modalShow(".big-map-show", ".big-map");
}

modalShow(".login-form-show", ".login-form");
modalShow(".item-added-modal-show", ".item-added");

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

setLinkCountersByButton("bookmarks", ".bookmarks-value", "Закладки: ", ".catalog-item-bookmarks");
setLinkCountersByButton("basket", ".basket-value", "Корзина: ", ".item-added-modal-show");
