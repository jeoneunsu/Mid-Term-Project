/*!
* Start Bootstrap - Full Width Pics v5.0.5 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function show () {
    document.querySelector(".background").className = "background show";
  }
  
  function close () { 
    document.querySelector(".background").className = "background";
  }
  
  document.querySelector("#show").addEventListener('click', show);
  document.querySelector("#close").addEventListener('click', close);