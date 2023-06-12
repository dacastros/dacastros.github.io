const sectionReiniciar 		= document.getElementById("reiniciar")
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const botonMascotaJugador 	= document.getElementById("boton-mascota")
const botonReiniciar 		= document.getElementById("boton-reiniciar")

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const spanMascotaJugador		= document.getElementById("mascota-jugador")

const spanMascotaEnemigo	= document.getElementById("mascota-enemigo")

const spanVidasJugador	= document.getElementById("vidas-jugador")
const spanVidasEnemigo	= document.getElementById("vidas-enemigo")

const sectionMensajes 		= document.getElementById("resultado")
const ataquesDelJugador 	= document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo 	= document.getElementById("ataques-del-enemigo")
const contenedorTarjetas	= document.getElementById("contenedor-tarjetas")
const contenedorAtaques		= document.getElementById("contenedor-ataques")

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let ataqueDisponibleEnemigo = []
let opcionDeMokepones
let inputWanderschweinerin 
let inputRicciandino
let inputDinohiking
let inputChiguira
let mascotaJugador
let mascotaEnemigo
let ataquesMokepon
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaquesJugador
let indexAtaquesEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0

class Mokepon{
	constructor(nombre, foto, vidas) {
		this.nombre = nombre
		this.foto = foto
		this.vidas = vidas
		this.ataques = []
	}
}

let wanderschweinerin = new Mokepon("Wanderschweinerin", "./Wanderschweinerin.png", 5)
let ricciandino = new Mokepon("Ricciandino", "./Ricciandino.png", 5)
let dinohiking = new Mokepon("Dinohiking", "./Dinohiking.png", 5)
let chiguira = new Mokepon("Chigüira", "./Chiguira.png", 5)

wanderschweinerin.ataques.push(
	{nombre:'💧 abracitos', id: 'boton-agua'},
	{nombre:'💧 abracitos', id: 'boton-agua'},
	{nombre:'💧 abracitos', id: 'boton-agua'},
	{nombre:'🔥 rugidos', id: 'boton-fuego'},
	{nombre:'🌿 ronquidos', id: 'boton-tierra'},
)

ricciandino.ataques.push(
	{nombre:'🌿 ronquidos', id: 'boton-tierra'},
	{nombre:'🌿 ronquidos', id: 'boton-tierra'},
	{nombre:'🌿 ronquidos', id: 'boton-tierra'},
	{nombre:'💧 abracitos', id: 'boton-agua'},
	{nombre:'🔥 rugidos', id: 'boton-fuego'},
)

dinohiking.ataques.push(
	{nombre:'🔥 rugidos', id: 'boton-fuego'},	
	{nombre:'🔥 rugidos', id: 'boton-fuego'},	
	{nombre:'🔥 rugidos', id: 'boton-fuego'},	
	{nombre:'🌿 ronquidos', id: 'boton-tierra'},
	{nombre:'💧 abracitos', id: 'boton-agua'},
)

chiguira.ataques.push(
	{nombre:'🌿 ronquidos', id: 'boton-tierra'},
	{nombre:'🌿 ronquidos', id: 'boton-tierra'},
	{nombre:'💧 abracitos', id: 'boton-agua'},
	{nombre:'💧 abracitos', id: 'boton-agua'},
	{nombre:'🔥 rugidos', id: 'boton-fuego'},	
)

mokepones.push(wanderschweinerin, ricciandino, dinohiking, chiguira)

function iniciarJuego(){
	
	sectionSeleccionarAtaque.style.display = "none"

	mokepones.forEach((mokepon) => {
		opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
		contenedorTarjetas.innerHTML += opcionDeMokepones

		inputWanderschweinerin 	= document.getElementById("Wanderschweinerin")
		inputRicciandino 		= document.getElementById("Ricciandino")
		inputDinohiking 		= document.getElementById("Dinohiking")
		inputChiguira			= document.getElementById("Chigüira")
	})

	
	sectionReiniciar.style.display = "none"

	botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

	botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador (){
	sectionSeleccionarMascota.style.display = "none"
	sectionSeleccionarAtaque.style.display = "flex"

	if (inputWanderschweinerin.checked){
		spanMascotaJugador.innerHTML = inputWanderschweinerin.id
		mascotaJugador = inputWanderschweinerin.id
	} else if (inputRicciandino.checked){
		spanMascotaJugador.innerHTML = inputRicciandino.id
		mascotaJugador = inputRicciandino.id
	} else if (inputDinohiking.checked){
		spanMascotaJugador.innerHTML = inputDinohiking.id
		mascotaJugador = inputDinohiking.id
	} else if (inputChiguira.checked){
		spanMascotaJugador.innerHTML = inputChiguira.id
		mascotaJugador = inputChiguira.id
	} else {
		alert("Selecciona una mascota")
	}

	extraerAtaques(mascotaJugador)
	seleccionarMascotaEnemigo ()
}

function extraerAtaques(mascotaJugador){
	for (let i = 0; i < mokepones.length; i++) {
		if (mascotaJugador === mokepones[i].nombre){
			ataques = mokepones[i].ataques
		}
	}
	mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

     botonFuego = document.getElementById('boton-fuego')
     botonAgua = document.getElementById('boton-agua')
     botonTierra = document.getElementById('boton-tierra')
     botones = document.querySelectorAll('.BAtaque')
}

function seleccionarMascotaEnemigo(){
	let mascotaAleatoriaEnemigo = aleatorio(0,mokepones.length-1)

	spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoriaEnemigo].nombre
	mascotaEnemigo = mokepones[mascotaAleatoriaEnemigo].nombre
	extraerAtaquesEnemigo(mascotaEnemigo)
	secuenciaAtaque()
}

