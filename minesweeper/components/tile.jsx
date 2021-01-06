import React from 'react';

class Tile extends React.Component{

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){

    }

    render() {

        const tile = this.props.tile
        let tileStatus = ""

        // if (tile.explored){
        //     if (tile.bombed){
        //         tileStatus = "bombed";
        //     } else {
        //         tileStatus = "explored";
        //     }
        // } else if (tile.flagged) {
        //     tileStatus = "flagged";
        // } else {
        //     tileStatus = "unexplored";
        // }
        { this.props.tile.bombed ? "sadface" : this.props.tile.flagged ? "⚐" : this.props.tile.revealed ? ${ this.props.tile.adjacentBombCount() } : "T" }

        return (
            <div className={tileStatus}
            onClick={this.handleClick}>T

            </div>
        )
    }
}

export default Tile;