import classnames from 'classnames'

const Cards = ({
  //estas son las variables CSS de la etiqueta img,
  round, h, w,
  //Este son las variables que comparte envarios CSS del texto .
  alignText,
  //Estas son las variables CSS de la etiqueta <h2>

  //Estas son las variables CSS de la etiqueta <h6>
  alignTextSubtitle,
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
      <h2 className={classnames(`font-serif font-bold text-xl text-${alignText}`)}>
        {title}</h2>
      <h6 className={classnames(`font-sans text-sm font-medium text-${alignTextSubtitle}`)}>
        {subtitle}</h6>
      <p className={classnames(`font-sans text-xs text-gray-500 text-${alignText} `)}>
        {description}
      </p>
    </div>
  )
}

export default Cards
