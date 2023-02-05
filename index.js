const inquirer = require('inquirer');
const { generateLogo }  = require('./lib/generate.js')
const fs = require('fs/promises');
const { Triangle } = require('./lib/shapes.js')

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

const handleResponse = (response) => {
    // const logoSvg = generateLogo(response);
    // console.log(newTri.render())

    if (response.shape === "triangle"){
    const newTri = new Triangle(response.text, response.textColor, response.shape, response.shapeColor)    
    const logoSvg = newTri.render()
    fs.writeFile('./examples/triangle.svg', logoSvg, 'utf-8')
        .then(() => console.log('Generated triangle.svg'))
        .catch(err => console.log`Error: ${err}`)
    } 
    else if (response.shape === "circle"){
    const newCirc = new Circle(response.text, response.textColor, response.shape, response.shapeColor)
    
        fs.writeFile('./examples/circle.svg', logoSvg, 'utf-8')
            .then(() => console.log('Generated circle.svg'))
            .catch(err => console.log`Error: ${err}`)
    } 
    else if (response.shape === "square"){
        const newSqua = new Square(response.text, response.textColor, response.shape, response.shapeColor)

            fs.writeFile('./examples/square.svg', logoSvg, 'utf-8')
                .then(() => console.log('Generated square.svg'))
                .catch(err => console.log`Error: ${err}`)
    }

}


inquirer
    .prompt(questions)
    .then((response) =>
     handleResponse(response)
    );

// const newTri = new Triangle(response.text, response.textColor, response.shape, response.shapeColor)
// const newTri = new Triangle

// console.log(newTri.render())
// module.exports = {
//     response
// }