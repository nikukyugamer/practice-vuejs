const Omikuji = require('./omikuji');
const $ = require('jquery');

$(function() {
  $('#button').on('click', function() {
    alert('jQuery!');
  });
});

const items = ['大吉', '中吉', '末吉', '吉', '凶'];
const omikuji = new Omikuji(items);

console.log(omikuji.get());
console.log('Omikuji is done!!');
