const assert = require('assert');
const PaintCan = require('../paint_can.js');

describe('Paint', function() {

    let paintCan;
    beforeEach(function() {
        paintCan = new PaintCan('royal blue', 20);
    });
    
    it('should have a colour', function() {
        const result = paintCan.colour;
        assert.strictEqual(result, 'royal blue')
    });

    it('should have a size', function(){
        const result = paintCan.size;
        assert.strictEqual(result, 20);
    });


})