import React from "react";
import { shallow } from "enzyme";

import Toc from "./Toc";

describe("Toc tests", () => {
  it("renders without crashing with empty source", () => {
    const wrapper = shallow(<Toc />);
    expect(wrapper.find("h2").exists()).toBeFalsy();
  });

  it("renders without crashing with a source with no features", () => {
    const src = [{ title: "test", tag: "test-tag", features: [] }];
    const wrapper = shallow(<Toc data={src} />);

    expect(wrapper.find("h2").exists()).toBeTruthy();
    expect(wrapper.find("h2").text()).toEqual("Table of contents");
    expect(wrapper.find("ul.section-list").children().length).toBe(1);
    expect(wrapper.find("ul.section-list > li > a").props().href).toEqual(
      "#test-tag"
    );
    expect(wrapper.find("ul.section-list > li > a").text()).toEqual("test");
    expect(wrapper.find("ul.section-list > li").children().length).toBe(1);
  });

  it("renders without crashing with a source with features", () => {
    const src = [
      {
        title: "test",
        tag: "test-tag",
        features: [{ title: "f1", tag: "f1-tag" }]
      }
    ];

    const wrapper = shallow(<Toc data={src} />);

    expect(wrapper.find("h2").exists()).toBeTruthy();
    expect(wrapper.find("h2").text()).toEqual("Table of contents");
    expect(wrapper.find("ul.section-list").children().length).toBe(1);
    expect(wrapper.find("ul.section-list > li > a").props().href).toEqual(
      "#test-tag"
    );
    expect(wrapper.find("ul.section-list > li > a").text()).toEqual("test");
    expect(wrapper.find("ul.section-list > li").children().length).toBe(2);
    expect(wrapper.find("ul.features-list > li > a").props().href).toEqual(
      "#f1-tag"
    );
    expect(wrapper.find("ul.features-list > li > a").text()).toEqual("f1");
  });
});
