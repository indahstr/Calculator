//membaca inputan angka dari user
function baca(angka){
    document.form.textarea.value = document.form.textarea.value + angka;
}

//menghitung hasil operasi
function hitung(){
    var hasil = document.form.textarea.value;
    document.form.textarea.value = eval(hasil);
}

//membersihkan semua isi yang ada di textarea
function clean(){
    document.form.textarea.value = "";
}

//menghapus satu per satu string yang ada di textarea
function back(){
    var hasil = document.form.textarea.value;
    document.form.textarea.value = hasil.substring(0,hasil.length-1);
}

//menghitung ketika tombol Enter ditekan
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Mencegah aksi default tombol Enter, yaitu mencegah pengiriman form ke server
        hitung(); // Memanggil fungsi hitung()
    }
});