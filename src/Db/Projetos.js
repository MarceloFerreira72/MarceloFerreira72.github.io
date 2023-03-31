import Images from '../Images/projects';

const projetos = [
  {
    img: Images.projetoCarrinhoDeCompras,
    name: 'Projeto Carrinho de Compras',
    description: `Este é um dos primeiros projetos que desenvolvi na Trybe, foi feito com HTML, CSS e Javascript puros, 
    utiliza a API do MercadoLivre, pesquisa por "computadores", e gera uma 
    lista de itens que podem ser adicionados ao carrinho. (CSS só configurado para uma tela de computador)`,
    repository: 'https://github.com/MarceloFerreiraTrybe23B/projeto-carrinho-de-compras',
    page: 'https://marceloferreiratrybe23b.github.io/projeto-carrinho-de-compras/',
  },
  {
    img: Images.TwitchGameForRp,
    name: 'TwitchGameForRp',
    description: `Meu primeiro projeto fora da trybe, 
    Aqui eu fiz um mini game com React, bem básico mesmo. 
    Onde você deveria encontrar o Twitch(personagem do jogo) 
    que fica invisível quando você inicia o game`,
    repository: 'https://github.com/MarceloFerreiraTrybe23B/TwitchGameForRp',
    page: 'https://marceloferreiratrybe23b.github.io/TwitchGameForRp/',
  },
];

export default projetos;