import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {

  it('should pass the snapshot with props passed in', () => {
    const wrapper = shallowMount(Header);
    expect(wrapper.element).toMatchSnapshot();
  })
});