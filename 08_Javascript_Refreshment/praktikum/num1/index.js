// change var to let
let a = 5;
let b = "kampus merdeka";
const nama = "Budi";
// 1.b change the value from false to true, so the conditional will be fullfilled
let terdaftar = true;
// fix variable name to camelCase
let lengkapArr = [a, b, nama, terdaftar];


function perkenalan() {
    let asal = "indonesia";
    return console.log(
        `perkenalkan nama saya ${nama} nomor urut ${a} sekarang sedang mengikuti ${b} berasal dari ${asal}`
        );
    }
    
    if(terdaftar === true){
        console.log(`${nama} terdaftar sebagai kegiatan kampus merdeka`);
    }
    
    // 1.a get lengkapArr[2]
    let idx2 = lengkapArr[2];
    console.log(`array = ${idx2}`);

a = b;
// nama = b;

// console.log(`asal diakses = ${asal}`);
console.log(`a adalah = ${a}`);
console.log(`b adalah = ${b}`);
// 1.c call perkenalan()
perkenalan();
