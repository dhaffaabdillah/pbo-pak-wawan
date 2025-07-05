const tambah = require("./math.template");

describe("Pengujian Fungsi Matematika", () => {
    test("Menjumlahkan 2 + 3 harus menghasilkan 5", () => {
        expect(tambah(2, 3)).toBe(5);
    });

    test("Menjumlahkan bilangan negatif", () => {
        expect(tambah(-2, 3)).toBe(1);
        expect(tambah(-2, -3)).toBe(-5);
    });

    test("Menjumlahkan dengan nol", () => {
        expect(tambah(5, 0)).toBe(5);
        expect(tambah(0, 0)).toBe(0);
    });

    test("Menjumlahkan bilangan desimal", () => {
        expect(tambah(2.5, 3.7)).toBeCloseTo(6.2);
    });
});
