import * as Yup from "yup";

const campoObrigatorioMsg = "Campo Obrigatório";

export const validationSchema = Yup.object().shape({
  nome: Yup.string().trim().required(campoObrigatorioMsg),
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required(campoObrigatorioMsg),
  mensagem: Yup.string().trim().required(campoObrigatorioMsg),
});
