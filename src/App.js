import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <CheckBox />
            </div>
        );
    }
}

// Components


var CheckBox = React.createClass({

    getInitialState: function(){

        return {checked: true}
    },

    handleChecked: function(){
        this.setState({checked: !this.state.checked})
    },

    render: function(){

        var msg;

        if (this.state.checked){
            msg = 'checked';
        } else {
            msg = 'unchecked';
        }

        return(
          <div>
              <input type="checkbox" onChange={this.handleChecked} defaultChecked={this.state.checked} />
              <h3>Checkbox is {msg}</h3>
          </div>
        );
    }
})

export default App;
