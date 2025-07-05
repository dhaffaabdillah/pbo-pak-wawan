// Contoh Polimorfisme dalam JavaScript (ES6) dengan Bahasa Indonesia

// Kelas induk (parent class)
class Bentuk {
    constructor() {
        if (this.constructor === Bentuk) {
            throw new Error("Kelas abstrak tidak bisa diinstansiasi langsung");
        }
    }

    // Metode yang akan di-override oleh kelas turunan
    hitungLuas() {
        throw new Error("Metode hitungLuas() harus diimplementasi");
    }

    tampilInfo() {
        return `Luas bentuk ini adalah ${this.hitungLuas()} satuan persegi`;
    }
}

// Kelas turunan (child class)
class Lingkaran extends Bentuk {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    // Override metode hitungLuas
    hitungLuas() {
        return Math.PI * this.radius * this.radius;
    }

    // Tambahan metode khusus untuk Lingkaran
    hitungKeliling() {
        return 2 * Math.PI * this.radius;
    }
}

// Kelas turunan lainnya
class PersegiPanjang extends Bentuk {
    constructor(panjang, lebar) {
        super();
        this.panjang = panjang;
        this.lebar = lebar;
    }

    // Override metode hitungLuas
    hitungLuas() {
        return this.panjang * this.lebar;
    }
}

class Segitiga extends Bentuk {
    constructor(alas, tinggi) {
        super();
        this.alas = alas;
        this.tinggi = tinggi;
    }

    // Override metode hitungLuas
    hitungLuas() {
        return 0.5 * this.alas * this.tinggi;
    }
}

// Fungsi yang mendemonstrasikan polimorfisme
function tampilkanLuas(bentuk) {
    if (bentuk instanceof Bentuk) {
        console.log(bentuk.tampilInfo());
    } else {
        console.log("Parameter bukan instansi dari kelas Bentuk");
    }
}

// Penggunaan
const lingkaran = new Lingkaran(7);
const persegiPanjang = new PersegiPanjang(4, 6);
const segitiga = new Segitiga(5, 8);

tampilkanLuas(lingkaran); // Memanggil metode hitungLuas() dari kelas Lingkaran
tampilkanLuas(persegiPanjang); // Memanggil metode hitungLuas() dari kelas PersegiPanjang
tampilkanLuas(segitiga); // Memanggil metode hitungLuas() dari kelas Segitiga

console.log(`Keliling lingkaran: ${lingkaran.hitungKeliling()} satuan`);

// Contoh array dengan elemen berbagai bentuk (polimorfisme dalam struktur data)
const arrBentuk = [lingkaran, persegiPanjang, segitiga];
console.log("\nMenampilkan luas semua bentuk dalam array:");
arrBentuk.forEach((bentuk, index) => {
    console.log(`Bentuk ke-${index + 1}: ${bentuk.tampilInfo()}`);
});