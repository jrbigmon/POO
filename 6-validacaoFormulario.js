const Pessoa = require('./5-validandoCPF')

class Form extends Pessoa {
    constructor(firstName, lastName, cpf, user, password, confirmPassword) {
        super(firstName, lastName, cpf)

        const verifyEmpty = this.verifyEmptyFilds(this.firstName, this.lastName, cpf, user, password, confirmPassword)

        const verifyPassword = this.verifyPasswordEquals(password, confirmPassword)

        const verifyLengthPassword = this.verifyLengthPassword(password)

        if (verifyEmpty && verifyPassword && verifyLengthPassword) {
            cpf ? this.cpf = cpf.replace(/\D+/g, '') : this.cpf = false;
            this.user = user;
            this.password = password;
            this.confirmPassword = confirmPassword;
        }
    }

    verifyEmptyFilds(firtName, lastName, cpf, user, password, confirmPassword) {
        const formFilds = {
            firtName,
            lastName,
            cpf,
            user,
            password,
            confirmPassword
        }
        for (const field in formFilds) {
            if (formFilds[field] === undefined || formFilds[field] === '' || formFilds[field] == null) {
                console.log('Has empty fild!')
                return false
            }
        }
        return true
    }

    verifyPasswordEquals(password, confirmPassword) {
        if (password !== confirmPassword) {
            console.log('Password not equal to confirm password')
            return false
        }
        return true
    }

    verifyLengthPassword(password) {
        if (password.length < 6 || password.length > 12) {
            console.log('The password must have a minimum of 6 and a maximum of 12 characters')
            return false
        }
        return true
    }
}

const formulario = new Form('', 'siqueira', '47223888814', 'jr', '123456', '123456')
console.log(formulario)