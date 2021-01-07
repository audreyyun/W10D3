import React from 'react';

class Tile extends React.Component{

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        const flagged = event.altKey ? true : false;
        this.props.updateGame(this.props.tile, flagged);
    }

    render() {

        const tile = this.props.tile
        let tileStatus = ""
        let text = ""

        if (tile.explored){
            if (tile.bombed){
                tileStatus = "bombed";
                text = '\u2622';
            } else {
                tileStatus = "explored";
                text = tile.adjacentBombCount();
            }
        } else if (tile.flagged) {
            tileStatus = "flagged";
            text = '\u2691';
        } else {
            tileStatus = "unexplored";
            text = "null";
        }

        return (
            <div className={tileStatus}
            onClick={this.handleClick}>
            {text}
            </div>
        )
    }
}

export default Tile;