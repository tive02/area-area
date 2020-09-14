const { default: SocialNetworks } = require("./ SocialNetworks")

const Cards = ({ img, name, title, description }) => {
  return (
    <div >
      <img src={img}
        alt=""
        className="rounded-full overflow-hidden h-40 w-40" />
      <h2 className="font-serif mt-4 font-bold text-xl">{name}</h2>
      <h6 className="font-sans mt-2 text-sm font-medium">{title}</h6>
      <p className="font-sans text-xs text-gray-500 text-center mt-3">
        {description}
      </p>
    </div>
  )
}

export default Cards
