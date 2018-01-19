import React, { Component } from 'react';

export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather : {}
    };
  }
  render() {
    const {weather} = this.props;
    return (
      <div>Hello{weather}</div>
    );
  }
}
