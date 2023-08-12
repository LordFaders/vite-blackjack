import _ from 'underscore';
import {
	acumularPuntos,
	crearCarta,
	crearDeck,
	pedirCarta,
	turnoComputadora,
} from './usecases';

const miModulo = (() => {
	'use strict';

	let deck = [];
	const tipos = ['C', 'D', 'H', 'S'],
		especiales = ['A', 'J', 'Q', 'K'];

	let puntosJugadores = [];
	let agarradas = 0;

	// Referencias al HTML
	const btnPedir = document.querySelector('#btnPedir'),
		btnDetener = document.querySelector('#btnDetener'),
		btnNuevo = document.querySelector('#btnNuevo');

	const divCartasJugadores = document.querySelectorAll('.divCartas'),
		puntosHTML = document.querySelectorAll('small');

	// Creamos un deck
	deck = crearDeck(tipos, especiales);

	// Inicializamos el juego
	const inicializarJuego = (numJugadores = 2) => {
		deck = crearDeck(tipos, especiales);
		puntosJugadores = [];
		for (let i = 0; i < numJugadores; i++) {
			puntosJugadores.push(0);
		}
		puntosHTML.forEach((elem) => (elem.innerText = 0));
		divCartasJugadores.forEach((elem) => (elem.innerHTML = ''));
		btnPedir.disabled = false;
		btnDetener.disabled = false;
	};

	// Eventos
	btnPedir.addEventListener('click', () => {
		const carta = pedirCarta(deck);
		const puntosJugador = acumularPuntos(
			carta,
			0,
			puntosJugadores,
			puntosHTML
		);
		crearCarta(carta, 0, divCartasJugadores);
		agarradas++;

		if (agarradas >= 2) {
			btnDetener.disabled = false;
		}

		if (puntosJugador > 21) {
			console.log('Lo siento. ¡¡Perdiste!! 🥺');
			btnPedir.disabled = true;
			btnDetener.disabled = true;
			turnoComputadora(
				puntosJugadores,
				puntosHTML,
				deck,
				divCartasJugadores
			);
		} else if (puntosJugador === 21) {
			// console.warn('¡21, Genial 🥳');
			btnPedir.disabled = true;
			btnDetener.disabled = true;
			turnoComputadora(
				puntosJugadores,
				puntosHTML,
				deck,
				divCartasJugadores
			);
		}
	});

	btnDetener.addEventListener('click', () => {
		btnPedir.disabled = true;
		btnDetener.disabled = true;
		turnoComputadora(puntosJugadores, puntosHTML, deck, divCartasJugadores);
	});

	btnNuevo.addEventListener('click', () => {
		inicializarJuego();
		btnDetener.disabled = true;
		console.clear();
		agarradas = 0;
	});

	return {
		nuevoJuego: inicializarJuego,
	};
})();
