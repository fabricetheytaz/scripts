
class Direction
	{
	/**
	 * @param {Number} q
	 * @param {Number} r
	 */
	constructor(q, r)
		{
		this.q = q;
		this.r = r;
		}

	neighbor()
		{
		let neighbor = [];

		_DIRECTIONS.forEach(direction =>
			{
			neighbor.push(new Direction(this.q + direction.q, this.r + direction.r));
			});

		return neighbor;
		}

	toString()
		{
		return `(${this.q}, ${this.r})`;
		}

	static getRandom()
		{
		return _DIRECTIONS[Math.floor(Math.random() * _DIRECTIONS.length)];
		}
	}

const _A = new Direction(1, 0);
const _B = new Direction(1, -1);
const _C = new Direction(0, -1);
const _D = new Direction(-1, 0);
const _E = new Direction(-1, 1);
const _F = new Direction(0, 1);

/*
const _DIRECTIONS =
	[
	{q: 1, r: 0},
	{q: 1, r: -1},
	{q: 0, r: -1},
	{q: -1, r: 0},
	{q: -1, r: 1},
	{q: 0, r: 1}
	];
*/

const _DIRECTIONS = [_A, _B, _C, _D, _E, _F];

/*
function random(maximum)
	{
	return Math.floor(Math.random() * maximum);
	}

function getRandomDirection()
	{
	return _DIRECTIONS[random(_DIRECTIONS.length)];
	}
*/

const _Direction = Direction;

export
	{
	_Direction as Direction
	};
