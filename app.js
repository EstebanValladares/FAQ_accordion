const botones = document.querySelectorAll('.buttons');
const texto1 = document.querySelector('.container-text1');
const texto2 = document.querySelector('.container-text2');
const texto3 = document.querySelector('.container-text3');
const texto4 = document.querySelector('.container-text4');

const eventoBotones = botones.forEach(conteo => {
    conteo.addEventListener('click',conteoBotones)
    conteo.dataset.pressed = 'false';
});
function conteoBotones(e){
    let numero = e.target.dataset.numero;
    const textoNuevo = document.createElement('p');
    textoNuevo.classList.add('texto-container');
    switch (numero) {
        case '1':
                if(e.target.dataset.pressed == 'false'){
                    texto1.appendChild(textoNuevo);
                    textoNuevo.textContent = 'Fronted Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. It´s suitable for all levels and ideal for portfolio building.'
                    e.target.textContent = '-'
                    e.target.dataset.pressed = 'true'
                }else{
                    const classTexto = document.querySelector('.texto-container')
                    texto1.removeChild(classTexto)
                    e.target.textContent = '+'
                    e.target.dataset.pressed = 'false'
                }
            break;
        case '2':
                if(e.target.dataset.pressed == 'false'){
                    texto2.appendChild(textoNuevo);
                    textoNuevo.textContent = 'if it´s free, you learn and improve your programming skills'
                    e.target.textContent = '-'
                    e.target.dataset.pressed = 'true'
                }else{
                    const classTexto = document.querySelector('.texto-container')
                    texto2.removeChild(classTexto)
                    e.target.textContent = '+'
                    e.target.dataset.pressed = 'false'
                }
            break;
        case '3':
                if(e.target.dataset.pressed == 'false'){
                    texto3.appendChild(textoNuevo);
                    textoNuevo.textContent = 'Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!'
                    e.target.textContent = '-'
                    e.target.dataset.pressed = 'true'
                }else{
                    const classTexto = document.querySelector('.texto-container')
                    texto3.removeChild(classTexto)
                    e.target.textContent = '+'
                    e.target.dataset.pressed = 'false'
                }
            break;
        case '4':
                if(e.target.dataset.pressed == 'false'){
                    texto3.appendChild(textoNuevo);
                    textoNuevo.textContent = 'We launch a new challenge every two weeks. We alternate between free and premium challenge launches, so we launch one free and one premium challenge each month.'
                    e.target.textContent = '-'
                    e.target.dataset.pressed = 'true'
                }else{
                    const classTexto = document.querySelector('.texto-container')
                    texto3.removeChild(classTexto)
                    e.target.textContent = '+'
                    e.target.dataset.pressed = 'false'
                }
            break;
    
        default:
            break;
    }
}
