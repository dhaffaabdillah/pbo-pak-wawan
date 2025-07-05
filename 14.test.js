const { hitungTotalHargaLama, hitungTotalHarga } = require("./14.template");

describe("Pengujian Fungsi Hitung Total Harga", () => {
    const contohBarang = [
        { harga: 10000, jumlah: 2 },
        { harga: 5000, jumlah: 3 },
        { harga: 7500, jumlah: 1 }
    ];

    test("Fungsi lama dan baru harus menghasilkan hasil yang sama", () => {
        const hasilLama = hitungTotalHargaLama(contohBarang);
        const hasilBaru = hitungTotalHarga(contohBarang);
        expect(hasilLama).toBe(hasilBaru);
    });

    test("Hitung total harga dengan benar", () => {
        // 10000*2 + 5000*3 + 7500*1 = 20000 + 15000 + 7500 = 42500
        expect(hitungTotalHarga(contohBarang)).toBe(42500);
    });

    test("Hitung total harga untuk array kosong", () => {
        expect(hitungTotalHarga([])).toBe(0);
    });

    test("Hitung total harga untuk satu item", () => {
        const satuItem = [{ harga: 15000, jumlah: 2 }];
        expect(hitungTotalHarga(satuItem)).toBe(30000);
    });
});
