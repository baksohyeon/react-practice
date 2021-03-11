//문제:https://www.acmicpc.net/problem/1357

function rev(num){
	return stringReverse(
		num.split(" ")
			.map((elem) =>(stringReverse(elem)))
			.reduce((acc, cur) => (acc += parseInt(cur)), 0)
			.toString()
	)
}

function stringReverse(toReverse){
	return toReverse.split("").reverse().join("")
}

console.log(rev("102 34")) //442
