import React, { Component } from 'react';

import { Tabuleiro, Peca, Movimentos } from './styles';


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
            turno: 'branco',     
        }
        this.displayData = [];
    }


    async componentDidMount(){
        const possmov = peca[8][3].movimentosPossiveis([8,3],peca);
        //push(<div key={"dasd"} ></div>);
        console.log(possmov);
    }


    setBGColor = (pecac, cor) => {
        pecac.style.backgroundColor = cor;
        this.setState({
            sourceSelection: pecac
        });
    }

    handleClick = (p,cord) => {

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
        ///////////aki poe os movimentos possiveis no tabuleiro
        this.displayData.push(<div key={"145gfdg"} className="movm" style={{ transform: "translate("+posicoes[6][3].posx+"px, "+posicoes[6][3].posy+"px)"}}></div>);
    }

    render() {
        let rows = [];
        for(let i=1; i<=8; i++){
            for(let j=1; j<=8; j++){
                if(peca[i][j].player === 1 || peca[i][j].player === 2)
                    rows.push(
                        <Peca key={i+"-"+j} style={peca[i][j].style} id={i+"-"+j} local={posicoes[i][j].posx+"px, "+posicoes[i][j].posy+"px"} onClick = {(p) => this.handleClick(p,[i,j])} className={"player"+peca[i][j].player}></Peca>
                    );         
            }
        }
        return (
            <Tabuleiro>
               {rows}
               <Movimentos>
               {this.displayData}
                </Movimentos>
            </Tabuleiro>
        );
    }
}
