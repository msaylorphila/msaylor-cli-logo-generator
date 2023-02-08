const generateLogo = (response) => {
  
    if (response.shape === "square"){
 return   `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="10" y="10" width="200" height="200" fill="${response.shapeColor}"/>
<text x="110" y="135" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
</svg>`

   } else if (response.shape === "circle"){
return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="${response.shapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
</svg>`
   } else if (response.shape === "triangle"){
return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182" fill="${response.shapeColor}" />
<text x="150" y="125" font-size="30" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
</svg>`
   }
}

console.log(JSON.stringify(generateLogo))

module.exports = {
    generateLogo
}