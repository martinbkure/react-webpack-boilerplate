import React, { Component } from 'react';

const obj = { a: 2, b: 2 };

const { a } = obj;

console.log(a);

const { b } = obj;

class Test extends Component {

  render () {
    return <h1>h1</h1>;
  }
}

export default Test;
