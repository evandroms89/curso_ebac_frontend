function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    if (typeof idade === 'number') {
        this.idade;
    } else {
        this.idade = undefined
    }
}

function Aluno(nome, idade, curso, semestre) {
    Pessoa.call(this, nome, idade)

    this.curso = curso;
    this.semestre = semestre;

    if (typeof semestre === 'number') {
        this.semestre;
    } else {
        this.semestre = undefined
    }
}

function Professor(nome, idade, curso, materia) {
    Pessoa.call(this, nome, idade)

    this.curso = curso;
    this. materia = materia;
}


const Aluno1 = new Aluno("Bruno", 22, "Programação", 3);
const Aluno2 = new Aluno("Paula", 28, "Design", 7);

const Professor1 = new Professor("Lívia", 43, "Programação", "Front-End");
const Professor2 = new Professor("Ademar", 49, "Design", "Computação Gráfica");

console.log(Aluno1);
console.log(Aluno2);
console.log(Professor1);
console.log(Professor2);