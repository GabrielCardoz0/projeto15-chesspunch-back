export default function productsControllers(req,res) {

    //buscar a lista de produtos no database
    //deixar esta função como async
    

    //array de teste enquanto a API não está online:
    const arr = [
        {
        name:"Tabuleiro em madeira de pinheiro dobrável",
        image:"https://m.media-amazon.com/images/I/91Eqwxgtc9L._SL1500_.jpg",
        description:" Tabuleiro de xadrez artesanal dobrável feito em madeira de carvalho, compartimento interno revestido para crianças e adultos. Dimensões: 30cm x 30cm x 6cm.",
        price:"110,00",
        type:"board"
        },
        {
        name:"Tabuleiro em madeira plano",
        image:"https://images.chesscomfiles.com/uploads/v1/article/24374.8ca8fb67.668x375o.9994672b3bf5@2x.jpeg",
        description:"Tabuleiro de xadrez profissional artesanal plano feito em madeira de bétula, para crianças e adultos. Dimensões: 39cm x 39cm x 5cm.",
        price:"450,00",
        type:"board"
        },
        {
        name:"Tabuleiro em madeira rustica",
        image:"https://secure.img1-fg.wfcdn.com/im/42503930/compr-r85/1282/128247844/rustic-red-olive-wood-chess-set-luxury-edition-wooden-chess-set.jpg",
        description:"Tabuleiro de xadrez luxo artesanal rústico plano feito em madeira de oliva vermelha, para crianças e adultos. Dimensões: 45cm x 45cm x 8cm.",
        price:"1100,00",
        type:"board"
        },
        {
        name:"Peças para xadrez em madeira",
        image:"https://a-static.mlcdn.com.br/800x560/pecas-para-jogo-de-xadrez-em-madeira-rei-12cm-botticelli/facilshopping1/833/1d363adcec4e5fa911030545d9d95f09.jpg",
        description:"Peças para jogo de xadrez, produzido em madeira artesanal de lei maciça (Pau-Marfim), peças muito bem trabalhadas e com um acabamento impecável.",
        price:"300,00",
        type:"pieces"
        },
        {
        name:"Peças para xadrez em plástico",
        image:"https://http2.mlstatic.com/D_NQ_NP_711435-MLB32227131350_092019-O.jpg",
        description:"Peças para jogo de xadrez em plástico maciço de alto impacto tamanho oficial. Rei com 9,5cm de altura.",
        price:"110,00",
        type:"pieces"
        },
        {
        name:"Peças para xadrex The Legend of Zelda",
        image:"https://http2.mlstatic.com/D_NQ_NP_602041-MLB26465769605_112017-O.jpg",
        description:"Peças brancas - Link (Rei), Zelda (Rainha), Impa (bispos), Darunia (Torres), Navi (Cavalos) Epona(Peões). Peças pretas - Ganondorf (Rei), Twinrova (Rainha), Iron Knuckle (Bispos) , Armos (Torres), Deku Scrub (Cavalos) , Phantom (Peões).",
        price:"400,00",
        type:"pieces"
        },
        {
        name:"Kit xadrez gigante",
        image:"https://www.xadrezgigante.com.br/wp-content/uploads/2015/05/kit-escolar-6.jpg",
        description:"Jogo em resina de alto impacto com Rei de 9 cm nas cores bege e preto com tabuleiro em couro sintético. Dimensões 50cm x 50 cm.",
        price:"800,00",
        type:"kit"
        },
        {
        name:"Kit tabuleiro dobravél",
        image:"https://images-americanas.b2w.io/produtos/221620561/imagens/xadrez-de-madeira-jogo-de-madeira-quebra-cabeca-brinquedos-dobrado-de-xadrez-tabuleiro-de-formacao-set-do-intelligence-criancas/221620561_1_xlarge.jpg",
        description:"Xadrez De Madeira Jogo De Madeira Quebra-cabeça Brinquedos Dobrado De Xadrez Tabuleiro De Formação Set Do Intelligence Crianças.",
        price:"900,00",
        type:"kit"
        },
        {
        name:"Kit jogo xadrez com abridor de vinho",
        image:"https://cf.shopee.com.br/file/02723402b4bccad0cb72cbc4e87deb54",
        description:"Maleta em madeira com berço de espuma, design sofisticado, com canivete Saca Rolhas, Anel salva gotas, tampa para vinho. Dimensões 13,5cm x 13,5cm.",
        price:"220,00",
        type:"kit"
        }
    ];

    return res.send(arr);
};
