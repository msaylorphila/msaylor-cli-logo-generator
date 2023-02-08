class Zoomer {
    constructor(program, name){
        this.program = program
        this.name = name
        this.eyeColor;
    }
    intro(){
        return `Hi, my name is ${this.name} and I"m taking the ${this.program}`
    }
    addColor(color){
        this.eyeColor = color
    }
    changeName(newName){
        this.name = newName
    }
}

class Tutor extends Zoomer {
    constructor(program, name, rate){
        super(program, name)
        this.rate = rate
    }
    intro(){
        return super.intro() + ` As a tutor, I get paid ${this.rate}`
    }
}
var prog = "Full Stack Bootcamp"


var zoom = new Zoomer(prog,"Margaret")
console.log(zoom.program)
console.log(zoom.name)
console.log(zoom.intro())

console.log("THE TUTOR COMING UP ************************")
var tut = new Tutor(prog,"Alex", 5)

tut.changeName("Alexis")
console.log(tut.name)
tut.addColor("brown")
console.log(tut.eyeColor)
console.log(tut.intro())