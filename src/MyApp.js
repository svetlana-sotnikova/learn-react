import React, { Component } from 'react';
import FormExample from './FormExample';
import { buttonsInstance } from './buttonsInatance';

export default class MyApp extends Component {
  render() {
    return (
      <div>
        Hello
        <FormExample>hj</FormExample>
        { buttonsInstance }
      </div>
    );
  }
}
