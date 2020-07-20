import React, { Component } from 'react';

class MonthList extends Component {
  render() {
    const newMonthList = this.props.monthList.map((month, id) => {
      return <div>{month.name}</div>;
    });
    return <div>{newMonthList}</div>;
  }
}

export default MonthList;
