import React, { Component } from 'react';

import { Container, Tabuleiro, Peca, Movimentos, PecasFora, MostraTurno } from './styles';

import { peca, posicoes } from './cfginit.js';
//import peao from "../../assets/1.png";
import Rainha from './pecas/rainha.js';

var uniqkey = 0;
var cont = 0;
export default class Jogar extends Component {
    constructor(){
        super();
        this.state = {
            brancosCaidos: [],
            pretosCaidos: [],
            player: 1,
            sourceSelection: -1,
            status: '',
            turno: 'branco',
            playerBranco: 1,
            rotate: 0,
            log: []
        }
        this.displayPossMov = [];
        this.lastMove = [];
        this.displayPecas = [];
        this.displayCords = [];
        this.checkKing = [];
    }


    async componentDidMount(){
        this.updateCord(0);
        console.log(this.displayPecas);
        console.log(posicoes);
        //console.log(peca[7][3].movimentosPossiveis([7,1],peca,1));
    }
    geraPossMovimentos = (cord) => {
        const possmov = peca[cord[0]][cord[1]].movimentosPossiveis([cord[0],cord[1]],peca);
        for(let i=1; i<=8; i++){
            for(let j=1; j<=8; j++){
                if(possmov[i][j] !== 0)
                    this.displayPossMov.push(<div key={i+"="+j} onClick={(f) => this.movePeca(peca[cord[0]][cord[1]],[i,j],cord,possmov[i][j])} className={(possmov[i][j]===1 || possmov[i][j]===3)?"movm": "movm2"} style={{ transform: "translate("+posicoes[i][j].posx+"px, "+posicoes[i][j].posy+"px)"}}></div>);
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
    updateCord = () => {
        this.displayCords = [];
        var bol = this.state.rotate;
        if(bol===0){
            for(let i=1; i<=8; i++){
                this.displayCords.push(<div key={i+"f"} className="posCord" style={{ transform: "translate("+posicoes[i][8].posx+"px, "+posicoes[i][8].posy+"px)"}}><span className="posR">{posicoes[i][8].yis}</span></div>);
            }
            for(let i=1; i<=8; i++){
                this.displayCords.push(<div key={i+"p"} className="posCord" style={{ transform: "translate("+posicoes[8][i].posx+"px, "+posicoes[8][i].posy+"px)"}}><span className="posL">{String.fromCharCode(posicoes[8][i].xis)}</span></div>);
            }
        }else{
            for(let i=8; i>=1; i--){
                this.displayCords.push(<div key={i+"f"} className="posCord" style={{ transform: "translate("+posicoes[8-i+1][8].posx+"px, "+posicoes[8-i+1][8].posy+"px)"}}><span className="posR">{posicoes[i][8].yis}</span></div>);
            }
            for(let i=1; i<=8; i++){
                this.displayCords.push(<div key={i+"p"} className="posCord" style={{ transform: "translate("+posicoes[8][i].posx+"px, "+posicoes[8][i].posy+"px)"}}><span className="posL">{String.fromCharCode(posicoes[8][i].xis)}</span></div>);
            }
        }
        bol = (bol===0)? 1 : 0;
        this.setState({
            rotate: bol
        });
    }
    rodarTab = () => {
        var m = [];
        var w,z;
        for(w=1;w<=8;w++){
            m[w] = [];
            for(z=1;z<=8;z++){
                m[w][z] = [];
            }
        }
        for(let i=1; i<=8; i++){
            for(let j=1; j<=8; j++){
                if(peca[i][j].length !== 0){
                    var temp = peca[i][j];
                    temp.player = (temp.player === 1) ? 2 : 1 ;
                    m[8-i+1][j] = temp;
                }
            }
        }
        for(w=1;w<=8;w++){
            for(z=1;z<=8;z++){
                peca[w][z] = m[w][z];
            }
        }
        var whit = (this.state.playerBranco === 1) ? 2 : 1 ;
        this.setState({
            playerBranco: whit
        });
        this.updateCord(1);
    }
    updateTurno = () => {
        if( this.state.turno === 'branco'){
            this.setState({
                turno: 'preto',
                player: 2
            });
        }else{
            this.setState({
                turno: 'branco',
                player: 1
            });
        }
    }
    verificaCheck = (novacord,f,temp) => {
        //console.log(peca[8][5]);
        var jafoi1 = [];
        var jafoi2 = [];
        var i,j,x,y,w,z;
        for(w=1;w<=8;w++){
            jafoi1[w] = [];
            jafoi2[w] = [];
            for(z=1;z<=8;z++){
                jafoi1[w][z] = 0;
                jafoi2[w][z] = 0;
            }
        }
        for(x=1; x<=8; x++){
            for(y=1; y<=8; y++){
                if(this.state.turno === 'branco' && temp[x][y].player !== this.state.playerBranco && temp[x][y].length !== 0){
                    var possmov = temp[x][y].movimentosPossiveis([x,y],temp,1);
                    for(i=1; i<=8; i++){
                        for(j=1; j<=8; j++){
                            if(possmov[i][j] === 1 && jafoi1[i][j]===0){
                                jafoi1[i][j]++;
                                if(temp[i][j].__proto__.constructor.name === "Rei"){
                                    if((possmov[novacord[0]][novacord[1]]===0 && f.__proto__.constructor.name === "Rei"))
                                        return 0;
                                    else
                                        return [i,j];
                                }
                            }
                        }
                    }
                }
                if(this.state.turno === 'preto' && temp[x][y].player === this.state.playerBranco && temp[x][y].length !== 0){
                    var possmov2 = temp[x][y].movimentosPossiveis([x,y],temp,1);
                    for(i=1; i<=8; i++){
                        for(j=1; j<=8; j++){
                            if(possmov2[i][j] === 1 && jafoi2[i][j]===0){
                                jafoi2[i][j]++;
                                if(temp[i][j].__proto__.constructor.name === "Rei"){
                                    if(possmov2[novacord[0]][novacord[1]]===0 && f.__proto__.constructor.name === "Rei"){
                                        return 0;
                                    }else{
                                        return [i,j];
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        console.log(jafoi1);
        console.log(jafoi2);
        return 0;
    }
    removePossMovimentos = () => {
        if(this.displayPossMov){
            this.displayPossMov = [];
        }
    }
    removeKingCheck = () => {
        if(this.checkKing){
            this.checkKing = [];
        }
    }

    setBGColor = (pecac, cor) => {
        pecac.style.backgroundColor = cor;
        this.setState({
            sourceSelection: pecac
        });
    }
    insereCaidos = (novacord) => {
        if(peca[novacord[0]][novacord[1]].player === this.state.playerBranco)
            this.state.brancosCaidos.push(<div key={uniqkey} className="pecasMortas" style={ peca[novacord[0]][novacord[1]].style }></div>);
        else
            this.state.pretosCaidos.push(<div key={uniqkey} className="pecasMortas" style={ peca[novacord[0]][novacord[1]].style }></div>);
        uniqkey++;
    }

    movePeca = (f,novacord,cordatual,type) => {
        var aux = [];
        if(peca[novacord[0]][novacord[1]].length !== 0)
            aux = peca[novacord[0]][novacord[1]];

        peca[novacord[0]][novacord[1]]= f;
        peca[novacord[0]][novacord[1]].numMov++;
        peca[cordatual[0]][cordatual[1]] = [];
        var a = this.verificaCheck(novacord,f,peca);
        peca[cordatual[0]][cordatual[1]]= f;
        peca[cordatual[0]][cordatual[1]].numMov--;
        peca[novacord[0]][novacord[1]] = aux;

        this.setBGColor(this.state.sourceSelection, '');
        this.removePossMovimentos();
        this.removeKingCheck();
        if(a){
            this.checkKing = [];
            console.log("rei em check, mova ele");
            this.checkKing.push(<div key="dsad" className="kingCheck" style={{ transform: "translate("+posicoes[a[0]][a[1]].posx+"px, "+posicoes[a[0]][a[1]].posy+"px)"}}></div>);
        }else{
            if(type===1 || type=== 3){
                if(peca[novacord[0]][novacord[1]].length !== 0)
                    this.insereCaidos(novacord);
                peca[novacord[0]][novacord[1]]= f;
                peca[novacord[0]][novacord[1]].numMov++;
                peca[cordatual[0]][cordatual[1]] = [];
                if(peca[novacord[0]][novacord[1]].__proto__.constructor.name === "Peao" && (novacord[0] === 1 || novacord[0] === 8)){
                    peca[novacord[0]][novacord[1]] = new Rainha(this.state.player);
                }
                this.state.log.unshift(<div key={cont+"cc"}>{this.state.turno+": "+peca[novacord[0]][novacord[1]].__proto__.constructor.name+" movida em "+String.fromCharCode(posicoes[novacord[0]][novacord[1]].xis)+" "+posicoes[novacord[0]][novacord[1]].yis}</div>);
                cont++;
                this.geraLastMov(novacord,cordatual);
            }else{//////////////verifica se o tipo de movimentoo é rocky
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
                this.geraLastMov(newco,old);
            }
            this.updateTurno();
        }
    }

    selecionaPeca = (p) => {
        var cord = p.target.id.split(",");
        cord[0] = parseInt(cord[0]);
        cord[1] = parseInt(cord[1]);
        this.removePossMovimentos();
        if( this.state.turno === 'branco' && peca[cord[0]][cord[1]].player === this.state.playerBranco){
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
        if( this.state.turno === 'preto' && peca[cord[0]][cord[1]].player !== this.state.playerBranco){
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
                    <div className="rodar" onClick={(f) => this.rodarTab()}>Girar tabuleiro</div>
                </MostraTurno>
                <PecasFora>
                    <div className="black">
                        {this.state.pretosCaidos}
                    </div>
                    <div className="white">
                        {this.state.brancosCaidos}
                    </div>
                    <div className="log">
                    {this.state.log}
                    </div>
                </PecasFora>

                <Tabuleiro>
                {this.displayPecas}
                {this.displayCords}
                    <Movimentos>
                        {this.checkKing}
                        {this.displayPossMov}
                        {this.lastMove}
                    </Movimentos>
                </Tabuleiro>
            </Container>
        );
    }
}
