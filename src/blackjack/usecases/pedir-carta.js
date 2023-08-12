/**
 * Esta función pide una carta del deck
 * @param {Array<String>} deck Ejemplo: ['2C', '3D', '6H', 'AS'...,'JD']
 * @returns {Array<String>} elimina la última carta del deck y la muestra en pantalla
 */
export const pedirCarta = (deck) => {
	if (!deck || deck.length === 0) {
		throw 'No hay cartas en la baraja';
	}
	return deck.pop();
};
