let numero = parseInt(document.getElementById('texto').textContent)

function aumentar() {
	
	numero++
	document.getElementById('texto').textContent= numero
}

function decrementar(){
	
	numero--
	document.getElementById('texto').textContent= numero
}

function reset() {
	numero =0
	document.getElementById('texto').textContent= numero
}