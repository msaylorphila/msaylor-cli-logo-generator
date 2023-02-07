///text, textColor, shape, shapeColor
// const { response } = require('./index.js');
// const { data } = require('/index.js')


class Shape {
    constructor(text, textColor, shapeColor){
        this.text = text,
        this.textColor = textColor,
        this.shapeColor = shapeColor
    }
    
}

class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor){
        super(text, textColor, shapeColor)
        this.shape = shape
    }
    // setColor()
    render(text, textColor, shapeColor){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />
        <text x="150" y="125" font-size="30" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`}
}

class Circle extends Shape {
    constructor(text, textColor, shape, shapeColor){
        super(text, textColor, shapeColor)
        this.shape = shape
    }
    render(text, textColor, shapeColor){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
        <text x="150" y="125" font-size="30" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`}

}


class Square extends Shape {
    constructor(text, textColor, shape, shapeColor){
        super(text, textColor, shapeColor)
        this.shape = shape
    }
    render(text, textColor, shapeColor){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="75" y="40" width="150" height="150" fill="${shapeColor}" />
        <text x="150" y="125" font-size="30" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`}
}

module.exports = {
    Triangle, 
    Square,
    Circle
}


// ////cirle
{/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="green" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>  */}

// ///square
// <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
// <rect x="10" y="10" width="30" height="30"/>
// <text x="110" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
// </svg>


//  ////triangle
/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182" fill="blue" />
<text x="150" y="125" font-size="30" text-anchor="middle" fill="white">SVG</text>
</svg> */

