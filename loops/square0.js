`Create an alternating/contrasting loop with a square`;
`Have it loop/interval forever`;

const FRAMERATE = 1000/30;	`1000 ms / 10 intervals per second`;
const WIDTH	= 50;		`screen/boundary width  is 50 units`;
const HEIGHT	= WIDTH;	`screen/boundary height is 50 units`;
const CENTER	= WIDTH/2;	`screen/boundary center is 50 units / 2 = 25`;
const MIN	= 1;		`screen/boundary starting point`;
const MAX	= WIDTH / 2;	`screen/boundary edge of half, basically center`;
const MARGINLEFT= " ".repeat(20);




let inc 	= 1;		`increments cnt by +1 or -1`;
let cnt		= 0;		`the counter`;

let row		= " ".repeat(WIDTH);



setInterval(function(){

	if (cnt >= MAX) inc = -1;
	if (cnt <= MIN) inc =  1;

	if (inc === -1) {

		if (cnt === MIN || cnt === MAX) row = MARGINLEFT +  "*".repeat(WIDTH);
		if (cnt  >  MIN && cnt  <  MAX) row = MARGINLEFT +  "*" + " ".repeat(WIDTH-2) + "*";
	} else {
		row = MARGINLEFT + " " + "*".repeat(WIDTH-2) + " ";
	}
	console.log(row);
	cnt += inc;
},FRAMERATE);
