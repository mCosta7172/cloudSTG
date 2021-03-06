import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//import "../../../static/frontend/css/bootstrap.min.css";
import "./scss/landing-page.scss";

const Landing = () => {
  return (
    <Fragment>
      {/* Navigation */}
      <nav className="navbar navbar-light bg-light static-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            Expreso TAS
          </a>
          <Link className="btn btn-primary" to="/stg">
            Ingresar al Sistema
          </Link>
        </div>
      </nav>
      <header className="masthead text-white text-center">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h1 className="mb-5">
                Más de 30 años brindando servicios de Transporte y Logística!
              </h1>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <form>
                <div className="form-row">
                  <div className="col-12 col-md-9 mb-2 mb-md-0">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Ingrese su número de guía..."
                    />
                  </div>
                  <div className="col-12 col-md-3">
                    <button
                      type="submit"
                      className="btn btn-block btn-lg btn-primary"
                    >
                      Buscar!
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
      {/* Icons Grid */}
      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-screen-desktop m-auto text-primary" />
                </div>
                <h3>Transporte de Cargas</h3>
                <p className="lead mb-0">
                  Nos encargamos de realizar transporte de cargas de
                  encomiendas, llegando a toda la provincia de Buenos Aires,
                  Rosario y a cualquier punto del país por redespacho.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-layers m-auto text-primary" />
                </div>
                <h3>Cobranzas</h3>
                <p className="lead mb-0">
                  Facilitamos a nuestros clientes el servicio de cobranzas en
                  toda la provincia de Buenos Aires y Rosario.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="icon-check m-auto text-primary" />
                </div>
                <h3>Trámites en general</h3>
                <p className="lead mb-0">
                  Disponemos de comisionistas capacitados para realizar diversos
                  trámites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Showcases */}
      {/* <section className="showcase">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img"
              style={{
                backgroundImage:
                  'url("/static/frontend/img/bg-showcase-1.jpg")',
              }}
            />
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Fully Responsive Design</h2>
              <p className="lead mb-0">
                When you use a theme created by Start Bootstrap, you know that
                the theme will look great on any device, whether it's a phone,
                tablet, or desktop the page will behave responsively!
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div
              className="col-lg-6 text-white showcase-img"
              style={{
                backgroundImage:
                  'url("/static/frontend/img/bg-showcase-2.jpg")',
              }}
            />
            <div className="col-lg-6 my-auto showcase-text">
              <h2>Updated For Bootstrap 4</h2>
              <p className="lead mb-0">
                Newly improved, and full of great utility classes, Bootstrap 4
                is leading the way in mobile responsive web development! All of
                the themes on Start Bootstrap are now using Bootstrap 4!
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img"
              style={{
                backgroundImage:
                  'url("/static/frontend/img/bg-showcase-3.jpg")',
              }}
            />
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Easy to Use &amp; Customize</h2>
              <p className="lead mb-0">
                Landing Page is just HTML and CSS with a splash of SCSS for
                users who demand some deeper customization options. Out of the
                box, just add your content and images, and your new landing page
                will be ready to go!
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="footer bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
              <ul className="list-inline mb-2">
                <li className="list-inline-item">
                  <a href="#">Nosotros</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href="#">Contacto</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href="#">Terms of Use</a>
                </li>
                <li className="list-inline-item">⋅</li>
                <li className="list-inline-item">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
              <p className="text-muted small mb-4 mb-lg-0">
                © Estudio de Sistemas 2020. Todos los derechos reservados.
              </p>
            </div>
            <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
              <ul className="list-inline mb-0">
                <li className="list-inline-item mr-3">
                  <a href="#">
                    <i className="fab fa-facebook fa-2x fa-fw" />
                  </a>
                </li>
                <li className="list-inline-item mr-3">
                  <a href="#">
                    <i className="fab fa-twitter-square fa-2x fa-fw" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-instagram fa-2x fa-fw" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Landing;
