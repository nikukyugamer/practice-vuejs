const myOmikujiSpec = require('../src/omikuji');

const targetArray: Array<string> = ['りんご', 'みかん', 'メロン', 'すいか'];

describe('Omikuji クラス', () => {
  test('コンストラクタの値が、「引数として渡した文字列の配列」になっていること', () => {
    expect(new myOmikujiSpec(targetArray)).toEqual({
      items: ['りんご', 'みかん', 'メロン', 'すいか'],
    });
  });

  // TODO: get() は乱数を基に実行されるので、このテストでは不十分
  test('get() で得られる値が、コンストラクタの引数として与えた配列の、いずれかの要素になっていること', () => {
    expect(
      ['りんご', 'みかん', 'メロン', 'すいか'].includes(
        new myOmikujiSpec(targetArray).get()
      )
    ).toBeTruthy();
  });
});
