import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const { opacity } = this.props;
    if (opacity < 0.2) {
      return null;
    }

    return (
      <div className="color-box" style={{opacity: opacity}}>
        <ColorBox opacity={opacity - 0.1} />
      </div>
    );
  }

  // render() {
  //   const { opacity } = this.props;
  //   return (
  //     <div className="color-box" style={{opacity: opacity}}>
  //       {opacity < 0.2 ? null : <ColorBox opacity={opacity - 0.1} />}
  //     </div>
  //   );
  // }

}

