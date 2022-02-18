import { useState } from 'react'
import { Col, Dropdown, Row } from 'react-bootstrap'
import { NavbarMenu } from './components/Navbar';
import { CurrencyCard } from './components/CurrencyCard';
import { Sidebar } from './components/Sidebar';
import { Chart } from './components/Chart';
import { Slider } from './components/Slider';
import BitCoin from './assets/images/Bitcoin.png';
import Binance from './assets/images/coin.png';
import ETHImge from './assets/images/ETH.png';
import Tether from './assets/images/tether.png';
import iconSolana from './assets/images/Icon Solana.png'

function App() {
  const [currency, setCurrency] = useState([
    {
      name: "Bitcoin",
      shortname: "BTC",
      price: '2000',
      image: BitCoin,
      color: '#00C6EB',
      srno: 1,
    },
    {
      name: "Ethereum",
      shortname: "ETH",
      price: '5000',
      image: ETHImge,
      color: '#FA2256',
      srno: 2,
    },
    {
      name: "Tether",
      shortname: "USDT",
      price: '2000',
      image: Tether,
      color: '#00C6EB',
      srno: 3,
    },
    {
      name: "Binance Coin",
      shortname: "BTC",
      price: '5000',
      image: Binance,
      color: '#FA2256',
      srno: 4,
    }
  ])

  return (
    <div className="App">
      <Row className="m-0">
        <Col sm={12} md={10} lg={10}>
          <div className='containers ms-2 me-2 mt-3'>
            <NavbarMenu />
            {/* Currency card design */}
            <Row className='mt-4'>
              {currency.map((item: any, index) => (
                <Col sm={12} md={3} lg={3} key={index}>
                  <CurrencyCard currency={item}/>
                </Col>
              ))}
            </Row>
            {/* slider design */}
            <div className="mt-4 section-2 p-3 position-relative">
                <Slider />
            </div>
            {/* chart design */}
            <div className="mt-4 section-3 p-3 mb-3 pt-0 pb-0">
              <Row>
                <Col xs={12} sm={12} md={2} lg={2} className="text-center align-self-center">
                <Dropdown className="d-inline mx-2">
                  <Dropdown.Toggle id="dropdown-autoclose-true" className="btn-border-bottom">
                    <img src={iconSolana} className="w-15 mt-m3" /><span className="ms-2 fw-bold" style={{fontSize: "25px"}}>SOL/USDC</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </Col>
                <Col xs={12} sm={12} md={10} lg={10}><Chart /></Col>
              </Row>
            </div>
          </div>
        </Col>
        {/* chat section */}
        <Col sm={12} md={2} lg={2} className="chatscreen p-0">
          <Sidebar />
        </Col>
      </Row>
    </div>
  )
}

export default App
