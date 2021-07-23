import React, { Component } from 'react'
import $ from 'jquery'

class Highlights extends Component {
    constructor(props) {
        super(props)
        this.state = {
            footballData: [],
            title: "",
            homeTeam: "Select the home team",
            awayTeam: "Select the away team",
            embed: "",
            status: "",
        }
    }

    render() {
        return(
            <div>
                <br></br>
                <h1 id="heading">Football Highlights</h1>
                <h3 id="subheading">Select teams to see the match highlights</h3>
                <select id="dropdown-1" value={this.state.homeTeam} onChange={this.homeChange} >
                    <option value="Select the home team">--Select the home team--</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Chile">Chile</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Venezuela">Venezuela</option>
                </select>
                <span id="vs"> vs </span>
                <select id="dropdown-2" value={this.state.awayTeam} onChange={this.awayChange}>
                    <option value="Select the away team">--Select the away team--</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Chile">Chile</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Venezuela">Venezuela</option>
                </select>
                <br></br><br></br>
                <input id="search" type="button" value="Search" onClick={this.video}></input>
                <br></br><br></br>
                <div>{this.state.title}</div>
                <br></br>
                <span>{this.state.status}</span>
                <iframe title="Highlights" src={this.state.embed} width='854px' height='480px' allowFullScreen={true}></iframe>
            </div>
        )
    }

    componentDidMount() {
        $.get("https://www.scorebat.com/video-api/v1/", (data) => {
            this.setState({footballData: data})
        })
    }

    homeChange = (event) => {
        this.setState({homeTeam: event.target.value})
    }

    awayChange = (event) => {
        this.setState({awayTeam: event.target.value})
    }

    video = () => {
        let match = this.search()
        if (match == undefined) {
            alert("This match does not exist!")
        } else {
        this.setState({title: match.title})
        this.filter(match.videos[0].embed)
        }
    }

    search = () => {
        for (let i = 0; i < this.state.footballData.length; i++) {
            if (this.state.footballData[i].side1.name === this.state.homeTeam && this.state.footballData[i].side2.name === this.state.awayTeam) {
               return this.state.footballData[i]
            } 
        };
    }

    filter = (embed) => {
        let src = embed.slice(90, 187)
        this.setState({embed: src})
    }
}

export default Highlights