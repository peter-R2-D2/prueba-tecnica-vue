<template>
  <div class="container mx-auto mb-5">
    <h1 class="text-center text-3xl mb-5">Identificación</h1>

    <form @submit="handleSubmitAction">
      <div class="flex flex-col md:flex-row gap-5 mb-5">
        <FormInput
          label="Nombre"
          name="name"
          type="text"
          v-model="form.name"
          :error="errors.name"
          :validate-on-change="true"
          class="basis-full md:basis-1/3"
        />
        <FormInput
          label="Primer apellido"
          name="first_last_name"
          type="text"
          v-model="form.first_last_name"
          :error="errors.first_last_name"
          :validate-on-change="true"
          class="basis-1/3"
        />
        <FormInput
          label="Segundo apellido"
          name="second_last_name"
          type="text"
          v-model="form.second_last_name"
          :error="errors.second_last_name"
          :validate-on-change="true"
          class="basis-1/3"
        />
      </div>

      <div class="flex flex-col md:flex-row gap-5 mb-5">
        <FormInput
          label="CURP"
          name="curp"
          type="text"
          v-model="form.curp"
          :error="errors.curp"
          :validate-on-change="true"
          class="basis-1/2"
        />
        <FormInput
          label="RFC (con homoclave)"
          name="rfc"
          type="text"
          v-model="form.rfc"
          :error="errors.rfc"
          :validate-on-change="true"
          class="basis-1/2"
        />
      </div>

      <div class="flex flex-col md:flex-row gap-5 mb-5">
        <FormInput
          label="Código postal"
          name="zip_code"
          type="number"
          v-model="form.zip_code"
          :error="errors.zip_code"
          :validate-on-change="true"
          class="basis-1/4"
        />
        <FormInput
          name="address"
          label="Calle"
          v-model="form.address"
          :error="errors.address"
          :validate-on-change="true"
          class="basis-3/4"
        />
      </div>

      <div class="flex flex-col md:flex-row gap-5 mb-5">
        <FormInput
          name="street_address"
          type="number"
          label="Numero exterior"
          v-model="form.street_address"
          :error="errors.street_address"
          :validate-on-change="true"
          class="basis-1/4"
        />
        <FormInput
          name="apartment_number"
          label="Numero interior"
          v-model="form.apartment_number"
          :error="errors.apartment_number"
          :validate-on-change="true"
          class="basis-1/4"
        />
        <FormInput
          name="state"
          label="Estado"
          v-model="form.state"
          :error="errors.state"
          :options="store.states"
          :validate-on-change="true"
          class="basis-1/2"
        />
      </div>

      <div class="flex flex-col md:flex-row gap-5 mb-5">
        <FormInput
          label="Delegación / Municipio"
          name="city"
          type="text"
          v-model="form.city"
          :error="errors.city"
          :validate-on-change="true"
          class="basis-1/2"
        />
        <FormInput
          label="Colonia"
          name="colony"
          type="text"
          v-model="form.colony"
          :error="errors.colony"
          :validate-on-change="true"
          class="basis-1/2"
        />
      </div>

      <div class="flex justify-center">
        <button
          type="submit"
          class="bg-blue-500 text-white px-6 py-4 rounded-xl w-full md:w-auto"
        >
          Guardar
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import type { FormModel } from "../interface/FormModel";
import { useFormStore } from "../store/form";
import FormInput from "./FormInput.vue";
import { reactive } from "vue";
import { useForm } from "vee-validate";
import { formSchema } from "../schema/validation";
import { useToast } from "vue-toast-notification";
import { useUserStore } from "../store/users";

const store = useFormStore();
const storeUser = useUserStore();
const $toast = useToast();

const form = reactive<FormModel>({
  name: "",
  first_last_name: "",
  second_last_name: "",
  curp: "",
  rfc: "",
  zip_code: "",
  address: "",
  street_address: "",
  apartment_number: "",
  state: "",
  city: "",
  colony: "",
});

const { handleSubmit, errors } = useForm({
  validationSchema: formSchema,
  initialValues: form,
});

const handleSubmitAction = handleSubmit(async () => {
  $toast.open({
    message: "Campos validados correctamente",
    type: "success",
    duration: 5000,
    position: "top-right",
    dismissible: true,
  });
  await storeUser.ADD_NEW_USER(form);
});
</script>
