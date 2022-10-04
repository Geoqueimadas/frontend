//validação do fo
class validaForm{
    constructor(){
        this.formulario = document.querySelector('.form');
        this.event()
    }
    event(){
        this.formulario.addEventListener('submit', e=>{
            this.handleSubmit(e)
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const checkCampo = this.check();
        const senhaValida = this.senhaValida();
        const cpfValido = this.validaCpf();
        if(checkCampo && senhaValida){
            alert('Cadastro feito com sucesso!');
            this.formulario.submit();
        }
    }
    //checagem dos inputs
    check(){
        let valid = true;
        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove()
        }

        for(let input of this.formulario.querySelectorAll('.val')){
            const label = input.innerText;
            if(!input.value){
                this.erro(input, `Campo ${label} não pode estar em branco`);
                valid = false;
            }
            if(input.classList.contains('cpf')){
                if(!this.validaCpf(input)) valid = false;
            }
            if(input.classList.contains('nome')) {
                if(!this.valUsuario(input)) valid = false;
            }
            if(input.classList.contains('telefone')) {
                if(!this.valPhone(input)) valid = false;
            }
            if(input.classList.contains('idade')) {
                if(!this.valIdade(input)) valid = false;
            }
        }
        return valid
    }
    
    //msg de erro
    erro(input, msg){
        const p = document.createElement('p');
        p.innerHTML = msg;
        p.classList.add('error-text');
        input.insertAdjacentElement('afterend', p)
    }

    //validar cpf
    validaCpf(input){
        const inputCpf = document.querySelector('.cpf')
        const cpf = new ValidaCpf(inputCpf.value);
        if(!cpf.valida()){
            this.erro(input, 'CPF Inválido!');
            return false
        }
        return true
    }   

    //validar usuario
    valUsuario(input){
        const usuario = input.value;
        let valid = true;
        if(typeof usuario === 'number'){
            this.erro(input, 'Não pode conter números!')
            valid = false
        }
        return valid
    }

    senhaValida(){
        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const repSenha = this.formulario.querySelector('.repSenha');

        if(senha.value !== repSenha.value){
            this.erro(repSenha, 'As senhas precisão ser iguais')
        }
        if(senha.value.length < 6){
            this.erro(senha, 'Senha precisa ter mais de 6 digitos')
        }
        return valid
    }

    //verifica teleforne
    valPhone(input){
        let valid = true
        const tel = input.value;
        if(tel.length < 14){
            this.erro(input, 'Telefone Inválido');
            valid = false;
        }
        return valid
    }
    
    valIdade(input){
        let valid = true;
        const date = new Date().getFullYear();
        const yearInput = input.value.split('-')[0];
        
        if((date-yearInput) < 18 ) {
            this.erro(input, 'Usuário precisa ser maior de 18 anos')
            valid = false;
        }
        return valid
    }
}
const valida = new validaForm();


const maskCpf = (i)=>{
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
}

const maskCep = (i)=>{
    var v = i.value;
    
    if(isNaN(v[v.length-1])){
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "9");
    if (v.length == 5) i.value += "-";
}



function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.querySelector( el );
}
window.onload = function(){
	id('.telefone').onkeyup = function(){
		mascara( this, mtel );
	}
}