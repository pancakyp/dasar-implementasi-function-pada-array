var penumpang = ['panca', 'krisna'];
var tambahPenumpang = function(namaPenumpang, penumpang){
	// jika angkot kosong
	if (penumpang.length == 0){
		//tambah penumpang diawal array
		penumpang.push(namaPenumpang)
		//kembalikan isi array dan keluar dari function
		return penumpang;
	} else {
		// telusuri seluruh kursi dari awal
		for ( i = 0; i < penumpang.length; i++){
			// kalau ada kursi yang kosong
			if ( penumpang[i] == undefined) {
				//tambah penumpang di kursi tersebut
				penumpang[i] = namaPenumpang
				// kembalikan isi array dan keluar dari function
				return penumpang;
			}
			//jika sudah ada nama yang sama
			else if (penumpang[i] == namaPenumpang){
				//tampilkan pesan kesalahannya
			console.log(namaPenumpang + ' sudah ada di dalam angkot')
			// kembalikan isi array dan keluar dari function
			return penumpang;
			//jika seluruh kursi terisi
			}
			else if( i == penumpang.length - 1) {
				//tambah penumpang diakhir array
				penumpang.push(namaPenumpang);
				// kembalikan isi array dan keluar dari function
				return penumpang;
			}
		}
	}

}

var hapusPenumpang = function(namaPenumpang, penumpang) {
	// jika angkot kosong
	if ( penumpang.length == 0 ) {
		//tampilkan pesan bahwa angkot kosong dan tidak mungkin ada penumpang turun
		console.log(' angkot kosong dan tidak mungkin ada penumpang turun')
		//kembalikan isi array dan keluar dari function
		return penumpang;
	} else {
		//telusuri kursi dari awal
		for ( i = 0; i < penumpang.length; i++){
		//jika nama penumpang sesuai
			if ( penumpang[i] == namaPenumpang ) {
				//hapus penumpang dengan mengubah namanya menjadi undefined
				 penumpang[i] = undefined;
				//kembalikan isi array dan keluar dari function
				return penumpang;
			} else if ( i == penumpang.length - 1) {
				console.log(namaPenumpang + ' tidak ada di dalam angkot')
				//kembalikan isi array dan keluar dari function
				return penumpang;
			}
		}
	}
}
