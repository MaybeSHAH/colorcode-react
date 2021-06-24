import React, { Component } from 'react'

export class LeftContainer extends Component {
    
    
      onTrigger = (event) => {
        this.props.handleChange(event.target.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="split left">
            <div className="centered">
                <input type="text" name="hexCode" onChange={this.onTrigger} style={{color: '#'+this.props.color}} />
                <p className="error">{ this.props.show ? 'Invalid Hex Code' : '' }</p>
            </div>
        </div>
        )
    }
}

export default LeftContainer
