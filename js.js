var campo = document.querySelector(".insereNovaNota-campo")
var mural = document.querySelector(".mural")
var taref = 3
var nota = document.querySelector("ul")


function noTaref() {
	if (taref == 0) {
		var noTaref = document.querySelector(".noTaref") 
		noTaref.style.display = "block"
	} else {
		var noTaref = document.querySelector(".noTaref") 
		noTaref.style.display = "none"
	}
}

document.querySelector(".insereNovaNota").addEventListener("submit", function(event){
	var conteudo = campo.value

	var notaConteudo = document.createElement("li")
	notaConteudo.textContent = conteudo
	taref ++
	noTaref()
	notaConteudo.onclick = function() {
		notaConteudo.classList.add("chacked")
	}
	nota.appendChild(notaConteudo)


	var close = document.createElement("span")
	var txt = document.createTextNode("\u00D7");
	close.className = "close"
	close.onclick = function () {
		notaConteudo.remove()
		taref --
		noTaref()
	}

	close.appendChild(txt)
	notaConteudo.appendChild(close)


	mural.appendChild(nota)
	campo.value = ""
	event.preventDefault()


})



var myNodelist = document.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);

}

var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    taref --
	noTaref()
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



