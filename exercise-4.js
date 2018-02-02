var tanggal = 21; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 1; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1945; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

function tesKabisat(){
  var TahunBagi4 = (tahun %4);
  var TahunBagi100 = (tahun %100);
  var TahunBagi400 = (tahun %400);
  var kabisat;

  switch (true) {
  case (TahunBagi4 === 0 && TahunBagi100 !== 0):
  kabisat = true;
  break;
  case (TahunBagi4 === 0):
    switch(true){
      case (TahunBagi100 === 0 && TahunBagi400 === 0):
      kabisat = true;
      break;
    }break;
  default:
    kabisat = false
  }
  return kabisat;
}
//console.log(tesKabisat());

switch(true){
  case (tanggal < 1 || tanggal === undefined) :
    console.log('invalid input : tanggal tidak boleh kurang dari 1');
    break;
  case (tanggal > 31):
    console.log('invalid input : tanggal tidak boleh lebih dari 31');
    break;
  default:
    switch(true){
      case (bulan < 1 || bulan === undefined):
        console.log('invalid input : bulan tidak boleh kurang dari 1');
        break;
      case (bulan > 12):
        console.log('invalid input : bulan tidak boleh lebih dari 12');
        break;
      case (tanggal > 29 && bulan === 2):
        console.log('invalid input : Februari tidak memiliki tanggal lebih dari 29');
        break;
      case (tanggal === 31 && bulan === 4):
        console.log('invalid input : April tidak memiliki tanggal lebih dari 30');
        break;
      case (tanggal === 31 && bulan === 6):
        console.log('invalid input : Juni tidak memiliki tanggal lebih dari 30');
        break;
      case (tanggal === 31 && bulan === 9):
        console.log('invalid input : September tidak memiliki tanggal lebih dari 30');
        break;
      case (tanggal === 31 && bulan === 11):
        console.log('invalid input : November tidak memiliki tanggal lebih dari 30');
        break;
      default:
        switch(true){
          case (tahun < 1900 || tahun === undefined):
            console.log('tahun tidak boleh kurang dari 1900');
            break;
          case (tahun > 2200):
            console.log('invalid input : tahun tidak boleh lebih dari 2200');
            break;
          default:
            switch(bulan){
              case 1:
                console.log(tanggal + ' Januari ' + tahun);
                break;
              case 2:
//tes kabisat atau bukan-------------------------------------------------------------------------------------------------
                switch(true){
                  case(tesKabisat() === false && tanggal >=29):
                    console.log('invalid input : Februari bukan tahun kabisat tidak memiliki tanggal lebih dari 29');
                    break;
                  default:
                    console.log(tanggal + ' Februari ' + tahun);
                    break;
                }
                break;
//------------------------------------------------------------------------------------------------------------------------
              case 3:
                console.log(tanggal + ' Maret ' + tahun);
                break;
              case 4:
                console.log(tanggal + ' April ' + tahun);
                break;
              case 5:
                console.log(tanggal + ' Mei ' + tahun);
                break;
              case 6:
                console.log(tanggal + ' Juni ' + tahun);
                break;
              case 7:
                console.log(tanggal + ' Juli ' + tahun);
                break;
              case 8:
                console.log(tanggal + ' Agustus ' + tahun);
                break;
              case 9:
                console.log(tanggal + ' September ' + tahun);
                break;
              case 10:
                console.log(tanggal + ' Oktober ' + tahun);
                break;
              case 11:
                console.log(tanggal + ' November ' + tahun);
                break;
              case 12:
                console.log(tanggal + ' Desember ' + tahun);
                break;
            }
          break;
        }
        break;
    }
    break;
}
