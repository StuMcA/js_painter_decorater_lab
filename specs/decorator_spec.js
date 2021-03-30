const assert = require('assert');
const Decorator = require('../decorator.js');
const Room = require('../room.js');
const PaintCan = require('../paint_can.js');

describe('Decorator', function() {

    let decorator;
    let room;
    let paintCan;
    beforeEach(function() {
        decorator = new Decorator('Dave');
        room = new Room('Palace', 100);
        paintCan = new PaintCan('royal blue', 20);
    });

    it('should have a name', function() {
        const result = decorator.name;
        assert.strictEqual(result, 'Dave');
    });

    it('should start with no paint', function() {
        const result = decorator.stock;
        assert.deepStrictEqual(result, []);
    })

    it('should be able to add paint', function() {
        decorator.getPaint(paintCan, 1);
        const result = decorator.stock;
        assert.deepStrictEqual(result, [paintCan]);
    });
})