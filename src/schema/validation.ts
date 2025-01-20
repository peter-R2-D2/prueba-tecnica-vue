import { string, object } from "yup";

export const formSchema = object({
  name: string()
    .required("El campo es requerido")
    .matches(/^[A-Za-z\s]+$/, "El campo solo puede contener letras"),
  first_last_name: string().required("El campo es requerido").matches(/^[A-Za-z\s]+$/, "El campo solo puede contener letras"),
  second_last_name: string().required("El campo es requerido").matches(/^[A-Za-z\s]+$/, "El campo solo puede contener letras"),
  curp: string().required("El campo es requerido").matches(/^([A-Z]{4})(\d{6})([A-Z]{6})(\d{2})$/, "Formato inválido de CURP"),
  rfc: string().required("El campo es requerido").matches(/^([A-ZÑ&]{3,4})\d{6}([A-Z0-9]{3})$/, "Formato inválido de RFC"),
  zip_code: string().required("El campo es requerido").matches(/^\d{1,5}$/, "Debe tener máximo 5 dígitos"),
  address: string().required("El campo es requerido"),
  street_address: string().required("El campo es requerido").matches(/^\d{1,5}$/, "Debe tener máximo 5 dígitos"),
  apartment_number: string().required("El campo es requerido").matches(/^[A-Za-z0-9]{1,10}$/, 'Debe ser alfanumérico y máximo 10 caracteres'),
  state: string().required("El campo es requerido").matches(/^[A-Za-z\s]+$/, "El campo solo puede contener letras"),
  city: string().required("El campo es requerido").matches(/^[A-Za-z\s]+$/, "El campo solo puede contener letras"),
  colony: string().required("El campo es requerido").matches(/^[A-Za-z\s]+$/, "El campo solo puede contener letras"),
});