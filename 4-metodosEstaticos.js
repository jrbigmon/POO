class RemoteController {
    constructor(tv) {
        this.tv = tv;
        this.sound = 0
        this.battery = 100
    }

    // getters and instance methods
    get volume() {
        return this.sound
    }

    get batteryTotal() {
        return this.battery.toFixed(2) + '%'
    }

    // instance methods
    turnUpSound() {
        this.useBattery()
        if (this.sound >= 100) return
        this.sound += 2
    }

    turnDownSound() {
        this.useBattery()
        if (this.sound <= 0) return
        this.sound -= 2
    }

    useBattery() {
        this.battery -= 0.1
    }

    // static methods (aponta diretamente para a classe e só existe na classe)
    static changeBattery() {
        if (this.battery > 10) return
        console.log('change battery!')
        this.battery = 100
    }
}

const controller = new RemoteController('LG')

for (let i = 0; i < 200; i++) {
    controller.turnUpSound()
    controller.turnUpSound()
    controller.turnUpSound()
}
console.log(controller.volume)
console.log(controller.batteryTotal)