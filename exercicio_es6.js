const alunosNotas = [
    {
        nome: 'Claudio',
        nota: 8
    },

    {
        nome: 'Maria',
        nota: 9
    },

    {
        nome: 'Henrique',
        nota: 3
    },
    
    {
        nome: 'Fernanda',
        nota: 5
    },

    {
        nome: 'Bruno',
        nota: 4
    },

    {
        nome: 'Letícia',
        nota: 10
    }
]

function alunosAprovados() {
    const notasMaioresQueSeis = alunosNotas.filter(function(objeto) {
        return objeto.nota >= 6;
    })

    return notasMaioresQueSeis;
}

console.log(alunosAprovados());

