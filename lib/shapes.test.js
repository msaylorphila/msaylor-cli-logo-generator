// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
const {Triangle, Circle, Square} = require('./shapes')


describe('triangle', () => {

    describe('render', () => {
      it('it should return a line of svg code to create a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
        
       
      });
    });
  });

  describe('circle', () => {

    describe('render', () => {
      it('it should return a line of svg code to create a blue circle', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        
       
      });
    });
  });

  describe('square', () => {

    describe('render', () => {
      it('it should return a line of svg code to create a blue square', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="75" y="40" width="150" height="150" fill="blue" />');
        
       
      });
    });
  });