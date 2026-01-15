// main.js
  function includehtml() {
    var allElements = document.querySelectorAll(".include_wrap");
    
    allElements.forEach(function(el) {
      var includePath = el.dataset.includePath;
      if (includePath) {
        fetch(includePath)
          .then(response => {
            if (response.ok) {
              return response.text();
            }
            throw new Error('Network response was not ok');
          })
          .then(text => {
            el.outerHTML = text;
          })
          .catch(error => {
            console.error('Error loading HTML:', error);
          });
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    includehtml(); 
  });
