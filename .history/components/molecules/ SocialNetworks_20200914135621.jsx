
const SocialNetworks = ({ Twitter, Linkedin, Instagram, TikTok, Facebook }) => {
  return (
    <ul className="flex flex-row mt-2 lg:mt-4 space-x-2">
      <li>
        <button className="flex items-center justify-center h-8 w-8">
          {Twitter}
          {Linkedin}
          {Instagram}
          {TikTok}
          {Facebook}
        </button>
      </li>
    </ul>
  )
}

export default SocialNetworks
