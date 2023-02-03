const inquirer = require('inquirer');
const { generateLogo }  = require('./lib/generate.js')
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
    },
]

const handleResponse = (response) => {
    const logoSvg = generateLogo(response);

    if (response.shape === "triangle"){
    fs.writeFile('./examples/triangle.svg', logoSvg, 'utf-8')
        .then(() => console.log('Generated logo.svg'))
        .catch(err => console.log`Error: ${err}`)
    } 
    else if (response.shape === "circle"){
        fs.writeFile('./examples/circle.svg', logoSvg, 'utf-8')
            .then(() => console.log('Generated logo.svg'))
            .catch(err => console.log`Error: ${err}`)
    } 
    else if (response.shape === "square"){
            fs.writeFile('./examples/square.svg', logoSvg, 'utf-8')
                .then(() => console.log('Generated logo.svg'))
                .catch(err => console.log`Error: ${err}`)
    }

}


inquirer
    .prompt(questions)
    .then((response) =>
     handleResponse(response)
    );
