const _speed = Symbol() // property private

class Car {
    constructor(name) {
        this.name = name;
        this[_speed] = 0;
    }

    set speed(value) {
        if (typeof value !== 'number') return
        if (value < 0 || value > 100) return
        this[_speed] = value
    }

    get speed() {
        return this[_speed]
    }

    speedUp() {
        if (this[_speed] >= 100) return
        this[_speed]++
    }

    speedDown() {
        if (this[_speed] <= 0) return
        this[_speed]--
    }
}

const carro1 = new Car('Voyage')
carro1.speed = 10
console.log(carro1.speed)