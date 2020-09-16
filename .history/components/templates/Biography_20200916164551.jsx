
const Biography = ({ title, secondTitle
  , p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12,
  i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12 }) => (
    <>
      <main>
        <article className="w-full md:w-3/5 mx-auto">
          <section className="text-center">
            <h1 className="font-serif text-6xl">{title}</h1>
            <h2 className="font-serif text-xl text-gray-">{secondTitle}</h2>
            <div></div>          </section>
          <section className="font-sans text-lg md:text-2xl mx-auto bg-white p-4 shadow rounded-lg ">
            <p className="my-5">{p1} <i>{i1}</i></p>
            <p className="my-5">{p2} <i>{i2}</i></p>
            <p className="my-5">{p3} <i>{i3}</i></p>
            <p className="my-5">{p4} <i>{i4}</i></p>
            <p className="my-5">{p5} <i>{i5}</i></p>
            <p className="my-5">{p6} <i>{i6}</i></p>
            <p className="my-5">{p7} <i>{i7}</i></p>
            <p className="my-5">{p8} <i>{i8}</i></p>
            <p className="my-5">{p9} <i>{i9}</i></p>
            <p className="my-5">{p10}<i>{i10}</i></p>
            <p className="my-5">{p11}<i>{i11}</i></p>
            <p className="my-5">{p12}<i>{i12}</i></p>
          </section>
        </article>
      </main>
    </>
  )


export default Biography
