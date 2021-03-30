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

Decorator.prototype.totalPaint = function(paintColour) {
    let total = 0;
    for (paintCan of this.stock){
        if (paintCan.colour === paintColour) {
            total = total + paintCan.size;
        };
    };
};

Decorator.prototype.enoughPaint = function(paintColour, room) {
    let totalPaint = this.totalPaint(paintColour);
    return totalPaint >= room.size;
  
}
module.exports = Decorator;