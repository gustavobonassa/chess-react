import Peca from './peca.js';



// import { Container } from './styles';

export default class Rei extends Peca {
    constructor(player){
        super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"));
    }

    movimentosPossiveis(){

    }
 
}
