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

  //Validar la resumen
  if (!values.resume) {
    errors.resume = "El resumen es obligatorio";
  }
  return errors;
}
