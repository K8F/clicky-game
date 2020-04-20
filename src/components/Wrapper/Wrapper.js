import React, { Component } from 'react';
import Cards from '../Cards';
import images from "../../images.json";

class Wrapper extends Component {
    state = {
        images,
        message: "Click an image to begin!",
        score: 0,
        topScore: 0
    };

    //handle click function

    render() {
        return (
            <div className="conainer-fluid wrapper">
                <div className="gameMessage text-center">
                    <p>{this.state.message}</p>
                </div>

                <div className="container">

                    <div className="row">
                        {this.state.images.map(image =>(
                            <Cards
                                key={image.id}
                                id={image.id}
                                name={image.name}
                                click={image.clicked}
                                image={image.image}
                                //handle click
                                />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Wrapper;