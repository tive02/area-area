export default function validateCreatePost(values) {
  let errors = {};

  //Validar el titulo del post
  if (!values.title) {
    errors.title = "El Titulo es  Obligatorio";
  }

  //Validar las categorias
  if (!values.tags) {
    errors.tags = "Las categorias son obligatorias";
  }

  //validar el URL
  if (!values.url) {
    errors.url = "La URL del producto es obligatoria";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.url)) {
    errors.url = "URL mal formateada o no válida";
  }

  //Validar la resumen y descripcion de
  if (!values.resume) {
    errors.resume = "El resumen es obligatorio";
  }
  return errors;
}
