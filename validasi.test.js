const validasiEmail = require("./email.template");

describe("Pengujian Validasi Email", () => {
    test("Email valid harus dikembalikan sebagai true", () => {
        expect(validasiEmail("user@example.com")).toBe(true);
        expect(validasiEmail("test.email@domain.co.id")).toBe(true);
        expect(validasiEmail("admin@company.org")).toBe(true);
    });

    test("Email tanpa @ harus dikembalikan sebagai false", () => {
        expect(validasiEmail("userexample.com")).toBe(false);
    });

    test("Email tanpa domain harus dikembalikan sebagai false", () => {
        expect(validasiEmail("user@")).toBe(false);
    });

    test("Email tanpa username harus dikembalikan sebagai false", () => {
        expect(validasiEmail("@domain.com")).toBe(false);
    });

    test("Email dengan spasi harus dikembalikan sebagai false", () => {
        expect(validasiEmail("user @domain.com")).toBe(false);
        expect(validasiEmail("user@domain .com")).toBe(false);
    });

    test("String kosong harus dikembalikan sebagai false", () => {
        expect(validasiEmail("")).toBe(false);
    });
});
