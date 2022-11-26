import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import BtnSubmit from "../../components/Layout/Form/BtnSubmit";

const listaCadastros = ({ dados }) => {
  return (
    <div>
      <Link href="/">
        <div className="p-6 fixed">
          <BtnSubmit
            customClass="bg-red-main p-3 rounded-lg text-white w-44"
            name="Voltar"
          />
        </div>
      </Link>

      <div className="bg-hero border border-solid border-red-900 px-40 py-20">
        <div className="overflow-x-auto relative h-screen rounded-lg ">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400 bg-white">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Nome
                </th>
                <th scope="col" className="py-3 px-6">
                  Email
                </th>
                <th scope="col" className="py-3 px-6">
                  Mensagem
                </th>
              </tr>
            </thead>
            {dados.map((dado, index) => (
              <tbody>
                <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {dado.nome}
                  </th>
                  <td className="py-4 px-6">{dado.email}</td>
                  <td className="py-4 px-6">{dado.mensagem}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

listaCadastros.getInitialProps = async () => {
  const response = await axios.get("http://localhost:3001/selectcontact");

  return { dados: response.data };
};

export default listaCadastros;
