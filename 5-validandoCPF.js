class Pessoa {
    constructor(firstName, lastName, cpf) {
        const verifyEmptyFields = this.checkEmptyFields(firstName, lastName, cpf)

        if (verifyEmptyFields) {
            Object.defineProperty(this, 'cpfClear', {
                writable: false,
                enumerable: false,
                configurable: false,
                value: cpf.replace(/\D+/g, '')
            })

            if (this.checkLength() && this.chenckSequence()) {
                this.firstName = firstName
                this.lastName = lastName
                this.cpf = this.cpfClear
            }
        }
    }

    checkLength() {
        if (this.cpfClear.length !== 11) {
            console.log('Length incorrect!')
            return false
        }
        return true
    }

    chenckSequence() {
        if (this.cpfClear.charAt(0).repeat(11) === this.cpfClear) {
            console.log('Sequence of numbers prohibited!')
            return false
        }
        return true
    }

    checkEmptyFields(firstName, lastName, cpf) {
        const people = {
            firstName,
            lastName,
            cpf
        }
        for (const property in people) {
            if (!people[property]) {
                return false
            }
        }
        return true
    }
}

const p1 = new Pessoa('', 'Siqueira', '47223888814')
console.log(p1)

module.exports = Pessoa