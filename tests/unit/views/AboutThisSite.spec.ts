import { shallowMount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import AboutThisSite from "@/views/AboutThisSite.vue";

jest.mock("axios", () => ({
  get: jest.fn(() =>
    Promise.resolve({
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
    })
  ),
}));

describe("AboutThisSite.vue", () => {
  it("mounted() で axios の結果が期待どおりであること", async () => {
    const wrapper = shallowMount(AboutThisSite);

    await flushPromises();

    expect(wrapper.text()).toMatch("This is an about page");
    expect(wrapper.text()).toMatch("Leanne Graham");
    expect(wrapper.text()).toMatch("Sincere@april.biz");
  });

  it("2つのボタンをクリックしたときに期待通りの動作をすること", async () => {
    const wrapper = shallowMount(AboutThisSite);

    expect(wrapper.text()).toMatch("This is an about page");
    expect(wrapper.text()).not.toMatch("Sincere@april.biz");

    await wrapper.get("#fetch-user-button").trigger("click");
    expect(wrapper.text()).toMatch("Sincere@april.biz");

    await wrapper.get("#remove-user-button").trigger("click");
    expect(wrapper.text()).not.toMatch("Sincere@april.biz");

    await wrapper.get("#fetch-user-button").trigger("click");
    expect(wrapper.text()).toMatch("Sincere@april.biz");
    console.log(wrapper.text());
  });
});
