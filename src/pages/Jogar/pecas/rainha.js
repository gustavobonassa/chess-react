import Peca from './peca.js';



// import { Container } from './styles';

export default class Rainha extends Peca {
    constructor(player){
        super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg"));
    }

    movimentosPossiveis(posicao,peca){
        var i,j,x,y,a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0;
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
            if(this.possivel(x-i,y-i) && peca[x-i][y-i].player !== this.player && a===0) mov[x-i][y-i] = 1;
            if(this.possivel(x+i,y+i) && peca[x+i][y+i].player !== this.player && b===0) mov[x+i][y+i] = 1;
            if(this.possivel(x-i,y+i) && peca[x-i][y+i].player !== this.player && c===0) mov[x-i][y+i] = 1;
            if(this.possivel(x+i,y-i) && peca[x+i][y-i].player !== this.player && d===0) mov[x+i][y-i] = 1;
            if(this.possivel(x+i,y) && peca[x+i][y].player !== this.player && e===0) mov[x+i][y] = 1;
            if(this.possivel(x-i,y) && peca[x-i][y].player !== this.player && f===0) mov[x-i][y] = 1;
            if(this.possivel(x,y+i) && peca[x][y+i].player !== this.player && g===0) mov[x][y+i] = 1;
            if(this.possivel(x,y-i) && peca[x][y-i].player !== this.player && h===0) mov[x][y-i] = 1;
            
            if(this.possivel(x-i,y-i) && peca[x-i][y-i].length !== 0) a++;//a,b,c,d sao para verificar se acha uma peca oposta, e nao atravessa ela
            if(this.possivel(x+i,y+i) && peca[x+i][y+i].length !== 0) b++;
            if(this.possivel(x-i,y+i) && peca[x-i][y+i].length !== 0) c++;
            if(this.possivel(x+i,y-i) && peca[x+i][y-i].length !== 0) d++;
            if(this.possivel(x+i,y) && peca[x+i][y].length !== 0) e++;
            if(this.possivel(x-i,y) && peca[x-i][y].length !== 0) f++;
            if(this.possivel(x,y+i) && peca[x][y+i].length !== 0) g++;
            if(this.possivel(x,y-i) && peca[x][y-i].length !== 0) h++;
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
