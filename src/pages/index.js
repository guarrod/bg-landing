import * as React from "react"
import './para-empresas/para-empresas.scss'
import { StaticImage } from "gatsby-plugin-image"


const IndexPage = () => {
  return (
    <main>

      <header className="site-header">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </header>


      <div className="boxed">


        {/*  */}
        <section style={{ padding: "20px", border: "1px solid #e9ecef", borderRadius: "8px", margin: "20px 0" }}>
          <h1 className="heading heading--h1" style={{ color: "#000000", fontWeight: "bold", borderBottom: "8px solid #ebebeb", marginBottom: "48px" }}>Headings and text</h1>

          <h1 class="display display__big">DisplayLarge</h1>
          <h2 class="display display__medium">DisplayMedium</h2>
          <h3 class="display display__small">DisplaySmall</h3>

          <br /><br />

          <h1 class="heading heading__headline heading__headline--bold">Headline - Bold</h1>
          <h1 class="heading heading__headline heading__headline--semi-bold">Headline - Semi-bold</h1>
          <h1 class="heading heading__headline heading__headline--regular">Headline - Regular</h1>

          <br /><br />

          <h1 class="heading heading__subtitle-1 heading__subtitle-1--bold">Subtitle-1 - Bold</h1>
          <h1 class="heading heading__subtitle-1 heading__subtitle-1--semi-bold">Subtitle-1 - Semi-bold</h1>
          <h1 class="heading heading__subtitle-1 heading__subtitle-1--regular">Subtitle-1 - Regular</h1>

          <br /><br />

          <h1 class="heading heading__subtitle-2 heading__subtitle-2--bold">Subtitle-2 - Bold</h1>
          <h1 class="heading heading__subtitle-2 heading__subtitle-2--semi-bold">Subtitle-2 - Semi-bold</h1>
          <h1 class="heading heading__subtitle-2 heading__subtitle-2--regular">Subtitle-2 - Regular</h1>
        </section>



        {/* PARAGRAPH */}
        <section style={{ padding: "20px", border: "1px solid #e9ecef", borderRadius: "8px", margin: "20px 0" }}>
          <h1 className="heading heading--h1" style={{ color: "#000000", fontWeight: "bold", borderBottom: "8px solid #ebebeb", marginBottom: "48px" }}>Paragraph</h1>

          <p className="paragraph paragraph__primary paragraph__primary--regular">Paragraph primary - Regular</p>
          <p className="paragraph paragraph__primary paragraph__primary--semi-bold">Paragraph primary - Semi-bold</p>
          <p className="paragraph paragraph__primary paragraph__primary--bold">Paragraph primary - Bold</p>

          <br />

          <p className="paragraph paragraph__caption paragraph__caption--regular">Caption - Regular</p>
          <p className="paragraph paragraph__caption paragraph__caption--semi-bold">Caption - Semi-bold</p>

          <br />

          <p className="paragraph paragraph__overline paragraph__overline--regular">Overline - Regular</p>
          <p className="paragraph paragraph__overline paragraph__overline--semi-bold">Overline - Semi-bold</p>
          <p className="paragraph paragraph__overline paragraph__overline--bold">Overline - Bold</p>
        </section>


        {/* BUTTONS */}
        <section style={{ padding: "20px", border: "1px solid #e9ecef", borderRadius: "8px", margin: "20px 0" }}>
          <h1 className="heading heading--h1" style={{ color: "#000000", fontWeight: "bold", borderBottom: "8px solid #ebebeb", marginBottom: "48px" }}>Buttons</h1>

          <a className="button primary" href="/">Button primary</a>
          <a className="button primary plus" href="/">Button primary plus</a>

          <br /><br />

          <a className="button secondary" href="/">Button secondary</a>
          <a className="button secondary plus" href="/">Button secondary plus</a>

          <br /><br />

          <a className="button link" href="/">Button link</a>
          <a className="button link plus" href="/">Button link plus</a>
        </section>


        {/* FORMS */}
        <section style={{ padding: "20px", border: "1px solid #e9ecef", borderRadius: "8px", margin: "20px 0" }}>
          <h1 className="heading heading--h1" style={{ color: "#000000", fontWeight: "bold", borderBottom: "8px solid #ebebeb", marginBottom: "48px" }}>Forms</h1>

          <form>
            <label>
              Name:
              <input type="text" value="Carlos Rojas" />
            </label>

            <label>
              Cédula:
              <input type="number" value="0101" />
            </label>

            <label>
              Email:
              <input type="text" value="nombre@gmail.com" />
            </label>


              <br /><br />
              <input class="form-control form-control-lg" id="formFileLg" type="file"/>
              <br /><br />


            <label>
              Pick your favorite flavor:
              <select value="Submit" >
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>

            <input type="submit" value="Enviar" className="button primary" />
 

          </form>
        </section>



        {/* CARDS */}
        <section style={{ padding: "20px", border: "1px solid #e9ecef", borderRadius: "8px", margin: "20px 0" }}>
          <h1 className="heading heading--h1" style={{ color: "#000000", fontWeight: "bold", borderBottom: "8px solid #ebebeb", marginBottom: "48px" }}>Cards</h1>

          <div className="row">
            <div className="col-lg-4">
              <div className="card center card__type-1">
                <StaticImage
                  src="../images/icon-landing.svg"
                  alt="Icono"
                  placeholder="image"
                  layout="constrained"
                  width={64}
                  height={54}
                  className="centered"
                />
                <h1 className="mt-3">Body 1. Lorem ipsum dolor sit</h1>
              </div>
            </div>

            <div className="col-lg-2">

            </div>

            <div className="col-lg-4">
              <div className="card card__type-2">
                <StaticImage
                  src="https://via.placeholder.com/280x144/F3F3F5.png/000"
                  alt="Icono"
                  placeholder="image"
                  layout="constrained"
                  width={280}
                  height={144}
                  className="centered"
                />
                <h1 className="mt-3 mb-3">Subtitle 2. Vestibulum ante ipsum primis</h1>
                <p>Body 2. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="card card__type-3">
                <p>Body 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis. Donec commodo placerat risus.</p>
                <h1 className="mt-3 mb-2">Subtitle-2 - Bold</h1>
                <small>Overline - Regular</small>
              </div>
            </div>

            <div className="col-lg-2"></div>

            <div className="col-lg-4">
              <div className="card card card__type-4">
                <div>
                  <h1>Subtitle 2. Vestibulum ante ipsum primis</h1>
                  <p className="mt-3 mb-3">Body 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="/">Button label</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="row">
              <div className="col-lg-12">
                <div className="card  card__type-5 card card__type-5 flex flex-row justify-content-between">
                  <div>
                    <h1>Subtitle 2. Vestibulum ante ipsum primis</h1>
                    <p className="mt-3 mb-3">Body 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href="/">Button label</a>
                  </div>
                  <div>
                    <StaticImage
                      src="https://via.placeholder.com/287x192/F3F3F5.png/000"
                      alt="Icono"
                      placeholder="image"
                      layout="constrained"
                      width={287}
                      height={192}
                      className="centered"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* COLLAPSABLE */}
        <section style={{ padding: "20px", border: "1px solid #e9ecef", borderRadius: "8px", margin: "20px 0" }}>
          <h1 className="heading heading--h1" style={{ color: "#000000", fontWeight: "bold", borderBottom: "8px solid #ebebeb", marginBottom: "48px" }}>Collapsable</h1>

          <ul className="help">
            <li className="closed">
              <a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis.<small></small></a>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis. Donec commodo placerat risus feugiat pulvinar.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit..

                Cras at vestibulum tortor, non maximus velit.</p>
            </li>
            <li className="open">
              <a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis.<small></small></a>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis. Donec commodo placerat risus feugiat pulvinar.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis. Donec commodo placerat risus feugiat pulvinar.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis. Donec commodo placerat risus feugiat pulvinar.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit..
              </p>
            </li>
            <li className="closed">
              <a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis.<small></small></a>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis. Donec commodo placerat risus feugiat pulvinar.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit..

                Cras at vestibulum tortor, non maximus velit.</p>
            </li>
          </ul>
        </section>


        {/* LIST */}
        <section style={{ padding: "20px", border: "1px solid #e9ecef", borderRadius: "8px", margin: "20px 0" }}>
          <h1 className="heading heading--h1" style={{ color: "#000000", fontWeight: "bold", borderBottom: "8px solid #ebebeb", marginBottom: "48px" }}>List</h1>
          <div className="row">
            <div className="col-lg-4">
              <ul className="list">
                <li className="gap-3">
                  <img src={"https://picsum.photos/32"} alt="my-gif" />
                  <p>Muy lejos, más allá de las montañas de palabras, alejados de los países de las vocales y las consonantes, viven los textos simulados. Viven aislados.</p>
                </li>
                <li className="gap-3"><img src={"https://picsum.photos/32"} alt="my-gif" /> Muy lejos, más allá de las montañas de palabras, alejados de los países de las vocales y las consonantes,  </li>
                <li className="gap-3"><img src={"https://picsum.photos/32"} alt="my-gif" /> Muy lejos, más allá de las montañas de palabras, alejados de los países </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <ul className="list">
                <li className="gap-3"><img src={"https://picsum.photos/32"} alt="my-gif" /> Muy lejos, más allá de las montañas de palabras, alejados de los países de las vocales y las consonantes </li>
                <li className="gap-3"><img src={"https://picsum.photos/32"} alt="my-gif" /> Muy lejos, más allá de las montañas de palabras, alejados </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <ul className="list">
                <li className="gap-3"><img src={"https://picsum.photos/32"} alt="my-gif" /> Muy lejos, más allá de las montañas de palabras, alejados de los países</li>

              </ul>
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <img src={"https://picsum.photos/32"} className="list-icon" />
              <p className="paragraph paragraph__primary paragraph__primary--bold mb-3 mt-3"><b>Inicia como<br /> nunca antes</b></p>
              <p className="paragraph paragraph__primary paragraph__primary--regular paragraph--gray ">Un login más flexible<br /> y completo</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <img src={"https://picsum.photos/32"} className="list-icon" />

              <p className="paragraph paragraph__primary paragraph__primary--bold mb-3 mt-3"><b>Gestiona tus finanzas empresariales</b></p>
              <p className="paragraph paragraph__primary paragraph__primary--regular paragraph--gray ">Realiza pagos y<br /> transferencias en cualquier lugar</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <img src={"https://picsum.photos/32"} className="list-icon" />
              <p className="paragraph paragraph__primary paragraph__primary--bold mb-3 mt-3"><b>Lleva tu empresa a todas partes</b></p>
              <p className="paragraph paragraph__primary paragraph__primary--regular paragraph--gray ">Consulta tus saldos en todos tus dispositivos</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <img src={"https://picsum.photos/32"} className="list-icon" />
              <p className="paragraph paragraph__primary paragraph__primary--bold mb-3 mt-3"><b>Descarga reportes personalizados</b></p>
              <p className="paragraph paragraph__primary paragraph__primary--regular paragraph--gray ">Elige los campos y formatos que deseas para descargar tus reportes</p>
            </div>
          </div>

        </section>







      </div>



      <footer className="site-footer">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </footer>



    </main>
  )
}

export default IndexPage

export const Head = () => <title>Desing system</title>
