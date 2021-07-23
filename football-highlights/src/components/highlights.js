import React, { Component } from 'react';
import $ from 'jquery'

class Highlights extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1 id="heading">Football Highlights</h1>
                <h2 id="sub-heading">Select two teams to see the match highlights</h2>
                <select id="dropdown-1">
                    <option value="Select the home team">--Select the home team--</option>
                </select>
                <select id="dropdown-2">
                    <option value="Select the away team">--Select the away team--</option>
                </select>
                <input id="search" type="button" value="Search"></input>

            </div>
        )
    }

    componentDidMount() {

    }
}

export default Highlights