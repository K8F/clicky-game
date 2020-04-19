import React, { Component } from 'react';
//import cards
//import images

class Wrapper extends Component {
    state = {
        //images
        message: "Click an image to begin!",
        score: 0,
        topScore: 0
    };

    render() {
        return (
            <div className="conainer-fluid wrapper">
                <div className="gameMessage text-center">
                    <p>{this.state.message}</p>
                </div>

                <div className="container">

                    <div className="row">
                        {/* images */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Wrapper;