import * as React from "react"
import './para-empresas.scss'
import { StaticImage } from "gatsby-plugin-image"
import start from '../../images/inicio.gif'
import idea from '../../images/idea.gif'
import lineChart from '../../images/line-chart.gif'
import verified from '../../images/verified.gif'


const IndexPage = () => {
  return (
    <main>

      <header className="site-header">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </header>


      {/* HERO */}
      <section className="hero bg-base">
        <div className="boxed p-4">
          <div className="row">
            <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-6 copy">
              <p className="paragraph paragraph--gray">Banca Empresas</p>
              <h1 class="display display--big">Tu negocio. <br />
                Tu Empresa. <br />
                Tus finanzas.</h1>
              <p className="paragraph mb-4">Encuentra todo el apoyo financiero para pequeñas, medianas y grandes empresas. Cuentas Corrientes, financiamiento, Tarjetas de Crédito Business y muchos beneficios.</p>
              <div className="flex flex-wrap">
                <a className="button primary mb-3" href="/">Solicitar información ahora</a>
                <a className="button secondary plus" href="/">Ver video resumen</a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-6 images d-none d-lg-block d-xl-block d-xxl-block">
              <img src="" alt="" />
              <StaticImage
                src="../../images/iphone-laptop.png"
                alt="iphone"
                placeholder="image"
                layout="constrained"
                width={891}
                height={469}
                className="iphone-laptop"
              />
            </div>
          </div>
        </div>
      </section>


      {/* BENEFITS */}
      <section className="benefits">
        <div className="boxed  p-4 p-sm-4">

          <div className="row">
            <div className="col-lg-5 flex flex-column justify-content-center">
              <h2 className="display display--small">
                <b>Más beneficios <br /> para tu empresa</b>
              </h2>
            </div>
            <div className="col-lg-7 border-5 border-start col ps-4 ps-md-5">
              <ul>
                <li className="heading heading--h1 active">Encuentra todo en tu resumen</li>
                <li className="heading heading--h1">Realiza pagos y transferencias</li>
                <li className="heading heading--h1">Tus solicitudes en línea</li>
              </ul>
            </div>
          </div>
          <h3 class="heading heading--h3  mt-4 color-gray-400">Balances, gráficos y todos tus movimientos en un solo lugar. Personaliza tu banca con accesos directos y revisa tu actividad reciente.</h3>
        </div>
        {/* <iframe width="1300" height="734" className="inline-video" src="https://www.youtube.com/embed/RT_6lCl-lng" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  */}
      </section>




      {/* APP */}
      <section className="app bg-auxiliar">
        <div className="boxed  p-4 p-sm-4">
          <h2 class="display display--medium mb-5"><b>Tu Banca Empresas portátil</b></h2>

          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-6">
              <h1 class="heading heading--h1"><b>Una App exclusiva</b>  <br /> para empresas</h1>
              <p className="paragraph paragraph--gray mb-5">La primera App de Ecuador diseñada exclusivamente para empresas.</p>

              <h1 class="heading heading--h1"><b>Nuevo diseño</b> pensado en ti</h1>
              <p className="paragraph paragraph--gray mb-5">Una completa nueva forma de interactuar con las finanzas de tu empresa.</p>

              <h1 class="heading heading--h1"><b>Todo bajo control</b></h1>
              <p className="paragraph paragraph--gray">Accesos directos, notificaciones y la actividad reciente de tu empresa en todo momento.</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-5 offset-1">
              <StaticImage
                src="../../images/app.png"
                alt="iphone"
                placeholder="image"
                layout="constrained"
                width={607}
                height={784}
                className="iphone"
              />
            </div>
          </div>
          <div className="row border-1 border-top pt-4">
            <div className="col-12 col-md-6 mb-4">
              <h1 class="heading heading--h1"><b>App Banca Empresas</b></h1>
              <p className="paragraph">Accede a tus productos financieros desde cualquier lugar y en todos tus dispositivos. Descarga la nueva App.</p>
            </div>
            <div className="col-12  col-md-6 align-center">
              <div className="apps">
                <a href="" className="play-store pe-3">
                  <StaticImage
                    src="../../images/play-store.png"
                    alt="iphone"
                    placeholder="image"
                    layout="constrained"
                    width={174}
                    height={53}
                    className="iphone mb-2"
                  />
                </a>
                <a href="" className="app-store">
                  <StaticImage
                    src="../../images/app-store.png"
                    alt="iphone"
                    placeholder="image"
                    layout="constrained"
                    width={156}
                    height={53}
                    className="iphone"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* REQUEST */}
      <section className="bg-base">
        <div className="row boxed  p-3">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">

            <p className="paragraph paragraph--gray">Estás a 1 paso de terminar.</p>
            <h3 class="display display--small"><b>Déjanos tus datos</b><br /> si deseas <b>abrir</b> una cuenta para tu empresa</h3>
            <p class="paragraph">Revisa los requisitos para abrir tu cuenta según tu tipo de empresa <a href="">aquí.</a></p>

          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <form>
              <label className="mb-3">
                <input type="text" placeholder="Nombre" />
              </label>
              <label className="mb-3">
                <input type="email" placeholder="Correo" />
              </label>
              <label className="mb-3">
                <input type="phone" placeholder="Teléfono" />
              </label>
              <label className="mb-3">
                <input type="text" placeholder="Empresa" />
              </label>
              <label className="mb-3">
                <input type="text" placeholder="RUC" />
              </label>
              <div className="d-flex flex-row-reverse">
                <a className="button primary plus" href="/">Solicitar información ahora</a>
              </div>

            </form>
          </div>
        </div>
        <div className="center mt-5">
          <h3 class="heading heading--h3"><b>O si deseas agenda una cita</b></h3>
          <p class="paragraph mb-4">Elige la fecha y hora en la que <br /> asistirás a tu agencia más cercana.</p>
          <a className="button secondary plus" href="/">Agendar cita</a>

        </div>
      </section>




      {/* PRODUCTS & SERVICES */}
     <section className="products-services">
        <div className="boxed">
          <h3 class="display display--small">Productos y servicios</h3>
        </div>
        <div className="flex">
          <a href="" className="products__item accounts">
            <h1 class="heading heading--h1">Headline (H1)</h1>
            <p>Agiliza tus transacciones y recibe atención personalizada.</p>
          </a>
          <a href="" className="products__item cards">
            <h1 class="heading heading--h1">Headline (H1)</h1>
            <p>Agiliza tus transacciones y recibe atención personalizada.</p>
          </a>
          <a href="" className="products__item financing">
            <h1 class="heading heading--h1">Headline (H1)</h1>
            <p>Agiliza tus transacciones y recibe atención personalizada.</p>
          </a>
          <a href="" className="products__item services">
            <h1 class="heading heading--h1">Headline (H1)</h1>
            <p>Agiliza tus transacciones y recibe atención personalizada.</p>
          </a>
        </div>
      </section> 





      {/* https://lordicon.com/icons/wired/outline?group=free&categoryId=64 */}
      {/* WHY */}
      <section className="why">
        <div className="boxed p-4 p-sm-4">
          <h3 class="display display--small mb-5">¿Por qué elegirnos?</h3>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <img src={start} alt="my-gif" className="list-icon" />
              <p className="paragraph mb-3"><b>Inicia como nunca antes</b></p>
              <p className="paragraph paragraph--gray">Un login más flexible y completo</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <img src={idea} alt="my-gif" className="list-icon" />
              <p className="paragraph mb-3"><b>Gestiona tus finanzas</b></p>
              <p className="paragraph paragraph--gray">Realiza pagos y transferencias en cualquier lugar</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <img src={lineChart} alt="my-gif" className="list-icon" />
              <p className="paragraph mb-3"><b>Tu Empresa en todo lugar</b></p>
              <p className="paragraph paragraph--gray">Consulta tus saldos en todos tus dispositivos</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <img src={verified} alt="my-gif" className="list-icon" />
              <p className="paragraph mb-3"><b>Reportes personalizados</b></p>
              <p className="paragraph paragraph--gray">Elige los campos y formatos que deseas para descargar tus reportes</p>
            </div>
          </div>
        </div>
      </section>




      {/* OPINION */}
      <section className="opinion bg-auxiliar">
        <div className="boxed  p-4 p-sm-4">
          <h3 className="display display--small mb-5">La opinión de <br /> <b>nuestros clientes</b></h3>
          <div className="row">
            <div className="col-lg-4">
              <div className="card border-0">
                <p className="paragraph">Body 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis. Donec commodo placerat risus.</p>
                <h3 className="heading heading--h3 color-accent"><b>Subtitle 2. Title</b></h3>
                <small>Body 2. OVERLINE</small>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0">
                <p className="paragraph paragraph--gray">Body 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis. Donec commodo placerat risus.</p>
                <h3 className="heading heading--h3 color-accent"><b>Subtitle 2. Title</b></h3>
                <small>Body 2. OVERLINE</small>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0">
                <p className="paragraph paragraph--gray">Body 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis. Donec commodo placerat risus.</p>
                <h3 className="heading heading--h3 color-accent"><b>Subtitle 2. Title</b></h3>
                <small>Body 2. OVERLINE</small>
              </div>
            </div>

          </div>
        </div>
      </section>




      {/* CASH */}
      <section className="cash bg-base">
        <div className="boxed  p-4 p-sm-4">
          <h1 className="heading heading--h1 mb-4">Muy pronto estará disponible el Cash Management</h1>
          <h3 class="heading heading--h3">Carga, aprueba y consulta las órdenes de pago de tu empresa. Realiza transferencias a otros bancos, al exterior, pago a terceros y más.</h3>
        </div>
      </section>




      {/* CDA */}
      <section className="bg-accent">
        <div className="boxed  p-4 center">
          <h2 className="heading heading--h2">Encuentra ayuda a <b>dudas</b> <br /> <b>relacionadas</b> con productos <br /> y servicios <b>para tu Empresa.</b></h2>
          <a className="button secondary plus" href="/">Ir a Centro de Ayuda</a>
        </div>
      </section>




      {/* FAQ */}
      <section className="p-sm-4">
        <div className="boxed  p-4 ">
          <h2 className="heading heading--h2">Preguntas Frecuentes</h2>
          <ul className="help">
            <li className="closed">
              <a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis.<small></small></a>
              <p className="paragraph paragraph--gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis. Donec commodo placerat risus feugiat pulvinar.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit..

                Cras at vestibulum tortor, non maximus velit.</p>
            </li>
            <li className="open">
              <a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis.<small></small></a>
              <p className="paragraph paragraph--gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis. Donec commodo placerat risus feugiat pulvinar.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis. Donec commodo placerat risus feugiat pulvinar.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis. Donec commodo placerat risus feugiat pulvinar.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit..
              </p>
            </li>
            <li className="closed">
              <a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis.<small></small></a>
              <p className="paragraph paragraph--gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis velit a nibh maximus lobortis. Donec commodo placerat risus feugiat pulvinar.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit..

                Cras at vestibulum tortor, non maximus velit.</p>
            </li>
          </ul>

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

export const Head = () => <title>Banca Empresas - Banco Guayaquil</title>
