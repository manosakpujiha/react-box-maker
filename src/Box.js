import React, { Component } from 'react'

export default class Box extends Component {
  static defaultProps = {
    height: 100,
    width: 100,
    color: 'blue',
  }
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    this.props.remove()
  }
  render() {
    return (
      <div>
        <div style =
          {{
            height: `${this.props.height}px`, 
            width: `${this.props.width}px`, 
            backgroundColor: `${this.props.color}`
          }}
            >
        </div>
        <button onClick={this.handleClick}>Delete Box</button>
      </div>

    )
  }
}
