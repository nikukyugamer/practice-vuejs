import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("props.msg が正しく展開されること", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });

    expect(wrapper.text()).toMatch(msg);
  });

  describe("computed のテスト", () => {
    it("初期状態では myComputed() は見えないこと", () => {
      const wrapper = shallowMount(HelloWorld, {
        props: { msg: "Foobar" },
      });
      const myComputedElement = wrapper.find("#my-computed");

      expect(myComputedElement.exists()).toBe(false);
      expect(wrapper.text()).not.toContain("Hello, myComputed()!");
    });

    it("isShownMyComputed が true のときは myComputed() が見られること", async () => {
      const wrapper = shallowMount(HelloWorld, {
        props: { msg: "Foobar" },
      });
      await wrapper.setData({
        isShownMyComputed: true,
      });

      expect(wrapper.text()).toContain("Hello, myComputed()!");
    });
  });

  describe("mounted() のテスト", () => {
    it("yamaha の値が AG03 になっていること", () => {
      const wrapper = shallowMount(HelloWorld, {
        props: { msg: "Foobar" },
      });

      expect(wrapper.vm.yamaha).toBe("AG03");
    });
  });
});

// DONE:
// computed のテスト -> computedを直接specの中で実行できないので、間接的にテストされることになる
// data のテスト
// 表示のテスト
// getメソッドとfindメソッド
// レシーバ要素が存在しない場合、getはエラー、findはnullを返す
// mounted()のテスト axiosをmountedで走らせる場合ってどう書くの？
// axios のモック化 -> yarn add --dev flush-promises が必要らしい

// TODO:
// methods のテスト
// store の mutations actions などのテスト
