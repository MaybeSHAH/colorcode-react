
import React from 'react';
import './App.css';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';

class App extends React.Component{
  state = {
    color: '',
    show: true
  }
isHexColor(hex) {
        console.log("Calling");
        return typeof hex === 'string'
            && hex.length === 6
            && !isNaN(Number('0x' + hex))
      }

  handleChange(code) {
    if(this.isHexColor(code))
    {
      this.setState({ color: code, show: false})
    }
    else{
      this.setState({show: true})
    }
    
  }

render(){
  return (
    <div>
      <LeftContainer handleChange={this.handleChange.bind(this)} color={ this.state.color } show={this.state.show} />
      <RightContainer color={ this.state.color } />
    </div>
  );
}
}

export default App;
