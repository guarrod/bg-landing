import * as React from "react"
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




      <section>
        <div className="boxed">

          {/* HEADINGS AND TEXT */}
          <h1 className="heading heading--h1" style={{ color: "#000000", fontWeight: "bold", borderBottom: "8px solid #ebebeb", marginBottom: "48px" }}>Headings and text</h1>

          <h1 class="display display--big">DisplayLarge</h1>
          <h2 class="display display--medium">DisplayMedium</h2>
          <h3 class="display display--small">DisplaySmall</h3>

          <h1 class="heading heading--h1">Headline (H1)</h1>
          <h2 class="heading heading--h2">Subtitle 1 (H2)</h2>
          <h3 class="heading heading--h3">Subtitle 2 (H3)</h3>


          <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <small>Muy lejos, más allá de las montañas de palabras, alejados de los países de las vocales y las consonantes, viven los textos simulados. Viven aislados en casas de letras, en la costa de la semántica, un gran océano de lenguas. </small>
          <br></br>




          {/* BUTTONS */}
          <h1 className="heading heading--h1" style={{ color: "#000000", fontWeight: "bold", borderBottom: "8px solid #ebebeb", marginBottom: "48px", marginTop: "60px" }}>Buttons</h1>


          <a className="button primary" href="/">Button label</a>
          <a className="button primary plus" href="/">Button label</a>
          <a className="button secondary" href="/">Button label</a>
          <a className="button secondary plus" href="/">Button label</a>
          <a className="button link" href="/">Button label</a>
          <a className="button link plus" href="/">Button label</a>





          {/* FORMS */}
          <h1 className="heading heading--h1" style={{ color: "#000000", fontWeight: "bold", borderBottom: "8px solid #ebebeb", marginBottom: "48px", marginTop: "60px" }}>Forms</h1>


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


            {/* <input type="file" />
            <label for="file">Choose a file</label> */}


            <label>
              Pick your favorite flavor:
              <select value="Submit" >
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>



            {/* <input type="submit" value="Enviar" /> */}
          </form>





          {/* CARDS */}
          <h1 className="heading heading--h1" style={{ color: "#000000", fontWeight: "bold", borderBottom: "8px solid #ebebeb", marginBottom: "48px", marginTop: "60px" }}>Cards</h1>




          <div className="row">
            <div className="col-lg-3">
              <div className="card card--gray center">
                <StaticImage
                  src="../images/icon-landing.svg"
                  alt="Icono"
                  placeholder="image"
                  layout="constrained"
                  width={64}
                  height={54}
                  className="centered"
                />
                <p className="paragraph">Body 1. Lorem ipsum dolor sit</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card card--gray">
                <StaticImage
                  src="https://via.placeholder.com/280x144/F3F3F5.png/000"
                  alt="Icono"
                  placeholder="image"
                  layout="constrained"
                  width={280}
                  height={144}
                  className="centered"
                />
                <h3>Subtitle 2. Vestibulum ante ipsum primis</h3>
                <small>Body 2. Vestibulum ante ipsum primis in faucibus orci luctus et.</small>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <p className="paragraph paragraph--gray">Body 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis. Donec commodo placerat risus.</p>
                <h3 className="color-accent">Subtitle 2. Title</h3>
                <small>BODY 2. OVERLINE</small>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card card--gray">
                <div>
                  <h2>Subtitle 1. Title</h2>
                  <p className="paragraph paragraph--gray">Body 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a className="button link" href="/">Button label</a>
                </div>
              </div>
            </div>
          </div>


          <div className="card card--gray flex flex__between">
            <div>
              <h2>Subtitle 1. Title</h2>
              <p>Body 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a className="button link" href="/">Button label</a>
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





          {/* COLLAPSABLE */}
          <h1 className="heading heading--h1" style={{ color: "#000000", fontWeight: "bold", borderBottom: "8px solid #ebebeb", marginBottom: "48px", marginTop: "60px" }}>Collapsable</h1>


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





          {/* LIST */}
          <h1 className="heading heading--h1" style={{ color: "#000000", fontWeight: "bold", borderBottom: "8px solid #ebebeb", marginBottom: "48px", marginTop: "60px" }}>List</h1>


          {/* List */}
          <div className="row">
            <div className="col-lg-4">
              <ul className="list">
                <li><StaticImage
                  src="./../images/bg-magno.svg"
                  alt="Icono"
                  placeholder="image"
                  layout="constrained"
                  width={32}
                  height={32}
                  className="centered thumb"
                />Muy lejos, más allá de las montañas de palabras, alejados de los países de las vocales y las consonantes, viven los textos simulados. Viven aislados.</li>
                <li><StaticImage
                  src="./../images/bg-magno.svg"
                  alt="Icono"
                  placeholder="image"
                  layout="constrained"
                  width={32}
                  height={32}
                  className="centered thumb"
                /> Muy lejos, más allá de las montañas de palabras, alejados de los países de las vocales y las consonantes,  </li>
                <li><StaticImage
                  src="./../images/bg-magno.svg"
                  alt="Icono"
                  placeholder="image"
                  layout="constrained"
                  width={32}
                  height={32}
                  className="centered thumb"
                /> Muy lejos, más allá de las montañas de palabras, alejados de los países </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <ul className="list">
                <li><StaticImage
                  src="./../images/bg-magno.svg"
                  alt="Icono"
                  placeholder="image"
                  layout="constrained"
                  width={32}
                  height={32}
                  className="centered thumb"
                /> Muy lejos, más allá de las montañas de palabras, alejados de los países de las vocales y las consonantes, viven los textos simulados. Viven aislados en casas de letras, en la costa de la semántica, un gran océano de lenguas.</li>
                <li><StaticImage
                  src="./../images/bg-magno.svg"
                  alt="Icono"
                  placeholder="image"
                  layout="constrained"
                  width={32}
                  height={32}
                  className="centered thumb"
                /> Muy lejos, más allá de las montañas de palabras, alejados </li>
                <li><StaticImage
                  src="./../images/bg-magno.svg"
                  alt="Icono"
                  placeholder="image"
                  layout="constrained"
                  width={32}
                  height={32}
                  className="centered thumb"
                /> Muy lejos, más allá de las montañas de palabras.</li>
              </ul>
            </div>
            <div className="col-lg-4">
              <ul className="list">
                <li><StaticImage
                  src="./../images/bg-magno.svg"
                  alt="Icono"
                  placeholder="image"
                  layout="constrained"
                  width={32}
                  height={32}
                  className="centered thumb"
                /> Muy lejos, más allá de las montañas de palabras, alejados de los países</li>
                <li><StaticImage
                  src="./../images/bg-magno.svg"
                  alt="Icono"
                  placeholder="image"
                  layout="constrained"
                  width={32}
                  height={32}
                  className="centered thumb"
                /> Muy lejos, más allá de las montañas de palabras, alejados de los países de las vocales </li>
                <li><StaticImage
                  src="./../images/bg-magno.svg"
                  alt="Icono"
                  placeholder="image"
                  layout="constrained"
                  width={32}
                  height={32}
                  className="centered thumb"
                /> Muy lejos, más allá de las montañas de palabras, alejados de los países de las vocales y las consonantes</li>
              </ul>
            </div>
          </div>



















        </div>
      </section>


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
