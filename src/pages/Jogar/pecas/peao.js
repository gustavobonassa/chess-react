import Peca from './peca.js';



// import { Container } from './styles';

export default class Peao extends Peca {
    constructor(player){
        super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"));
    }

    movimentosPossiveis(posicao,peca){
        var i,j,a=0;
        var mov = [];
        for(i=1;i<=8;i++){
            mov[i] = [];
            for(j=1;j<=8;j++){
                mov[i][j] = 0;
            }
        }
        var x = posicao[0];
        var y = posicao[1];
        if(this.player === 1){
            if(this.possivel(x-1,y) && peca[x-1][y].length === 0){
                mov[x-1][y] = 1;
            }else{
                a++;
            }
            if(this.possivel(x-1,y-1) && peca[x-1][y-1].player === 2)//verifica se tem uma peca de cor oposta na sua diagonal
                mov[x-1][y-1] = 1;
            if(this.possivel(x-1,y+1) && peca[x-1][y+1].player === 2)
                mov[x-1][y+1] = 1;
            if(this.possivel(x-2,y) && peca[x-2][y].length === 0 && x === 7 && a === 0) // primeiro movimento
                mov[x-2][y] = 3;
        }else{
            if(this.possivel(x+1,y) && peca[x+1][y].length === 0){
                mov[x+1][y] = 1;
            }else{
                a++;
            }
            if(this.possivel(x+1,y-1) && peca[x+1][y-1].player === 1)
                mov[x+1][y-1] = 1;
            if(this.possivel(x+1,y+1) && peca[x+1][y+1].player === 1)
                mov[x+1][y+1] = 1;
            if(this.possivel(x+2,y) && peca[x+2][y].length === 0 && x === 2 && a === 0) // primeiro movimento
                mov[x+2][y] = 3;
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
