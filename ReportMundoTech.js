var menu = document.querySelectorAll('.itens')

function selectLink(){
    menu.forEach((item)=>
    item.classList.remove('Ativo')
    )
    this.classList.add('Ativo')
}

menu.forEach((item)=>
item.addEventListener('click', selectLink)
)

var expn = document.querySelector('#Expanção')
var MenuSide = document.querySelector('.MenuGeral')
var expn = document.querySelector('.Corpo1')
const botaoExcecao = document.querySelector('.BOTÃO-1');
const botaoExcecao1 = document.querySelector('.BOTÃO-2');
const Excecao = document.querySelector('.MenuGeral');

expn.addEventListener('click', function(event){
    if (event.target !== botaoExcecao)
    if (event.target !==  botaoExcecao1)
    if (event.target !== Excecao)
     {
        MenuSide.classList.toggle('BotãoExpandir');
        }
        });