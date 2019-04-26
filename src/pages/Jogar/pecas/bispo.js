import Peca from './peca.js';



// import { Container } from './styles';

export default class Bispo extends Peca {
    constructor(player){
        super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"));
    }

    movimentosPossiveis(posicao,peca){
        var i,j;
        var mov = [];
        for(i=1;i<=8;i++){
            mov[i] = [];
            for(j=1;j<=8;j++){
                peca[i][j] = 0;
            }
        }
        for(i=8;i>=posicao[0];i--){
            mov[posicao[0]][i] = 1;
        }
        return (mov);
    }

}
