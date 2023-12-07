const sectionReiniciar 		= document.getElementById("reiniciar")
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const botonMascotaJugador 	= document.getElementById("boton-mascota")
const botonReiniciar 		= document.getElementById("boton-reiniciar")
const botonArriba			= document.getElementById("Arriba")
const botonAbajo			= document.getElementById("Abajo")
const botonIzquierda		= document.getElementById("Izquierda")
const botonDerecha			= document.getElementById("Derecha")


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

const sectionVerMapa		= document.getElementById("ver-mapa")
const mapa					= document.getElementById("mapa")

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
let mascotaJugadorObjeto
let mascotaEnemigo
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaquesJugador
let indexAtaquesEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "./mokemap.png"
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth -20
const anchoMaximoDelMapa = 500

if (anchoDelMapa > anchoMaximoDelMapa) {
	anchoDelMapa=anchoMaximoDelMapa-20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Mokepon{
	constructor(nombre, foto, vidas, fotoMapa) {
		this.nombre = nombre
		this.foto = foto
		this.vidas = vidas
		this.ataques = []
		this.ancho = 60
		this.alto = 60
		this.x = aleatorio(60, mapa.width - this.ancho)
		this.y = aleatorio(60, mapa.height - this.alto)
		this.mapaFoto = new Image()
		this.mapaFoto.src = fotoMapa
		this.velocidadX = 0
		this.velocidadY = 0
	}

	pintarMokepon () {
		lienzo.drawImage(
			this.mapaFoto,
			this.x,
			this.y,
			this.ancho,
			this.alto
		)
	}
}

let wanderschweinerin = new Mokepon("Wanderschweinerin", "./Wanderschweinerin.png", 5, "./Wanderschweinerin_toon.png")
let ricciandino = new Mokepon("Ricciandino", "./Ricciandino.png", 5, "./Ricciandino_toon.png")
let dinohiking = new Mokepon("Dinohiking", "./Dinohiking.png", 5, "./Dinohiking_toon.png")
let chiguira = new Mokepon("Chigüira", "./Chiguira.png", 5, "./Chiguira_toon.png")

let wanderschweinerinEnemigo = new Mokepon("Wanderschweinerin", "./Wanderschweinerin.png", 5, "./Wanderschweinerin_toon.png")
let ricciandinoEnemigo = new Mokepon("Ricciandino", "./Ricciandino.png", 5, "./Ricciandino_toon.png")
let dinohikingEnemigo = new Mokepon("Dinohiking", "./Dinohiking.png", 5, "./Dinohiking_toon.png")
let chiguiraEnemigo = new Mokepon("Chigüira", "./Chiguira.png", 5, "./Chiguira_toon.png")

wanderschweinerin.ataques.push(
	{nombre:'💧 abracitos', id: 'boton-agua'},
	{nombre:'💧 abracitos', id: 'boton-agua'},
	{nombre:'💧 abracitos', id: 'boton-agua'},
	{nombre:'🔥 rugidos', id: 'boton-fuego'},
	{nombre:'🌿 ronquidos', id: 'boton-tierra'},
)

wanderschweinerinEnemigo.ataques.push(
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

ricciandinoEnemigo.ataques.push(
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

dinohikingEnemigo.ataques.push(
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

chiguiraEnemigo.ataques.push(
	{nombre:'🌿 ronquidos', id: 'boton-tierra'},
	{nombre:'🌿 ronquidos', id: 'boton-tierra'},
	{nombre:'💧 abracitos', id: 'boton-agua'},
	{nombre:'💧 abracitos', id: 'boton-agua'},
	{nombre:'🔥 rugidos', id: 'boton-fuego'},	
)

mokepones.push(wanderschweinerin, ricciandino, dinohiking, chiguira)

function iniciarJuego(){
	
	sectionSeleccionarAtaque.style.display = "none"
	sectionVerMapa.style.display = "none"

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

	botonMascotaJugador.addEventListener("touchstart", seleccionarMascotaJugador)

	botonReiniciar.addEventListener("touchstart", reiniciarJuego)
}

function seleccionarMascotaJugador (){
	sectionSeleccionarMascota.style.display = "none"
	sectionVerMapa.style.display = "flex"
	iniciarMapa()
	
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
		reiniciarJuego()
	}

	extraerAtaques(mascotaJugador)
	obtenerObjetoMascota ()
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

function seleccionarMascotaEnemigo(enemigo){
	spanMascotaEnemigo.innerHTML = enemigo.nombre
	mascotaEnemigo = mokepones[enemigo.nombre]
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
        boton.addEventListener("touchstart", (e) => {
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

	sectionReiniciar.style.display = "block"
}

function reiniciarJuego(){
	location.reload()
}

function aleatorio (min,max){
	return Math.floor(Math.random()*(max-min+1)+min)
}

function pintarCanvas () {

	mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
	mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
	lienzo.clearRect(0,0,mapa.width, mapa.height)
	lienzo.drawImage(
		mapaBackground,
		0,
		0,
		mapa.width,
		mapa.height
	)
	mascotaJugadorObjeto.pintarMokepon()
	wanderschweinerinEnemigo.pintarMokepon()
	ricciandinoEnemigo.pintarMokepon()
	dinohikingEnemigo.pintarMokepon()
	chiguiraEnemigo.pintarMokepon()

	if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
		revisarColision(ricciandinoEnemigo)
		revisarColision(wanderschweinerinEnemigo)
		revisarColision(dinohikingEnemigo)
		revisarColision(chiguiraEnemigo)
	}

}

function moverArriba() {
	mascotaJugadorObjeto.velocidadY = -1
}

function moverAbajo() {
	mascotaJugadorObjeto.velocidadY = +1
}

function moverDerecha() {
	mascotaJugadorObjeto.velocidadX = +1
}

function moverIzquierda() {
	mascotaJugadorObjeto.velocidadX = -1
}

function detenerMovimiento(){
	mascotaJugadorObjeto.velocidadX = 0
	mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event){
	botonArriba.addEventListener("touchstart", moverArriba)
	botonArriba.addEventListener("touchend", detenerMovimiento)

	botonAbajo.addEventListener("touchstart", moverAbajo)
	botonAbajo.addEventListener("touchend", detenerMovimiento)

	botonIzquierda.addEventListener("touchstart", moverIzquierda)
	botonIzquierda.addEventListener("touchend", detenerMovimiento)

	botonDerecha.addEventListener("touchstart", moverDerecha)
	botonDerecha.addEventListener("touchend", detenerMovimiento)

	}

function iniciarMapa(){

	intervalo = setInterval(pintarCanvas, 10)

	//window.addEventListener("keydown", sePresionoUnaTecla)
	
	window.addEventListener("touchstart", sePresionoUnaTecla)

	//window.addEventListener("keyup", detenerMovimiento)
	window.addEventListener("touchend", detenerMovimiento)
}

function obtenerObjetoMascota(){
	for (let i = 0; i < mokepones.length; i++) {
		if (mascotaJugador === mokepones[i].nombre){
			mascotaJugadorObjeto = mokepones [i]
		}
	}
}

function revisarColision(enemigo) {
	const arribaEnemigo 	= enemigo.y
	const abajoEnemigo		= enemigo.y + enemigo.alto
	const derechaEnemigo 	= enemigo.x + enemigo.ancho
	const izquierdaEnemigo 	= enemigo.x
	
	const arribaMascota =
		mascotaJugadorObjeto.y
	const abajoMascota = 
		mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
	const derechaMascota = 
		mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
	const izquierdaMascota = 
		mascotaJugadorObjeto.x

	if (
		abajoMascota < arribaEnemigo ||
		arribaMascota > abajoEnemigo ||
		derechaMascota < izquierdaEnemigo ||
		izquierdaMascota > derechaEnemigo
	) {
		return
	}

	detenerMovimiento()
	clearInterval(intervalo)
	sectionSeleccionarAtaque.style.display = "flex"
	sectionVerMapa.style.display="none"
	seleccionarMascotaEnemigo (enemigo)
	
}

function funcionaTouch(){
	console.log("Funciona el touch!")
}

window.addEventListener("load", iniciarJuego)
