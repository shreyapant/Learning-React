import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log('reguler comp render')
    return (
      <div>
       Reguler Component {this.props.name} 
      </div>
    )
  }
}

export default RegComp
