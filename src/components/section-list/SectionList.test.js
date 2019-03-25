import React from "react";
import { shallow, mount } from "enzyme";

import SectionList from "./SectionList";

jest.mock("../section-item/SectionItem", () => ({ section }) => (
  <div className="section-item">{section.title}</div>
));

describe("Section tests", () => {
  it("should render without crashing with no data", () => {
    const wrapper = shallow(<SectionList />);
    expect(wrapper.find("div").exists()).toBeFalsy();
  });

  it("should mount without crashing with data and no features", () => {
    const sectionData = [
      {
        title: "section"
      }
    ];
    const wrapper = mount(<SectionList sections={sectionData} />);

    expect(wrapper.find("div.section-list").exists()).toBeTruthy();
    expect(wrapper.find("div.section-list").children().length).toBe(1);
    expect(wrapper.find("div.section-item").exists()).toBeTruthy();
    expect(wrapper.find("div.section-item").text()).toEqual(
      sectionData[0].title
    );
  });

  it("should render without crashing with data and no features", () => {
    const sectionData = [
      {
        title: "section"
      }
    ];
    const wrapper = shallow(<SectionList sections={sectionData} />);

    expect(wrapper.find("div.section-list").exists()).toBeTruthy();
    expect(wrapper.find("div.section-list").children().length).toBe(1);
    expect(
      wrapper
        .find("div.section-list")
        .childAt(0)
        .props().section
    ).toEqual(sectionData[0]);
  });
});
