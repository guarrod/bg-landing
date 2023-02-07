import * as React from "react"
import './para-empresas.scss'
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

      <section className="center bg1">
        <div className="boxed">

          <h1 className="heading heading__h1">Headline 1. Lorem ipsum <br></br> dolor sit amet, consectetur</h1>
          <h3 className="heading heading__h3 text-color-secondary">Subtitle 2. Suspendisse quis velit a nibh maximus lobortis</h3>
          <a className="button primary plus" href="/">Button label</a>

          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card graySurface">
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
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card graySurface">
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
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card graySurface">
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
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card graySurface">
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
          </div>


        </div>
      </section>

      <section className="center">
        <div className="boxed">
          <h1 className="heading heading__h2">Subtitle 1. Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit.</h1>
        </div>
        <iframe width="1280" height="768" src="https://www.youtube.com/embed/RT_6lCl-lng" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      </section>

      <section className="bg-base">
        <div className="row boxed">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">

            <h2 className="heading heading__h2">Subtitle 1. Lorem ipsum dolor sit amet, consectetur.</h2>
            <p>Body 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis dignissim tortor, a faucibus enim.</p>

          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <form>
              <label>
                Name:
                <input type="text" value="Carlos Rojas" />
              </label>
              <label>
                Name:
                <input type="text" value="Carlos Rojas" />
              </label>
              <label>
                Name:
                <input type="text" value="Carlos Rojas" />
              </label>
              <label>
                Name:
                <input type="text" value="Carlos Rojas" />
              </label>
              <br />

              <a className="button" href="/">Button label</a>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-auxiliar">
        <div className="boxed">
          <h2 className="heading_h2">Subtitle 1. Lorem ipsum dolor sit amet, consectetur.</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="card _graySurface">
                <p className="paragraph paragraph--gray-text">Body 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis. Donec commodo placerat risus.</p>
                <h3 className="color-accent">Subtitle 2. Title</h3>
                <small>Body 2. OVERLINE</small>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <p className="paragraph paragraph--gray-text">Body 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis. Donec commodo placerat risus.</p>
                <h3 className="color-accent">Subtitle 2. Title</h3>
                <small>Body 2. OVERLINE</small>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <p className="paragraph paragraph--gray-text">Body 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis. Donec commodo placerat risus.</p>
                <h3 className="color-accent">Subtitle 2. Title</h3>
                <small>Body 2. OVERLINE</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="boxed">
        <div className="row">
          <div className="col-lg-6">
            <div className="card graySurface bg-accent">
              <h2>Subtitle 1. Title</h2>
              <p>Body 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a className="button secondary plus" href="/">Button label</a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card graySurface">
              <h2>Subtitle 1. Title</h2>
              <p className="paragraph paragraph--gray-text">Body 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a className="button link" href="/">Button label</a>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card graySurface flex flex__between">
            <div>
              <h2>Subtitle 1. Title</h2>
              <p className="paragraph paragraph--gray-text">Body 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
        </div>
      </section>

      <section className="bg-base">
        <div className="boxed center">
          <h2 className="heading heading__h2">Subtitle 1. Lorem ipsum dolor sit</h2>
          <h3 className="heading heading__h3">Subtitle 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis.</h3>
          <a className="button plus" href="/">Button label</a>
        </div>
      </section>

      <section className="boxed">
        <h2 className="heading heading__h2">Subtitle 1. Lorem ipsum dolor </h2>
          <ul className="help">
            <li className="closed">
              <a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis.<small></small></a>
              <p className="paragraph paragraph--gray-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis. Donec commodo placerat risus feugiat pulvinar.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit..

                Cras at vestibulum tortor, non maximus velit.</p>
            </li>
            <li className="open">
              <a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis.<small></small></a>
              <p className="paragraph paragraph--gray-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis. Donec commodo placerat risus feugiat pulvinar.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis. Donec commodo placerat risus feugiat pulvinar.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis. Donec commodo placerat risus feugiat pulvinar.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit..
              </p>
            </li>
            <li className="closed">
              <a  href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis.<small></small></a>
              <p className="paragraph paragraph--gray-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis. Donec commodo placerat risus feugiat pulvinar.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit..

                Cras at vestibulum tortor, non maximus velit.</p>
            </li>
          </ul>
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

export const Head = () => <title>Banca Empresas - Banco Guayaquil</title>
