"use strict";

svg4everybody();


var menuElem = document.getElementById('filter_menu');
var titleElem = menuElem.querySelector('.filter_title');

titleElem.onclick = function () {
  menuElem.classList.toggle('open');
};