function extraerAtaquesEnemigo(mascotaEnemigo){
	for (let i = 0; i < mokepones.length; i++) {
		if (mascotaEnemigo === mokepones[i].nombre){
			ataques = mokepones[i].ataques
		}
	}
	ataqueDisponibleEnemigo = ataques
}


function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '💧 abracitos') {
                ataqueJugador.push('Agua')
                boton.style.background = 'transparent'   
				boton.style.color = 'transparent'
				indexAtaquesJugador = '💧 abracitos'
				boton.disabled = true
            } else if (e.target.textContent === '🔥 rugidos') {
                ataqueJugador.push('Fuego')
                boton.style.background = 'transparent'
				boton.style.color = 'transparent'
				indexAtaquesJugador = '🔥 rugidos'
				boton.disabled = true;
            } else {
                ataqueJugador.push('Tierra')
                boton.style.background = 'transparent'
				boton.style.color = 'transparent'
				indexAtaquesJugador = '🌿 ronquidos'
				boton.disabled = true;
            }
			ataqueAleatorioEnemigo()
        })
    })
}

function ataqueAleatorioEnemigo(){
	ataqueDisponibleEnemigo.sort(()=>Math.random()-0.5)
	
	if (ataqueDisponibleEnemigo[0].nombre === "💧 abracitos"){
		ataqueEnemigo.push("Agua")
		indexAtaquesEnemigo = ataqueDisponibleEnemigo[0].nombre
		ataqueDisponibleEnemigo.shift()
		} else if (ataqueDisponibleEnemigo[0].nombre === "🔥 rugidos"){
		ataqueEnemigo.push("Fuego")
		indexAtaquesEnemigo = ataqueDisponibleEnemigo[0].nombre
		ataqueDisponibleEnemigo.shift()
		} else {
		ataqueEnemigo.push("Tierra")
		indexAtaquesEnemigo = ataqueDisponibleEnemigo[0].nombre
		ataqueDisponibleEnemigo.shift()
		}
	iniciarPelea()
}

function iniciarPelea(){
	if (ataqueJugador.length === 5) {
		combate()
	}
}

function indexAmbosOponentes(jugador, enemigo) {
	indexAtaquesJugador = ataqueJugador[jugador]
	indexAtaquesEnemigo = ataqueEnemigo [enemigo]
	console.log(ataqueJugador[jugador])
	console.log(ataqueEnemigo [enemigo])
}

function combate(){
	for (let index = 0; index < ataqueJugador.length; index++) {
		if (ataqueJugador[index] ===  ataqueEnemigo[index]) {
			indexAmbosOponentes(index, index)
			crearMensaje("Empate")
		}
		else if ((ataqueJugador[index] === "Agua" && ataqueEnemigo[index] === "Fuego") || (ataqueJugador[index] === "Fuego" && ataqueEnemigo[index] === "Tierra") || (ataqueJugador[index] === "Tierra" && ataqueEnemigo[index] === "Agua")) {
			indexAmbosOponentes(index, index)
			crearMensaje("Victoria")
			victoriasJugador++
			spanVidasJugador.innerHTML = victoriasJugador
		} else {
			indexAmbosOponentes(index, index)
			crearMensaje("Derrota")
			victoriasEnemigo++
			spanVidasEnemigo.innerHTML = victoriasEnemigo
		}
	}
	revisarVidas()
	console.log(victoriasEnemigo)
	console.log(victoriasJugador)
}

function revisarVidas(){
	if (victoriasEnemigo > victoriasJugador){
		crearMensajeFinal("Perdiste, 😒")
	}
	else if (victoriasEnemigo < victoriasJugador){
		crearMensajeFinal("¡Ganaste Carajo! 🎉")
	}
	else if (victoriasEnemigo === victoriasJugador){
		crearMensajeFinal("Empataste")
	}
}

function crearMensaje(resultado){
	let nuevoAtaqueDelJugador = document.createElement("p")
	let nuevoAtaqueDelEnemigo = document.createElement("p")

	sectionMensajes.innerHTML = resultado
	nuevoAtaqueDelJugador.innerHTML = indexAtaquesJugador
	nuevoAtaqueDelEnemigo.innerHTML = indexAtaquesEnemigo


	ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
	ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
	sectionMensajes.innerHTML = resultadoFinal

	botonFuego.disabled = true
	botonAgua.disabled = true
	botonTierra.disabled = true

	sectionReiniciar.style.display = "block"
}

function reiniciarJuego(){
	location.reload()
}

function aleatorio (min,max){
	return Math.floor(Math.random()*(max-min+1)+min)
}
window.addEventListener("load", iniciarJuego)
