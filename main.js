const form = document.getElementById('form-validar');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
let formEvalido = false;

function validarCampo(campoA, campoB) {
    return campoB > campoA;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const msgSuccesso = `Sucesso! O valor de B (${campoB.value}) é maior que o valor de A (${campoA.value}).`

    const msgErro = `Erro! O valor de B (${campoB.value}) deve ser maior que o valor de A (${campoA.value}).`

    formEvalido = validarCampo(campoA.valueAsNumber, campoB.valueAsNumber)
    const containerMsgErro = document.querySelector('.error-msg');
    const containerMsgSucesso = document.querySelector('.sucesso-msg');
    if (formEvalido) {
        containerMsgSucesso.innerHTML = msgSuccesso;
        containerMsgSucesso.style.display = 'block';
        campoA.value = null;
        campoB.value = null;
        containerMsgErro.style.display = 'none';

    } else {
        containerMsgErro.innerHTML = msgErro;
        containerMsgErro.style.display = "block";
        containerMsgSucesso.style.display = 'none';
    }
})