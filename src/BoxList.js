import React, { Component } from 'react'
import Box from './Box'

export default class BoxList extends Component {
  render() {
    return (
      <div>
        <Box height={this.props.height} width={this.props.width} color={this.props.color}/>


      </div>
    )
  }
}
