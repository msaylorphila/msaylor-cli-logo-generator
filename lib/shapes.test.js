// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
const {Triangle} = require('./shapes')


describe('triangle', () => {

    describe('render', () => {
      it('it should return a line of svg code to create a triange', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
       
      });
    });
  });