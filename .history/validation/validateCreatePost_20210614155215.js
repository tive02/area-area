export default function validateCreatePost(value) {
  let errors = {};

  //Validar el titulo del post
  if (!value.title) {
    errors.title = "El Titulo es  Obligatorio";
  }

  //Validar las categorias
  if (!value.tags) {
    errors.tags = "Las categorias son obligatorias";
  }

  //validar el URL
  if (!value.url) {
    errors.url = "La URL del producto es obligatoria";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(value.url)) {
    errors.url = "URL mal formateada o no válida";
  }

  //Validar la resumen y descripcion de
  if (!value.resume) {
    errors.resume = "Agrega un resumen valido para tu post";
  }
  return errors;
}
