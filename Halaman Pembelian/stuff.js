var send = localStorage.getItem("myValue");
console.log(send);
showingGame(send);
/*
var resetValue="";
localStorage.setItem("myValue", resetValue);
*/
function showingGame(blind){
    fetch('./games.json')
    .then((respone)=> respone.json())
    .then((games) => {
        let queue = games.packGame;
        console.log(queue);
        console.log(blind);
        let moneyIngame;
        let head;
        let voc = document.getElementById('voucher-game');
        let banner = document.getElementById('banner-blue');
        let gameInput = document.getElementById('game-game-game');
        gameInput.innerHTML += `<input type="hidden" name="namaGame" value="${blind}">`;

        // Searching Game
        for(let i=0; i < queue.length; i++){
            if(blind == queue[i].nama){
                moneyIngame = queue[i].voucher;
                head = i;
            }
            else{
                console.log("Searching Game Gagal"); 
            }
        }

        console.log("showingGame Terpanggil");
        //Terujunan HTML atribut
        let leftHead = document.getElementById("nama-game");
        leftHead.innerHTML = queue[head].nama;
        
        let leftFoot = document.getElementById("desk-game");
        leftFoot.innerHTML = queue[head].deskripsi;

        //Menampilkan Voucher Pilihan
        voc.innerHTML ="";
        for(let q=0; q < moneyIngame.length; q++){
            voc.innerHTML += `<div class="card-voc">
                                <label>
                                    <input id="nVoc" class="opsi" type="radio" name="opsi-voucher" value="${moneyIngame[q]}" onclick = "showingPrice(${q}, ${head})" required>
                                    <span class="opsi-sider"> <span>${moneyIngame[q]}</span> <span>${queue[head].eyemoney}</span> </span>
                                </label>
                            </div>`;
        }

        // ganti banner
        banner.innerHTML = "";
        banner.innerHTML += `<img src="assets/banner/${queue[head].gambar}" class="game-gambar-banner">`;
    })
}

function showingPrice(priceIndex, gameIndex){
    fetch('./games.json')
    .then((respone)=> respone.json())
    .then((games) => {
        let queue = games.packGame;
        //let bayaran = document.getElementById("beli-voc-qq")

        let price_array = queue[gameIndex].harga;
        console.log(gameIndex);
        console.log(price_array);

        let price_tag_gopay = document.getElementById("bayar1");
        let price_tag_ovo = document.getElementById("bayar2");
        let price_tag_dana = document.getElementById("bayar3");

        //lempar ke html
        
        price_tag_gopay.innerHTML = "";
        price_tag_gopay.innerHTML += `<label>
                                        <input id="nPay" class="opsi" type="radio"  name="opsi-bayar" value="${price_array[priceIndex]} GOPAY" required>
                                            <span class="opsi-sider">
                                                <img src="assets/stone-free/Frame 1.svg" class="mechant">
                                                <div> <span>Harga</span> <span>Rp. </span> <span id="harga-game-gopay">${numberComa(price_array[priceIndex])} </span> </div>
                                            </span>
                                    </label>`; 

        price_tag_ovo.innerHTML = "";
        price_tag_ovo.innerHTML += `<label>
                                        <input id="nPay" class="opsi" type="radio" name="opsi-bayar" value="${price_array[priceIndex]} OVO">
                                        <span class="opsi-sider">
                                            <img src="assets/stone-free/Frame 2.svg" class="mechant">
                                            <div> <span>Harga</span> <span>Rp. </span> <span id="harga-game-ovo">${numberComa(price_array[priceIndex])} </span> </div>
                                        </span>
                                    </label>`; 

        price_tag_dana.innerHTML = "";
        price_tag_dana.innerHTML += `<label>
                                        <input id="nPay" class="opsi" type="radio" name="opsi-bayar" value="${price_array[priceIndex]} DANA">
                                        <span class="opsi-sider">
                                            <img src="assets/stone-free/Frame 3.svg" class="mechant">
                                            <div> <span>Harga</span> <span>Rp. </span> <span id="harga-game-dana">${numberComa(price_array[priceIndex])} </span> </div>
                                        </span>
                                    </label>`; 
        

        
        // looping bayaran
        /*
        let gambar=1;
        let merchant = ["GOPAY", "OVO", "Meteor"];
        bayaran.innerHTML ="";
        for(let x=0; x < 3; x++){
            bayaran.innerHTML += `<div class="card-buy" id="bayar">
                                <label>
                                    <input class="opsi" type="radio" name="opsi-bayar" value="${price_array[priceIndex]}">
                                    <input class="opsi" type="hidden" name="dompet" value="${merchant[x]}"> 
                                    <span class="opsi-sider">
                                        <img src="assets/stone-free/Frame ${gambar}.svg" class="mechant">
                                        <div> <span>Harga</span> <span>Rp. </span> <span id="harga-game-gopay">${numberComa(price_array[priceIndex])}</span> </div>
                                    </span>
                                </label>
                            </div>`;
            gambar++;
        }
        */
    })
}

function numberComa(slay){
   return slay.toLocaleString();
}
