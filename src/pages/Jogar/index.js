import React, { Component } from 'react';

import { Container, Tabuleiro, Peca, Movimentos, PecasFora, MostraTurno } from './styles';

import { peca, posicoes } from './cfginit.js';
//import peao from "../../assets/1.png";

var uniqkey = 0;
export default class Jogar extends Component {
    constructor(){
        super();
        this.state = {
            squares: [],
            brancosCaidos: [],
            pretosCaidos: [],
            player: 1,
            sourceSelection: -1,
            status: '',
            turno: 'branco',   
        }
        this.displayPossMov = [];
        this.lastMove = [];
        this.displayPecas = []; 
    }


    async componentDidMount(){
        
        console.log(this.displayPecas);
    }
    geraPossMovimentos = (cord) => {
        const possmov = peca[cord[0]][cord[1]].movimentosPossiveis([cord[0],cord[1]],peca);
        for(let i=1; i<=8; i++){
            for(let j=1; j<=8; j++){
                if(possmov[i][j] !== 0)
                    this.displayPossMov.push(<div key={i+"="+j} onClick={(f) => this.movePeca(peca[cord[0]][cord[1]],[i,j],cord,possmov[i][j])} className={(possmov[i][j]===1)?"movm": "movm2"} style={{ transform: "translate("+posicoes[i][j].posx+"px, "+posicoes[i][j].posy+"px)"}}></div>);
            }
        }
    }
    geraLastMov = (novacord,oldcord) => {
        this.lastMove = [];
        this.lastMove.push(<div key={novacord[0]+":"+novacord[1]} className="lastMov" style={{ transform: "translate("+posicoes[novacord[0]][novacord[1]].posx+"px, "+posicoes[novacord[0]][novacord[1]].posy+"px)"}}></div>);
        this.lastMove.push(<div key={oldcord[0]+"&"+oldcord[1]} className="lastMov" style={{ transform: "translate("+posicoes[oldcord[0]][oldcord[1]].posx+"px, "+posicoes[oldcord[0]][oldcord[1]].posy+"px)"}}></div>);  
    }
    updateTabuleiro = () => {
        this.displayPecas = [];
        for(let i=1; i<=8; i++){
            for(let j=1; j<=8; j++){
                if(peca[i][j].player === 1 || peca[i][j].player === 2){
                    this.displayPecas.push(
                        <Peca key={i+"-"+j} style={peca[i][j].style} local={posicoes[i][j].posx+"px, "+posicoes[i][j].posy+"px"} onClick={(p) => this.selecionaPeca(p)} className={"player"+peca[i][j].player} id={i+","+j}></Peca>
                    );
                }        
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
    verificaCheck = () => {
        for(let i=0;i<32;i++){

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
    insereCaidos = (novacord) => {
        //peca[novacord[0]][novacord[1]].player;
        
        if(peca[novacord[0]][novacord[1]].player === 1)
            this.state.brancosCaidos.push(<div key={uniqkey} className="pecasMortas" style={ peca[novacord[0]][novacord[1]].style }></div>);
        else
            this.state.pretosCaidos.push(<div key={uniqkey} className="pecasMortas" style={ peca[novacord[0]][novacord[1]].style }></div>);
        uniqkey++;
    }

    movePeca = (f,novacord,cordatual,type) => {
        if(type===1){
            this.setBGColor(this.state.sourceSelection, '');
            this.removePossMovimentos();
            if(peca[novacord[0]][novacord[1]].length !== 0)
                this.insereCaidos(novacord);
            peca[novacord[0]][novacord[1]]= f;
            peca[novacord[0]][novacord[1]].numMov++;
            peca[cordatual[0]][cordatual[1]] = [];
            this.updateTurno();
            this.geraLastMov(novacord,cordatual);
        }else{//////////////verifica se o tipo de movimentoo é rocky
            this.setBGColor(this.state.sourceSelection, '');
            this.removePossMovimentos();
            var old = [cordatual[0],cordatual[1]];
            var newco = [];
            if(novacord[1]>cordatual[1]){
                peca[cordatual[0]][cordatual[1]] = [];
                cordatual[1] = cordatual[1]+2;
                peca[cordatual[0]][cordatual[1]]= f;
                peca[cordatual[0]][cordatual[1]].numMov++;
                peca[cordatual[0]][cordatual[1]+1].numMov++;

                peca[cordatual[0]][cordatual[1]-1] = peca[novacord[0]][cordatual[1]+1];
                peca[cordatual[0]][cordatual[1]+1] = [];
                newco = [old[0],old[1]+3];
            }else{
                peca[cordatual[0]][cordatual[1]] = [];
                cordatual[1] = cordatual[1]-3;
                peca[cordatual[0]][cordatual[1]]= f;
                peca[cordatual[0]][cordatual[1]].numMov++;
                peca[cordatual[0]][cordatual[1]-1].numMov++;

                peca[cordatual[0]][cordatual[1]+1] = peca[cordatual[0]][cordatual[1]-1];
                peca[cordatual[0]][cordatual[1]-1] = [];
                newco = [old[0],old[1]-4];
            }
            this.updateTurno();
            this.geraLastMov(newco,old);
        }
    }

    selecionaPeca = (p) => {
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
        this.updateTabuleiro();
        return (
            <Container>
                <MostraTurno>
                    <div className="turnoClass">VEZ DO {this.state.turno}</div>
                </MostraTurno>
                <PecasFora>
                    <div className="black">
                        {this.state.pretosCaidos}
                    </div>
                    <div className="white">
                        {this.state.brancosCaidos}
                    </div>
                </PecasFora>

                <Tabuleiro>
                {this.displayPecas}
                    <Movimentos>
                        {this.displayPossMov}
                        {this.lastMove}
                    </Movimentos>
                </Tabuleiro>
            </Container>
        );
    }
}
