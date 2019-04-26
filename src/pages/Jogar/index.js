import React, { Component } from 'react';

import { Tabuleiro, Peca } from './styles';


import { peca, posicoes } from './cfginit.js';
//import peao from "../../assets/1.png";



export default class Jogar extends Component {
    constructor(){
        super();
        this.state = {
            squares: [],
            whiteFallenSoldiers: [],
            blackFallenSoldiers: [],
            player: 1,
            sourceSelection: -1,
            status: '',
            turno: 'branco'
        }
    }


    async componentDidMount(){
        console.log(peca);
    }

    setBGColor = (pecac, cor) => {
        pecac.style.backgroundColor = cor;
        this.setState({
            sourceSelection: pecac
        });
    }

    handleClick = (p,cord) => {
        //const pcs = this.state.peca[i][j].slice();
        if( this.state.turno === 'branco' && peca[cord[0]][cord[1]].player === 1){
            if(this.state.sourceSelection === -1){
                    p.target.style.backgroundColor = 'rgb(90, 152, 51)';
                    this.setState({sourceSelection: p.target});
            }else{
                if( p.target === this.state.sourceSelection ){
                    this.setBGColor(this.state.sourceSelection, '');
                    this.setState({sourceSelection: -1});
                }else{
                    this.setBGColor(this.state.sourceSelection, '');
                    p.target.style.backgroundColor = 'rgb(90, 152, 51)';
                    this.setState({sourceSelection: p.target});
                }
            }
        }
        if( this.state.turno === 'preto' && peca[cord[0]][cord[1]].player === 2){
            if(this.state.sourceSelection === -1){
                    p.target.style.backgroundColor = 'rgb(90, 152, 51)';
                    this.setState({sourceSelection: p.target});
            }else{
                if( p.target === this.state.sourceSelection ){
                    this.setBGColor(this.state.sourceSelection, '');
                    this.setState({sourceSelection: -1});
                }else{
                    this.setBGColor(this.state.sourceSelection, '');
                    p.target.style.backgroundColor = 'rgb(90, 152, 51)';
                    this.setState({sourceSelection: p.target});
                }
            }
        }
        


    }

    render() {
        let rows = [];
        for(let i=1; i<=8; i++){
            for(let j=1; j<=8; j++){
                if(peca[i][j].player === 1 || peca[i][j].player === 2)
                    rows.push(<Peca key={i+"-"+j} style={peca[i][j].style} id={i+"-"+j} local={posicoes[i][j].posx+"px, "+posicoes[i][j].posy+"px"} onClick = {(p,cord) => this.handleClick(p,[i,j])} className={"player"+peca[i][j].player}></Peca>);         
            }
        }
        return (
            <Tabuleiro>
               {rows}
            </Tabuleiro>
        );
    }
}
