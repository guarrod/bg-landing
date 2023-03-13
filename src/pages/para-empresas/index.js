import * as React from "react"
import './para-empresas.scss'
import { StaticImage } from "gatsby-plugin-image"
import rocket from '../../images/rocket.gif'
import excel from '../../images/excel.gif'
import responsive from '../../images/responsive.gif'
import reportes from '../../images/reportes.gif'

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
        <div className="boxed">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 p-0 copy">
              <p className="paragraph paragraph__secondary paragraph__secondary--bold">Banca Empresas</p>
              <h1 class="display display__medium">Tu negocio. <br />
                Tu Empresa. <br />
                Tus finanzas.</h1>
              <p className="paragraph paragraph__primary paragraph__primary--regular mb-4">Encuentra todo el apoyo financiero para pequeñas, medianas y grandes empresas. Cuentas Corrientes, financiamiento, Tarjetas de Crédito Business y muchos beneficios.</p>
              <div className="flex flex-wrap">
                <a className="button primary mb-3" href="/">Solicitar información ahora</a>
                <a className="button secondary plus mb-3" href="/">Ver video resumen</a>

              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-6 images d-none d-lg-block d-xl-block d-xxl-block">
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
        <div className="boxed">

          <div className="row">
            <div className="col-lg-5 flex flex-column justify-content-center">
              <h2 className="display display__small">Más beneficios <br /> para tu empresa</h2>
            </div>
            <div className="col-lg-7 border-5 border-start col ps-4 ps-md-5">
              <ul>
                <li className="heading heading__subtitle-1 heading__subtitle-1--bold active mb-3">Encuentra todo en tu resumen</li>
                <li className="heading heading__subtitle-1 heading__subtitle-1--semi-bold heading--gray mb-3">Realiza pagos y transferencias</li>
                <li className="heading heading__subtitle-1 heading__subtitle-1--semi-bold heading--gray">Tus solicitudes en línea</li>
              </ul>
            </div>
          </div>
          <h3 class="paragraph paragraph__primary paragraph__primary--semi-bold paragraph--gray mt-5 mb-5 center">Balances, gráficos y todos tus movimientos en un solo lugar. <br /> Personaliza tu banca con accesos directos y revisa tu actividad reciente.</h3>
        </div>
        <iframe width="980" height="551" className="inline-video mt-5" src="https://www.youtube.com/embed/RT_6lCl-lng" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </section>


      {/* APP */}
      <section className="app bg-auxiliar">
        <div className="boxed">
          <h2 class="display display__small mb-5">Tu Banca Empresas portátil</h2>

          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6">
              <h1 class="heading heading__subtitle-1 heading__subtitle-1--regular mb-3"><b>Una nueva App</b>  <br /> diseñada para tu empresa</h1>
              <p className="paragraph paragraph__primary paragraph__primary--semi-bold paragraph--gray mb-5">Presentamos la primera aplicación de Ecuador diseñada exclusivamente para empresas. Ahora
                tu App es más rápida y ágil, brindándote una completa y nueva forma de interactuar con las finanzas de tu empresa.</p>

              <h1 class="heading heading__subtitle-1 heading__subtitle-1--regular mb-3">Lleva tu negocio<br /><b>a un nuevo nivel</b></h1>
              <p className="paragraph paragraph__primary paragraph__primary--semi-bold paragraph--gray mb-5">
                <ul>
                  <li>Envía y recibe dinero desde cualquier lugar</li>
                  <li>Aprueba las órdenes de pago de servicios</li>
                  <li>Gestiona todas tus cuentas sin complicaciones</li>
                  <li>Define lo que puede ver cada colaborador</li>
                  <li>Protege tu dinero con mayor seguridad</li>
                </ul>
              </p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-12 col-lg-5 offset-1">
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
              <h1 class="heading heading__headline heading__headline--semi-bold mb-3"><b>Descarga la App</b></h1>
              <p className="paragraph paragraph__primary paragraph__primary--semi-bold paragraph--gray">Accede a tus productos financieros desde cualquier lugar y en todos tus dispositivos. Descarga la nueva App.</p>
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
        <div className="row boxed">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">

            <p className="paragraph paragraph__secondary paragraph__secondary--semi-bold mb-3">Estás a 1 paso de terminar.</p>
            <h3 class="heading heading__headline heading__headline--bold mb-3">Déjanos tus datos<br /> si deseas abrir una cuenta para tu empresa</h3>
            <p class="paragraph paragraph__primary paragraph__primary--semi-bold mb-3">Revisa los requisitos para abrir tu cuenta según tu tipo de empresa <a href="">aquí.</a></p>

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
          <div className="mt-5">
            <h3 class="heading heading__subtitle-1 heading__subtitle-2--semi-bold mb-3"><b>O si deseas agenda una cita</b></h3>
            <p class="heading heading__subtitle-2 heading__subtitle-2--semi-bold mb-4">Elige la fecha y hora en la que <br /> asistirás a tu agencia más cercana.</p>
            <a className="button secondary plus" href="/">Agendar cita</a>
          </div>
        </div>
      </section>


      {/* PRODUCTS & SERVICES */}
      <section className="products-services bg-auxiliar">
        <div className="boxed">
          <h2 class="display display__small mb-5">Productos y servicios</h2>
          <div className="row justify-content-between justify-content-sm-evenly">
            <div className="products__item accounts col-lg-3 col-md-6 mb-4 ">
              <h1 class="heading heading__subtitle-1 heading__subtitle-2--bold mb-3">Cuenta Corriente</h1>
              <p className="paragraph paragraph__secondary paragraph__secondary--regular  ps-2 pe-2">Agiliza tus transacciones y recibe atención personalizada.</p>
            </div>
            <div className=" products__item cards scol-lg-3 col-md-6 mb-4 ">
              <h1 class="heading heading__subtitle-1 heading__subtitle-2--bold mb-3">Tarjeta Corporativa</h1>
              <p className="paragraph paragraph__secondary paragraph__secondary--regular  ps-2 pe-2">Recibe tasas de interés preferenciales y hasta el doble de millas.</p>
            </div>
            <div className="products__item financing col-lg-3 col-md-6 mb-4 ">
              <h1 class="heading heading__subtitle-1 heading__subtitle-2--bold mb-3">Financiamiento para tu empresa</h1>
              <p className="paragraph paragraph__secondary paragraph__secondary--regular  ps-2 pe-2">Cuenta con opciones de crédito y herramientas financieras que se ajustan a tu empresa.</p>
            </div>
            <div className="products__item services col-lg-3 col-md-6 mb-4 ">
              <h1 class="heading heading__subtitle-1 heading__subtitle-2--bold mb-3">Servicios adicionales</h1>
              <p className="paragraph paragraph__secondary paragraph__secondary--regular  ps-2 pe-2">Ventanilla extendida, pago a terceros, recaudaciones y más servicios para tu empresa.</p>
            </div>
          </div>
        </div>
      </section>


      {/* https://lordicon.com/icons/wired/outline?group=free&categoryId=64 */}
      {/* WHY */}
      <section className="why">
        <div className="boxed">
          <h2 class="display display__small mb-5">¿Por qué elegirnos?</h2>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <img src={rocket} alt="my-gif" className="list-icon" />
              <p className="paragraph paragraph__primary paragraph__primary--bold mb-3 mt-3"><b>Inicia como<br /> nunca antes</b></p>
              <p className="paragraph paragraph__secondary paragraph__secondary--regular paragraph--gray ">Un login más flexible<br /> y completo</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <img src={excel} alt="my-gif" className="list-icon" />

              <p className="paragraph paragraph__primary paragraph__primary--bold mb-3 mt-3"><b>Gestiona tus finanzas empresariales</b></p>
              <p className="paragraph paragraph__secondary paragraph__secondary--regular paragraph--gray ">Realiza pagos y transferencias en cualquier lugar</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <img src={responsive} alt="my-gif" className="list-icon" />
              <p className="paragraph paragraph__primary paragraph__primary--bold mb-3 mt-3"><b>Lleva tu empresa a todas partes</b></p>
              <p className="paragraph paragraph__secondary paragraph__secondary--regular paragraph--gray ">Consulta tus saldos en todos tus dispositivos</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <img src={reportes} alt="my-gif" className="list-icon" />
              <p className="paragraph paragraph__primary paragraph__primary--bold mb-3 mt-3"><b>Descarga reportes personalizados</b></p>
              <p className="paragraph paragraph__secondary paragraph__secondary--regular paragraph--gray ">Elige los campos y formatos que deseas para descargar tus reportes</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-lg-5 flex border-end justify-content-md-evenly">
              <div>
                <h1 class="display display__medium">+20k</h1>
                <p className="paragraph paragraph__secondary center">Empresas confían <br /> en nosotros</p>
              </div>
              <div>
                <h1 class="display display__medium">+60k</h1>
                <p className="paragraph paragraph__secondary center">Usuarios usan <br /> nuestra plataformo</p>
              </div>

            </div>

            <div className="col-md-12 col-lg-7 flex">

              <div>
                <StaticImage
                  src="../../images/aaa.svg"
                  alt="aaa"
                  placeholder="image"
                  layout="constrained"
                  width={133}
                  height={97}
                  className="aaa m-3 m-md-4"
                />
              </div>
              <div>
                <StaticImage
                  src="../../images/gpw.png"
                  alt="gpw"
                  placeholder="image"
                  layout="constrained"
                  width={90}
                  height={91}
                  className="gpw m-3 m-md-4"
                />
              </div>
              <div>
                <StaticImage
                  src="../../images/carbono.jpg"
                  alt="carbono"
                  placeholder="image"
                  layout="constrained"
                  width={106}
                  height={90}
                  className="carbono m-3 m-md-4"
                />
              </div>
              <div>
                <StaticImage
                  src="../../images/aenor.jpg"
                  alt="aenor"
                  placeholder="image"
                  layout="constrained"
                  width={90}
                  height={90}
                  className="aenor m-3 m-md-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* OPINION */}
      <section className="opinion bg-auxiliar">
        <div className="boxed">
          <h2 class="display display__small mb-5">La opinión de nuestros clientes</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="card card__type-3">
                <p>“La encuentro fácil de manejar, contiene información muy valiosa. La emisión del certificado bancario en línea es de mucha ayuda.”</p>
                <small className="mb-2">sector</small>
                <h1>Finanzas</h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card__type-3">
                <p>“Es más amigable y accesible, la información que presenta está más detallada. Gracias por tomarnos en cuenta y por mejorar el servicio.”</p>
                <small className="mb-2">sector</small>
                <h1>Tecnología</h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card__type-3">
                <p>“Me ha encantado todo lo nuevo porque se parece muchísimo a la Banca Personas y la interfaz nueva es más eficiente que la versión anterior.”</p>
                <small className="mb-2">sector</small>
                <h1>Comercio</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card card__type-3">
                <p>“Excelente, mi sugerencia me la pudieron cumplir. Muchas gracias banco de Guayaquil.”</p>
                <small className="mb-2">sector</small>
                <h1>SAutomotriz</h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card__type-3">
                <p>“Es una plataforma amigable y dinámica, facilita los procesos.”</p>
                <small className="mb-2">sector</small>
                <h1>Importaciones</h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card__type-3">
                <p>“Me gusta el nuevo diseño, mucho mejor. Solo falta mejorar la parte de Cash Management, pero por ahora va muy bien.”</p>
                <small className="mb-2">sector</small>
                <h1>Consumo</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card card__type-3">
                <p>“Mejor que la versión anterior. Felicidades Banco Guayaquil por siempre innovar y dar un buen servicio a sus clientes.”</p>
                <small className="mb-2">sector</small>
                <h1>Tecnología</h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card__type-3">
                <p>“Es una plataforma amigable y dinámica, facilita los procesos.”</p>
                <small className="mb-2">sector</small>
                <h1>_Consultoría</h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card__type-3">
                <p>“Me gusta el nuevo diseño, mucho mejor. Solo falta mejorar la parte de Cash Management, pero por ahora va muy bien.”</p>
                <small className="mb-2">sector</small>
                <h1>Construcción</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card card__type-3">
                <p>“La plataforma funciona perfectamente, ágil y segura. Gracias.”</p>
                <small className="mb-2">sector</small>
                <h1>Hotelero</h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card__type-3">
                <p>“Todo está yendo por súper buen camino desde que hicieron todos estos cambios. Solo falta que el Cash Management esté integrado con los nuevos menús, pero estoy seguro que están trabajando en eso.”</p>
                <small className="mb-2">sector</small>
                <h1>Comercio</h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card__type-3">
                <p>“Eternamente agradecida, no sabe lo rápido que fue descargar el certificado. Hasta en inglés lo descargue. Mil Gracias.”</p>
                <small className="mb-2">sector</small>
                <h1>ONG</h1>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CASH */}
      <section className="cash bg-base">
        <div className="boxed">
          <h1 className="heading heading__headline heading__headline--bold mb-4 center">Muy pronto estará disponible el Cash Management</h1>
          <h3 class="paragraph paragraph__primary paragraph__primary--regular center">Carga, aprueba y consulta las órdenes de pago de tu empresa.<br />
            Realiza transferencias a otros bancos, al exterior, pago a terceros<br />
            y más opciones con un nuevo diseño.
          </h3>
        </div>
      </section>


      {/* CDA */}
      <section className="bg-accent">
        <div className="boxed center">
          <h2 className="heading heading__headline heading__headline--regular center mb-5">Encuentra ayuda a <b>dudas</b> <b>relacionadas</b> con <br /> productos y servicios <b>para tu Empresa.</b></h2>
          <a className="button secondary plus" href="/">Ir a Centro de Ayuda</a>
        </div>
      </section>


      {/* FAQ */}
      <section className="p-sm-4 p-lg-5">
        <div className="boxed">
          <h2 className="display display__small">Preguntas Frecuentes</h2>
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
