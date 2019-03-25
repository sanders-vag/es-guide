import React from "react";
import { shallow } from "enzyme";

import SectionItem from "./SectionItem";

describe("SectionItem tests", () => {
  it("should render without crashing with no data", () => {
    const wrapper = shallow(<SectionItem />);
    expect(wrapper.find("section").exists()).toBeFalsy();
  });

  it("should render without crashing with section data and no features", () => {
    const sectionData = {
      title: "test section",
      tag: "test-section",
      specUrl: "http://"
    };
    const wrapper = shallow(<SectionItem section={sectionData} />);

    expect(wrapper.find("div.section").exists()).toBeTruthy();
    expect(wrapper.find("div.section").children().length).toBe(1);
    expect(wrapper.find("div.section > h2").props().id).toEqual("test-section");
    expect(wrapper.find("div.section > h2").props().name).toEqual(
      "test-section"
    );
  });

  it("should render without crashing with section data and no features", () => {
    const sectionData = {
      title: "test section",
      tag: "test-section",
      specUrl: "http://",
      features: [{ title: "f1" }, { title: "f2" }]
    };
    const wrapper = shallow(<SectionItem section={sectionData} />);

    expect(wrapper.find("div.section").exists()).toBeTruthy();
    expect(wrapper.find("div.section").children().length).toBe(3);
    expect(wrapper.find("div.section > h2").props().id).toEqual("test-section");
    expect(wrapper.find("div.section > h2").props().name).toEqual(
      "test-section"
    );
    expect(
      wrapper
        .find("div.section")
        .childAt(1)
        .props().feature
    ).toEqual({ title: "f1" });
    expect(
      wrapper
        .find("div.section")
        .childAt(2)
        .props().feature
    ).toEqual({ title: "f2" });
  });
});
