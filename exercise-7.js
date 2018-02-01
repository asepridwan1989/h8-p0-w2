// Tugas Looping

console.log('No. 1 Menyusun barisan bintang');
var rows1 = '5';
var bintang = '';
while(rows1 > 0){
  bintang +='*';
  console.log(bintang);
  bintang ='';
  rows1--;
}

console.log('No. 2 Menyusun Barisan Bintang Dengan Nested Looping');
var rows2 = '5';
var inrows2 = rows2;
var bintang2 = '';

while(rows2 > 0){
  while(inrows2 > 0){
    bintang2 += '*';
    inrows2--;
  }
  console.log(bintang2);
  rows2--;
}

console.log('No. 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping');
var rows3 = '5';
var inrows3 = rows3;
var bintang3 = '';
while(rows3>0){
  while(inrows3>0){
    bintang3 += '*';
    console.log(bintang3);
    inrows3--;
  }
  rows3--;
}
