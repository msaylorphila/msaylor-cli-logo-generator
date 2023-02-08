
const inquirer = require('inquirer');
const fs = require('fs/promises');
const questions = [
    {
        type: 'input',
        message: 'Please choose up to 3 letters for your text',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Please enter a color or hexadecimal number for your text color choice',
        name: 'textColor',
        default: 'white',
        // validate: function (response){
        //     if (response.includes('#')) {
        //         const hexCheck = response.match(/[0-9A-Fa-f]{3}{1,2}$/)
        //         if (hexCheck = null) {
        //             return 'Please enter a valid hexidecimal number'
        //         } 
        //     return true
        //     }
        // }

    },
    {
        type: 'list',
        message: 'Please choose a shape from the list below',
        choices: ['circle', 'triangle', 'square'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'Please enter a color or hexadecimal number for your shape color choice',
        name: 'shapeColor',
        default: 'black',
        // validate: function (response){
        //     if (response.includes('#')) {
        //         const hexCheck = response.match(/[0-9A-Fa-f]{3}{1,2}$/)
        //         if (hexCheck = null) {
        //             return 'Please enter a valid hexidecimal number'
        //         } else {
        //         return true
        //         }
        //     }
        // }
    },
]
const { Triangle, Circle, Square } = require('./shapes');
const { write } = require('fs');

class CLI {
    // constructor(text, textColor, shape, shapeColor){
    //     this.text = text,
    //     this.textColor = textColor,
    //     this.shape = shape,
    //     this.shapeColor = shapeColor

    // }

    start() {
        inquirer
            .prompt(questions)
            .then((response) =>
                this.handleResponse(response),

            );

    }
    handleResponse(response){
        let shape
        switch (response.shape) {
            case "triangle":
                shape = new Triangle(response.text, response.textColor, response.shapeColor, response.shape)
                break;
            case "circle":
                shape = new Circle(response.text, response.textColor, response.shapeColor, response.shape)
                break;
            default:
                shape = new Square(response.text, response.textColor, response.shapeColor, response.shape)
                break;
        }
        this.writeToFile(shape)
    }
    writeToFile(shape){
        fs.writeFile(`./examples/${shape.shape}.svg`,  shape.renderStart()+ shape.render() + shape.renderText(), 'utf-8')
        .then(() => console.log(`Generated ${shape.shape}.svg`))
        .catch(err => console.log`Error: ${err}`)
       
    }

}
const writeToFile = (shape)=>{
    fs.writeFile(`./examples/${shape.shape}.svg`,  shape.renderStart()+ shape.render() + shape.renderText(), 'utf-8')
    .then(() => console.log(`Generated ${shape.shape}.svg`))
    .catch(err => console.log`Error: ${err}`)
   
}

const handleResponse = (response) => {
    let shape
    switch (response.shape) {
        case "triangle":
            shape = new Triangle(response.text, response.textColor, response.shapeColor, response.shape)
            break;
        case "circle":
            shape = new Circle(response.text, response.textColor, response.shapeColor, response.shape)
            break;
        default:
            shape = new Square(response.text, response.textColor, response.shapeColor, response.shape)
            break;
    }
    writeToFile(shape)
}

module.exports = {
    CLI
}