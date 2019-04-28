import Peca from './peca.js';



// import { Container } from './styles';

export default class Bispo extends Peca {
    constructor(player){
        super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"));
    }

    movimentosPossiveis(posicao,peca){
        var i,j,x,y,a=0,b=0,c=0,d=0;
        var mov = [];
        for(i=1;i<=8;i++){
            mov[i] = [];
            for(j=1;j<=8;j++){
                mov[i][j] = 0;
            }
        }
        x = posicao[0];
        y = posicao[1];

        for(i=1;i<=8;i++){
            if(this.possivel(x-i,y-i) && peca[x-i][y-i].player !== this.player && a===0){
                mov[x-i][y-i] = 1;
            }
            if(this.possivel(x+i,y+i) && peca[x+i][y+i].player !== this.player && b===0){
                mov[x+i][y+i] = 1;
            }
            if(this.possivel(x-i,y+i) && peca[x-i][y+i].player !== this.player && c===0){
                mov[x-i][y+i] = 1;
            }
            if(this.possivel(x+i,y-i) && peca[x+i][y-i].player !== this.player && d===0){
                mov[x+i][y-i] = 1;
            }
            if(this.possivel(x-i,y-i) && peca[x-i][y-i].length !== 0) a++;//a,b,c,d sao para verificar se acha uma peca oposta, e nao atravessa ela
            if(this.possivel(x+i,y+i) && peca[x+i][y+i].length !== 0) b++;
            if(this.possivel(x-i,y+i) && peca[x-i][y+i].length !== 0) c++;
            if(this.possivel(x+i,y-i) && peca[x+i][y-i].length !== 0) d++;
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
