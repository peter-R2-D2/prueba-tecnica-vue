# Prueba Técnica Vuejs

## Requisitos para prueba técnica

- Generar formulario
- Generar tabla con el diseño proporcionado

## Especificaciones

- En el momento de la carga del formulario, se debe llenar la tabla de abajo a partir del siguiente Servicio: https://jsonplaceholder.typicode.com/users (GET)
- Validar que en el campo “Nombre”,”Primer Apellido ”,”Segundo Apellido”,”Estado”, ”Delegación”, “Colonia” solo se puedan ingresar letras.
- Validar estructura de la CURP Y RFC, mostrar en algún mensaje si es incorrecta.
- Validar que en el campo “Código postal”, ”Número exterior”, solo se puedan
  ingresar números y a 5 posiciones.
- Validar que en el campo “Numero interior” se pueda ingresar alfanuméricos a 10 posiciones.
- Cuando sean exitosas todas las validaciones, mostrar un mensaje en un popup que diga “Campos validados correctamente”, en caso de que alguno falte mostrar el mensaje “Existen campos por validar” y marcar el campo faltante.
- Después de la validación de los campos exitosa, mandar a ejecutar el siguiente
  servicio (http://httpbin.org/post)(POST), para el guardado del formulario, con el
  siguiente formato del JSON:

```json
{
  infoUsuario: {
    Nombre: …
  .
  .
  .
  },
  Domicilio: {
    Calle:…
  .
  .
  .
  }
}
```

Dentro de la propiedad de infoUsuario, irán todos los campos de información del
cliente y dentro de “Domicilio”, los campos del domicilio del cliente.
