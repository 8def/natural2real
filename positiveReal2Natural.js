// Form a bijection between the reals and naturals starting from the reals
function real2Nat(r) {
  // split the real number into a pair
  let p = getPair(r);
  // map the pair to a natural
  return rosenbloomTsfasmanPair(p[0], p[1]);
}

// Form a bijection between the naturals and reals starting from the naturals
function nat2Real(n) {
  // map the natural to a pair
  let p = rosenbloomTsfasmanInverse(n);
  // combine the pair into a real number
  return Number(p.join("."));
}

// Create an inverse of Rosenbloom-Tsfasman pairing function from naturals to pairs
function rosenbloomTsfasmanInverse(n) {
  let w = Math.floor((Math.sqrt(8 * n + 1) - 1) / 2);
  let t = (w * w + w) / 2;
  let y = n - t;
  let x = w - y;
  return [x, y];
}

// Create a pairing function from pairs to naturals
function rosenbloomTsfasmanPair(x, y) {
  let w = x + y;
  let t = (w * w + w) / 2;
  return t + y;
}

// separate fractional/whole components from reals
// returns an array with two elements
function getPair(r) {
  let split = (r + "").split(".");
  let a = Number(split[0]), b = 0;
  if (split.length > 1) {
    b = Number(reverseString(split[1]));
  }
  return [a, b];
}

// Given the string "abc" returns "cba"
function reverseString(str) {
  return str.split("").reverse().join("");
}



console.log(nat2Real(1))    // 1
console.log(nat2Real(2))    // 0.1
console.log(nat2Real(3))    // 1.1
console.log(nat2Real(4))    // 2
console.log(nat2Real(5))    // 2.1
console.log(nat2Real(6))    // 0.2
console.log(nat2Real(7))    // 1.2
console.log(nat2Real(8))    // 2.2
console.log(nat2Real(9))    // 3

console.log("======================================")

console.log(real2Nat(1))    // 1
console.log(real2Nat(0.1))  // 2
console.log(real2Nat(2))    // 3
console.log(real2Nat(1.1))  // 4
console.log(real2Nat(0.2))  // 5
console.log(real2Nat(3))    // 6
console.log(real2Nat(2.1))  // 7
console.log(real2Nat(1.2))  // 8
console.log(real2Nat(0.3))  // 9
