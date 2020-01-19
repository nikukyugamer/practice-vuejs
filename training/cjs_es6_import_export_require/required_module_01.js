// ほとんどの JavaScript のスタイルガイドは文のあとにセミコロンを推奨しますが、関数とクラス宣言の後は推奨しません
let months = ['Jan', 'Feb', 'Mar', 'Apr'];
const MODULES_BECAME_STANDART_YEAR = 2020;

// module.exports = months;
module.exports = {
  foo: months,
  year: MODULES_BECAME_STANDART_YEAR
};
