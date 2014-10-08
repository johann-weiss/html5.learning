// js
var points =[
				{x: 0, y: 0},
				{x: 4, y: 3}
			];


points.dist = function (){

	var p1 = points[0];
	var p2 = points[1];
	
	var a = p2.x - p1.x;
	var b = p2.y - p1.y;
	
	return Math.sqrt(a*a + b*b);	
	
}
