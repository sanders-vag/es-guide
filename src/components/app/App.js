import React from "react";
import Container from "react-bootstrap/Container";
import ScrollUpButton from "react-scroll-up-button";
import ReactMarkdown from "react-markdown";

import Toc from "../toc/Toc";
import Section from "../section/Section";

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
    fetch(markdownPath)
      .then(resp => resp.text())
      .then(summary => this.setState({ summary }));
  }

  render() {
    const dataMap = new Map(Object.entries(data));
    const arrayValues = [...dataMap.values()];
    const { summary } = this.state;

    return (
      <Container>
        <ScrollUpButton />
        <ReactMarkdown source={summary} />
        <Toc sourceMap={dataMap} />
        <Section data={arrayValues} />
      </Container>
    );
  }
}

export default App;
