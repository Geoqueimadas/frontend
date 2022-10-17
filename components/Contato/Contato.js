import Input_Form from "../../components/Layout/Form/InputForm";
import TextArea_Form from "../Layout/Form/TextAreaForm.js";
import Label_Form from "../../components/Layout/Form/LabelForm"
import BtnForm from "../../components/Layout/Form/BtnSubmit";
import Social_Media from "../../components/Layout/Contato/Social_Media";

const Contato = () => {
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
              Aspernatur atque ducimus eius, ratione saepe dolor labore delectus
              perspiciatis ipsam nesciunt dolorem qui tempore? Molestias
              laboriosam veniam impedit libero maiores ea.
            </p>

            <Social_Media customClass="" />
          </div>

          <div className="lg:mt-10 mt-16 lg:w-1/2 w-full">
            <form className="flex flex-col" action="">
            <div className="w-full flex flex-col mb-6">
                <Label_Form customClass="text-black mb-3" name="Nome" />
                <Input_Form
                  type="text"
                  customClass="rounded-lg p-2 focus:outline-none bg-red-main text-white"
                />
              </div>

              <div className="w-full flex flex-col mb-6">
                <Label_Form
                  customClass="text-black mb-3"
                  name="E-mail"
                />
                <Input_Form
                  type="text"
                  customClass="rounded-lg p-2 focus:outline-none bg-red-main text-white"
                />
              </div>
              <Label_Form customClass="mb-3" name="Mensagem" />

              <TextArea_Form
                customClass="rounded-lg p-2 focus:outline-none bg-red-main text-white"
                name="textAreaForm"
                id="textForm"
                cols={30}
                rows={5}
                placeholder=""
              />

              <BtnForm
                type="submit"
                href=""
                name="Enviar"
                customClass="mt-6 text-white"
              />
            </form>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Contato;