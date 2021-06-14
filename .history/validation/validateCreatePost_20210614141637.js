export default function validarCrearCuenta(valores) {
  let errores = {};

  //Validar el nombre de usuario
  if (!valores.nombre) {
    errores.nombre = "El Nombre es Obligatorio";
  }

  //Validar el nombre de empresa
  if (!valores.empresa) {
    errores.empresa = "El Nombre de la empresa es Obligatorio";
  }

  //validar el URL
  if (!valores.url) {
    errores.url = "La URL del producto es obligatoria";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
    errores.url = "URL mal formateada o no válida";
  }

  //Validar la descripcion
  if (!valores.descripcion) {
    errores.descripcion = "Agrega una descripción de tu Producto";
  }
  return errores;
}
