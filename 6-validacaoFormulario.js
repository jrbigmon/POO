const Pessoa = require('./5-validandoCPF')

class Form extends Pessoa {
    constructor(firstName, lastName, cpf, user, password, confirmPassword) {

        const verifyEmptyFields = Form.verifyEmptyFilds(user, password, confirmPassword)

        const verifyPassword = Form.verifyPasswordEquals(password, confirmPassword)

        const verifyLengthPassword = Form.verifyLengthPassword(password)

        super(firstName, lastName, cpf)

        if (verifyEmptyFields && verifyPassword && verifyLengthPassword) {
            this.user = user;
            this.password = password;
        } else {
            delete this.firstName
            delete this.lastName
            delete this.cpf
        }
    }

    static verifyEmptyFilds(user, password, confirmPassword) {
        const formFilds = {
            user,
            password,
            confirmPassword
        }
        for (const field in formFilds) {
            if (!formFilds[field]) {
                console.log('Has empty filds!')
                return false
            }
        }
        return true
    }

    static verifyPasswordEquals(password, confirmPassword) {
        if (password !== confirmPassword) {
            console.log('Password not equal to confirm password')
            return false
        }
        return true
    }

    static verifyLengthPassword(password) {
        if (password.length < 6 || password.length > 12) {
            console.log('The password must have a minimum of 6 and a maximum of 12 characters')
            return false
        }
        return true
    }
}

const formulario = new Form('vagner', 'siqueira', '47223888814', 'rr', '123456', '123456')
console.log(formulario)