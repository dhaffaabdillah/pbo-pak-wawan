/**
 * Contoh penerapan modifier access di JavaScript (ES6)
 * - Public: Dapat diakses dari mana saja (default)
 * - Private: Hanya dapat diakses dari dalam kelas (menggunakan #)
 * - Protected: Konsep ini diimplementasi dengan konvensi (_underscore)
 */

// Kelas utama
class Kendaraan {
    // Public property (dapat diakses dari mana saja)
    jenis;
    
    // Private property (hanya dapat diakses di dalam kelas)
    #nomorRangka;
    
    // Protected property (konvensi, sebenarnya masih public)
    _maxKecepatan;
    
    constructor(jenis, nomorRangka, maxKecepatan) {
        this.jenis = jenis;
        this.#nomorRangka = nomorRangka;
        this._maxKecepatan = maxKecepatan;
    }
    
    // Public method
    infoKendaraan() {
        return `Kendaraan ${this.jenis}`;
    }
    
    // Private method
    #validasiNomorRangka() {
        return this.#nomorRangka.length > 5;
    }
    
    // Method yang mengakses private property/method
    cekKeaslian() {
        return this.#validasiNomorRangka() ? 'Kendaraan asli' : 'Kendaraan tidak terverifikasi';
    }
    
    // Protected method (konvensi)
    _hitungPerforma() {
        return this._maxKecepatan * 0.8;
    }
}

// Kelas turunan
class Mobil extends Kendaraan {
    constructor(merk, nomorRangka, maxKecepatan) {
        super('Mobil', nomorRangka, maxKecepatan);
        this.merk = merk;
    }
    
    // Menggunakan protected method dari parent class
    infoPerforma() {
        const performa = this._hitungPerforma();
        return `${this.merk} memiliki performa ${performa} km/jam`;
    }
    
    // Tidak bisa mengakses private property/method parent
    // Error jika uncomment: cekNomorRangka() {
    //   return this.#nomorRangka;
    // }
}

// Demo penggunaan
const motorBaru = new Kendaraan('Motor', 'MH123456', 120);
console.log(motorBaru.infoKendaraan()); // Public method: dapat diakses
console.log(motorBaru.cekKeaslian()); // Memanggil method yang mengakses private members
// console.log(motorBaru.#nomorRangka); // Error: private property tidak dapat diakses dari luar
console.log(motorBaru.jenis); // Public: dapat diakses

const mobilBaru = new Mobil('Toyota', 'TY789012', 200);
console.log(mobilBaru.infoKendaraan()); // Method dari parent class
console.log(mobilBaru.infoPerforma()); // Menggunakan protected method parent