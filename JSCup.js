const ask = require('readline-sync');

/*const notas = []

console.log('Notas:', notas.join(", "))


let aluno = ask.question('Nome do aluno: ')

let nota1 = Number(ask.question('Primeira nota do aluno: '))
notas.push(nota1)

let nota2 = Number(ask.question('Segunda nota do aluno: '))
notas.push(nota2)

let nota3 = Number(ask.question('Terceira nota do aluno: '))
notas.push(nota3)

let somaMedia = Number((nota1 + nota2 + nota3) / 3)


console.log("==========CENTRAL DO ALUNO==========")

console.log('Nome do aluno: ', aluno)

console.log('Media:', somaMedia)*/

let alunos = [];

function cadastrarAluno() {
    let per1 = ask.question("Digite o nome do aluno: ");

    let nota1 = Number(ask.question('Primeira nota do aluno: '))

    let nota2 = Number(ask.question('Segunda nota do aluno: '))

    let nota3 = Number(ask.question('Terceira nota do aluno: '))

    alunos.push([per1, nota1, nota2, nota3])

}

function verifucarSituacao(nota1, nota2, nota3) {


    let media = ((nota1 + nota2 + nota3) / 3)
    return media

}

function calcularMedia(alunos) {
    let recebe = alunos[0]
    if (media >= 7) {
        return "APROVADO"
    } if (media >= 5 && media < 7) {
        return "RECUPERACAO"
    } else if (media < 5) {
        return "REPROVADO!!!!!!!!!!!!!!!!!"
    }
    return
}

function mostrarAlunos() {
    for (let aluno of alunos) {
        mostraAluno(aluno)
    }
}

function mostraAluno(aluno) {
    console.log(`
    ----------
    ${aluno[0]}
    ${aluno[1]}
    ${aluno[2]}
    ${aluno[3]}
    ----------
    
    `)
}

console.log("==========CENTRAL DO ALUNO==========")
cadastrarAluno()
calcularMedia()
mostrarAlunos()













