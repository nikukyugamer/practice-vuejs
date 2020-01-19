const myOmikuji = require('./omikuji');
const $ = require('jquery');

const items: Array<string> = ['大吉', '中吉', '末吉', '吉', '凶'];
const selectedOmikuji: Omikuji = new myOmikuji(items);

$(function() {
  $('#button').on('click', function() {
    const myOmikujiResult: string = selectedOmikuji.get();

    alert(myOmikujiResult);
    console.log(`おみくじの結果は ${myOmikujiResult} です！`);
  });
});
