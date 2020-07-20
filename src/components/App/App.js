import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import MonthList from '../MonthList/MonthList';
import MonthItem from '../MonthItem/MonthItem';

class App extends Component {
  state = {
    monthList: [
      {
        id: 0,
        name: '',
      },
    ],
  };

  componentDidMount() {
    this.getCalendar();
  }

  getCalendar() {
    axios({
      method: 'GET',
      url: '/calendar',
    })
      .then((response) => {
        console.log(response.data);
        this.setState({
          monthList: response.data,
        });
      })
      .catch((err) => {
        console.log('Error:', err);
        alert('Error in getCalendar');
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Select a Month</h1>
          <h3>SELECTED MONTH GOES HERE</h3>
          <br />
        </header>
        <br />
        <MonthList
          monthList={this.state.monthList}
          getCalendar={this.getCalendar}
        />
      </div>
    );
  }
}

export default App;
