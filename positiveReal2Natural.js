// Form a bijection between the reals and naturals starting from the reals
function real2Nat(r) {
  // split the real number into a pair
  let p = getPair(r)
  // map the pair to a natural
  return szudzikPair(p[0], p[1])
}

// Create a bijection between ordered pairs and naturals
function szudzikPair(x, y){
    return (x >= y ? (x * x) + x + y : (y * y) + x);
}

// seperate fractional/whole components from reals
// returns an array with two elements
function getPair(r) {
	let split = (r + "").split(".");
  let a = split[0], b = 0
  if (split.length > 1)
  	b = reverseString(split[1])
    
  return [Number(a),Number(b)]
}

// Given the string "abc" returns "cba"
function reverseString(str) {
    return str.split("").reverse().join("");
}

