import classnames from 'classnames'

const Cards = ({
  //estas son las variables CSS de la etiqueta img,
  round, h, w,
  //Este son las variables que comparte todo el texto del documento.
  alignText,
  //Estas son las variables CSS de la etiqueta <h2>

  //Estas son las variables CSS de la etiqueta <h6>

  //Estas son las variables CSS de la etiqueta <p> 

  //Este son las variables que remplazan el contenido      
  img, title, subtitle, description }) => {
  return (
    <div >
      <div className="grid justify-items-center">
        <img
          className={classnames(`rounded-${round} overflow-hidden h-${h} w-${w}`)}
          src={img}
          alt="" />
      </div>
      <h2 className={classnames(`font-serif mt-4 font-bold text-xl text-${alignText}`)}>
        {title}</h2>
      <h6 className={classnames(`font-sans mt-2 text-sm font-medium text-${alignText}>`)}>
        {subtitle}</h6>
      <p className={classnames(`font-sans text-xs text-gray-500 text-${alignText} mt-3`)}>
        {description}
      </p>
    </div>
  )
}

export default Cards
