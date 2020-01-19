// 引数の数の違いによる原則
// 引数が0個
const generateRandom = () => Math.random();
console.log(generateRandom());

// 引数が1つ
const double = x => x + x;
console.log(double(100));

// 引数が2つ以上
const add = (a, b) => a + b;
console.log(add(200, 300));

// 波括弧が省略されると「暗黙的な return」が存在することになり、可読性が高まる
// 波括弧を省略しない場合
const doTasks = (a, b) => {
  a + b;
  a - b;
};
console.log(doTasks(100, 50)); // undefined

// 波括弧を省略した場合
const doTasksWithoutNamikakko = (a, b) => a - b; // 暗黙的な return
console.log(doTasksWithoutNamikakko(100, 50)); // 50

// 暗黙的な return が「オブジェクト」の場合には、戻り値であることを明確にするために括弧で囲まなければならい
const getSize = () =>
  // { width: 50, height: 100 } // SyntaxError
  ({ width: 50, height: 100 });
console.log(getSize());

// アロー関数は「巻き上げ」ることはできない（関数定義は「巻き上げ」ることができる）
funcA(); // Hello, funcA!
// funcB(); // ReferenceError: Cannot access 'funcB' before initialization

function funcA() {
  console.log('Hello, funcA!');
}

const funcB = () => console.log('Hello, funcB!');

// アロー関数における this と、通常の関数における this の違い（指し示すオブジェクトの違い）
// 通常の関数では this の値は呼び出される時に決まる、アロー関数では関数が宣言された時に決まる
const person = {
  age: 20,
  func: function() {
    return this.age;
  },
  arrowFuncAsAge: () => {
    return this.age; // this はグローバルオブジェクトを指しているため、undefined になる
  }
};
console.log(person.arrowFuncAsAge());

// 上記と同じ書き方で arrowFunc() の戻り値を undefined にしないためには、グローバルオブジェクトで age を定義する必要がある
const friend = {
  age: 20,
  func: function() {
    return this.age;
  },
  funcAsThis: function() {
    return this;
  },
  funcAsThisWithBind: function() {
    return this;
  }.bind(this),
  arrowFuncAsAge: () => {
    return this.age;
  },
  arroeFuncAsThis: () => {
    return this;
  }
};
console.log(friend.arrowFuncAsAge()); // undefined
console.log(friend.arroeFuncAsThis()); // {}
console.log(friend.func()); // 20
console.log(friend.funcAsThis()); // friendオブジェクトの内容が返ってくる
console.log(friend.funcAsThisWithBind()); // {}
