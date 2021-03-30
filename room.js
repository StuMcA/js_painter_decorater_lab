const Room = function(name, size) {
    this.name = name;
    this.size = size;
    this.painted = false;
    this.amountPainted = 0;
}

Room.prototype.complete = function() {
    if (this.size === this.amountPainted){
        this.painted = true;
    }
}

module.exports = Room