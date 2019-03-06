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

if (localStorage.getItem("bookmarks")==null){localStorage.setItem("bookmarks", "0")};
// localStorage["bookmarks"]=parseInt(localStorage["bookmarks"]) + 1;
var el = document.querySelector(".bookmarks-value");
el.textContent = localStorage["bookmarks"];

// alert(window.location.pathname);
if(window.location.pathname.indexOf('index.html') + 1){
  modalShow(".send-question-form-show", ".send-question-form");
  modalShow(".big-map-show", ".big-map");
}

modalShow(".login-form-show", ".login-form");
modalShow(".item-added-modal-show", ".item-added");
