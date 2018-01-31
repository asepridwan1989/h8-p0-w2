/*
STORE 'nama' with any value
STORE 'peran' with any value

IF 'nama' equal ' '
  DISPLAY 'Nama harus diisi!'
ELSE IF 'peran' equal ' '
  DISPLAY 'Pilih peranmu untuk memulai game!'
ELSE IF 'peran' equal 'Ksatria'
  DISPLAY 'Selamat datang di Dunia Proxytia, ' 'nama'
  DISPLAY 'Halo ' 'peran' 'nama' ',kamu dapat menyerang dengan senjatamu!'
ELSE IF 'peran' equal 'Tabib'
  DISPLAY 'Selamat datang di Dunia Proxytia, ' 'nama'
  DISPLAY 'Halo ' 'peran' 'nama'' , kamu akan membantu temanmu yang terluka.'
ELSE IF 'peran' equal 'Penyihir'
  DISPLAY 'Selamat datang di Dunia Proxytia, ' 'nama'
  DISPLAY 'Halo ' 'peran' 'nama'' ciptakan keajaiban yang membantu kemenanganmu!'
*/





var nama = 'nina';
var peran = 'Penyihir';

if (nama === ''){
  console.log('Nama harus diisi!');
}else if(peran === ''){
  console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
}else if(peran === 'Ksatria'){
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Halo ' +peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!');
}else if(peran === 'Tabib'){
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Halo ' +peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka.');
}else if(peran === 'Penyihir'){
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Halo ' +peran  + ' '  + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
}
