document.addEventListener("DOMContentLoaded", function() { 
  // --- INDEX FORM LOGIC ---
  const form = document.getElementById("index-form"); 
  const input = document.querySelector(".input-name"); 

  if (form && input) {
    // Custom validation message
    input.addEventListener("input", function() { 
      input.setCustomValidity(""); // Reset message on type
    });

    input.addEventListener("invalid", function() { 
      if (input.value.trim() === "") { 
        input.setCustomValidity("lagay mo na punyeta naman oh"); 
      } 
    });

    form.addEventListener("submit", function(event) {
      event.preventDefault();  
      const name = input.value.trim().toLowerCase();
      console.log("Form submitted, name:", name);
      
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

  // --- THEA/FRITZ/TONYENG PAGE BUTTON ---
  const btnLastPage = document.getElementById("btn-last-page");
  if (btnLastPage) {
    btnLastPage.addEventListener("click", function() {
      // If you are inside the /pages/ folder, last.html is in the same folder
      window.location.href = "last.html"; 
    });
  }

  // --- LAST PAGE BUTTON ---
  const btnLastHome = document.getElementById("btn-last-home");
  if (btnLastHome) {
    btnLastHome.addEventListener("click", function() {
      // Go back up one level to index
      window.location.href = "../index.html"; 
    });
  }
}); 