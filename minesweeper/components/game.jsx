import React from 'react';

import Board from './board';
import * as Minesweeper from '../minesweeper'; 

class Game extends React.Component {

    constructor(props){
        super(props);

        this.state = { 
            board: new Minesweeper.Board(8,8)
        }

        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(tile, flagged){
        if (flagged){
            tile.toggleFlag();
        } else {
            tile.explore();
        } 

        this.setState({board: this.state.board})
    }

    render() {
    
        const won = if (this.board.won){
            return "You win"
        } else if (this.board.lost){
            return "You lose"
        }
        return (
            <div>
                <Board board={this.state.board} 
                updateGame={this.updateGame}/>
                // <h1>{won}</h1>
            </div>
        );
    }   
};

export default Game;