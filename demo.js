// Demo penggunaan fungsi-fungsi yang telah dibuat
const { hitungTotalHargaLama, hitungTotalHarga } = require("./14.template");
const tambah = require("./math.template");
const validasiEmail = require("./email.template");

console.log("=== DEMO REFACTORING DAN PENGUJIAN PERANGKAT LUNAK ===\n");

// Demo 1: Perbandingan fungsi sebelum dan sesudah refactoring
console.log("1. DEMO REFACTORING FUNGSI HITUNG TOTAL HARGA");
const contohBarang = [
    { harga: 10000, jumlah: 2 },
    { harga: 5000, jumlah: 3 },
    { harga: 7500, jumlah: 1 }
];

console.log("Data barang:", contohBarang);

const waktuMulaiLama = Date.now();
const hasilLama = hitungTotalHargaLama(contohBarang);
const waktuSelesaiLama = Date.now();

const waktuMulaiBaru = Date.now();
const hasilBaru = hitungTotalHarga(contohBarang);
const waktuSelesaiBaru = Date.now();

console.log(`Hasil fungsi lama: Rp ${hasilLama.toLocaleString()} (${waktuSelesaiLama - waktuMulaiLama}ms)`);
console.log(`Hasil fungsi baru: Rp ${hasilBaru.toLocaleString()} (${waktuSelesaiBaru - waktuMulaiBaru}ms)`);
console.log(`Hasil sama: ${hasilLama === hasilBaru ? '✅' : '❌'}\n`);

// Demo 2: Fungsi matematika
console.log("2. DEMO FUNGSI MATEMATIKA");
console.log(`2 + 3 = ${tambah(2, 3)}`);
console.log(`-5 + 10 = ${tambah(-5, 10)}`);
console.log(`2.5 + 3.7 = ${tambah(2.5, 3.7)}\n`);

// Demo 3: Validasi email
console.log("3. DEMO VALIDASI EMAIL");
const emailTest = [
    "user@example.com",
    "test.email@domain.co.id",
    "userexample.com",
    "user@",
    "@domain.com",
    "user @domain.com",
    ""
];

emailTest.forEach(email => {
    const isValid = validasiEmail(email);
    console.log(`${email || '(kosong)'}: ${isValid ? '✅ Valid' : '❌ Tidak Valid'}`);
});

console.log("\n=== DEMO SELESAI ===");
console.log("Jalankan 'npm test' untuk melihat hasil pengujian unit!");
