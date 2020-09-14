import Link from 'next/link'

function Logo() {
  return (
    <>
      <div className="flex justify-items-center md:grid md:grid-cols-1  ">
        <Link href="/" className="flex items-center md:justify-center">
          <img
            className="rounded-full h-16 w-16 lg:h-16 lg:w-16 "
            src="/logo.png"
            alt="Logo del proyecto de Área a Área" />
        </Link >
        <Link href="/" className="items-center">
          <span className="pl-4 pt-4 pb-0 md:pt-0 text-white text-2xl md:text-xl tracking-tight">
            De Área a Área</span>
        </Link>
      </div>
    </>
  )
}

export default Logo
