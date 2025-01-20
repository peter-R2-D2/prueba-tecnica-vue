import { defineStore } from "pinia";
import type { User } from "../interface/User";
import type { FormModel } from "../interface/FormModel";

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as User[],
    loadingUsers: false as boolean,
  }),

  actions: {
    async GET_USERS() {
      try {
        this.loadingUsers = true
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        this.users = await response.json()
        this.loadingUsers = false
      } catch (error) {
        console.log("Error: ", error)
        this.loadingUsers = false
      }
    },
    async ADD_NEW_USER(dataForm: FormModel) {
      try {
        this.loadingUsers = true
        const payload = {
          infoUsuario: {
            Nombre: dataForm.name,
            Primer_apellido: dataForm.first_last_name,
            Segundo_apellido: dataForm.second_last_name,
            CURP: dataForm.curp,
            RFC: dataForm.rfc,
          },
          Domicilio: {
            Calle: dataForm.address,
            Codigo_postal: dataForm.zip_code,
            Numero_exterior: dataForm.street_address,
            Numero_interior: dataForm.apartment_number,
            Estado: dataForm.state,
            Delegacion: dataForm.city,
            Colonia: dataForm.colony
          }
        }
        const response = await fetch("http://httpbin.org/post", {
          method: "POST",
          headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        console.log(response)
        this.loadingUsers = false
      } catch (error) {
        console.log("Error: ", error)
        this.loadingUsers = false
      }
    }
  }
})