// Form a bijection between the reals and naturals starting from the reals
function real2Nat(r) {
	// split the real number into a pair and a sign
  let p = getPair(r)
  // map negatives to evens
  if (r < 0)
  	return negMap(p)
  // map positives to odds  
  if (p[0]+p[1]%2 !== 0)
  	return posOddMap(p)
    
  return posEvenMap(p)
}

// Cantor's pairing function for negatives
function negMap(p) {
  return 2*(p[0] + p[1])**2 + p[1];
}
// Cantor's pairing function for odd positives
function posOddMap(p) {
	return 2*(p[0] + p[1])**2 + p[0] + p[1] - 1
}
// Cantor's pairing function for even positives
function posEvenMap(p) {
	return 2*(p[0] + p[1])**2 + p[0] + p[1] + 1
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

