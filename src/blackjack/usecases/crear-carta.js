/**
 * Crea e inserta la imágen de la carta en el espacio correspondiente al jugador
 * @param {String} carta : string de la carta Ej: 5H
 * @param {Number} turno : numero con turno de jugador | 0 = jugador 1 y el ultimo es el de la pc
 * @param {String <HTMLElement>} divCartasJugadores String con los elementos HTML de los puntajes de cada jugador
 * @returns {HTMLImageElement} imgCarta elementoHTML de la carta
 */
// Creamos una carta para mostrarla en el HTML
export const crearCarta = (carta, turno, divCartasJugadores) => {
	if (!carta) throw new Error('El parámetro carta es necesario');

	const imgCarta = document.createElement('img');
	imgCarta.src = `assets/cartas/${carta}.png`;
	imgCarta.classList.add('carta');
	divCartasJugadores[turno].append(imgCarta);

	return imgCarta;
};
