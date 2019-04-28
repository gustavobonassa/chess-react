import Peca from './peca.js';



// import { Container } from './styles';

export default class Rei extends Peca {
    constructor(player){
        var numMov = 0;
        super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"), numMov);
    }
    movimentosPossiveis(posicao,peca){
        var i,j,x,y;
        var mov = [];
        for(i=1;i<=8;i++){
            mov[i] = [];
            for(j=1;j<=8;j++){
                mov[i][j] = 0;
            }
        }
        x = posicao[0];
        y = posicao[1];

        if(this.possivel(x+1,y+1) && peca[x+1][y+1].player !== this.player){
            mov[x+1][y+1] = 1
        }
        if(this.possivel(x+1,y-1) && peca[x+1][y-1].player !== this.player){
            mov[x+1][y-1] = 1
        }
        if(this.possivel(x-1,y+1) && peca[x-1][y+1].player !== this.player){
            mov[x-1][y+1] = 1
        }
        if(this.possivel(x-1,y-1) && peca[x-1][y-1].player !== this.player){
            mov[x-1][y-1] = 1
        }
        if(this.possivel(x,y+1) && peca[x][y+1].player !== this.player){
            mov[x][y+1] = 1
        }
        if(this.possivel(x,y-1) && peca[x][y-1].player !== this.player){
            mov[x][y-1] = 1
        }
        if(this.possivel(x+1,y) && peca[x+1][y].player !== this.player){
            mov[x+1][y] = 1
        }
        if(this.possivel(x-1,y) && peca[x-1][y].player !== this.player){
            mov[x-1][y] = 1
        }
        ////////////////rocky
        if(this.numMov === 0 && peca[x][y+1].length === 0 && peca[x][y+2].length === 0 && peca[x][y+3].numMov ===0){
            mov[x][y+2] = 2;
            mov[x][y+3] = 2;
        }
        if(this.numMov === 0 && peca[x][y-1].length === 0 && peca[x][y-2].length === 0 && peca[x][y-3].length === 0 && peca[x][y-4].numMov ===0){
            mov[x][y-2] = 2;
            mov[x][y-3] = 2;
            mov[x][y-4] = 2;
        }
        
        return (mov);
    }
    possivel(px, py){
        if(px>0 && px <9 && py>0 && py <9){
            return 1;
        }
        return 0;
    }
}
