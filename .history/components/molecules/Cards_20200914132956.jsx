const { default: SocialNetworks } = require("./ SocialNetworks")

const Cards = ({ img, name, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
      <div
        className="inline-flex shadow-lg border border-gray-200 rounded-full
        overflow-hidden h-40 w-40">
        <img src={img}
          alt=""
          className="h-full w-full" />
      </div>
      <h2 className="font-serif mt-4 font-bold text-xl">{name}</h2>
      <h6 className="font-sans mt-2 text-sm font-medium">{title}</h6>
      <p className="font-sans text-xs text-gray-500 text-center mt-3">
        {description}
      </p>
    </div>
  )
}

export default Cards
