import BtnSubmit from "../Layout/Form/BtnSubmit";

import InputForm from "../Layout/Form/InputForm";
import LabelForm from "../Layout/Form/LabelForm";

const Formulario = () => {
  return (
    <div>
      <section className="bg-white h-auto mt-24" id="formulario">
        <h1 className="text-center text-red-main font-bold text-3xl">
          Formulário
        </h1>

        <div className="md:px-16 px-4 grid  grid-cols-2 md:gap-x-16 gap-y-8 md:gap-y-0 md:mt-32 mt-20 w-full ">
          <div className="col-span-2 md:col-span-1 bg-red-main rounded-lg p-12 border border-solid border-red-900">
            <form action="">
              <div className="w-full flex flex-col mb-6">
                <LabelForm customClass="text-white mb-3" name="Nome" />
                <InputForm
                  type="text"
                  customClass="rounded-lg p-3 focus:outline-none placeholder:text-blue-300"
                />
              </div>

              <div className="w-full flex flex-col mb-6">
                <LabelForm customClass="text-white mb-3" name="E-mail" />
                <InputForm
                  type="text"
                  customClass="rounded-lg p-3 focus:outline-none"
                />
              </div>

              <div className="w-full flex flex-col mb-6">
                <LabelForm
                  customClass="text-white mb-3"
                  name="Endereço do local"
                />
                <InputForm
                  type="text"
                  customClass="rounded-lg p-3 focus:outline-none"
                  placeholder="Ex: Rua Irênio Grecco, 4607"
                />
              </div>

              <div className="w-full flex flex-col mb-6">
                <LabelForm
                  customClass="text-white mb-3"
                  name="Anexar Arquivo"
                />
                <InputForm
                  type="file"
                  customClass="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 cursor-pointer  focus:outline-none"
                />
              </div>
              <BtnSubmit
                name="Enviar"
                customClass="mt-8 bg-white p-2 w-full rounded-lg text-red-main font-bold bg-white transition 
                ease-in duration-500 hover:bg-black hover:text-white"
              />
            </form>
          </div>
          <div className="col-span-2 md:col-span-1 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.801729730726!2d-47.40299878549656!3d-20.51435256204209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a650b08ae237%3A0x968952e186d11097!2sR.%20Ir%C3%AAnio%20Greco%2C%204607%20-%20Parque%20Sao%20Jorge%2C%20Franca%20-%20SP%2C%2014405-191!5e0!3m2!1spt-BR!2sbr!4v1664740075111!5m2!1spt-BR!2sbr"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg md:h-full h-96 w-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formulario;
