import { shallowMount } from "@vue/test-utils";
import App from "../../src/App.vue";
jest.mock('axios')

export default {
  get: () => Promise.resolve({data: { data: { records: ["value"] }}})
};

describe("App.vue", () => {

  it("should pass this dummy test", () => {
    expect(true).toBe(true);
  });

  it('should call the fetch', () => {
    // const wrapper = shallowMount(App);
    // console.log('wrapper here', wrapper)
    // expect(wrapper.data.data.records).toBe("value");
  })
});
