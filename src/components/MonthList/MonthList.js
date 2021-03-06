import React, { Component } from 'react';
import MonthItem from '../MonthItem/MonthItem';

class MonthList extends Component {
  render() {
    const newMonthList = this.props.monthList.map((month, id) => {
      return (
        <MonthItem
          key={this.props.monthList.id}
          month={month}
          getCalendar={this.props.getCalendar}
        />
      );
    });
    return <div>{newMonthList}</div>;
  }
}

export default MonthList;
