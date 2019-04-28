export default class Peca {
    constructor(player, iconUrl, numMov = 0){
        this.player = player;
        this.style = {backgroundImage: "url('"+iconUrl+"')"};
        this.numMov = numMov;
    }
}