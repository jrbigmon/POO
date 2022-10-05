class Electronic {
    constructor(name, manufacturingDate) {
        this.name = name
        this.switchedOn = false
        this.manufacturingDate = manufacturingDate
    }

    turnOn() {
        if (this.switchedOn) return
        this.switchedOn = true
    }

    turnOff() {
        if (!this.switchedOn) return
        this.switchedOn = false
    }
}

class SmartPhone extends Electronic {
    constructor(name, manufacturingDate, model, color) {
        super(name, manufacturingDate)
        this.models = model
        this.color = color
    }
}
const smartPhone1 = new SmartPhone('Samsung', '2010', 'S10', 'blue')
console.log(smartPhone1) // create a new smart phone

class MachineClear extends Electronic {
    constructor(name, manufacturingDate, capacityInKilos) {
        super(name, manufacturingDate)
        this.capacityInKilos = capacityInKilos + ' Kg'
        this.runtime = 0
    }

    get runtimeInput() {
        return this.runtime + ' minutes'
    }

    set runtimeInput(value) {
        if (value < 0) return
        this.runtime = value
    }
}

const machineClear1 = new MachineClear('MachineClear300', '2030', 10) // create a new machine

machineClear1.runtimeInput = 200 // set runtime input
console.log(machineClear1.runtimeInput) // get runtime input