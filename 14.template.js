// Kode sebelum refactoring
function hitungTotalHargaLama(barang) {
    let total = 0;
    for (let i = 0; i < barang.length; i++) {
        total += barang[i].harga * barang[i].jumlah;
    }
    return total;
}

// Kode setelah refactoring dengan higher-order function (reduce)
function hitungTotalHarga(barang) {
    return barang.reduce((total, item) => total + item.harga * item.jumlah, 0);
}

module.exports = { hitungTotalHargaLama, hitungTotalHarga };
