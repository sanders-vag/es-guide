import React, { Component } from "react";
import Toc from '../toc/Toc'
import Section from '../section/Section'

import "./App.css";
import data from './sources.json'

class App extends Component {

  render() {
    const dataMap = new Map(Object.entries(data))
    const arrayValues = [...dataMap.values()];
    return (
      <div>
        <h1>From ES2015 to ESNext</h1>
        <Toc sourceMap={dataMap}/>
        <Section data={arrayValues} />
      </div>
    );
  }
}

export default App;