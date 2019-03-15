import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import ScrollUpButton from "react-scroll-up-button";

import Toc from "../toc/Toc";
import Section from "../section/Section";

import "./App.css";
import data from "./sources.json";

class App extends Component {
  render() {
    const dataMap = new Map(Object.entries(data));
    const arrayValues = [...dataMap.values()];
    return (
      <Container>
        <ScrollUpButton />
        <h1>From ES2015 to ES2019</h1>
        <p>
          This guide will guide you through the main and most usefule features introduced by each of the EcmaScript specifications. 
        </p>
        <Toc sourceMap={dataMap} />
        <Section data={arrayValues} />
      </Container>
    );
  }
}

export default App;
