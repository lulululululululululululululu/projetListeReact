import React from 'react';

class Title extends React.Component{

  render(){
    return (
        <div className="title">
          <h1>{this.props.value}</h1>
        </div>
    )
  }
}

export default Title;
