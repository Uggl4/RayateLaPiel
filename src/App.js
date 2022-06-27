import logo from "./logo.svg";
import "./App.css";
function App() {
  return (
    <div className="App">
      <header class="section-header">
        <section class="header-main border-bottom">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-2 col-4">Rayate La Piel</div>
              <div class="col-lg-6 col-sm-12">
                <form action="#" class="search">
                  <div class="input-group w-100">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="submit">
                        <i class="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-lg-4 col-sm-6 col-12">
                <div class="widgets-wrap float-md-right">
                  <div class="widget-header icontext">
                    <a href="#" class="icon icon-sm rounded-circle border">
                      <i class="fa fa-user"></i>
                    </a>
                    <div class="text">
                      <span class="text-muted">Bienvenido!</span>
                      <div>
                        <a href="#">Inicia Sesion</a> |<a href="#"> Registrate</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <nav class="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
          <div class="container">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main_nav"
              aria-controls="main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="main_nav">
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a class="nav-link" href="#">
                    Inicio
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Tatuadores
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Ciudades
                  </a>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    {" "}
                    Revisar
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                      Foods and Drink
                    </a>
                    <a class="dropdown-item" href="#">
                      Home interior
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                      Category 1
                    </a>
                    <a class="dropdown-item" href="#">
                      Category 2
                    </a>
                    <a class="dropdown-item" href="#">
                      Category 3
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section class="section-main bg padding-y">
        <div class="container">
          <div class="row">
            <aside class="col-md-3">
              <nav class="card">
                <ul class="menu-category">
                  <li>
                    <a href="#">Tradicional</a>
                  </li>
                  <li>
                    <a href="#">Neo Tradicional</a>
                  </li>
                  <li>
                    <a href="#">New school</a>
                  </li>
                  <li>
                    <a href="#">Estilo Japones</a>
                  </li>
                  <li>
                    <a href="#">BlackWork</a>
                  </li>
                  <li>
                    <a href="#">Blackout</a>
                  </li>
                  <li>
                    <a href="#">Dotwork/Geometria</a>
                  </li>
                  <li>
                    <a href="#">Realismo</a>
                  </li>
                  <li>
                    <a href="#">Minimalista</a>
                  </li>
                  <li>
                    <a href="#">Biomecanico</a>
                  </li>
                  <li>
                    <a href="#">WaterColor</a>
                  </li>
                  <li>
                    <a href="#">Tribal</a>
                  </li>

                </ul>
              </nav>
            </aside>
            <div class="col-md-9">
              <article class="banner-wrap">
                <img src="assets/images/3.webp" class="w-100 rounded" />
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="section-name padding-y-sm">
        <div class="container">
          <header class="section-heading">
            <a href="#" class="btn btn-outline-primary float-right">
              Ver todos
            </a>
            <h3 class="section-title">Tatuadores</h3>
          </header>

          <div class="row">
            <div class="col-md-3">
              <div href="#" class="card card-product-grid">
                <a href="#" class="img-wrap">
                  {" "}
                  <img src="assets/images/items/1.jpg" />{" "}
                </a>
                <figcaption class="info-wrap">
                  <a href="#" class="title">
                    Just another product name
                  </a>
                  <div class="price mt-1">$179.00</div>
                </figcaption>
              </div>
            </div>
            <div class="col-md-3">
              <div href="#" class="card card-product-grid">
                <a href="#" class="img-wrap">
                  {" "}
                  <img src="assets/images/items/2.jpg" />{" "}
                </a>
                <figcaption class="info-wrap">
                  <a href="#" class="title">
                    Some item name here
                  </a>
                  <div class="price mt-1">$280.00</div>
                </figcaption>
              </div>
            </div>
            <div class="col-md-3">
              <div href="#" class="card card-product-grid">
                <a href="#" class="img-wrap">
                  {" "}
                  <img src="assets/images/items/3.jpg" />{" "}
                </a>
                <figcaption class="info-wrap">
                  <a href="#" class="title">
                    Great product name here
                  </a>
                  <div class="price mt-1">$56.00</div>
                </figcaption>
              </div>
            </div>
            <div class="col-md-3">
              <div href="#" class="card card-product-grid">
                <a href="#" class="img-wrap">
                  {" "}
                  <img src="assets/images/items/4.jpg" />{" "}
                </a>
                <figcaption class="info-wrap">
                  <a href="#" class="title">
                    Just another product name
                  </a>
                  <div class="price mt-1">$179.00</div>
                </figcaption>
              </div>
            </div>
            <div class="col-md-3">
              <div href="#" class="card card-product-grid">
                <a href="#" class="img-wrap">
                  {" "}
                  <img src="assets/images/items/5.jpg" />{" "}
                </a>
                <figcaption class="info-wrap">
                  <a href="#" class="title">
                    Just another product name
                  </a>
                  <div class="price mt-1">$179.00</div>
                </figcaption>
              </div>
            </div>
            <div class="col-md-3">
              <div href="#" class="card card-product-grid">
                <a href="#" class="img-wrap">
                  {" "}
                  <img src="assets/images/items/6.jpg" />{" "}
                </a>
                <figcaption class="info-wrap">
                  <a href="#" class="title">
                    Some item name here
                  </a>
                  <div class="price mt-1">$280.00</div>
                </figcaption>
              </div>
            </div>
            <div class="col-md-3">
              <div href="#" class="card card-product-grid">
                <a href="#" class="img-wrap">
                  {" "}
                  <img src="assets/images/items/7.jpg" />{" "}
                </a>
                <figcaption class="info-wrap">
                  <a href="#" class="title">
                    Great product name here
                  </a>
                  <div class="price mt-1">$56.00</div>
                </figcaption>
              </div>
            </div>
            <div class="col-md-3">
              <div href="#" class="card card-product-grid">
                <a href="#" class="img-wrap">
                  {" "}
                  <img src="assets/images/items/9.jpg" />{" "}
                </a>
                <figcaption class="info-wrap">
                  <a href="#" class="title">
                    Just another product name
                  </a>
                  <div class="price mt-1">$179.00</div>
                </figcaption>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="section-footer border-top bg">
        <div class="container">
          <section class="footer-top  padding-y">
            <div class="row">
              <aside class="col-md col-6">
                <h6 class="title">Cuenta</h6>
                <ul class="list-unstyled">
                  <li>
                    {" "}
                    <a href="#"> Inicio Sesion </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#"> Registro de usuario </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#"> Configurar cuenta </a>
                  </li>
                </ul>
              </aside>
            </div>
          </section>
          <section class="footer-bottom row">
            <div class="col-md-2">
              <p class="text-muted"> 2022 RayateLaPiel </p>
            </div>
            <div class="col-md-8 text-md-center">
              <span class="px-2">info@com</span>
              <span class="px-2">+000-000-0000</span>
              <span class="px-2">Street name 123, ABC</span>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}
export default App;
