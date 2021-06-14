export default function validarCrearCuenta(value) {
  let errors = {};

  //Validar el nombre de usuario
  if (!value.title) {
    errors.nombre = "El Nombre es Obligatorio";
  }

  //Validar el nombre de empresa
  if (!value.tags) {
    errors.empresa = "El Nombre de la empresa es Obligatorio";
  }

  //validar el URL
  if (!value.url) {
    errors.url = "La URL del producto es obligatoria";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(value.url)) {
    errors.url = "URL mal formateada o no válida";
  }

  //Validar la descripcion
  if (!value.resume) {
    errors.descripcion = "Agrega una descripción de tu Producto";
  }
  return errors;
}
