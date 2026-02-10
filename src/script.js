
//INPUT NAME
document.getElementById("index-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim().toLowerCase();

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

