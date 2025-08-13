const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao sair da escola, você descobre uma nova tecnologia: um chat capaz de responder qualquer pergunta, criar imagens realistas e até gerar vozes humanas. Qual é sua primeira reação?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início, você sentiu medo do que essa tecnologia poderia causar no mundo."
            },
            {
                texto: "Isso é incrível!",
                afirmacao: "Você ficou animado e quis explorar como a IA poderia facilitar a sua vida."
            }
        ]
    },
    {
        enunciado: "Com a popularidade dessa tecnologia, chamada Inteligência Artificial, sua professora de tecnologia propôs um trabalho sobre o uso de IA na educação. O que você faz?",
        alternativas: [
            {
                texto: "Usa uma ferramenta de IA para pesquisar informações e organizar as ideias de forma clara e objetiva.",
                afirmacao: "Você aproveitou a IA para aprender mais rápido e produzir um ótimo conteúdo."
            },
            {
                texto: "Escreve o trabalho com base em suas anotações, conversas com colegas e pesquisas manuais.",
                afirmacao: "Preferiu confiar nos seus próprios métodos e sentiu que desenvolveu autonomia no aprendizado."
            }
        ]
    },
    {
        enunciado: "Após entregar o trabalho, a turma participa de um debate sobre como a IA pode impactar os empregos no futuro. Qual é sua opinião?",
        alternativas: [
            {
                texto: "Acredita que a IA vai gerar novas oportunidades e potencializar as habilidades humanas.",
                afirmacao: "Você se tornou um defensor do uso positivo da IA para criar novas profissões e transformar carreiras."
            },
            {
                texto: "Se preocupa com as pessoas que podem perder empregos para máquinas e defende medidas para protegê-las.",
                afirmacao: "Sua empatia fez você apoiar iniciativas para um uso mais ético e equilibrado da tecnologia."
            }
        ]
    },
    {
        enunciado: "Depois do debate, a professora pede que cada aluno crie uma imagem que represente sua visão sobre IA. Qual opção você escolhe?",
        alternativas: [
            {
                texto: "Desenhar a imagem usando um programa tradicional, como o Paint ou Photoshop.",
                afirmacao: "Você percebeu que ainda há valor em métodos tradicionais e compartilhou dicas de design com seus colegas."
            },
            {
                texto: "Gerar a imagem usando uma IA criativa.",
                afirmacao: "Você acelerou o processo e aprendeu a usar IA para transformar ideias em arte, ajudando outros a fazer o mesmo."
            }
        ]
    },
    {
        enunciado: "Seu grupo tem um trabalho de biologia atrasado, e um colega decide usar a IA para escrever tudo. O texto ficou idêntico ao gerado pelo chat. O que você faz?",
        alternativas: [
            {
                texto: "Aceita o texto como está, afinal, alguém precisou escrever os comandos para o chat.",
                afirmacao: "Você acabou se tornando dependente da IA para tudo, perdendo a chance de desenvolver suas próprias habilidades."
            },
            {
                texto: "Decide revisar e acrescentar ideias próprias, garantindo um trabalho mais original e confiável.",
                afirmacao: "Você entendeu que a IA é uma ferramenta de apoio, mas a criatividade humana faz toda a diferença."
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
