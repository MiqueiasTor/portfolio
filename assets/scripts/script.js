// // Animanção dos botões Download CV e Contate-me;

// const downloadcv = document.querySelector('.download-user-cv');
// const contactuser = document.querySelector('.contact-user-btt');

// function hover_choice_style(item) {
//     item.style.backgroundColor = '#000';
//     item.style.color = '#fff';
// }

// function hover_back_style(item) {
//     item.style.backgroundColor = '#fff';
//     item.style.color = '#000';
// }

// downloadcv.onmouseenter = () => {
//     hover_back_style(contactuser);
//     hover_choice_style(downloadcv);  
// } 

// downloadcv.onmouseout = () => {
//     hover_choice_style(contactuser);
//     hover_back_style(downloadcv);
// } 

// contactuser.onmouseenter = () => {
//     hover_choice_style(downloadcv);
//     hover_back_style(contactuser);
// }

// contactuser.onmouseout = () => {
//     hover_back_style(downloadcv);
//     hover_choice_style(contactuser);

// }


// -------------------------------- ANIMAÇÕES ------------------------------------- //
// Animação de inicialização


// Animação de mostrar os elementos conforme o scrolling;
const elemento = document.querySelectorAll('[data-show]');
const before = new Array();

const animation_scrolling = () => {
    
    elemento.forEach((item, ind) => {
        item.style.transitionDuration  = item.dataset.duration + 's';
        item.style.transitionDelay  = item.dataset.delay + 's';    
        before.push(item.dataset.show);
        if (item.offsetTop <= (window.pageYOffset + (window.innerHeight * 80 / 100))) {
            item.dataset.show = 'reset';
            
        } else {
            item.dataset.show = before[ind];
        }
    });

}

window.onscroll = () => {
    animation_scrolling()
}
animation_scrolling()


// SKILLS

const close = document.querySelector('.close');
const skills = document.querySelectorAll('.row-skills p');
const modal_skills = document.querySelector('#modal-skills');
const content_skills = document.querySelector('#modal-skills .content');

let content = [
    [
        'assets/Icons/html-5.png',
        
        'HTML (Hyper Text Markup Linguage)',

        'HTML é uma linguagem de marcação utilizada na construção de páginas na Web, ou seja, define o significado e a estrutura do conteúdo da web. Documentos HTML podem ser interpretados por navegadores. Através do HTML, os desenvolvedores podem estruturar o conteúdo e fornecer informações contextuais para os navegadores e mecanismos de busca. É graças ao HTML que podemos visualizar e interagir com uma variedade de sites e aplicativos online.'
    ],

    [
        'assets/Icons/js.png',
        'JavaScript',
        'O JavaScript, por sua vez, é a principal linguagem de programação do front-end. Como uma linguagem de programação, envolve lógica típica, com funções, eventos e variáveis. Permite criar o dinamismo da página e controlar a interação direta com os usuários com essa lógica'
    ],
    
    [
        'assets/Icons/arquivo-css.png',
        'CSS ( Cascating Style Sheet )',
        'Linguagem de estilos utilizada para definir cores, fontes, tamanhos, posicionamento e qualquer outro valor estético para os elementos da página. Com o Cascading Style Sheets é possível criar animações complexas, criar efeitos com uso de parallax, que faz parecer que a imagem de fundo tem uma profundidade diferente um dos outros, criar sites interativos e também jogos com HTML5 e CSS3.'
    ],
    
    [
        'assets/Icons/scss-color.png',
        'SCSS (Syntactically Awesome Style Sheets)',
        'Cascading Style Sheets (CSS) é um conjunto de sintaxe de estilo de texto que define a semântica, o layout e o design visual de um documento HTML. Por outro lado, Sass ou Syntactically Awesome Style Sheets (SCSS) é um formato baseado em CSS cujo propósito é tornar obsoletos os problemas de desenvolvimento de frontend. Resumindo, é um CSS super poderes.'
    ],
    
    [
        'assets/Icons/react_js.png',
        'React JS',
        'React é um framework JavaScript criado pelo Facebook (atual Meta) que é usado para criar interfaces de usuário (UI) em aplicativos web. Ele é popular por ser fácil de usar, altamente flexível e escalável, e é usado por muitas empresas de tecnologia, incluindo o Facebook, Instagram e Airbnb. Um dos principais objetivos do React é facilitar a reutilização de componentes. Com o React, os desenvolvedores podem criar componentes independentes e modulares que podem ser facilmente incorporados em diferentes partes de uma aplicação.'
    ],
    
    [
        'assets/Icons/bootstrap.png',
        'BootStrap',
        'O Bootstrap tem como objetivo a construção de sites responsivos. O design responsivo garante que todos os elementos da interface funcionem em diversos dispositivos, como dispositivos moveis, TVs e computadores ao mesmo, ou seja, um site que se adapte a diferentes dispositivos. Além de tornar o trabalho mais ágil, facilitando e tornando a entrega mais rápida.'
    ],
    
    [
        'assets/Icons/node-js.png',
        'Node.JS',
        'Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos. Enquanto o JavaScript é usado como uma linguagem de desenvolvimento do lado do cliente, o Node.js cobre a programação do lado do servidor. Graças ao Node. js, o JavaScript se tornou uma linguagem de desenvolvimento de pilha completa para todos os fins.'
    ],
    
    [
        'assets/Icons/pythonpng.png',
        'Python',
        'O Python é uma linguagem de programação amplamente usada em aplicações da Web, desenvolvimento de software, ciência de dados e machine learning (ML). Os desenvolvedores usam o Python porque é eficiente e fácil de aprender e pode ser executada em muitas plataformas diferentes.'
    ],

    [   
        'assets/Icons/eng.png',
        'Inglês',
        'O Inglês é a língua da Informática, do cinema mundial, dos desportos internacionais, da aviação, dos encontros científicos, do comércio internacional e do turismo. Tem uma função social e comunicativa. Tornou-se o veículo do intercâmbio cultural.'
    ],
];

const logo_skill = document.querySelector('#modal-skills .content img');
const title_skill = document.querySelector('#modal-skills .content h4');
const par_skill = document.querySelector('#modal-skills .content p');

close.onclick = () =>{
    modal_skills.style.transform = 'scale(0)';
}

skills.forEach((item, ind) => {

    item.onclick = () => {
        content_skills.style.transform = 'scale(1)';
        modal_skills.style.transform = 'scale(1)';  

        logo_skill.src = content[ind][0];
        title_skill.innerText = content[ind][1];
        par_skill.innerHTML = content[ind][2];
    }

})


// Animação do form 

const inputs = document.querySelectorAll('.input-container .element_input');
const placeholdes = document.querySelectorAll('.input-container span');

inputs.forEach((item, ind) => {
    item.onfocus = () => {
        placeholdes[ind].style.top = '-15px';
    }

    item.onblur = () => {
        if (!item.value) {
            placeholdes[ind].style.top = '12px';
        }
    }
})


const email_button = document.querySelector('#send-email');
const aviao = document.querySelector('#send-email ion-icon');

email_button.onmouseenter = () => {
    aviao.style.left = '43%';
}

email_button.onmouseout = () => {
    aviao.style.left = '120%';
}





