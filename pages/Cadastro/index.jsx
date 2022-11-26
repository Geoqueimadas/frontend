import { useState, useEffect } from "react";

import Link from "next/link";

import { cpfMask } from "./mask";
import BtnSubmit from "../../components/Layout/Form/BtnSubmit";

import { useForm } from "react-hook-form";
import { CadastroRoute } from "../../utils/apiRoutes";

import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cadastro = () => {
  const { register, setValue, setFocus } = useForm();
  const [form, setForm] = useState({
    nome: "",
    email: "",
    dataNasc: "",
    telefone: "",
    senha: "",
    repSenha: "",
    cep: "",
    rua: "",
    bairro: "",
    cidade: "",
    uf: "",
  });

  const [emptyValue, setEmptyValue] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validDataNasc, setValidDataNasc] = useState(false);
  const [validSenha, setValidSenha] = useState(false);
  const [validTelefone, setValidTelefone] = useState(false);
  const [validForm, setValidForm] = useState(false);

  const [nome, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [repSenha, setRepSenha] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [num, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");

  const resetInput = () => {
    setName("");
    setEmail("");
    setDataNasc("");
    setTelefone("");
    setSenha("");
    setRepSenha("");
    setCep("");
    setRua("");
    setNumero("");
    setBairro("");
    setCidade("");
    setUf("");
  };

  const Submit = async () => {
    await axios.post(CadastroRoute, {
      nome,
      email,
      dataNasc,
      telefone,
      senha,
      cep,
      rua,
      num,
      bairro,
      cidade,
      uf,
    });
    toast.success("Cadastro efetuado com sucesso");
  };

  const checkCEP = (e) => {
    if (!form["cep"]) return;

    fetch(`https://viacep.com.br/ws/${form["cep"]}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // register({ name: 'address', value: data.logradouro });
        setValue("address", data.logradouro);
        setValue("neighborhood", data.bairro);
        setValue("city", data.localidade);
        setValue("uf", data.uf);
        setFocus("addressNumber");
        setRua(data.logradouro);
        setBairro(data.bairro);
        setCidade(data.localidade);
        setUf(data.uf);
      });

    console.log(rua);
  };

  const handleChange = (e) => {
    let newProp = form;
    setValidEmail(true);
    setValidDataNasc(true);
    setValidSenha(true);
    setValidTelefone(true);
    setValidForm(false);
    newProp[e.target.name] = e.target.value;
    setForm({ ...newProp });
    setCep(newProp["cep"]);
    console.log(newProp["rua"]);

    console.log(rua);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar se existem campos não preenchidos

    let emptyValues = Object.values(form).some((obj) => obj == "");

    setEmptyValue(emptyValues);

    // Verificar se o email é válido

    let validEmail = form["email"]
      .toLowerCase()
      .match(/[a-z]+@[a-z]+\.com(\.br)*/);
    setValidEmail(validEmail);

    // Verificar se dataNasc é válido

    const date = new Date().getFullYear();
    const yearInput = form["dataNasc"].split("-")[0];
    const idade = Number(date) - Number(yearInput);

    let validDataNasc = idade >= 18;

    setValidDataNasc(validDataNasc);

    // Verificar se senha é válido

    let validSenha =
      form["senha"] === form["repSenha"] && form["senha"].length >= 6;
    setValidSenha(validSenha);

    // Verificar se telefone é válido

    let validTelefone = form["telefone"].length == 11;
    setValidTelefone(validTelefone);

    if (!emptyValue && validEmail && validSenha && validTelefone) {
      setValidForm(true);
      Submit();
      resetInput();
    }
  };

  return (
    <>
      <div className="bg-hero">
        <Link href="/">
          <div className="p-6 fixed">
            <BtnSubmit
              customClass="bg-red-main p-3 rounded-lg text-white w-44"
              name="Voltar"
            />
          </div>
        </Link>

        <div className="h-screen flex justify-center items-center px-80  ">
          <form
            className="bg-red-main px-16 py-6  rounded-lg w-full overflow-auto h-5/6 "
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col">
              <label className="text-white mb-3">Nome: </label>
              <input
                className="mb-3 rounded-lg p-2 focus:outline-none text-red-main"
                type="text"
                name="name"
                id="inputName"
                value={nome}
                onBlur={(e) => handleChange(e)}
                onChange={(e) => setName(e.target.value)}
              />
              {emptyValue && form["name"] == "" ? (
                <span className="text-white text-md block mb-3 ">
                  O campo nome precisa ser preenchido
                </span>
              ) : (
                ""
              )}

              <label className="text-white mb-3">E-mail: </label>
              <input
                className="mb-3 rounded-lg p-2 focus:outline-none text-red-main"
                type="text"
                name="email"
                id="inputEmail"
                value={email}
                onBlur={(e) => handleChange(e)}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emptyValue && form["email"] == "" ? (
                <span className="text-white text-md block mb-3">
                  O campo e-mail precisa ser preenchido
                </span>
              ) : (
                ""
              )}
              {!validEmail && form["email"] !== "" ? (
                <span className="text-white text-md block mb-3">
                  E-mail inválido
                </span>
              ) : (
                ""
              )}

              <div className="flex flex-row">
                <div className="flex flex-col w-full mr-6">
                  <label className="text-white mb-3">Data de Nasc: </label>
                  <input
                    className="mb-3 rounded-lg p-2 focus:outline-none text-red-main"
                    type="date"
                    name="dataNasc"
                    id="inputDataNasc"
                    value={dataNasc}
                    onBlur={(e) => handleChange(e)}
                    onChange={(e) => setDataNasc(e.target.value)}
                  />
                  {emptyValue && form["dataNasc"] == "" ? (
                    <span className="text-white text-md block mb-3">
                      O campo data de nascimento precisa ser preenchido
                    </span>
                  ) : (
                    ""
                  )}

                  {!validDataNasc && form["dataNasc"] !== "" ? (
                    <span className="text-white text-md block mb-3 ">
                      Usuário precisa ter mais de 18 anos
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-white mb-3">CEP: </label>
                  <input
                    className="mb-3 rounded-lg p-2 focus:outline-none text-red-main"
                    type="text"
                    name="cep"
                    {...register("cep")}
                    onBlur={checkCEP}
                    id="inputCep"
                    value={cep}
                    onChange={(e) => handleChange(e)}
                    placeholder="XXXXX-XXX"
                  />
                  {emptyValue && form["cep"] == "" ? (
                    <span className="text-white text-md block mb-3">
                      O campo cep precisa ser preenchido
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="flex flex-row">
                <div className="flex flex-col w-full mr-6">
                  <label className="text-white mb-3">Rua: </label>

                  <input
                    className="mb-3 rounded-lg p-2 focus:outline-none text-red-main"
                    type="text"
                    name="rua"
                    {...register("address")}
                    id="inputRua"
                    onBlur={(e) => handleChange(e)}
                    value={rua}
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label className="text-white mb-3">Número: </label>

                  <input
                    className="mb-3 rounded-lg p-2 focus:outline-none text-red-main"
                    type="text"
                    name="adressNumber"
                    {...register("addressNumber")}
                    id="inputNumero"
                    value={num}
                    onBlur={(e) => handleChange(e)}
                    onChange={(e) => setNumero(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-row">
                <div className="flex flex-col w-full mr-6">
                  <label className="text-white mb-3">Bairro: </label>
                  <input
                    className="mb-3 rounded-lg p-2 focus:outline-none text-red-main"
                    type="text"
                    name="bairro"
                    {...register("neighborhood")}
                    id="inputBairro"
                    onBlur={(e) => handleChange(e)}
                    value={bairro}
                  />
                </div>
                <div className="flex flex-col w-full ">
                  <label className="text-white mb-3">Cidade: </label>
                  <input
                    className="mb-3 rounded-lg p-2 focus:outline-none text-red-main"
                    type="text"
                    name="cidade"
                    {...register("city")}
                    id="inputCidade"
                    onBlur={(e) => handleChange(e)}
                    value={cidade}
                  />
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col w-full mr-6 ">
                  <label className="text-white mb-3">UF: </label>
                  <input
                    className="mb-3 rounded-lg p-2 focus:outline-none text-red-main"
                    type="text"
                    name="uf"
                    value={uf}
                    {...register("uf")}
                    id="inputUF"
                    onBlur={(e) => handleChange(e)}
                  />
                </div>
                <div className="flex flex-col w-full ">
                  <label className="text-white mb-3">Telefone: </label>
                  <input
                    className="mb-3 rounded-lg p-2 focus:outline-none text-red-main"
                    type="text"
                    name="telefone"
                    id="inputTelefone"
                    value={telefone}
                    onBlur={(e) => handleChange(e)}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="(XX) XXXXX-XXXX"
                  />
                </div>
              </div>
              <label className="text-white mb-3">Senha: </label>
              <input
                className="mb-3 rounded-lg p-2 focus:outline-none text-red-main"
                type="password"
                name="senha"
                id="inputSenha"
                value={senha}
                onBlur={(e) => handleChange(e)}
                onChange={(e) => setSenha(e.target.value)}
              />
              {emptyValue && form["senha"] == "" ? (
                <span className="text-white text-md block mb-3">
                  O campo senha precisa ser preenchido
                </span>
              ) : (
                ""
              )}
              {form["senha"].length < 6 && form["senha"] !== "" ? (
                <span className="text-white text-md block mb-3">
                  Senha precisa ter mais de 6 dígitos
                </span>
              ) : (
                ""
              )}

              <label className="text-white mb-3">Repetir Senha: </label>
              <input
                className="mb-3 rounded-lg p-2 focus:outline-none text-red-main"
                type="password"
                name="repSenha"
                value={repSenha}
                onBlur={(e) => handleChange(e)}
                onChange={(e) => setRepSenha(e.target.value)}
              />
              {emptyValue && form["repSenha"] == "" ? (
                <span className="text-white text-md block mb-3">
                  O campo repetir senha precisa ser preenchido
                </span>
              ) : (
                ""
              )}
              {form["repSenha"] !== form["senha"] && form["repSenha"] !== "" ? (
                <span className="text-white text-md block mb-3">
                  Repetir Senha precisa ser igual a senha
                </span>
              ) : (
                ""
              )}
              {form["repSenha"].length < 6 && form["repSenha"] !== "" ? (
                <span className="text-white text-md block mb-3">
                  Senha precisa ter mais de 6 dígitos
                </span>
              ) : (
                ""
              )}

              <BtnSubmit
                customClass="mt-6 bg-white p-16 text-red-main hover:text-white"
                name="Cadastrar"
                onClick={handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default cadastro;
