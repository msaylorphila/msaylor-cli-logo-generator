
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

class CLI {
    constructor(text, textColor, shape, shapeColor){
        this.text = text,
        this.textColor = textColor,
        this.shape = shape,
        this.shapeColor = shapeColor
        
    }

    start(){
    inquirer
    .prompt(questions)
    .then((response) =>
     handleResponse(response),
     
    );

    }
    

}

const handleResponse = (response) => {
        // const logoSvg = generateLogo(response);
        // console.log(newTri.render())
        const newTri = new Triangle();
        const newCircle = new Circle();
        const newSquare = new Square();
        const triangle = newTri.render(response.text, response.textColor, response.shapeColor);
        const circle = newCircle.render(response.text, response.textColor, response.shapeColor);
        const square = newSquare.render(response.text, response.textColor, response.shapeColor);

        
        if (response.shape === "triangle"){
        fs.writeFile('./examples/triangle.svg', triangle, 'utf-8')
            .then(() => console.log('Generated triangle.svg'))
            .catch(err => console.log`Error: ${err}`)
        } else if (response.shape === "circle"){
            fs.writeFile('./examples/circle.svg', circle, 'utf-8')
                .then(() => console.log('Generated circle.svg'))
                .catch(err => console.log`Error: ${err}`)
            } else if (response.shape === "square"){
                fs.writeFile('./examples/square.svg', square, 'utf-8')
                    .then(() => console.log('Generated square.svg'))
                    .catch(err => console.log`Error: ${err}`)
                } 
    }

module.exports = {
    CLI
}