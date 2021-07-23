import React, { Component } from 'react'

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
            </div>
        )
    }
}

export default Highlights