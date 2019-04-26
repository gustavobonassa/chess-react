import Peca from './peca.js';



// import { Container } from './styles';

export default class Cavalo extends Peca {
    constructor(player){
        super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"));
    }

    movimentosPossiveis(){

    }

}
