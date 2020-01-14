// 一般的に $ として import されるが（もちろんその方が可読性という点から良い）、任意に決められること（＝予約語ではない）を理解しておく
// 予約語かそうでないかを理解するということは、のちのち自分で触るときに役に立つ
import foo from 'jquery';

// 以下のように「require」を用いてもよいが、フロントエンドでのビルド目的なので、import が正統的（？）
// const hogeFuga = require('jquery');

// コンソールに Hello, World! と表示される
const targetWord = foo('#hoge').text();
console.log(targetWord);

// HTML 内の Hello, World! の部分が World, Hello! に書き換わる
foo('#hoge').text('World, Hello!');
