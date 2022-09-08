// added constructor
class Kendaraan {
    constructor(totalRoda, kecepatanPerJam){
        this.totalRoda = totalRoda;
        this.kecepatanPerJam = kecepatanPerJam;
    }
}
// added constructor, remove var declaration on params
class Mobil extends Kendaraan{
    constructor(totalRoda, kecepatanPerJam){
        super(totalRoda, kecepatanPerJam);
    }
    // add params to tambahKecepatan(), so we can add kecepatan more than 10 at once
    tambahKecepatan(kecepatanBaru){
        this.kecepatanPerJam += kecepatanBaru;
        return console.log(`mobil berjalan dengan kecepatan: ${this.kecepatanPerJam}`);
    }

    berjalan(kecepatan){
        tambahKecepatan(kecepatan);
    }
}

// creating new classes and call tambahKecepatan()
let mobilCepat = new Mobil(4, 0);
mobilCepat.tambahKecepatan(30);

let mobilLamban = new Mobil(4, 0);
mobilLamban.tambahKecepatan(10);