import BtnSubmit from "../Layout/Form/BtnSubmit";
import { useFormik } from "formik";
import * as yup from "yup";
import { FormularioRoute } from "../../utils/apiRoutes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputForm from "../Layout/Form/InputForm";
import LabelForm from "../Layout/Form/LabelForm";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";
import { useState, useEffect } from "react";
import { validationSchema } from "./validationSchema";
import axios from "axios";

Geocode.setApiKey(KEY);

const Formulario = () => {
  const [submit, setSubmit] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const formScheme = {
    enderecoFormulario: "",
    emailFormulario: "",
    nomeFormulario: "",
  };

  const formik = useFormik({
    initialValues: { ...formScheme },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: () => {
      setSubmit(true);
      validationSchema
        .isValid({
          enderecoFormulario,
          emailFormulario,
          nomeFormulario,
        })
        .then(() => {
          axios.post(FormularioRoute, {
            endereco: enderecoFormulario.value,
            email: emailFormulario.value,
            nome: nomeFormulario.value,
          });
          console.log(nomeFormulario);
          console.log(enderecoFormulario);

          toast.success("Enviado com sucesso");

          formik.resetForm("");
          setSubmit(true);
          console.log(position);
        });
    },
  });

  {
    submit &&
      Geocode.fromAddress(enderecoFormulario.value).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);
          setLatitude(lat);
          setLongitude(lng);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  const position = {
    lat: latitude,
    lng: longitude,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAPLxFQeSE4KUKHXE3GDzeDi7EjfSi79CQ",
  });

  return (
    <div>
      <section className="bg-white h-auto mt-24" id="formulario">
        <h1 className="text-center text-red-main font-bold text-3xl">
          Formulário
        </h1>

        <div className="md:px-16 px-4 grid  grid-cols-2 md:gap-x-16 gap-y-8 md:gap-y-0 md:mt-32 mt-20 w-full ">
          <div className="col-span-2 md:col-span-1 bg-red-main rounded-lg p-12 border border-solid border-red-900">
            <form onSubmit={formik.handleSubmit}>
              <div className="w-full flex flex-col mb-6">
                <LabelForm customClass="text-white mb-3" name="Nome" />
                <InputForm
                  type="text"
                  customClass="rounded-lg p-3 focus:outline-none"
                  placeholder=""
                  id="nomeFormulario"
                  name="nomeFormulario"
                  value={formik.values.nomeFormulario}
                  onChange={formik.handleChange}
                />
                {formik.errors.nomeFormulario && (
                  <div className="text-white">
                    {formik.errors.nomeFormulario}
                  </div>
                )}
              </div>
              <div className="w-full flex flex-col mb-6">
                <LabelForm customClass="text-white mb-3" name="E-mail" />
                <InputForm
                  type="text"
                  customClass="rounded-lg p-3 focus:outline-none"
                  placeholder=""
                  id="emailFormulario"
                  name="emailFormulario"
                  value={formik.values.emailFormulario}
                  onChange={formik.handleChange}
                />
                {formik.errors.emailFormulario && (
                  <div className="text-white">
                    {formik.errors.emailFormulario}
                  </div>
                )}
              </div>
              <div className="w-full flex flex-col mb-6">
                <LabelForm customClass="text-white mb-3" name="Endereço" />
                <InputForm
                  type="text"
                  customClass="rounded-lg p-3 focus:outline-none"
                  placeholder="Ex: Endereço"
                  id="enderecoFormulario"
                  name="enderecoFormulario"
                  value={formik.values.enderecoFormulario}
                  onChange={formik.handleChange}
                />
                {formik.errors.enderecoFormulario && (
                  <div className="text-white">
                    {formik.errors.enderecoFormulario}
                  </div>
                )}
              </div>

              {/* <div className="w-full flex flex-col mb-6">
                <LabelForm
                  customClass="text-white mb-3"
                  name="Anexar Arquivo"
                />
                <InputForm
                  type="file"
                  customClass="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 cursor-pointer  focus:outline-none"
                />
              </div> */}
              <BtnSubmit
                name="Enviar"
                customClass="mt-8 bg-white p-2 w-full rounded-lg text-red-main font-bold bg-white transition 
                ease-in duration-500 hover:bg-black hover:text-white"
              />
            </form>
          </div>
          <div className="col-span-2 md:col-span-1 ">
            <div className="w-full h-full">
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={{ width: "100%", height: "100%" }}
                  center={position}
                  zoom={15}
                >
                  <>
                    <Marker position={position} />
                  </>
                </GoogleMap>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formulario;
