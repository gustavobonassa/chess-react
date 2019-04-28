import React, { Component } from 'react';

import { Container, Tabuleiro, Peca, Movimentos, PecasFora, MostraTurno } from './styles';


import { peca, posicoes } from './cfginit.js';
//import peao from "../../assets/1.png";

var uniqkey = 0;
var test = 0;
export default class Jogar extends Component {
    constructor(){
        super();
        this.state = {
            squares: [],
            brancosCaidos: [],
            pretosCaidos: [],
            lastMove: [],
            player: 1,
            sourceSelection: -1,
            status: '',
            turno: 'branco',     
        }
        this.displayPossMov = [];
        this.displayPecas = [];
    }


    async componentDidMount(){
        
        console.log(this.displayPecas);
    }
    geraPossMovimentos = (cord) => {
        const possmov = peca[cord[0]][cord[1]].movimentosPossiveis([cord[0],cord[1]],peca);
        //push(<div key={"dasd"} ></div>);
        for(let i=1; i<=8; i++){
            for(let j=1; j<=8; j++){
                if(possmov[i][j]===1)
                    this.displayPossMov.push(<div key={i+"="+j} onClick={(f) => this.movePeca(peca[cord[0]][cord[1]],[i,j],cord)} className="movm" style={{ transform: "translate("+posicoes[i][j].posx+"px, "+posicoes[i][j].posy+"px)"}}></div>);
            }
        }
    }
    updateTurno = () => {
        if( this.state.turno === 'branco'){
            this.setState({
                turno: 'preto'
            });
        }else{
            this.setState({
                turno: 'branco'
            });
        }
    }
    removePossMovimentos = () => {
        if(this.displayPossMov){
            this.displayPossMov = [];
        }
    }
    removePecas = () => {
        if(this.displayPecas){
            this.displayPecas = [];
        }
    }

    setBGColor = (pecac, cor) => {
        pecac.style.backgroundColor = cor;
        this.setState({
            sourceSelection: pecac
        });
    }
    insereCaidos = (player, estilo) => {
        this.state.brancosCaidos.push(<div key={uniqkey} style={{ estilo }}>test</div>);
        uniqkey++;
    }

    movePecaDom = (selp, novacord) => {
        var transPos = "translate("+posicoes[novacord[0]][novacord[1]].posx+"px, "+posicoes[novacord[0]][novacord[1]].posy+"px)";
        selp.style.transform = transPos;
        selp.style.transitionDuration = "0.2s";
        selp.id = novacord[0]+","+novacord[1];
        this.setState({
            sourceSelection: selp
        });
    }
    movePeca = (f,novacord,cordatual) => {
        this.setBGColor(this.state.sourceSelection, '');
        this.removePossMovimentos();
        if(peca[novacord[0]][novacord[1]].length !== 0){
            this.insereCaidos(peca[novacord[0]][novacord[1]].player, peca[novacord[0]][novacord[1]].style);
            peca[novacord[0]][novacord[1]]= [];
        }
        peca[novacord[0]][novacord[1]]= f;
        peca[cordatual[0]][cordatual[1]] = [];
        this.movePecaDom(this.state.sourceSelection, novacord);

        this.updateTurno();
    }

    selecionaPeca = (p) => {
        //this.removePecas();
        console.log(this.displayPecas);
        var cord = p.target.id.split(",");
        cord[0] = parseInt(cord[0]);
        cord[1] = parseInt(cord[1]);
        this.removePossMovimentos();
        if( this.state.turno === 'branco' && peca[cord[0]][cord[1]].player === 1){
            if(this.state.sourceSelection === -1){
                    p.target.style.backgroundColor = 'rgb(90, 152, 51)';
                    this.setState({sourceSelection: p.target});
                    this.geraPossMovimentos(cord);
            }else{
                if( p.target === this.state.sourceSelection ){
                    this.setBGColor(this.state.sourceSelection, '');
                    this.setState({sourceSelection: -1});
                }else{
                    this.setBGColor(this.state.sourceSelection, '');
                    p.target.style.backgroundColor = 'rgb(90, 152, 51)';
                    this.setState({sourceSelection: p.target});
                    this.geraPossMovimentos(cord);
                }
            }
        }
        if( this.state.turno === 'preto' && peca[cord[0]][cord[1]].player === 2){
            if(this.state.sourceSelection === -1){
                    p.target.style.backgroundColor = 'rgb(90, 152, 51)';
                    this.setState({sourceSelection: p.target});
                    this.geraPossMovimentos(cord);
            }else{
                if( p.target === this.state.sourceSelection ){
                    this.setBGColor(this.state.sourceSelection, '');
                    this.setState({sourceSelection: -1});
                }else{
                    this.setBGColor(this.state.sourceSelection, '');
                    p.target.style.backgroundColor = 'rgb(90, 152, 51)';
                    this.setState({sourceSelection: p.target});
                    this.geraPossMovimentos(cord);
                }
            }
        }

    }

    render() {
        if(test === 0){
            for(let i=1; i<=8; i++){
                for(let j=1; j<=8; j++){
                    if(peca[i][j].player === 1 || peca[i][j].player === 2)
                        this.displayPecas.push(
                            <Peca key={i+"-"+j} style={peca[i][j].style} local={posicoes[i][j].posx+"px, "+posicoes[i][j].posy+"px"} onClick={(p) => this.selecionaPeca(p)} className={"player"+peca[i][j].player} id={i+","+j}></Peca>
                        );         
                }
            }
            test++;
        }
        return (
            <Container>
                <MostraTurno>
                    <div className="turnoClass">VEZ DO {this.state.turno}</div>
                </MostraTurno>
                <PecasFora>
                    <div className="black">
                        {this.pretosCaidos}
                    </div>
                    <div className="white">
                        {this.brancosCaidos}
                    </div>
                </PecasFora>

                <Tabuleiro>
                {this.displayPecas}
                    <Movimentos>
                        {this.displayPossMov}
                    </Movimentos>
                </Tabuleiro>
            </Container>
        );
    }
}
