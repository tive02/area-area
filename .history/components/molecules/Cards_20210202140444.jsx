import classnames from 'classnames'

const Cards = ({ round, img, title, subtitle, description }) => {
  return (
    <div >
      <div className="grid justify-items-center">
        <img
          className={classnames(`rounded-${round} overflow-hidden h-${} w-${}`)}
          src={img}
          alt="" />
      </div>
      <h2 className="font-serif mt-4 font-bold text-xl text-center">{title}</h2>
      <h6 className="font-sans mt-2 text-sm font-medium text-center">{subtitle}</h6>
      <p className="font-sans text-xs text-gray-500 text-center mt-3">
        {description}
      </p>
    </div>
  )
}

export default Cards
