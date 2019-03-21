import React, { Fragment } from "react";
import ReactMarkdown from "react-markdown";

import Codepen from "../codepen/Codepen";
import Codeblock from "../codeblock/Codeblock";

import "./SectionItem.css";

class SectionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ""
    };
  }

  componentDidMount() {
    const { markdownFile } = this.props.data;

    const markdownPath = require(`../../static/descriptions/${markdownFile}`);

    fetch(markdownPath)
      .then(resp => resp.text())
      .then(description => this.setState({ description }));
  }

  render() {
    const { data } = this.props;
    const { description } = this.state;
    return (
      <div>
        <a id={data.tag} name={data.tag}>
          <h3>{data.title}</h3>
        </a>
        <hr />
        {description && (
          <Fragment>
            <h4>Description</h4>
            <ReactMarkdown
              source={description}
              renderers={{ code: Codeblock }}
            />
          </Fragment>
        )}
        {data.exampleHash && (
          <Fragment>
            <h4>Try it online</h4>
            <div className="example">
              <Codepen hash={data.exampleHash} name={data.title} />
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default SectionItem;
