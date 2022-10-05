class People {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    get falarOi() {
        return 'Olá ' + this.nome
    }
}

const pessoa1 = new People('Vagner', 'Siqueira')

console.log(pessoa1.falarOi)