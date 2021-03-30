const Room = function(name, size) {
    this.name = name;
    this.size = size;
    this.painted = false;
    this.amountPainted = 0;
}

Room.prototype.increaseAmountPainted = function(paintUsed) {
    this.amountPainted += paintUsed;
}

Room.prototype.complete = function() {
    this.painted = true;
}

module.exports = Room;