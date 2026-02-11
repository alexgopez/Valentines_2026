document.addEventListener("DOMContentLoaded", function() { 
  // INDEX FORM
  const form = document.getElementById("index-form"); 
  const input = document.querySelector(".input-name"); 

  if (form && input) {
    // Custom required message
    input.addEventListener("invalid", function(event) { 
      if (input.value.trim() === "") { 
        input.setCustomValidity("lagay mo na punyeta naman oh"); 
      } else { 
        input.setCustomValidity(""); 
      } 
    });

    // Form submit
    form.addEventListener("submit", function(event) {
      event.preventDefault();  
      const name = input.value.trim().toLowerCase();

      const pages = {
        "althea": "pages/thea.html",
        "thea": "pages/thea.html",
        "althea roby ocampo": "pages/thea.html",
        "fritz": "pages/fritz.html",
        "fritzhie rein magtoto": "pages/fritz.html",
        "tonyeng": "pages/tonyeng.html",
        "pau": "pages/tonyeng.html",
        "anthony paulo perez" : "pages/tonyeng.html",
      };

      if (pages[name]) {
        window.location.href = pages[name];
      } else {
        alert("ayusin mo pangalan mo tanga");
      }
    });
  }

  // THEA PAGE BUTTON
  const btnLastPage = document.getElementById("btn-last-page");
  if (btnLastPage) {
    btnLastPage.addEventListener("click", function() {
      window.location.href = "pages/last.html"; 
    });
  }

  // LAST PAGE BUTTON
  const btnLastHome = document.getElementById("btn-last-home");
  if (btnLastHome) {
    btnLastHome.addEventListener("click", function() {
      window.location.href = "pages/index.html"; 
    });
  }
});
