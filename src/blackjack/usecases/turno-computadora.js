import { acumularPuntos } from './';
import { crearCarta } from './';
import { determinarGanador } from './';
import { pedirCarta } from './';

/**
 * Turno automatizado de la computadora | Como es la última jugada, cuando finaliza se indica el resultado
 * @param {Array<number>} puntosJugadores: Array con el puntaje de los jugadores
 * @param {HTMLElement} puntosHTML :elementos HTML para los puntajes
 * @param {Array<String>} deck :Mazo de cartas
 * @param {HTMLImage} divCartasJugadores :elemento HTML de la carta
 */
export const turnoComputadora = async (
	puntosJugadores,
	puntosHTML,
	deck,
	divCartasJugadores
) => {
	if (!puntosJugadores) throw new Error('puntosJugadores son necesarios');
	if (!deck) throw new Error('El deck es necesario');
	if (!puntosHTML) throw new Error('puntosHTML es necesario');

	let puntosComputadora = 0;
	let contador = 0;

	do {
		const carta = pedirCarta(deck);
		puntosComputadora = acumularPuntos(
			carta,
			puntosJugadores.length - 1,
			puntosJugadores,
			puntosHTML
		);
		crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);
		await sleep(350);
		contador++;
	} while (
		puntosComputadora < puntosJugadores[0] &&
		puntosJugadores[0] <= 21
	);

	let resultado = determinarGanador(puntosJugadores);
	alert(resultado);
};

/**
 * Función para que las cartas se repartan de a una
 * @param {Number} ms: cantidad en milisegundos en mostrar la carta
 * @returns {Promise}
 */
const sleep = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};
