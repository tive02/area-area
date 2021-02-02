const SocialNetworks = ({ Twitter, Linkedin, Instagram, TikTok, Facebook, Spotify }) => {
  return (
    <ul className="mt-2 lg:mt-4 space-x-2">
      <li>
        <button className="flex items-center justify-center h-8 w-8">
          {Twitter}
          {Linkedin}
          {Instagram}
          {TikTok}
          {Facebook}
          {Spotify}
        </button>
      </li>
    </ul>
  )
}

export default SocialNetworks
