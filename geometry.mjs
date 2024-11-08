
//import { sequence } from "./array.mjs";

const _TWO_PI = 2 * Math.PI;

class Point
	{
	/**
	 * @param {Number} x
	 * @param {Number} y
	 */
	constructor(x, y)
		{
		this.x = x;
		this.y = y;
		}

	toString()
		{
		return `(${this.x}, ${this.y})`;
		}
	}

//function clockwise(){}

/**
 * @param {Number} count
 * 
 * @returns {Function}
 */
function toRadian(count)
	{
	return x => _TWO_PI * x / count;
	}

/*
 * @param {Number} numberOfPoints
 * @param {Boolean} clockwise
 * 
 * @returns {Function}
 *
function toRadian(numberOfPoints, clockwise = true)
	{
	const DIRECTION = clockwise ? 1 : -1;

	return point => 2 * Math.PI * (point * DIRECTION) / numberOfPoints;
	}
*/

/**
 * @param {Number} r // radius // Pas sur radius (r de SVG)
 * 
 * @returns {Function}
 */
function toXY(r)
	{
	return angle =>
		{
		let x = r * Math.cos(angle);
		let y = r * Math.sin(angle);

		return {x: x, y: y};
		};
	}

/*
function polygon(count, r)
	{
	return sequence(count)    // Créer une suite 0, 1,... (sommets)
		.map(toRadian(count)) // Convertir en angle en radians
		.map(toXY(r));        // Convertir en coordonnées X, Y
	}
*/

const _Point = Point;

export
	{
	_Point as Point,
	toRadian,
	toXY,
	//polygon
	};
