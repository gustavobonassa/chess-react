import Peca from './peca.js';



// import { Container } from './styles';

export default class Cavalo extends Peca {
    constructor(player){
        super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"));
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

        if(this.possivel(x+1,y+2) && peca[x+1][y+2].player !== this.player){
            mov[x+1][y+2] = 1
        }
        if(this.possivel(x+1,y-2) && peca[x+1][y-2].player !== this.player){
            mov[x+1][y-2] = 1
        }
        if(this.possivel(x-1,y+2) && peca[x-1][y+2].player !== this.player){
            mov[x-1][y+2] = 1
        }
        if(this.possivel(x-1,y-2) && peca[x-1][y-2].player !== this.player){
            mov[x-1][y-2] = 1
        }
        if(this.possivel(x+2,y+1) && peca[x+2][y+1].player !== this.player){
            mov[x+2][y+1] = 1
        }
        if(this.possivel(x+2,y-1) && peca[x+2][y-1].player !== this.player){
            mov[x+2][y-1] = 1
        }
        if(this.possivel(x-2,y+1) && peca[x-2][y+1].player !== this.player){
            mov[x-2][y+1] = 1
        }
        if(this.possivel(x-2,y-1) && peca[x-2][y-1].player !== this.player){
            mov[x-2][y-1] = 1
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
