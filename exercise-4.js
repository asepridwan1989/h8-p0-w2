var tanggal = 21; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 4; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 2013; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
switch(true){
  case (tanggal < 1 || tanggal === undefined) :
    console.log('tanggal tidak boleh kurang dari 1');
    break;
  case (tanggal > 31):
    console.log('tanggal tidak boleh lebih dari 31');
    break;
  default:
    switch(true){
      case (bulan < 1 || bulan === undefined):
        console.log('bulan tidak boleh kurang dari 1');
        break;
      case (bulan > 12):
        console.log('bulan tidak boleh lebih dari 12');
        break;
      case (tanggal > 29 && bulan === 2):
        console.log('Februari tidak memiliki tanggal lebih dari 28');
        break;
      case (tanggal === 31 && bulan === 4):
        console.log('April tidak memiliki tanggal lebih dari 30');
        break;
      case (tanggal === 31 && bulan === 6):
        console.log('Juni tidak memiliki tanggal lebih dari 30');
        break;
      case (tanggal === 31 && bulan === 9):
        console.log('September tidak memiliki tanggal lebih dari 30');
        break;
      case (tanggal === 31 && bulan === 11):
        console.log('November tidak memiliki tanggal lebih dari 30');
        break;
      default:
        switch(true){
          case (tahun < 1900 || tahun === undefined):
            console.log('tahun tidak boleh kurang dari 1900');
            break;
          case (tahun > 2200):
            console.log('tahun tidak boleh lebih dari 2200');
            break;
          default:
            switch(bulan){
              case 1:
                console.log(tanggal + ' Januari ' + tahun);
                break;
              case 2:
                console.log(tanggal + ' Februari ' + tahun);
                break;
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
