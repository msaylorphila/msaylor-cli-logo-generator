class Shape {
    constructor(text, textColor, shapeColor,shape){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.shape = shape
    }
    renderStart(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
    }

    setColor(shapeColor){
        this.shapeColor = shapeColor
    }
    renderText(){
        return `<text x="150" y="125" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`

        //<text x="150" y="125" font-size="30" text-anchor="middle" fill="${textColor}">${text}</text>
        //</svg>
    }  
}

class Triangle extends Shape {
    constructor(text, textColor,shapeColor, shape){
        super(text, textColor, shapeColor, shape)
    }
    // setColor()
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor, shape){
        super(text, textColor, shapeColor, shape)
    }
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }

}


class Square extends Shape {
    constructor(text, textColor, shapeColor, shape){
        super(text, textColor, shapeColor,shape)
    }
    render(){
        return `<rect x="75" y="40" width="150" height="150" fill="${this.shapeColor}" />`
    }   
}

module.exports = {
    Triangle, 
    Square,
    Circle
}

const shape = new Triangle
shape.setColor("blue")
// shape.render()

console.log(shape.render())
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

