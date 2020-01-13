function square(value: number): number | boolean {
  if (value < 0) {
    return false;
  } else {
    return Math.sqrt(value);
  }
}

console.log(square(9));
console.log(square(-3));

// 型ガード (Type Guards)
function tokyo(value: string | number) {
  if (typeof value == 'string') {
    return value.toUpperCase();
  } else if (typeof value == 'number') {
    return 'Your input arg is "Number!"';
  }
}

console.log(tokyo(100));
console.log(tokyo('heLlO! tokyo'));

class HogeBar {
  static greeting() {
    console.log('Hello, TypeScript static method World!');
  }
}
HogeBar.greeting();

// クラスベースのオブジェクト指向で書ける
// コンストラクタについては、戻り値の型は書けないところに注意する
class Person {
  // 以下のコードはシンプルに書ける
  // private name: string;
  // private sex: string;

  // constructor(name: string, sex: string) {
  //   this.name = name;
  //   this.sex  = sex;
  // }

  // public の場合でも省略できないことには注意する
  constructor(private name: string, private sex: string) {
    this.name = name;
    this.sex  = sex;
  }

  // public はデフォルトなので省略するのが普通
  public show(): string {
    return `${this.name} の性別は、${this.sex} です。`;
  }
}

const person = new Person('理央', '女性');
console.log(person.show());
// console.log(person.name);
// console.log(person.sex);

// getter と setter は専用の書き方が用意されている
class Company {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value
  }
}

const company = new Company('井上トロ');
console.log(company.name);

// 名前空間
// "export" を忘れないこと
namespace Wings {
  export namespace MainApp {
    export class Hoge {
      static hello(): string {
        return 'Wings.MainApp.Hoge.hello()!'
      }
    }

    export class Fuga {
      static goodbye(): string {
        return 'さようなら！'
      }
    }
  }
}

console.log(Wings.MainApp.Hoge.hello());
console.log(Wings.MainApp.Fuga.goodbye());

// 抽象クラスと抽象メソッドを説明するために、抽象メソッドを使わない書き方をしてみる
class Figure {
  constructor(protected width: number, protected height: number) { }
  getArea(): number {
    return 0;
  }
}

class Triangle extends Figure {
  getArea(): number {
    return this.width * this.height / 2
  }
}

const triangle = new Triangle(10, 5);
console.log(triangle.getArea());

// 抽象メソッドを使って書き換える
abstract class LetsFigure {
  constructor(protected width: number, protected height: number) { }
  abstract getArea(): number;
}

class LetsTriangle extends LetsFigure {
  getArea(): number {
    return this.width * this.height / 2;
  }
}

const letsTriangle = new LetsTriangle(10, 5);
console.log(letsTriangle.getArea());

// インターフェイスを作り、実装クラス（派生クラス）を作る
interface InterFigure {
  getArea(): number;
}

interface TodayWeather {
  getTokyo(): string;
}

interface TodayWeatherInterFigure extends InterFigure, TodayWeather { }

class InterTriangle implements TodayWeatherInterFigure {
  // class InterTriangle implements InterFigure, TodayWeather {
  constructor(private width: number, protected height: number) { }
  getArea(): number {
    return this.width * this.height / 2;
  }

  getTokyo(): string {
    return '40パーセント！';
  }
}

const interTriangle = new InterTriangle(10, 5);
console.log(interTriangle.getArea());
