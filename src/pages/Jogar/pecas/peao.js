import Peca from './peca.js';



// import { Container } from './styles';

export default class Peao extends Peca {
    constructor(player){
        super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"));
    }

    movimentosPossiveis(){

    }

}
