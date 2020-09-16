
const Biography = ({ title, secondTitle
  , p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, i2, i3 }) => (
    <>
      <main>
        <article className="w-full md:w-3/5 mx-auto">
          <section className="text-center">
            <h1>{title}</h1>
            <h2>{secondTitle}</h2>
            <div></div>
          </section>
          <section className="px-5 w-full mx-auto bg-white p-4 shadow rounded-lg">
            <p className="my-5">{p1}</p>
            <p className="my-5">{p2} <i>{i2}</i> </p>
            <p className="my-5">{p3} <i>{i3}</i></p>
            <p className="my-5">{p4}</p>
            <p className="my-5">{p5}</p>
            <p className="my-5">{p6}</p>
            <p className="my-5">{p7}</p>
            <p className="my-5">{p8}</p>
            <p className="my-5">{p9}</p>
            <p className="my-5">{p10}</p>
            <p className="my-5">{p11}</p>
            <p className="my-5">{p12}</p>
          </section>
        </article>
      </main>
    </>
  )


export default Biography
