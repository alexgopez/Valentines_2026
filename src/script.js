
//INPUT NAME
document.addEventListener("DOMContentLoaded", function() { 
  
  const form = document.getElementById("index-form"); 
  const input = document.querySelector(".input-name"); 

//CUSTOM REQUIRED MSG
input.addEventListener("invalid", function(event) { 
  if (input.value.trim() === "") { 
    input.setCustomValidity("ayusin mo bro"); 
  } 
  else { input.setCustomValidity(""); 
    } });

//FORM
  form.addEventListener("submit", function(event) {
    event.preventDefault();  
    const name = input.value.trim().toLowerCase();

  const pages = {
    "althea": "thea.html",
    "thea": "thea.html",
    "althea roby ocampo": "thea.html",
    "fritz": "fritz.html",
    "fritzhie rein magtoto": "fritz.html",
    "tonyeng": "tonyeng.html",
    "pau": "tonyeng.html",
    "anthony paulo perez" : "tonyeng.html",
  };

  if (pages[name]) {
    window.location.href = pages[name];
  } else {
    alert("ayusin mo pangalan mo tanga");
  }
  
  });
});
