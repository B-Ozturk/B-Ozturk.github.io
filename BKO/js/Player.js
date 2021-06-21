export default class Player {
    constructor(name, symbol) {
        this.name =  name;
        this.symbol = symbol;
        this.points = 0;
    }

    addPoints() {
        this.points += 1;
    }

    getName(){
        return this.name;
    }
}