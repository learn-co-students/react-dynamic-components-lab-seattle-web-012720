import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ],
    // opacity: this.props.opacity,
  }

  render() {
    const oldOpacity = this.props.opacity;
    // this.setState({opacity: oldOpacity - 0.1})
    return (
      <div className="color-box" style={{opacity: oldOpacity }}>
        {oldOpacity > 0.2 ? <ColorBox opacity={oldOpacity - 0.1} /> : null}
      </div>
    )
  }

}

