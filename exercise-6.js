// tugas LOOPING
// No. 1 Melakukan Looping Menggunakan While-------------
console.log('No. 1 Melakukan Looping Menggunakan While');
console.log('LOOPING PERTAMA');
var counter = 2;
while(counter <= 20){
  console.log(counter + ' - I love coding');
  counter = counter + 2;
}
console.log('LOOPING KEDUA');
var counter = 20;
while(counter > 0){
  console.log(counter + ' - I will become fullstack developer');
  counter = counter - 2;
}

console.log('________________________________________________');

// No. 2 Melakukan Looping Menggunakan For---------------
console.log('No. 2 Melakukan Looping Menggunakan For');
console.log('LOOPING PERTAMA');
for(var i = 1; i < 21; i++){
  console.log(i + ' - I love coding');
}
console.log('LOOPING KEDUA');
for(var j = 20; j > 0; j--){
  console.log(j + ' - I will become fullstack developer');
}
console.log('________________________________________________');

// No. 3 Angka Ganjil dan Genap
console.log('No. 3 Angka Ganjil dan Genap');
console.log('------------Angka Ganjil Genap---------');
var counter = 1;
while(counter <=100){
  if(counter %2 ===1){
    console.log(counter + ' GANJIL');
  }else{
    console.log(counter + ' GENAP');
  }
  counter ++;
}
console.log('------------Kelipatan Tiga---------');
var counter2 = 1;
while(counter2 <=100){
  if(counter2 %3 ===0){
    console.log(counter2 + ' KELIPATAN 3');
  }else{
    console.log('');
  }
  counter2 = counter2 + 2;
}
console.log('------------Kelipatan Enam---------');
var counter3 = 1;
while(counter3 <=100){
  if(counter3 %6 ===0){
    console.log(counter3 + ' KELIPATAN 6');
  }else{
    console.log('');
  }
  counter3 = counter3 + 5;
}
console.log('------------Kelipatan Sepuluh---------');
var counter4 = 1;
while(counter4 <=100){
  if(counter4 %10 ===0){
    console.log(counter4 + ' KELIPATAN 10');
  }else{
    console.log('');
  }
  counter4 = counter4 + 9;
}
