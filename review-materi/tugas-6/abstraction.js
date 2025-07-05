
class KendaraanAbstrak {
    constructor() {
        // Memastikan kelas ini tidak dapat diinstansiasi secara langsung
        if (new.target === KendaraanAbstrak) {
            throw new Error("Kelas abstrak tidak dapat diinstansiasi langsung");
        }
    }

    // Metode abstrak - harus diimplementasikan oleh kelas turunan
    bergerak() {
        throw new Error("Metode abstrak bergerak() harus diimplementasikan");
    }

    berhenti() {
        throw new Error("Metode abstrak berhenti() harus diimplementasikan");
    }

    // Metode konkrit yang dapat digunakan oleh semua kelas turunan
    klakson() {
        console.log("Beep! Beep!");
    }
}

// Kelas turunan yang mengimplementasikan metode abstrak
class Mobil extends KendaraanAbstrak {
    constructor(merk) {
        super();
        this.merk = merk;
    }

    bergerak() {
        console.log(`Mobil ${this.merk} bergerak dengan roda`);
    }

    berhenti() {
        console.log(`Mobil ${this.merk} berhenti dengan rem`);
    }
}

class Pesawat extends KendaraanAbstrak {
    constructor(jenis) {
        super();
        this.jenis = jenis;
    }

    bergerak() {
        console.log(`Pesawat ${this.jenis} terbang di udara`);
    }

    berhenti() {
        console.log(`Pesawat ${this.jenis} mendarat di landasan`);
    }
}

// Penggunaan
try {
    // Ini akan error karena kelas abstrak tidak dapat diinstansiasi
    const kendaraan = new KendaraanAbstrak();
} catch (error) {
    console.log("Error:", error.message);
}

const mobilSaya = new Mobil("Toyota");
mobilSaya.bergerak(); // Output: Mobil Toyota bergerak dengan roda
mobilSaya.berhenti(); // Output: Mobil Toyota berhenti dengan rem
mobilSaya.klakson();  // Output: Beep! Beep!

const pesawatSaya = new Pesawat("Boeing");
pesawatSaya.bergerak(); // Output: Pesawat Boeing terbang di udara
pesawatSaya.berhenti(); // Output: Pesawat Boeing mendarat di landasan
pesawatSaya.klakson();  // Output: Beep! Beep!