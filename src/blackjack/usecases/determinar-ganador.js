/**
 * @param {Array<Number>} puntosJugadores :Array con los puntos de los jugadores | jugador1 -> 0 y pc -> úlitmo
 * @return {String} resultado: String con los posibles resultados
 */

export const determinarGanador = (puntosJugadores) => {
	const [puntosJugador, puntosComputadora] = puntosJugadores;

	let resultado;

	if (puntosComputadora === puntosJugador) {
		resultado = 'Nadie gana 😒';
	} else if (puntosJugador > 21) {
		resultado = 'Computadora gana 🥺';
	} else if (puntosComputadora > 21) {
		resultado = 'Jugador gana 🥳';
	} else {
		resultado = 'Computadora gana 🥺';
	}
	return resultado;
};
