import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Select a Month</h1>
          <h3>{this.props.selectedMonth}</h3>
        </header>
      </div>
    );
  }
}

export default Header;
