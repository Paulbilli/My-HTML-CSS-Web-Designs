var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var settings = {
 async: true,
 scrossDomain: true,
 url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
 method: "GET",
 headers: {},
};
$.ajax(settings).done(function (response) {
 btc.innerHTML = response.bitcoin.usd;
 eth.innerHTML = response.ethereum.usd;
 doge.innerHTML = response.dogecoin.usd;
});
// const header = document.getElementsByTagName("h1");
// header[0].style.color = "blue";
// console.log(header);

// const btn = document.getElementsByClassName("btn");
// for (let i = 0; i < btn.length; i++) {
//  btn[i].style.color = "red";
// }
// btn[1].style.backgroundColor = "#000";
// console.log(btn);

// const head = document.querySelectorAll(".btn");
// console.log(head);
