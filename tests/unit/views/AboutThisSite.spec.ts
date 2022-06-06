import axios from "axios";
import { shallowMount } from "@vue/test-utils";
import AboutThisSite from "@/views/AboutThisSite.vue";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const successUserFetchMockedAxios = () => {
  mockedAxios.get.mockResolvedValue({
    data: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      },
    ],
  });
};

const failUserFetchMockedAxios = () => {
  mockedAxios.get.mockRejectedValue({
    data: "ERROR: Fetch User data",
  });
};

beforeEach(() => {
  successUserFetchMockedAxios();
});

describe("AboutThisSite.vue", () => {
  it("mounted() で axios の結果が期待どおりであること", (done) => {
    const wrapper = shallowMount(AboutThisSite);

    expect(wrapper.text()).toMatch("This is an about page");
    expect(wrapper.text()).not.toMatch("データの受信に失敗しました。");

    // $nextTick だとエラーになる
    // https://zenn.dev/fuku710/articles/2b0b66a3283f7e
    setTimeout(() => {
      // expect(mockedAxios.get).toHaveBeenCalled();
      expect(wrapper.text()).toMatch("Leanne Graham");
      expect(wrapper.text()).toMatch("Sincere@april.biz");
      expect(wrapper.text()).not.toMatch("データの受信に失敗しました。");

      done();
    });
  });

  it("2つのボタンをクリックしたときに期待通りの動作をすること", async () => {
    const wrapper = shallowMount(AboutThisSite);

    expect(wrapper.text()).toMatch("This is an about page");
    expect(wrapper.text()).not.toMatch("データの受信に失敗しました。");
    expect(wrapper.text()).not.toMatch("Sincere@april.biz");

    await wrapper.get("#fetch-user-button").trigger("click");
    expect(wrapper.text()).toMatch("Sincere@april.biz");
    expect(wrapper.text()).not.toMatch("データの受信に失敗しました。");

    await wrapper.get("#remove-user-button").trigger("click");
    expect(wrapper.text()).not.toMatch("Sincere@april.biz");
    expect(wrapper.text()).not.toMatch("データの受信に失敗しました。");

    await wrapper.get("#fetch-user-button").trigger("click");
    expect(wrapper.text()).toMatch("Sincere@april.biz");
    expect(wrapper.text()).not.toMatch("データの受信に失敗しました。");
  });

  it("'toggleSampleMessage' ボタンをクリックしたときに期待通りの動作をすること", (done) => {
    const wrapper = shallowMount(AboutThisSite);
    wrapper.get("[data-testid=sample-message-button]").trigger("click");

    wrapper.vm.$nextTick(() => {
      expect(wrapper.text()).toMatch("Hello, AboutThisSiteWorld!");
      done();
    });
  });

  it("ユーザーデータのフェッチに失敗したときに期待通りの動作をすること", (done) => {
    failUserFetchMockedAxios();
    const wrapper = shallowMount(AboutThisSite);

    setTimeout(() => {
      expect(wrapper.text()).toMatch("This is an about page");
      expect(wrapper.text()).not.toMatch("Leanne Graham");
      expect(wrapper.text()).toMatch("データの受信に失敗しました。");

      done();
    });
  });
});
