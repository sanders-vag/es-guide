import React from "react";
import { shallow, mount } from "enzyme";

import Feature from "./Feature";

jest.mock(
  "../../static/descriptions/test.md",
  () => {
    return jest.fn(() => "# Test");
  },
  {
    virtual: true
  }
);

jest.spyOn(Feature.prototype, "componentDidMount");

describe("Feature tests", () => {
  beforeAll(() => {
    const mockSuccesResponse = "# Test";
    const mockTextPromise = Promise.resolve(mockSuccesResponse);
    const mockFetchPromise = Promise.resolve({
      text: () => mockTextPromise
    });

    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);
  });

  it("should render without crashing, no data", () => {
    const wrapper = shallow(<Feature />);
    expect(wrapper.find("div.feature").exists()).toBeFalsy();
    expect(Feature.prototype.componentDidMount).toHaveBeenCalled();
  });

  it("should load the markdown file when the component did mount", done => {
    const featureData = {
      markdownFile: "test.md",
      tag: "test-tag",
      title: "feature test",
      exampleHash: "23242"
    };
    const wrapper = shallow(<Feature feature={featureData} />);
    expect(global.fetch).toHaveBeenCalled();

    process.nextTick(() => {
      expect(wrapper.state().description).toEqual("# Test");
      global.fetch.mockClear();
      done();
    });
  });

  it("should render without crashing with data", done => {
    const featureData = {
      markdownFile: "test.md",
      tag: "test-tag",
      title: "feature test",
      exampleHash: "23242"
    };
    const wrapper = shallow(<Feature feature={featureData} />);
    expect(global.fetch).toHaveBeenCalled();

    expect(wrapper.find("div.feature").exists()).toBeTruthy();
    expect(wrapper.find("div.feature > h3").props().id).toEqual("test-tag");
    expect(wrapper.find("div.feature > h3").props().name).toEqual("test-tag");
    expect(wrapper.find("div.feature > h4").exists()).toBeTruthy();
    expect(wrapper.find("div.feature > h4").length).toBe(1);
    expect(wrapper.find("div.feature > h4").text()).toEqual("Try it online");
    expect(wrapper.find("div.example").exists()).toBeTruthy();
    expect(wrapper.find("Codepen").exists()).toBeTruthy();
    expect(wrapper.find("Codepen").props().hash).toEqual("23242");
    expect(wrapper.find("Codepen").props().name).toEqual("feature test");

    process.nextTick(() => {
      expect(wrapper.find("div.feature > h4").exists()).toBeTruthy();
      expect(wrapper.find("div.feature > h4").length).toBe(2);
      expect(wrapper.find("div.feature > h4").first().text()).toEqual("Description");
      expect(wrapper.find("ReactMarkdown").exists()).toBeTruthy();
      expect(wrapper.find("ReactMarkdown").props().source).toEqual("# Test");
      expect(wrapper.find("ReactMarkdown").props().renderers).toBeDefined();
      global.fetch.mockClear();
      done();
    });
  });
});
