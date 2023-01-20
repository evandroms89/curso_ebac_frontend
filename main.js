const form =document.getElementById('form-exercicio');
const numeroA = document.getElementById('campo-A');
const numeroB = document.getElementById('campo-B');
let formEValido = false;

function validaNumero(a, b) {
    if (b > a) {
        return true
    } else {
        return false
    }
}

form.addEventListener('submit', function(e) {
    
    e.preventDefault();

    const mensagemSucesso = `O segundo número: <b>[${numeroB.value}]</b> é maior que o primeiro número: <b>[${numeroA.value}]</b>, tudo certo!`;
    const mensagemErro = `O segundo número: <b>[${numeroB.value}]</b> não é maior que o primeiro número: <b>[${numeroA.value}]</b>, tente novamente!`;
    const containerMensagemSucesso = document.querySelector('.sucess-message');
    const containerMensagemErro = document.querySelector('.error-message');

    formEValido = validaNumero(numeroA.value, numeroB.value)
    if (formEValido) {

        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemErro.style.display = 'none';
        
        numeroA.value = '';
        numeroB.value = '';

    } else {
         
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        containerMensagemSucesso.style.display = 'none';

        numeroA.value = '';
        numeroB.value = '';
    }

    numeroA.addEventListener('focus', function() {
        containerMensagemSucesso.style.display = 'none';
        containerMensagemErro.style.display = 'none';
    })

    numeroB.addEventListener('focus', function() {
        containerMensagemSucesso.style.display = 'none';
        containerMensagemErro.style.display = 'none';
    })
})


