"use strict";
// function tomoyo(a: number, b: number) {
//   console.log(a)
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// tomoyo(1, 3)
function square(value) {
    if (value < 0) {
        return false;
    }
    else {
        return Math.sqrt(value);
    }
}
console.log(square(9));
console.log(square(-3));
// 型ガード (Type Guards)
function tokyo(value) {
    if (typeof value == 'string') {
        return value.toUpperCase();
    }
    else if (typeof value == 'number') {
        return 'Your input arg is "Number!"';
    }
}
console.log(tokyo(100));
console.log(tokyo('heLlO! tokyo'));
var HogeBar = /** @class */ (function () {
    function HogeBar() {
    }
    HogeBar.greeting = function () {
        console.log('Hello, TypeScript static method World!');
    };
    return HogeBar;
}());
HogeBar.greeting();
// クラスベースのオブジェクト指向で書ける
// コンストラクタについては、戻り値の型は書けないところに注意する
var Person = /** @class */ (function () {
    // 以下のコードはシンプルに書ける
    // private name: string;
    // private sex: string;
    // constructor(name: string, sex: string) {
    //   this.name = name;
    //   this.sex  = sex;
    // }
    // public の場合でも省略できないことには注意する
    function Person(name, sex) {
        this.name = name;
        this.sex = sex;
        this.name = name;
        this.sex = sex;
    }
    // public はデフォルトなので省略するのが普通
    Person.prototype.show = function () {
        return this.name + " \u306E\u6027\u5225\u306F\u3001" + this.sex + " \u3067\u3059\u3002";
    };
    return Person;
}());
var person = new Person('理央', '女性');
console.log(person.show());
// console.log(person.name);
// console.log(person.sex);
// getter と setter は専用の書き方が用意されている
var Company = /** @class */ (function () {
    function Company(name) {
        this._name = name;
    }
    Object.defineProperty(Company.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return Company;
}());
var company = new Company('井上トロ');
console.log(company.name);
// 名前空間
// "export" を忘れないこと
var Wings;
(function (Wings) {
    var MainApp;
    (function (MainApp) {
        var Hoge = /** @class */ (function () {
            function Hoge() {
            }
            Hoge.hello = function () {
                return 'Wings.MainApp.Hoge.hello()!';
            };
            return Hoge;
        }());
        MainApp.Hoge = Hoge;
        var Fuga = /** @class */ (function () {
            function Fuga() {
            }
            Fuga.goodbye = function () {
                return 'さようなら！';
            };
            return Fuga;
        }());
        MainApp.Fuga = Fuga;
    })(MainApp = Wings.MainApp || (Wings.MainApp = {}));
})(Wings || (Wings = {}));
console.log(Wings.MainApp.Hoge.hello());
console.log(Wings.MainApp.Fuga.goodbye());
// 抽象クラスと抽象メソッドを説明するために、抽象メソッドを使わない書き方をしてみる
var Figure = /** @class */ (function () {
    function Figure(width, height) {
        this.width = width;
        this.height = height;
    }
    Figure.prototype.getArea = function () {
        return 0;
    };
    return Figure;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Triangle.prototype.getArea = function () {
        return this.width * this.height / 2;
    };
    return Triangle;
}(Figure));
var triangle = new Triangle(10, 5);
console.log(triangle.getArea());
// 抽象メソッドを使って書き換える
var LetsFigure = /** @class */ (function () {
    function LetsFigure(width, height) {
        this.width = width;
        this.height = height;
    }
    return LetsFigure;
}());
var LetsTriangle = /** @class */ (function (_super) {
    __extends(LetsTriangle, _super);
    function LetsTriangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LetsTriangle.prototype.getArea = function () {
        return this.width * this.height / 2;
    };
    return LetsTriangle;
}(LetsFigure));
var letsTriangle = new LetsTriangle(10, 5);
console.log(letsTriangle.getArea());
var InterTriangle = /** @class */ (function () {
    // class InterTriangle implements InterFigure, TodayWeather {
    function InterTriangle(width, height) {
        this.width = width;
        this.height = height;
    }
    InterTriangle.prototype.getArea = function () {
        return this.width * this.height / 2;
    };
    InterTriangle.prototype.getTokyo = function () {
        return '40パーセント！';
    };
    return InterTriangle;
}());
var interTriangle = new InterTriangle(10, 5);
console.log(interTriangle.getArea());
