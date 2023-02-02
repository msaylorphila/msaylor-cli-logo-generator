const inquirer = require('inquirer');
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to 3 characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from including: circle, triangle, or square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
inquirer
  .prompt([
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
  ])
  .then((response) =>
    console.log(response)
  );
