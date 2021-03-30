const PaintCan = require('./paint_can');
const Room = require('./room');

const Decorator = function(name) {
    this.name = name;
    this.stock = [];
}

Decorator.prototype.getPaint = function(paintCan, amount){
    for (let i = 0; i < amount; i++){
        this.stock.push(paintCan);
    }
}

Decorator.prototype.enoughPaint = function(room){
    let total = 0;
    for (paintCan of this.stock){
        total = total + paintCan.size;
    }

    if (total >= room.size){
        return true;
    } else {
        return false;
    }
}
module.exports = Decorator;