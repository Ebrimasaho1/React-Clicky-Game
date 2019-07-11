import React from "react";
import Card from './card';
import images from '../data';
import './card.css';

class gameBoard extends React.Component {
    state = {
        images: images,
    };

    //shuffle cards after images are clicked
    shuffleCard = () =>{
        console.log("I got clicked");
        console.log(this.state);
        var tempArray = this.state.images;
        var i, j, x;
        for ( i = tempArray.length-1;i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = tempArray[i];
            tempArray[i] = tempArray[j];
            tempArray[j] = x;
        };
        this.setState({images: tempArray});
    }

    render() {
        console.log(this.state.images);

        return (
            <div className="gameDesc">
                <div className="jumbotron text-center">
                    <h1>Clicky Game!</h1>,
            <p> Click on an image to earn points, but don't click on any more than once! </p>
                </div>
                <div className="container">
                    <div className="wrapper">
                        {this.state.images.map(image => <Card key={image.id} onClick={this.shuffleCard} image={image.url} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default gameBoard;