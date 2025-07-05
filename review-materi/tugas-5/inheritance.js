// Kelas induk (parent class)
class Kendaraan {
    constructor(merek, tahun) {
        this.merek = merek;
        this.tahun = tahun;
    }

    // Method pada kelas induk
    info() {
        return `Kendaraan ${this.merek} tahun ${this.tahun}`;
    }

    klakson() {
        return "Beeep!";
    }
}

// Kelas turunan (child class) - Mobil mewarisi sifat dari Kendaraan
class Mobil extends Kendaraan {
    constructor(merek, tahun, tipe) {
        // Memanggil constructor dari kelas induk
        super(merek, tahun);
        this.tipe = tipe;
    }

    // Method tambahan pada kelas turunan
    infoLengkap() {
        return `${this.info()}, tipe: ${this.tipe}`;
    }

    // Override method dari kelas induk
    klakson() {
        return "Tiiiiinn!";
    }
}

// Kelas turunan lainnya
class Motor extends Kendaraan {
    constructor(merek, tahun, cc) {
        super(merek, tahun);
        this.cc = cc;
    }

    infoLengkap() {
        return `${this.info()}, kapasitas mesin: ${this.cc} cc`;
    }

    klakson() {
        return "Tiiiit!";
    }
}

// Contoh penggunaan
const mobilSaya = new Mobil("Toyota Fortuner GR Tetra Drive", 2023, "SUV");
console.log(mobilSaya.infoLengkap()); // Output: Kendaraan Toyota Fortuner GR Tetra Drive tahun 2023, tipe: SUV
console.log(mobilSaya.klakson());     // Output: Tiiiiinn!

const motorSaya = new Motor("Honda CBR1000RR", 2004, 1000);
console.log(motorSaya.infoLengkap()); // Output: Kendaraan Honda CBR1000RR tahun 2004, kapasitas mesin: 1000 cc
console.log(motorSaya.klakson());     // Output: Tiiiit!