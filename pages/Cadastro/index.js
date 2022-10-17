import { useState, useEffect } from "react"

import Link from "next/link";

import { cpfMask } from './mask'
import BtnSubmit from "../../components/Layout/Form/BtnSubmit"

import { useForm } from 'react-hook-form';


const cadastro = () => {

    const {register, setValue, setFocus} = useForm();
  const [form, setForm] = useState({

   

    name: '',
    email: '',
    dataNasc: '',
    telefone: '',
    cpf: '',
    senha: '',
    repSenha: '',
    cep: '',


  })



  const [emptyValue, setEmptyValue] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [validDataNasc, setValidDataNasc] = useState(false)
  const [validSenha, setValidSenha] = useState(false)
  const [validTelefone, setValidTelefone] = useState(false)
  const [validCPF, setValidCPF] = useState(false)
  const [validForm, setValidForm] = useState(false)


  

  const handleChange = (e) => {

    let newProp = form
    setValidEmail(true)
    setValidSenha(true)
    setValidTelefone(true)
    setValidCPF(true)
    setValidForm(false)

    newProp[e.target.name] = e.target.value
    setForm({...newProp})



  }

  
  const checkCEP = (e) => {

    if (!form["cep"]) return; 

    fetch(`https://viacep.com.br/ws/${form["cep"]}/json/`).then(res => res.json()).then(data => {
      console.log(data);
      // register({ name: 'address', value: data.logradouro });
      setValue('address', data.logradouro);
      setValue('neighborhood', data.bairro);
      setValue('city', data.localidade);
      setValue('uf', data.uf);
      setFocus('addressNumber');
    });
  }

 

  const handleSubmit = (e) => {

    e.preventDefault()

    // Verificar se existem campos não preenchidos

   let emptyValues = Object.values(form).some(obj => obj == "")

    setEmptyValue(emptyValues)


    // Verificar se o email é válido

    let validEmail = form["email"].toLowerCase().match(/[a-z]+@[a-z]+\.com(\.br)*/)
    setValidEmail(validEmail)

    // Verificar se dataNasc é válido

    const date = new Date().getFullYear();
    const yearInput = form["dataNasc"].split('-')[0];

    let validDataNasc = (date - yearInput) >= 18
    setValidDataNasc(validDataNasc)

    // Verificar se senha é válido

    let validSenha = form["senha"] === form["repSenha"] && form["senha"].length >= 6
    setValidSenha(validSenha)

    // Verificar se telefone é válido

    let validTelefone = form["telefone"].length == 11
    setValidTelefone(validTelefone)

    // Verificar se cpf é válido

    let validCPF = cpfMask(form["cpf"])
    setValidCPF(validCPF)







    if (!emptyValue && validEmail && validSenha && validTelefone) {
      
      fetch("http://localhost:3000", {method:"POST", body: JSON.stringify(form)})
      e.currentTarget.submit()
      setValidForm(true)

    }
  }

 


  

  return (
    <>

  <div className="bg-gray-100">
  <Link href="/">
      <div className="p-6 fixed">
      
      <BtnSubmit customClass='bg-red-main p-3 rounded-lg text-white w-44' name='Voltar'/>
      
    
    </div>
    </Link>

    <div className="h-screen flex justify-center items-center px-80  ">

      <form className="bg-red-main px-16 py-6  rounded-lg w-full overflow-auto h-5/6 " onSubmit={(e) => {handleSubmit(e)}}>
      <div className="flex flex-col">

      <label className="text-white mb-3">Nome: </label>
      <input className="mb-3 rounded-lg p-2 focus:outline-none text-red-main" type='text' name='name' onBlur={(e) => handleChange(e)} />
      {emptyValue && form["name"] == "" ? <span className="text-white text-md block mb-3 ">O campo nome precisa ser preenchido</span>: ""}

      <label className="text-white mb-3">E-mail: </label>
      <input className="mb-3 rounded-lg p-2 focus:outline-none text-red-main" type='text' name='email' onBlur={(e) => handleChange(e) } />
      {emptyValue && form["email"] == "" ? <span className="text-white text-md block mb-3">O campo e-mail precisa ser preenchido</span>: ""}
      {!validEmail && form["email"] !== "" ? <span className="text-white text-md block mb-3">E-mail inválido</span>: ""}

      <div className="flex flex-row">

      <div className="flex flex-col w-full mr-6">
      <label className="text-white mb-3">Data de Nasc: </label>
      <input className="mb-3 rounded-lg p-2 focus:outline-none text-red-main" type='date' name='dataNasc' onBlur={(e) => handleChange(e) } />
      {emptyValue && form["dataNasc"] == "" ? <span className="text-white text-md block mb-3">O campo data de nascimento precisa ser preenchido</span>: ""}
      {!validDataNasc && form["dataNasc"] !== "" ? <span className="text-white text-md block mb-3 ">Usuário precisa ter mais de 18 anos</span>: ""}
      </div>
      <div className="flex flex-col w-full">
      <label className="text-white mb-3">CEP: </label>
      <input className="mb-3 rounded-lg p-2 focus:outline-none text-red-main" type='text' name='cep' {...register("cep")} onBlur={checkCEP} onChange={(e) => handleChange(e)} placeholder='XXXXX-XXX' />
      {emptyValue && form["cep"] == "" ? <span className="text-white text-md block mb-3">O campo cep precisa ser preenchido</span>: ""}
      </div>
      </div>

      <div className="flex flex-row">

      <div className="flex flex-col w-full mr-6">

      <label className="text-white mb-3">Rua: </label>
      
      <input className="mb-3 rounded-lg p-2 focus:outline-none text-red-main" type='text' name='rua' {...register("address" )} />

      </div>

      <div className="flex flex-col w-full">

      <label className="text-white mb-3">Número: </label>
      
      <input className="mb-3 rounded-lg p-2 focus:outline-none text-red-main" type='text' name='adressNumber' {...register("addressNumber" )} />
      </div>
      </div>

      <div className="flex flex-row">
      <div className="flex flex-col w-full mr-6">
      <label className="text-white mb-3">Bairro: </label>
      <input className="mb-3 rounded-lg p-2 focus:outline-none text-red-main" type='text' name='bairro' {...register("neighborhood" )} />
      </div>
      <div className="flex flex-col w-full ">
      <label className="text-white mb-3">Cidade: </label>
      <input className="mb-3 rounded-lg p-2 focus:outline-none text-red-main" type='text' name='cidade' {...register("city" )} />
      </div>
      </div>
      <label className="text-white mb-3">UF: </label>
      <input className="mb-3 rounded-lg p-2 focus:outline-none text-red-main" type='text' name='uf' {...register("uf" )} />
  
      <div className="flex flex-row">
      <div className="flex flex-col w-full mr-6">
      <label className="text-white mb-3">Telefone: </label>
      <input className="mb-3 rounded-lg p-2 focus:outline-none text-red-main" type='text' name='telefone' onBlur={(e) => handleChange(e)} placeholder='(XX) XXXXX-XXXX' />
      {emptyValue && form["telefone"] == "" ? <span className="text-white text-md block mb-3">O campo telefone precisa ser preenchido</span>: ""}
      {!validTelefone && form["telefone"] !== "" ? <span className="text-white text-md block mb-3">Telefone inválido</span>: ""}
      </div>
      <div className="flex flex-col w-full">
      <label className="text-white mb-3">CPF: </label>
      <input className="mb-3 rounded-lg p-2 focus:outline-none text-red-main" type='text' name='cpf' onBlur={(e) => handleChange(e)} placeholder='XXX.XXX.XXX-XX' />
      {emptyValue && form["cpf"] == "" ? <span className="text-white text-md block mb-3">O campo cpf precisa ser preenchido</span>: ""}
      {!validCPF && form["cpf"] !== "" ? <span className="text-white text-md block mb-3">CPF inválido</span>: ""}
      </div>
      </div>
      <label className="text-white mb-3">Senha: </label>
      <input className="mb-3 rounded-lg p-2 focus:outline-none text-red-main" type='password' name='senha' onBlur={(e) => handleChange(e)} />
      {emptyValue && form["senha"] == "" ? <span className="text-white text-md block mb-3">O campo senha precisa ser preenchido</span>: ""}
      {form["senha"].length < 6 && form["senha"] !== "" ? <span className="text-white text-md block mb-3">Senha precisa ter mais de 6 dígitos</span>: ""}

      <label className="text-white mb-3">Repetir Senha: </label>
      <input className="mb-3 rounded-lg p-2 focus:outline-none text-red-main" type='password' name='repSenha' onBlur={(e) => handleChange(e)} />
      {emptyValue && form["repSenha"] == "" ? <span className="text-white text-md block mb-3">O campo repetir senha precisa ser preenchido</span>: ""}
      {form["repSenha"] !== form["senha"] && form["repSenha"] !== "" ? <span className="text-white text-md block mb-3">Repetir Senha precisa ser igual a senha</span>: ""}
      {form["repSenha"].length < 6 && form["repSenha"] !== "" ? <span className="text-white text-md block mb-3">Senha precisa ter mais de 6 dígitos</span>: ""}

      <BtnSubmit customClass='mt-6 bg-white p-16 text-red-main hover:text-white' name='Cadastrar'/>

      {validForm ? <h1 className="bg-green-800 block w-full p-3">Cadastro efetuado com sucesso!!</h1> : ""}

      </div>
      </form>
      </div>

      

    </div>



    </>
  )
}

export default cadastro