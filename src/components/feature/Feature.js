import React, { Fragment, Component } from "react";
import ReactMarkdown from "react-markdown";
import { from } from "rxjs";
import { flatMap, tap } from "rxjs/operators";

import Codepen from "../codepen/Codepen";
import Codeblock from "../codeblock/Codeblock";

import "./Feature.css";

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      bla: ""
    };
  }

  componentDidMount() {
    if (this.props.feature) {
      const { markdownFile } = this.props.feature;

      const markdownPath = require(`../../static/descriptions/${markdownFile}`);

      from(fetch(markdownPath))
        .pipe(
          flatMap(resp => resp.text()),
          tap(description => this.setState({ description }))
        )
        .subscribe();
    }
  }

  render() {
    const { feature } = this.props;
    const { description } = this.state;
    if (!feature) return;
    return (
      <div className="feature">
        <h3 id={feature.tag} name={feature.tag}>
          {feature.title}
        </h3>
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
        {feature.exampleHash && (
          <Fragment>
            <h4>Try it online</h4>
            <div className="example">
              <Codepen hash={feature.exampleHash} name={feature.title} />
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Feature;
