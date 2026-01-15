// main.js
  function includehtml() {
    var allElements = document.querySelectorAll(".include_wrap");
    
    allElements.forEach(function(el) {
      var includePath = el.dataset.includePath;
      if (includePath) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            el.outerHTML = this.responseText;
          }
        };
        xhttp.open('GET', includePath, true);
        xhttp.send();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    includehtml(); 
  });
