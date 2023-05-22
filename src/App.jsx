import { useState } from 'react'
import './App.css'
import { Logos } from './Logos'
import Menu from './components/Menu'

function App() {
  const [count, setCount] = useState(0)
  return (
<div className="menu">
      <div className="menu-wrapper">
       <Logos logotipo="Andres" slogan="Comidas Rapidas En Cartagena" aviso="Hoy promocion de perros calientes a $10.000"  />
        <div className="menu-body grid">
          <div className="side-panel">
          <Menu nombeCateg="Hamburguesas" nombreclasecs="burger" />
          <Menu nombeCateg="Hot dogs" nombreclasecs="hotdog" />
            <div className="hotdog-menu">
              <h1>hotdog</h1>
              <ul>
                <li className="hotdog-menu-item">
                  <div className="hotdog-offer-1 hotdog-offer-card">
                    <h3>Menu hotdog W</h3>
                    <p>
                      Donec luctus malesuada imperdiet. Nunc faucibus rhoncus
                      felis, vitae tincidunt turpis sollicitudin sit amet.
                    </p>
                    <div className="hotdog-card-footer">
                      <div className="hotdog-card-footer-line"></div>
                      <h3>5.00 </h3>
                    </div>
                  </div>
                </li>
                <li className="hotdog-menu-item">
                  <div className="hotdog-offer-1 hotdog-offer-card">
                    <h3>Menu hotdog</h3>
                    <p>
                      Donec luctus malesuada imperdiet. Nunc faucibus rhoncus
                      felis, vitae tincidunt turpis sollicitudin sit amet.
                    </p>
                    <div className="hotdog-card-footer">
                      <div className="hotdog-card-footer-line"></div>
                      <h3>5.00 </h3>
                    </div>
                  </div>
                </li>
                <li className="hotdog-menu-item">
                  <div className="hotdog-offer-1 hotdog-offer-card">
                    <h3>Menu hotdog</h3>
                    <p>
                      Donec luctus malesuada imperdiet. Nunc faucibus rhoncus
                      felis, vitae tincidunt turpis sollicitudin sit amet.
                    </p>
                    <div className="hotdog-card-footer">
                      <div className="hotdog-card-footer-line"></div>
                      <h3>5.00 </h3>
                    </div>
                  </div>
                </li>
                <li className="hotdog-menu-item">
                  <div className="hotdog-offer-1 hotdog-offer-card">
                    <h3>Menu hotdog</h3>
                    <p>
                      Donec luctus malesuada imperdiet. Nunc faucibus rhoncus
                      felis, vitae tincidunt turpis sollicitudin sit amet.
                    </p>
                    <div className="hotdog-card-footer">
                      <div className="hotdog-card-footer-line"></div>
                      <h3>5.00 </h3>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="sandwich-menu">
            <h1>Sandwich</h1>
            <ul>
              <li className="sandwich-menu-item">
                <div className="sandwich-offer-1 sandwich-offer-card">
                  <div className="headings-holder-underlined">
                    <h3>Menu sandwich</h3>
                    <h3>5.00 </h3>
                  </div>
                  <p>
                    Donec luctus malesuada imperdiet. Nunc faucibus rhoncus
                    felis.
                  </p>
                </div>
              </li>
              <li className="sandwich-menu-item">
                <div className="sandwich-offer-2 sandwich-offer-card">
                  <div className="headings-holder-underlined">
                    <h3>Menu sandwich</h3>
                    <h3>5.00 </h3>
                  </div>
                  <p>
                    Donec luctus malesuada imperdiet. Nunc faucibus rhoncus
                    felis.
                  </p>
                </div>
              </li>
              <li className="sandwich-menu-item">
                <div className="sandwich-offer-3 sandwich-offer-card">
                  <div className="headings-holder-underlined">
                    <h3>Menu sandwich</h3>
                    <h3>5.00 </h3>
                  </div>
                  <p>
                    Donec luctus malesuada imperdiet. Nunc faucibus rhoncus
                    felis.
                  </p>
                </div>
              </li>
              <li className="sandwich-menu-item">
                <div className="sandwich-offer-3 sandwich-offer-card">
                  <div className="headings-holder">
                    <h3>Menu sandwich</h3>
                    <h3>5.00 </h3>
                  </div>
                </div>
              </li>
              <li className="sandwich-menu-item">
                <div className="sandwich-offer-3 sandwich-offer-card">
                  <div className="headings-holder">
                    <h3>Menu sandwich</h3>
                    <h3>5.00 </h3>
                  </div>
                </div>
              </li>
              <li className="sandwich-menu-item">
                <div className="sandwich-offer-3 sandwich-offer-card">
                  <div className="headings-holder">
                    <h3>Menu sandwich</h3>
                    <h3>5.00 </h3>
                  </div>
                </div>
              </li>
              <li className="sandwich-menu-item">
                <div className="sandwich-offer-3 sandwich-offer-card">
                  <div className="headings-holder">
                    <h3>Menu sandwich</h3>
                    <h3>5.00 </h3>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="pizza-menu">
            <div className="pizza-menu-wrap">
              <h1>pizza</h1>
              <ul>
                <li className="pizza-menu-item">
                  <div className="pizza-offer-1 pizza-offer-card">
                    <h3>Menu pizza</h3>
                    <h3>5.00 </h3>
                    <p>
                      Donec luctus malesuada imperdiet. Nunc faucibus rhoncus
                      felis.
                    </p>
                  </div>
                </li>
                <li className="pizza-menu-item">
                  <div className="pizza-offer-1 pizza-offer-card">
                    <h3>Menu pizza</h3>
                    <h3>5.00 </h3>
                    <p>
                      Donec luctus malesuada imperdiet. Nunc faucibus rhoncus
                      felis.
                    </p>
                  </div>
                </li>
                <li className="pizza-menu-item">
                  <div className="pizza-offer-1 pizza-offer-card">
                    <h3>Menu pizza</h3>
                    <h3>5.00 </h3>
                    <p>
                      Donec luctus malesuada imperdiet. Nunc faucibus rhoncus
                      felis.
                    </p>
                  </div>
                </li>
                <li className="pizza-menu-item">
                  <div className="pizza-offer-1 pizza-offer-card">
                    <h3>Menu pizza</h3>
                    <h3>5.00 </h3>
                    <p>
                      Donec luctus malesuada imperdiet. Nunc faucibus rhoncus
                      felis.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="happyhour">
            <div className="happyhour-container">
              <div className="happyhour-container-col1">
                <div className="discount-holder">
                  <h1>20</h1>
                  <div className="percentage-holder">
                    <span>%</span>
                    <span>off</span>
                  </div>
                  <h1>Happy</h1>
                  <h1>Hour</h1>
                </div>
              </div>
              <div className="happyhour-container-col2">
                <p>
                  Donec luctus malesuada imperdiet. Nunc faucibus rhoncus felis,
                  vitae tincidunt turpis sollicitudin sit amet. Condimentum urna
                  et lectus ullamcorper tincidunt. Suspendisse a mauris.
                </p>
              </div>
            </div>
          </div>
          <div className="breakfast-menu">
            <div className="breakfast-menu-header">
              <h1>breakfast</h1>
              <p>
                Donec luctus malesuada imperdiet. Nunc faucibus rhoncus felis,
                vitae tincidunt turpis sollicitudin sit amet.
              </p>
            </div>

            <div className="breakfast-menu-window1 breakfast-menu-window"></div>
            <div className="breakfast-menu-window2 breakfast-menu-window"></div>
            <div className="breakfast-menu-window3 breakfast-menu-window"></div>
            <div className="breakfast-menu-card">
              <div className="title-holder">
                <h3>breakfast menu</h3>
                <h3>5.00 </h3>
              </div>
              <p>
                Donec luctus malesuada imperdiet. Nunc faucibus rhoncus felis
                vitae tincidunt.
              </p>
            </div>
            <div className="breakfast-menu-card">
              <div className="title-holder">
                <h3>breakfast menu</h3>
                <h3>5.00 </h3>
              </div>
              <p>
                Donec luctus malesuada imperdiet. Nunc faucibus rhoncus felis
                vitae tincidunt.
              </p>
            </div>
            <div className="breakfast-menu-card">
              <div className="title-holder">
                <h3>breakfast menu</h3>
                <h3>5.00 </h3>
              </div>
              <p>
                Donec luctus malesuada imperdiet. Nunc faucibus rhoncus felis
                vitae tincidunt.
              </p>
            </div>
            <div className="breakfast-menu-card">
              <div className="title-holder">
                <h3>breakfast menu</h3>
                <h3>5.00 </h3>
              </div>
              <p>
                Donec luctus malesuada imperdiet. Nunc faucibus rhoncus felis
                vitae tincidunt.
              </p>
            </div>
            <div className="breakfast-menu-card">
              <div className="title-holder">
                <h3>breakfast menu</h3>
                <h3>5.00 </h3>
              </div>
              <p>
                Donec luctus malesuada imperdiet. Nunc faucibus rhoncus felis
                vitae tincidunt.
              </p>
            </div>
            <div className="breakfast-menu-card">
              <div className="title-holder">
                <h3>breakfast menu</h3>
                <h3>5.00 </h3>
              </div>
              <p>
                Donec luctus malesuada imperdiet. Nunc faucibus rhoncus felis
                vitae tincidunt.
              </p>
            </div>
          </div>
          <div className="beverages-menu">
            <div className="beverages-title">
              <h1>beverages</h1>
            </div>
            <div className="beverage-offers">
              <div className="beverage-offers-header">
                <div className="beverage-offers-header-col1">
                  <h3>menu coffee</h3>
                  <span></span>
                  <h3>5.00 </h3>
                  <p>
                    Donec luctus malesuada imperdiet. Nunc faucibus rhoncus
                    felis vitae tincidunt luctus malesuada imperdiet nunc
                  </p>
                </div>
                <div className="beverage-offers-header-col2">
                  <h3>menu coffee</h3>
                  <span></span>
                  <h3>5.00 </h3>
                  <p>
                    Donec luctus malesuada imperdiet. Nunc faucibus rhoncus
                    felis vitae tincidunt luctus malesuada imperdiet nunc
                  </p>
                </div>
              </div>
              <div className="beverage-offers-body">
                <div className="beverage-offers-body-window-big window-menu">
                  <div className="window-offer">
                    <h3>Menu coffee</h3>
                    <h3>5.00 </h3>
                  </div>
                  <div className="window-offer">
                    <h3>Menu coffee</h3>
                    <h3>5.00 </h3>
                  </div>
                  <div className="window-offer">
                    <h3>Menu coffee</h3>
                    <h3>5.00 </h3>
                  </div>
                  <div className="window-offer">
                    <h3>Menu coffee</h3>
                    <h3>5.00 </h3>
                  </div>
                  <div className="window-offer">
                    <h3>Menu coffee</h3>
                    <h3>5.00 </h3>
                  </div>
                  <div className="window-offer">
                    <h3>Menu coffee</h3>
                    <h3>5.00 </h3>
                  </div>
                </div>
                <div
                  className="beverage-offers-body-window-small small1 window-menu"
                ></div>
                <div
                  className="beverage-offers-body-window-small small2 window-menu"
                ></div>
              </div>
            </div>
          </div>
          <div className="specials-menu">
            <div className="specials-menu-title">
              <h1>Specials menu</h1>
            </div>
            <div className="specials-menu-offers">
              <div className="specials-menu-offers-col1">
                <h3>SPECIAL MENU #1</h3>
                <p>
                  Donec luctus malesuada imperdiet. Nunc faucibus rhoncus felis,
                  vitae tincidunt turpis sollicitudin sit amet.
                </p>
                <h3>5.00 </h3>
              </div>
              <div className="specials-menu-offers-col2">
                <h3>SPECIAL MENU #2</h3>
                <p>
                  Donec luctus malesuada imperdiet. Nunc faucibus rhoncus felis,
                  vitae tincidunt turpis sollicitudin sit amet.
                </p>
                <h3>$5.000 </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-footer">
          <div className="menu-footer-col-left"><h1>ULTIMO EN MOVIL</h1></div>
          <div className="menu-footer-col-right">
            <p>
              Donec luctus malesuada imperdiet. Nunc faucibus rhoncus felis,
              vitae tincidunt turpis sollicitudin sit amet. Ut condimentum urna
              et lectus ullamcorper tincidunt. Suspendisse a mauris et neque
              mattis elementum. Condimentum urna et lectus ullamcorper
              tincidunt.
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
