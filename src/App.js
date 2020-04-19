import React, { Component } from 'react';
import axios from 'axios';
export default class App extends Component {


  constructor() {
    super();
    this.state = {
      selectedFile: null
    }
  }

  onChangeHandler = async  event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 1,
    })
  }

  onClickHandler(e) {
    e.preventDefault();
    if (this.state.loaded === 1) {
      const data = new FormData();
      data.append('file', this.state.selectedFile);
      axios.post("http://localhost:8000/upload", data, {
        // receive two    parameter endpoint url ,form data
      })
        .then(res => { // then print response status
          console.log(res.statusText)
        });
    }


  }

  render() {
    return (
      <div>
        <input type="file" name="file" onChange={this.onChangeHandler} />
        <button onClick={this.onClickHandler.bind(this)}>Upload</button>
      </div>
    )
  }
}
