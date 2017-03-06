var campo = document.querySelector(".insereNovaNota-campo")
var mural = document.querySelector(".mural")
var check = 0

document.querySelector(".insereNovaNota").addEventListener("submit", function(event){
	var conteudo = campo.value

	var nota = document.createElement("div")
	nota.classList.add("nota")

	var notaConteudo = document.createElement("p")
	notaConteudo.classList.add("nota-conteudo")
	notaConteudo.textContent = conteudo
	nota.appendChild(notaConteudo)

	var botaoCheck = document.createElement("button")
	botaoCheck.classList.add("botaoCheck")
	botaoCheck.addEventListener("click", function(){
		check = check + 1
		nota.classList.add("nota--sumindo")
		setTimeout(function(){
			nota.remove()
		}, 350)
	})
	nota.appendChild(botaoCheck)

	var imgCheck = document.createElement("img")
	imgCheck.src = "assets/check.png"
	imgCheck.classList.add("botaoCheck-img")
	botaoCheck.appendChild(imgCheck)



	var botaoRemove = document.createElement("button")
	botaoRemove.classList.add("botaoRemove")
	botaoRemove.addEventListener("click", function(){
		nota.classList.add("nota--sumindo")
		setTimeout(function(){
			nota.remove()
		}, 450)
	})
	nota.appendChild(botaoRemove)

	var imgClose = document.createElement("img")
	imgClose.src = "assets/close.png"
	imgClose.classList.add("botaoClose-img")
	botaoRemove.appendChild(imgClose)

	mural.appendChild(nota)
	campo.value = ""
	event.preventDefault()
})