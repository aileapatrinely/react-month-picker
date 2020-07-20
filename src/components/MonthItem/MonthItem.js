import React, { Component } from 'react';

class MonthItem extends Component {
  state = {
    clicked: true,
    clickedMonth: '',
  };
  sendAlert = (event) => {
    this.setState({
      clicked: !this.state.clicked,
    });
    if (this.state.clicked === true) {
      const clickedMonth = this.props.month.name;
      alert(this.props.month.name + ' has been selected');
    }
  };

  render() {
    return (
      <p selectedMonth={this.state.clickedMonth} onClick={this.sendAlert}>
        {this.props.month.name}
      </p>
    );
  }
}

export default MonthItem;
