document.addEventListener("DOMContentLoaded", function() { 
  // --- INDEX FORM LOGIC ---
  const form = document.getElementById("index-form"); 
  const input = document.querySelector(".input-name"); 

  if (form && input) {
    input.addEventListener("input", function() { 
      input.setCustomValidity(""); 
    });

    input.addEventListener("invalid", function() { 
      if (input.value.trim() === "") { 
        input.setCustomValidity("lagay mo na punyeta naman oh"); 
      } 
    });

    form.addEventListener("submit", function(event) {
      event.preventDefault();  
      const name = input.value.trim().toLowerCase();

      const pages = {
        //THEA
        "althea": "./pages/thea.html",
        "thea": "./pages/thea.html",
        "althea roby ocampo": "./pages/thea.html",
        //FRITZHIE
        "fritz": "./pages/fritz.html",
        "fritzhie rein magtoto": "./pages/fritz.html",
        //TONYENG
        "tonying": "./pages/tonyeng.html",
        "tonyeng": "./pages/tonyeng.html",
        "pau": "./pages/tonyeng.html",
        "anthony paulo perez" : "./pages/tonyeng.html",
        //HYKA
        "hyka": "./pages/hyka.html",
        "yzabelle hyka bautista": "./pages/hyka.html",
        //KIRSTEN
        "kirsten": "./pages/kirsten.html",
        "ten": "./pages/kirsten.html",
        "hev kirsten": "./pages/kirsten.html",
        "kirsten gabrielle nepomuceno": "./pages/kirsten.html",
        //JAMILA
        "jamila": "./pages/jamila.html",
        "jamila mae": "./pages/jamila.html",
        "al jam": "./pages/jamila.html",
        "jamila nicole maratas": "./pages/jamila.html",
        //CLAIRE
        "claire": "./pages/claire.html",
        "rhaizenne": "./pages/claire.html",
        "rhaizenne clairynche icalla": "./pages/claire.html",
        //MIO
        "mio": "./pages/mio.html",
        "mionette": "./pages/mio.html",
        "mionette therese belleza": "./pages/mio.html",
      };

      console.log("Typed Name:", name);
      console.log("Available Keys:", Object.keys(pages));
      
      if (pages[name]) {
        window.location.href = pages[name];
      } else {
        alert("ayusin mo pangalan mo tanga");
      }
    });
  }

  // --- SUB-PAGE BUTTONS ---
  const btnLastPage = document.getElementById("btn-last-page");
  if (btnLastPage) {
    btnLastPage.addEventListener("click", function() {
      window.location.href = "./last.html"; 
    });
  }

  const btnLastHome = document.getElementById("btn-last-home");
  if (btnLastHome) {
    btnLastHome.addEventListener("click", function() {
      window.location.href = "../index.html"; 
    });
  }
});