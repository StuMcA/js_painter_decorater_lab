const assert = require('assert');
const Room = require('../room.js');

describe('Room', function() {
    
    let room;
    beforeEach(function() {
        room = new Room('Palace', 100);
    })

    it('should have a name', function() {
        const result = room.name;
        assert.strictEqual(result, 'Palace');
    })

    it('should have size', function() {
        const result = room.size;
        assert.strictEqual(result, 100);
    })

    it('should start not painted', function() {
        const result = room.painted;
        assert.strictEqual(result, false);
    })

    it('should increase amount painted', function() {
        room.increaseAmountPainted(50);
        const result = room.amountPainted;
        assert.strictEqual(result, 50);
    })

    xit('should be able to be painted', function() {
        // const result 
    })

})