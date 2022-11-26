import * as Yup from "yup";

const campoObrigatorioMsg = "Campo Obrigatório";

export const validationSchema = Yup.object().shape({
  nomeFormulario: Yup.string().trim().required(campoObrigatorioMsg),
  emailFormulario: Yup.string()
    .email("Digite um e-mail válido")
    .required(campoObrigatorioMsg),
  enderecoFormulario: Yup.string().trim().required(campoObrigatorioMsg),
});
