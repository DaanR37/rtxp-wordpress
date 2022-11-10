import React, { Component } from 'react';
import "./media.scss";

export default class Media extends Component {
    constructor() {
        super();
        this.state = {
            media: []
        }
    }
    componentDidMount() {
        let mediaURL = "http://rtxpwordpress.local/wp-json/wp/v2/media/";
        fetch(mediaURL)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    media: response
                })
            })
    }
    render() {
        let media = this.state.media.map((media, index) => {
            return (
                <div key={index}>
                    <img src={media.media_details.sizes.medium.source_url}
                        alt={media.alt_text}
                    />
                </div>
            )
        })
        return (
            <div className='media'>
                {media}
            </div>
        );
    }
}