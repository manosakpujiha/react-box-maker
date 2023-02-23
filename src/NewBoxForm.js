import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default class NewBoxForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            height: '',
            width: '',
            color: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        console.log(e.target.name)
        this.setState(() => {
            return  {[e.target.name]: e.target.value}
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const newBox = {...this.state, id: uuidv4()}
        this.props.createBox(newBox)
        this.setState({
            height: '',
            width: '',
            color: '',
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label htmlFor='height'>Height</label>
                    <input type='text' id='height' name={'height'} value={this.state.height} onChange={this.handleChange}></input>
                    <label htmlFor='width'>width</label>
                    <input type='text' id='width' name={'width'} value={this.state.width} onChange={this.handleChange}></input>
                    <label htmlFor='color'>color</label>
                    <input type='text' id='color' name={'color'} value={this.state.color} onChange={this.handleChange}></input>
                    <button>Add Box</button>
                </form>
            </div>
        )
    }
}
