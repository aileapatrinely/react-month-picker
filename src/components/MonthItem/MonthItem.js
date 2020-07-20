import React, { Component } from 'react';

class MonthItem extends Component {
  render() {
    return <div>{this.props.month.name}</div>;
  }
}

export default MonthItem;
