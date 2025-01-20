import { defineStore } from "pinia";

export const useFormStore = defineStore('form', {
  state: () => ({
    states: [
      "Aguascalientes",
      "Baja California",
      "Baja California Sur",
      "Campeche",
      "Chiapas",
      "Chihuahua",
      "Coahuila de Zaragoza",
      "Colima",
      "Ciudad de México",
      "Durango",
      "Guanajuato",
      "Guerrero",
      "Hidalgo",
      "Jalisco",
      "Estado de México",
      "Michoacán de Ocampo",
      "Morelos",
      "Nayarit",
      "Nuevo León",
      "Oaxaca",
      "Puebla",
      "Querétaro de Arteaga",
      "Quintana Roo",
      "San Luis Potosí",
      "Sinaloa",
      "Sonora",
      "Tabasco",
      "Tamaulipas",
      "Tlaxcala",
      "Veracruz de Ignacio de la Llave",
      "Yucatán",
      "Zacatecas"
    ] as string[]
  })
})