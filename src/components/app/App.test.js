import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App tests", () => {
  beforeAll(() => {
    const promiseData = "# Summary";
    const promiseText = Promise.resolve(promiseData);
    const promiseFetch = Promise.resolve({
      text: () => promiseText
    });

    jest.spyOn(global, "fetch").mockImplementation(() => promiseFetch);
    jest.spyOn(App.prototype, "componentDidMount");
  });

  it("renders without crashing", done => {
    const wrapper = shallow(<App />);

    expect(App.prototype.componentDidMount).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalled();
    

    process.nextTick(() => {
      expect(wrapper.state().summary).toEqual('# Summary');
      expect(wrapper.find("ReactMarkdown").props().source).toEqual('# Summary');
      expect(wrapper.find("ScrollUpButton").exists()).toBeTruthy();
      expect(wrapper.find("ReactMarkdown").exists()).toBeTruthy();
      expect(wrapper.find("Toc").exists()).toBeTruthy();
      expect(wrapper.find("Toc").props().data).toBeDefined();
      expect(wrapper.find("SectionList").exists()).toBeTruthy();
      expect(wrapper.find("SectionList").props().sections).toBeDefined(); done();
    });
  });
});
