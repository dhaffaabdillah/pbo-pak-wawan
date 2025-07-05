class KendaraanInterface {
    constructor() {
        if (this.constructor === KendaraanInterface) {
            throw new Error("Class abstrak tidak bisa diinstansiasi langsung");
        }
    }
    
    maju() {
        throw new Error("Method 'maju()' harus diimplementasi");
    }
    
    berhenti() {
        throw new Error("Method 'berhenti()' harus diimplementasi");
    }
    
    isiBahanBakar() {
        throw new Error("Method 'isiBahanBakar()' harus diimplementasi");
    }
}

// Implementasi interface
class Mobil extends KendaraanInterface {
    constructor(merk, tahun) {
        super();
        this.merk = merk;
        this.tahun = tahun;
    }
    
    maju() {
        return `Mobil ${this.merk} melaju ke depan`;
    }
    
    berhenti() {
        return `Mobil ${this.merk} berhenti`;
    }
    
    isiBahanBakar() {
        return `Mengisi bensin untuk mobil ${this.merk}`;
    }
}

// Contoh penggunaan
const mobilSaya = new Mobil("Toyota", 2020);
console.log(mobilSaya.maju());
console.log(mobilSaya.berhenti());
console.log(mobilSaya.isiBahanBakar());

// Mencoba instansiasi interface (akan error)
try {
    const interface = new KendaraanInterface();
} catch (error) {
    console.log("Error:", error.message);
}