import Input_Form from "../Layout/Form/InputForm";
import TextArea_Form from "../Layout/Form/TextAreaForm.jsx";
import Label_Form from "../Layout/Form/LabelForm";
import BtnForm from "../Layout/Form/BtnSubmit";
import Social_Media from "../Layout/Contato/Social_Media";
import Link from "next/link";
import { useState, useEffect } from "react";
import BtnSubmit from "../../components/Layout/Form/BtnSubmit";
import { ContatoRoute } from "../../utils/apiRoutes";

import axios from "axios";

import { useFormik } from "formik";
import * as yup from "yup";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validationSchema } from "./validationSchema";

const Contato = () => {
  const formScheme = {
    nome: "",
    email: "",
    mensagem: "",
  };

  const formik = useFormik({
    initialValues: { ...formScheme },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: () => {
      validationSchema
        .isValid({
          nome,
          email,
          mensagem,
        })
        .then(() => {
          axios.post(ContatoRoute, {
            nome: nome.value,
            email: email.value,
            mensagem: mensagem.value,
          });
          toast.success("Enviado com sucesso");

          formik.resetForm("");
        });
    },
  });

  return (
    <>
      <section className=" mt-24" id="contato">
        <div className=" md:px-16 px-4">
          <div className="flex lg:flex-row flex-col ">
            <div className="lg:w-1/2 w-full lg:mr-20 mr-0">
              <h1 className="text-4xl text-red-main font-bold mt-10 mb-6">
                Entrar em contato
              </h1>
              <h2 className="text-red-main font-bold mb-6 text-md">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur atque
              </h2>
              <p className="text-red-main text-md">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur atque ducimus eius, ratione saepe dolor labore
                delectus perspiciatis ipsam nesciunt dolorem qui tempore?
                Molestias laboriosam veniam impedit libero maiores ea.
              </p>

              <Social_Media customClass="" />
            </div>

            <div className="lg:mt-10 mt-16 lg:w-1/2 w-full">
              <form className="flex flex-col" onSubmit={formik.handleSubmit}>
                <div className="w-full flex flex-col mb-6 ">
                  <Label_Form customClass="text-black mb-3" name="Nome" />
                  <Input_Form
                    type="text"
                    customClass="rounded-lg p-2 focus:outline-none bg-red-main text-white"
                    name="nome"
                    id="nome"
                    value={formik.values.nome}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.nome && (
                    <div className="text-red-600">{formik.errors.nome}</div>
                  )}
                </div>

                <div className="w-full flex flex-col mb-6">
                  <Label_Form customClass="text-black mb-3" name="E-mail" />
                  <Input_Form
                    type="text"
                    customClass="rounded-lg p-2 focus:outline-none bg-red-main text-white"
                    name="email"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />

                  {formik.errors.email && (
                    <div className="text-red-600">{formik.errors.email}</div>
                  )}
                </div>
                <Label_Form customClass="mb-3" name="Mensagem" />

                <TextArea_Form
                  customClass="rounded-lg p-2 focus:outline-none bg-red-main text-white"
                  name="mensagem"
                  id="mensagem"
                  cols={30}
                  rows={5}
                  placeholder=""
                  value={formik.values.mensagem}
                  onChange={formik.handleChange}
                />
                {formik.errors.mensagem && (
                  <div className="text-red-600">{formik.errors.mensagem}</div>
                )}

                <BtnSubmit
                  customClass="mt-6 bg-red-main p-16 text-white hover:text-white"
                  name="Enviar"
                />
                <Link
                  className="md:hover:text-red-main transition 
            ease-out duration-500"
                  href="ListaCadastros/"
                >
                  <div className="flex justify-end">
                    <button
                      className=" w-1/3 mt-12   md:py-2  md:text-lg md:font-semibold md:rounded md:bg-black text-white md:hover:bg-black transition 
            ease-in duration-1000"
                    >
                      Listar Envios
                    </button>
                  </div>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;
