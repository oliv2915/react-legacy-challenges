import React, {Component} from 'react';
import Dogs from "./Dogs";

export default class DogIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {url: ""}
        this.fetchImage = this.fetchImage.bind(this);
    }

    fetchImage() {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(data => this.setState(
                {url: data.message}
            ))
            .then(console.log)
    }

    componentDidMount() {
        this.fetchImage();
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.fetchImage}>Get New Doggo!</button>
                <br />
                <img width="320" src={this.state.url} alt="doggo" />
            </div>
        )
    }
}