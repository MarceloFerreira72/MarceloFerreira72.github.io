import Images from '../Images/projects';

const projetos = [
  {
    img: Images.projetoSistemaSolar,
    name: 'Projeto Sistema Solar',
    description: `Este foi meu primeiro projeto em React na Trybe, ele é apenas visual, mas guardo ele com muito carinho!
    Criar componentes em React é magicamente incrível, também foi meu primeiro contato com classes. Ele mostra todos os planetas do
    nosso sistema solar e também algumas missões espaciais já feitas na história da humanidade. Este projeto está estilizado tanto
    para mobile quanto para computadores`,
    repository: 'https://github.com/MarceloFerreiraTrybe23B/projeto-sistema-solar',
    page: 'https://marceloferreiratrybe23b.github.io/projeto-sistema-solar/',
  },
  {
    img: Images.projetoCarrinhoDeCompras,
    name: 'Projeto Carrinho de Compras',
    description: `Este é um dos primeiros projetos que desenvolvi na Trybe, foi feito com HTML, CSS e Javascript puros, 
    utiliza a API do MercadoLivre, pesquisa por "computadores", e gera uma 
    lista de itens que podem ser adicionados ao carrinho. Este projeto está estilizado apenas para computadores`,
    repository: 'https://github.com/MarceloFerreiraTrybe23B/projeto-carrinho-de-compras',
    page: 'https://marceloferreiratrybe23b.github.io/projeto-carrinho-de-compras/',
  },
  {
    img: Images.TwitchGameForRp,
    name: 'Twitch Game',
    description: `Meu primeiro projeto fora da trybe, 
    Aqui eu fiz um mini game com React, bem básico mesmo. 
    Onde você deveria encontrar o Twitch(personagem do jogo) 
    que fica invisível quando você inicia o game. Este projeto está estilizado apenas para computadores`,
    repository: 'https://github.com/MarceloFerreiraTrybe23B/TwitchGameForRp',
    page: 'https://marceloferreiratrybe23b.github.io/TwitchGameForRp/',
  },
];

export default projetos;