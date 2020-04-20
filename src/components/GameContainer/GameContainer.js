import React, { Component } from 'react';
import Cards from '../Cards';
import images from "../../images.json";

class GameContainer extends Component {
    state = {
        images,
        message: "Click an image to begin!",
        score: 0,
        topScore: 0
    };

    //handleclick function

    handleClick = (id, clicked) => {

        const imageOrder = this.state.images;


        if (clicked) {
            imageOrder.forEach((image, index) => {
                imageOrder[index].clicked = false;
            });
            return this.setState({
                image: imageOrder.sort(() => Math.random() - 0.5),
                message: "You guessed incorrectly!",
                score: 0
            });
        } else {
            imageOrder.forEach((image, index) => {
                if (id === image.id) {
                    imageOrder[index].click = true;
                }
            });

            const { topScore, score } = this.state;
            const newScore = score + 1;
            const newTopScore = newScore > topScore ? newScore : topScore;

            return this.setState({
                image: imageOrder.sort(() => Math.random() - 0.5),
                message: "You guessed correctly!",
                score: newScore,
                topScore: newTopScore
            })
        }
    }

    render() {
        return (
            <div className="conainer-fluid gameContainer">
                <div className="gameMessage text-center">
                    <p>{this.state.message}</p>
                </div>

                <div className="gameScores text-center">
                    <p>Score: {this.state.score} | Top Score: {this.state.topScore}</p>
                </div>

                <div className="container">

                    <div className="row">
                        {this.state.images.map(image => (
                            <Cards
                                key={image.id}
                                id={image.id}
                                name={image.name}
                                click={image.clicked}
                                image={image.image}
                                handleClick={this.handleClick}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default GameContainer;