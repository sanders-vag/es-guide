import React from "react";
import Container from "react-bootstrap/Container";
import ScrollUpButton from "react-scroll-up-button";
import ReactMarkdown from "react-markdown";
import { tap } from "rxjs/operators";

import Toc from "../toc/Toc";
import SectionList from "../section-list/SectionList";
import { getMarkdownContent } from "../../utils/utils";

import "./App.css";
import data from "../../static/sources.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: ""
    };
  }

  componentDidMount() {
    const markdownPath = require("../../static/descriptions/summary.md");
    getMarkdownContent(markdownPath)
      .pipe(tap(summary => this.setState({ summary })))
      .subscribe();
  }

  render() {
    const dataMap = new Map(Object.entries(data));
    const arrayValues = [...dataMap.values()];
    const { summary } = this.state;

    return (
      <Container>
        <ScrollUpButton />
        <ReactMarkdown source={summary} />
        <Toc data={arrayValues} />
        <SectionList sections={arrayValues} />
      </Container>
    );
  }
}

export default App;
