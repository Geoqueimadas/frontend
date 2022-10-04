const searchCep = async()=>{
    const cep = document.getElementById('cep').value
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    try{
        const dados = await fetch(url);
        const jsonDados = await dados.json();
        dadosCep(
            jsonDados.localidade,
            jsonDados.bairro,
            jsonDados.logradouro,
            jsonDados.uf
        )
    }catch(e){
        console.log('de novo essa merda 😡', e)
    }
}

const dadosCep = (c, b, r, u)=>{
   const cidade = document.querySelector('.cidade')
   cidade.value = c;

   const bairro = document.querySelector('.bairro')
   bairro.value = b;

   const rua = document.querySelector('.rua')
   rua.value = r;

   const uf = document.querySelector('.uf')
   uf.value = u
}
document.getElementById('cep').addEventListener('focusout', searchCep)

