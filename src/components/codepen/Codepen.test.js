import React from "react";

import { shallow } from "enzyme";
import Codepen from "./Codepen";

describe("Codepen tests", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Codepen hash="customHash" name="test" />);

    expect(wrapper.find("p.codepen").exists()).toBeTruthy();
      expect(wrapper.find("p.codepen").props()["data-slug-hash"]).toEqual("customHash");
    expect(
      wrapper
        .find("p.codepen > span > a")
        .first()
        .props().href
    ).toMatch(/.*\/customHash$/);
    expect(
      wrapper
        .find("p.codepen > span > a")
        .first()
        .text()
    ).toEqual("test");
  });
});
