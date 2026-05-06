const ask = require('readline-sync')



function criarUsuario(nome, idade, cidade, hobbies) {
  return [nome, idade, cidade, hobbies];
}

function formatarHobbies(hobbies) {
  return hobbies.join(", ");
}

function nomeMaiusculo(nome) {
  return nome.toUpperCase();
}

function adicionarUsuario(lista, usuario) {
  return [...lista, usuario];
}

function gerarRelatorio(lista) {
  return `Total de usuários: ${lista.length}`;
}

function listarDescricoes(lista) {
  return lista.map(u => u.nome);
}

function gerarDescricao(usuario){
  return `${usuario[0]} tem ${usuario[1]} anos, mora em ${usuario[2]} e gosta de ${formatarHobbies(usuario[3])}`
}


const usuario = criarUsuario("Arthur", 19, "Esteio", ["música", "jogos", "futebol"]);

const frase = `${nomeMaiusculo(usuario[0])} tem ${usuario[1]} anos, mora em ${usuario[2]} e gosta de: ${formatarHobbies(usuario[3])}.`;

console.log(frase);

const usuarios = [];

let listaAtualizada = adicionarUsuario(usuarios, { nome: "Arthur", idade: 19 });
listaAtualizada = adicionarUsuario(listaAtualizada, { nome: "Maria", idade: 30 });

console.log(gerarRelatorio(listaAtualizada));
console.log(listarDescricoes(listaAtualizada));


