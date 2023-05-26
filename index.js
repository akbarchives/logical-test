// Soal A
// Urutkan array berikut [12,9,30,”A”,”M”,99,82,”J”,”N”,”B”] dengan urutan abjad
// di depan dan angka di belakang,
// contoh [“A”, “B”,”J”, “M”, “N”, 9, 12, 30, 82, 99]

const array = [12, 9, 30, 'A', 'M', 99, 82, 'J', 'N', 'B'];

// sorting biasa
function sortingArray(array) {
  let length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (array[i] < array[j]) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
  return array;
}

// sorting string dan number
function sortingMixedArray(array) {
  let tempString = [];
  let tempNumber = [];
  for (let i in array) {
    if (typeof array[i] == 'string') {
      tempString.push(array[i]);
    } else if (typeof array[i] == 'number') {
      tempNumber.push(array[i]);
    }
  }
  return [...sortingArray(tempString), ...sortingArray(tempNumber)];
}

// sebelum
console.log('Soal A:');
console.log('sebelum');
console.log(array);
// hasil
console.log('sesudah');
console.log(sortingMixedArray(array));
console.log('--------------------------------------------');

// Soal B
// Silakan tulis kode yang mengandung setidaknya satu fungsi/metode utama
// yang disebut pattern_count yang menerima dua string atau dua array karakter
// dengan panjang antara 0 dan 100 karakter. Pertama parameter adalah teks
// dan parameter kedua adalah pattern. Fungsi ini akan mengembalikan angka
// bagaimana banyak pola ada di dalam teks. Asumsikan parameter input selalu
// tidak nol. Solusi Anda tidak boleh menggunakan fungsi pembantu yang telah
// ditentukan sebelumnya seperti substr_count di PHP atau panjang
// kecocokan regex dalam JavaScript.
// Contoh:
// a. Input: “palindrom”, “ind”       d. Input: “ababab”, “aba”
//  Output : 1                         Output : 2
// b. Input: “abakadabra”, “ab”       e. Input: “aaaaaa”, “aa”
//  Output : 2                         Output : 5
// c. Input: “hello”, “”              f. Input: “hell”, “hello”
//  Output : 0                          Output: 0

let words1 = 'abrakadabra';
let pattern1 = 'ab';

function pattern_count(teks, pattern) {
  let found = 0;
  if (pattern == '') {
    return found;
  } else {
    for (let x = 0; x <= teks.length - pattern.length; x++) {
      let text = '';
      // let text = teks[x] + teks[x + 1] + teks[x + 2];
      for (let y = 0; y <= pattern.length - 1; y++) {
        text += teks[x + y];
        //   console.log(y);
      }
      if (text == pattern) {
        found++;
        // console.log(x, text, 'sama');
      }
    }
  }
  return found;
}

console.log('Soal B:');
console.log('kata :', words1);
console.log('pattern :', pattern1);
// console.log(kata);
console.log(pattern_count(words1, pattern1));
console.log('--------------------------------------------');

// Soal C
// Buat fungsi yang menghitung banyak nya huruf yang user masukan dalam 1x
// inputan dan urutkan hasil akhir sesuai abjad, Perhatikan huruf kapital, jika
// terdapat abjad yang sama namun dalam kapital maka pisah huruf tersebut,
// contoh :
// a.  Input : “Hello World”
//     Output : [“d”:1, “e”:1, “H”:1, “l”: 3, “o”:2, “r”:1, “W”:1]
// b.  Input : “Bismillah”
//     Output: [“a”:1,”B”:1,”h”:1,”i”:2,”l”:2, “m”:1, “s”:1]c. Input: “MasyaAllah”
//     Output: [“A”:1, “a”:3, “h”:1,”l”:2, “M”:1, “s”:1, “y”:1]

function transformArray(arr) {
  const result = [];
  const counts = {};

  for (let i = 0; i < arr.length; i++) {
    const letter = arr[i];

    if (counts[letter]) {
      counts[letter]++;
    } else {
      counts[letter] = 1;
    }
  }

  for (const letter in counts) {
    result.push({ nama: letter, jml: counts[letter] });
  }

  return result;
}

function countLetters(input) {
  let temp = [];
  //   menjadikan input ke array
  for (let i = 0; i < input.length; i++) {
    temp.push(input[i]);
  }

  //   melakukan sorting pada array
  temp = sortingArray(temp);

  return transformArray(temp);
}

console.log('SOAL C');
let input = 'Hello Worlds';
console.log('input', input);
console.log(countLetters(input));

console.log('--------------------------------------------');
