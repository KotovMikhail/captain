"use strict";
svg4everybody();
var menuElem = document.getElementById("filter_menu");
var titleElem = menuElem.querySelector(".filter_title");
var buttons = document.querySelectorAll(".button--del");
var formListData = document.querySelector(".form__list--data");
var inputs = formListData.querySelectorAll('.form__input');

function showHiddingElems(evt) {
  if (evt.keyCode !== 9) {
    this.previousSibling.style.display = 'block';
  }

  for (let i = 0; i < Array.from(inputs).length; i++) {
    let input = Array.from(inputs)[i];
    if (input.value === '') {
      input.previousSibling.style.display = 'none';
    }
  }
}


Array.from(inputs).forEach(function (e) {
  return e.addEventListener("keydown", showHiddingElems);
});

function remove() {
  this.closest(".car__card").remove()
}

titleElem.onclick = function () {
  menuElem.classList.toggle("open")
}, Array.from(buttons).forEach(function (e) {
  return e.addEventListener("click", remove)
});
