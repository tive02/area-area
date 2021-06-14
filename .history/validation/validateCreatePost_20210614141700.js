export default function validarCrearCuenta(valores) {
  let errors = {};

  //Validar el nombre de usuario
  if (!valores.nombre) {
    errors.nombre = "El Nombre es Obligatorio";
  }

  //Validar el nombre de empresa
  if (!valores.empresa) {
    errors.empresa = "El Nombre de la empresa es Obligatorio";
  }

  //validar el URL
  if (!valores.url) {
    errors.url = "La URL del producto es obligatoria";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
    errors.url = "URL mal formateada o no válida";
  }

  //Validar la descripcion
  if (!valores.descripcion) {
    errors.descripcion = "Agrega una descripción de tu Producto";
  }
  return errors;
}
