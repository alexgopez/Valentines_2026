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
        "althea": "./pages/thea.html",
        "thea": "./pages/thea.html",
        "althea roby ocampo": "./pages/thea.html",
        "fritz": "./pages/fritz.html",
        "fritzhie rein magtoto": "./pages/fritz.html",
        "tonying": "./pages/tonyeng.html",
        "tonyeng": "./pages/tonyeng.html",
        "pau": "./pages/tonyeng.html",
        "anthony paulo perez" : "./pages/tonyeng.html",
        "hyka": "./pages/hyka.html",
        "yzabelle hyka bautista": "./pages/hyka.html",
        "kirsten": "./pages/kirsten.html",
        "ten": "./pages/kirsten.html",
        "hev kirsten": "./pages/kirsten.html",
        "kirsten gabrielle nepomuceno": "./pages/kirsten.html",
        "jamila": "./pages/jamila.html",
        "jamila mae": "./pages/jamila.html",
        "al jam": "./pages/jamila.html",
        "jamila nicole maratas": "./pages/jamila.html",
        "claire": "./pages/claire.html",
        "rhaizenne": "./pages/claire.html",
        "rhaizenne clairynche icalla": "./pages/claire.html",
      };

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
      window.location.href = "last.html"; 
    });
  }

  const btnLastHome = document.getElementById("btn-last-home");
  if (btnLastHome) {
    btnLastHome.addEventListener("click", function() {
      window.location.href = "../index.html"; 
    });
  }

  // --- MUSIC LOGIC ---
  // --- MUSIC LOGIC ---
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-toggle");

if (music) {
  // 1. Browser "Handshake": Play on the first click anywhere on the page
  document.body.addEventListener('click', function() {
      if (music.paused) {
          music.play()
            .then(() => {
                if(musicBtn) musicBtn.classList.add("spinning");
                console.log("Music started!");
            })
            .catch(err => console.log("Playback blocked:", err));
      }
  }, { once: true });

  // 2. Manual Toggle Logic
  if (musicBtn) {
    musicBtn.addEventListener("click", function(e) {
      e.stopPropagation(); 
      
      if (music.paused) {
        music.play();
        musicBtn.innerHTML = "☆";
        musicBtn.classList.add("spinning");
      } else {
        music.pause();
        musicBtn.innerHTML = "🎵";
        musicBtn.classList.remove("spinning");
      }
    });
  }
}
}); // END