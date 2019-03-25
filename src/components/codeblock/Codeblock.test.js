import React from "react";

import { shallow } from "enzyme";
import SyntaxHighlighter from "react-syntax-highlighter";

import Codeblock from "./Codeblock";

describe("Codeblock tests", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Codeblock value="2" />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(SyntaxHighlighter).props().language).toEqual(
      "javascript"
    );
    expect(wrapper.find(SyntaxHighlighter).render().text()).toEqual("2");
  });


});
