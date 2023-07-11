function ativaLetra(eLemento){
    const arrTexto = eLemento.innerHTML.split('');
    eLemento.innerHTML = '';
    arrTexto.forEach((letra, i)=>{
setTimeout(()=>{    
    eLemento.innerHTML += letra;
}, 75 * i);

});
}

const titulo = document.querySelector('.digitando');
ativaLetra(titulo);

const ativaMenu = document. querySelector('.fa-bars');
const navMenu = document. querySelector('header .navegacao-primaria')
