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



// alert(window.location.pathname);
if(window.location.pathname.indexOf('index.html') + 1){
  modalShow(".send-question-form-show", ".send-question-form");
  modalShow(".big-map-show", ".big-map");
}

modalShow(".login-form-show", ".login-form");
modalShow(".item-added-modal-show", ".item-added");

if (localStorage.getItem("bookmarks")==null){localStorage.setItem("bookmarks", "0")};
var el_bookmarks = document.querySelector(".bookmarks-value");
el_bookmarks.textContent = localStorage["bookmarks"];

var links = document.querySelectorAll(".catalog-item-bookmarks");
for (var i = 0; i < links.length; i++)  {
  links[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    localStorage["bookmarks"]=parseInt(localStorage["bookmarks"]) + 1;
    el_bookmarks.textContent = localStorage["bookmarks"];
  });
}

if (localStorage.getItem("basket")==null){localStorage.setItem("basket", "0")};
var el_basket = document.querySelector(".basket-value");
el_basket.textContent = localStorage["basket"];

var links = document.querySelectorAll(".item-added-modal-show");
for (var i = 0; i < links.length; i++)  {
  links[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    localStorage["basket"]=parseInt(localStorage["basket"]) + 1;
    el_basket.textContent = localStorage["basket"];
  });
}
