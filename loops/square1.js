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
let inc2	= 1;		`increments cnt2 by +1 or -1`;
let cnt		= 0;		`the counter`;
let cnt2	= 0;
let row		= " ".repeat(WIDTH);



setInterval(function(){
	row = MARGINLEFT;
	if (cnt  >= (MAX)) inc = -1;
	if (cnt  <= (MIN)) inc =  1;

	if (cnt === MAX || cnt === MIN) row += " ".repeat(cnt2) + "*".repeat(WIDTH-1-cnt2*2) + " ".repeat(cnt2);
	if (cnt < MAX && cnt > MIN)	row += " ".repeat(cnt2) + "*" + " ".repeat(WIDTH-2-cnt2*2) + "*";

	if (cnt ===  MAX || cnt ===  MIN) {
		if (cnt2 >= MAX-1) inc2 = -1;
		if (cnt2 <= MIN+1) inc2 =  1;
		cnt2 += inc2;
	}
	console.log(row);
	cnt 	+= inc;
},FRAMERATE);



`
****
****
****
****
`;
`

 **
 **

`;
