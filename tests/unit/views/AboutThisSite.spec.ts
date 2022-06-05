import { shallowMount } from "@vue/test-utils";
import AboutThisSite from "@/views/AboutThisSite.vue";

describe("AboutThisSite.vue", () => {
  it("あああああ", () => {
    const wrapper = shallowMount(AboutThisSite);

    expect(wrapper.text()).toMatch("This is an about page");
  });
});
