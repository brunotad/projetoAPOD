var btn = document.createElement('button');
btn.setAttribute('type','button')
btn.appendChild(document.createTextNode('Clique aqui'));
document.body.appendChild(btn);

function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('container').innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "https://api.nasa.gov/planetary/apod", true);
    xhttp.send();
  }