const dict = {};
let n = 1;
let digitCount = 1;
let maxDigitCount = 100; // Change this value to generate more numbers

for (let i = 1; i <= maxDigitCount; i++) {
  let digitString = n.toString();
  if (digitString.length > digitCount) {
    digitCount++;
    n = 1;
    digitString = n.toString();
  }
  let realNum = '0.' + '0'.repeat(digitCount - digitString.length) + digitString.split('').map(d => String.fromCharCode(48 + parseInt(d))).join('');
  if (realNum.endsWith('0')) {
    digitString += '0';
    n++;
    i--;
    continue;
  }
  dict[i] = parseFloat(realNum);
  n++;
}

console.log(dict)
