console.log('-------------tugas hitung xo----------');

function xo(str) {
  // you can only write your code here!
  var countX = 0;
  var countO = 0;
  for(var i = str.length-1; i>=0; i--){
    if (str[i] === 'x'){
      countX++;
    }else if (str[i] === 'o'){
      countO++;
    }
  }
  if (countX !== countO){
    return false;
  }else{
    return true;
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
