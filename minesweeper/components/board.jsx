import React from 'react';
import Tile from './tile';

class Board extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        
        const board = this.props.board
        return board.grid.map((row, idx) => {
        
            return(  
                 <div className="row" 
                    key={idx}>
                        {
                           row.map((tile, idx2) => {
                                 return <Tile tile={tile}
                                updateGame={this.updateGame} 
                                key={idx2}/>
                            })
                    }
                 </div>
                
            );
        })
       
    }
}

export default Board;