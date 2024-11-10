// Função para gerar um número aleatório entre 1 e 100
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

// Lista de prendas
const prendas = [
    'Chupar limão',
    'Mandar mensagem para alguém',
    'Chutar balde azul',
    'Correr em volta da casa',
    'Fazer 10 polichinelos',
    'Cantar uma música aleatória',
    'Dizer um segredo para alguém',
    'Fazer uma dancinha',
    'Imitar um animal',
    'Fazer uma careta engraçada'
];

// Elementos do DOM
const herickBtn = document.getElementById('herickBtn');
const joaoBtn = document.getElementById('joaoBtn');
const jorgeBtn = document.getElementById('jorgeBtn');
const nycholasBtn = document.getElementById('nycholasBtn');
const resultDiv = document.getElementById('result');
const vencedorDiv = document.getElementById('vencedor');
const prendaDiv = document.getElementById('prenda');

// Variáveis para armazenar os números sorteados e o estado do sorteio
let numerosSorteados = {
    'Herick': null,
    'João': null,
    'Jorge': null,
    'Nycholas': null
};

// Contador de sorteios feitos
let sorteiosFeitos = 0;

// Função que sorteia o número de Herick
herickBtn.addEventListener('click', () => {
    if (numerosSorteados['Herick'] === null) {
        numerosSorteados['Herick'] = gerarNumeroAleatorio();
        resultDiv.innerHTML += `<p>Herick sorteou: ${numerosSorteados['Herick']}</p>`;
        sorteiosFeitos++;
        verificarSorteios();
    }
});

// Função que sorteia o número de João
joaoBtn.addEventListener('click', () => {
    if (numerosSorteados['João'] === null) {
        numerosSorteados['João'] = gerarNumeroAleatorio();
        resultDiv.innerHTML += `<p>João sorteou: ${numerosSorteados['João']}</p>`;
        sorteiosFeitos++;
        verificarSorteios();
    }
});

// Função que sorteia o número de Jorge
jorgeBtn.addEventListener('click', () => {
    if (numerosSorteados['Jorge'] === null) {
        numerosSorteados['Jorge'] = gerarNumeroAleatorio();
        resultDiv.innerHTML += `<p>Jorge sorteou: ${numerosSorteados['Jorge']}</p>`;
        sorteiosFeitos++;
        verificarSorteios();
    }
});

// Função que sorteia o número de Nycholas
nycholasBtn.addEventListener('click', () => {
    if (numerosSorteados['Nycholas'] === null) {
        numerosSorteados['Nycholas'] = gerarNumeroAleatorio();
        resultDiv.innerHTML += `<p>Nycholas sorteou: ${numerosSorteados['Nycholas']}</p>`;
        sorteiosFeitos++;
        verificarSorteios();
    }
});

// Função para verificar se todos os jogadores já sortearam e determinar o perdedor
function verificarSorteios() {
    if (sorteiosFeitos === 4) { // Todos os jogadores sortearam
        // Encontrar o menor número sorteado
        let participantes = Object.entries(numerosSorteados).map(([nome, numero]) => ({ nome, numero }));
        let perdedor = participantes.reduce((min, participante) => participante.numero < min.numero ? participante : min);

        vencedorDiv.innerHTML = `${perdedor.nome} perdeu!`;

        // Definir a prenda
        if (perdedor.nome === 'Nycholas') {
            prendaDiv.innerHTML = `${perdedor.nome} deve: <b>Chupar piroca</b>`;
        } else {
            const prendaAleatoria = prendas[Math.floor(Math.random() * prendas.length)];
            prendaDiv.innerHTML = `${perdedor.nome} deve: <b>${prendaAleatoria}</b>`;
        }
    }
}
