import Bispo from './pecas/bispo.js';
import Rei from './pecas/rei.js';
import Cavalo from './pecas/cavalo.js';
import Peao from './pecas/peao.js';
import Rainha from './pecas/rainha.js';
import Torre from './pecas/torre.js';

var i,j;
const peca = [];
const posicoes = [];
const tamanho = 72;
var posix = 0;
var posiy = 0;
var xis = 64;//A-1 in ascii 
var yis = 0;
for(i=1;i<=8;i++){
    posicoes[i] = [];
    for(j=1;j<=8;j++){
        posicoes[i][j] = {posx:posix, posy:posiy,xis:xis+j,yis:yis+i};
        posix = posix + tamanho;
    }
    posiy = posiy + tamanho;
    posix=0;
}

for(i=1;i<=8;i++){
    peca[i] = [];
    for(j=1;j<=8;j++){
        peca[i][j] = [];
    }
}
for(i=1;i<=8;i++){
    peca[2][i] = new Peao(2);
    peca[7][i] = new Peao(1);
}

peca[8][1] = new Torre(1);
peca[8][2] = new Cavalo(1);
peca[8][3] = new Bispo(1);
peca[8][4] = new Rainha(1);
peca[8][5] = new Rei(1);
peca[8][6] = new Bispo(1);
peca[8][7] = new Cavalo(1);
peca[8][8] = new Torre(1);

peca[1][1] = new Torre(2);
peca[1][2] = new Cavalo(2);
peca[1][3] = new Bispo(2);
peca[1][4] = new Rainha(2);
peca[1][5] = new Rei(2);
peca[1][6] = new Bispo(2);
peca[1][7] = new Cavalo(2);
peca[1][8] = new Torre(2);



export { peca, posicoes };

