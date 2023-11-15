const prompt = require('prompt-sync')();

let score = 0;
let jawaban_benar = 0;
let jawaban_salah = 0;
let point_per_soal = 3;

let soal = [
    {
        "q": "Yang merupakan member JKT 48?",
        "o": [
            'Jokowi',
            'Freya',
            'Nadin Amizah',
            'Igun Mama Takut',
        ],
        "a": 1 
    },
    {
        "q": "Nama kakak Upin dan Ipin adalah...",
        "o": [
            'Kak Rose',
            'Kak Jeane',
            'Monkey D. Luffy',
            'Igun Mama Takut',
        ],
        "a": 0 
    },
    {
        "q": "Siswa Sistem Informasi di Pagi 3 adalah...",
        "o": [
            "Babon",
            "Lala",
            "Ica",
            "Trisna",
        ],
        "a": 3
    },
    {
        "q": "Apa Warna Langit Saat ini ?",
        "o": [
            "Biru",
            "Abu-Abu",
            "Pink",
            "Orange",
        ],
        "a": 0
    },
    {
        "q": "Apa Mata Kuliah Pagi ini ?",
        "o": [
            "KBD",
            "PTI",
            "DDP",
            "Pancasila",
        ],
        "a": 2
    }
    // Tambahkan 3 soal lainnya 
]

let nama = prompt('Input nama: ');
for (let u = 0; u < soal.length; u++){
    console.log ("\nSoal ", (u + 1), ":", soal[u].q);
    for (let j = 0; j < soal[u].o.length; j++) {
        console.log (j + 1 + "." + soal[u].o[j]);
    };

let jawaban = prompt ("Jawab : ");
    if (jawaban == soal[u].a + 1){
        score += point_per_soal;
        jawaban_benar++;
    } else {
        jawaban_salah++;
    }
};
// Lengkapi code program yang belum selesai

console.log("Kuis selesai")
console.log("\n")
console.log("Statistic Kuis")
console.log('Nama\t\t:',nama)
console.log('Score\t\t:',score)
console.log('Jawaban benar\t:',jawaban_benar)
console.log('Jawaban salah\t:',jawaban_salah)



