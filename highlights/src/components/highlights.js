import React, { Component } from 'react'
import $ from 'jquery'
require('dotenv').config()

class Highlights extends Component {
    constructor(props) {
        super(props)
        this.apiKey = process.env.REACT_APP_API_KEY
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
                <header className="Header"><h1>Football Highlights</h1></header>
                <h3 id="subheading">Select teams to see the match highlights</h3>
                <select id="dropdown-1" value={this.state.homeTeam} onChange={this.homeChange} >
                    <option value="Select the home team">--Select the home team--</option>
                    <option value="Arsenal">Arsenal</option>
                    <option value="Aston Villa">Aston Villa</option>
                    <option value="Brentford">Brentford</option>
                    <option value="Burnley">Burnley</option>
                    <option value="Brighton">Brighton</option>
                    <option value="Chelsea">Chelsea</option>
                    <option value="Everton">Everton</option>
                    <option value="Leeds">Leeds</option>
                    <option value="Leicester">Leicester</option>
                    <option value="Liverpool">Liverpool</option>
                    <option value="Manchester City">Manchester City</option>
                    <option value="Manchester United">Manchester United</option>
                    <option value="Newcastle">Newcastle</option>
                    <option value="Norwich">Norwich</option>
                    <option value="Southampton">Southampton</option>
                    <option value="Tottenham">Tottenham</option>
                    <option value="Watford">Watford</option>
                    <option value="West Ham">West Ham</option>
                    <option value="Wolves">Wolves</option>
                </select>
                <span id="vs"> vs </span>
                <select id="dropdown-2" value={this.state.awayTeam} onChange={this.awayChange}>
                    <option value="Select the away team">--Select the away team--</option>
                    <option value="Arsenal">Arsenal</option>
                    <option value="Aston Villa">Aston Villa</option>
                    <option value="Brentford">Brentford</option>
                    <option value="Burnley">Burnley</option>
                    <option value="Brighton">Brighton</option>
                    <option value="Chelsea">Chelsea</option>
                    <option value="Everton">Everton</option>
                    <option value="Leeds">Leeds</option>
                    <option value="Leicester">Leicester</option>
                    <option value="Liverpool">Liverpool</option>
                    <option value="Manchester City">Manchester City</option>
                    <option value="Manchester United">Manchester United</option>
                    <option value="Newcastle">Newcastle</option>
                    <option value="Norwich">Norwich</option>
                    <option value="Southampton">Southampton</option>
                    <option value="Tottenham">Tottenham</option>
                    <option value="Watford">Watford</option>
                    <option value="West Ham">West Ham</option>
                    <option value="Wolves">Wolves</option>
                </select>
                <br></br><br></br>
                <input id="search" type="button" value="Search" onClick={this.video}></input>
                <br></br><br></br>
                <div>{this.state.title}</div>
                <br></br>
                <span>{this.state.status}</span>
                <iframe id="video" title="Highlights" src={this.state.embed} width='854px' height='480px' allowFullScreen={true}></iframe>
            </div>
        )
    }

    componentDidMount() {
        $.get(`https://www.scorebat.com/video-api/v3/feed/?token=${this.apiKey}`, (data) => {
            this.setState({footballData: data.response})
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
        if (match === undefined) {
            alert("This match does not exist!")
        } else {
        this.setState({title: match.title})
        this.filter(match.videos[0].embed)
        }
    }

    search = () => {
        for (let i = 0; i < this.state.footballData.length; i++) {
            if (this.state.footballData[i].title.includes(this.state.homeTeam) & this.state.footballData[i].title.includes(this.state.awayTeam)) {
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