export default class Peca {
    constructor(player, iconUrl){
        this.player = player;
        this.style = {backgroundImage: "url('"+iconUrl+"')"};
    }
}