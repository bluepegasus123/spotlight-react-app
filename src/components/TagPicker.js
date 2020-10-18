import React, { Component } from 'react'
// import './App.css'
import  CheckBox  from './CheckBox'


class TagPicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fruits: [
                {id: 1, value: "banana", isChecked: false},
                {id: 2, value: "apple", isChecked: false},
                {id: 3, value: "mango", isChecked: false},
                {id: 4, value: "grapes", isChecked: false}
            ]
        }
    }

    handleAllChecked = (event) => {
        let fruits = this.state.fruites
        fruits.forEach(fruit => fruit.isChecked = event.target.checked)
        this.setState({fruits: fruits})
    }

    handleCheckChieldElement = (event) => {
        let fruits = this.state.fruites
        fruits.forEach(fruit => {
            if (fruit.value === event.target.value)
                fruit.isChecked =  event.target.checked
        })
        this.setState({fruits: fruits})
    }


    render() {
        return (
            <div className="App">
                <h1> Check and Uncheck All Example </h1>
                <input type="checkbox" onChange={this.handleAllChecked}  value="checkedall" /> Check / Uncheck All
                <ul>
                    {
                        this.state.fruits.map((fruit, index) => {
                            return (<CheckBox key={index} handleCheckChieldElement={this.handleCheckChieldElement}  {...fruit} />)
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TagPicker
