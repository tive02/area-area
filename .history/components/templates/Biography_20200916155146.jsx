
const Biography = ({ title, secondTitle
  , p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, i2, i3 }) => (
    <>
      <main>
        <article>
          <section className="text-center">
            <h1>{title}</h1>
            <h2>{secondTitle}</h2>
            <div></div>
          </section>
          <section className="">
            <p>{p1}</p>
            <p>{p2} <i>{i2}</i> </p>
            <p>{p3} <i>{i3}</i></p>
            <p>{p4}</p>
            <p>{p5}</p>
            <p>{p6}</p>
            <p>{p7}</p>
            <p>{p8}</p>
            <p>{p9}</p>
            <p>{p10}</p>
            <p>{p11}</p>
            <p>{p12}</p>
          </section>
        </article>
      </main>
    </>
  )


export default Biography
