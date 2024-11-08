
const _KEY_AS_VALUE = (value, key) => key;

/**
 * Créer une série de nombre (suite 0, 1, 2,... pour l'instant).
 * 
 * @param {Number} count
 * 
 * @returns {Number[]}
 */
function sequence(count)
	{
	return Array.from({length: count}, _KEY_AS_VALUE);
	}

export
	{
	sequence
	};
