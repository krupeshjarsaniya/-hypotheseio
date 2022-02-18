import { useEffect, useState } from 'react'
import { Button, Col, Dropdown, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
import { Carousel } from '@trendyol-js/react-carousel';
import { NavbarMenu } from './components/Navbar';
import { CurrencyCard } from './components/CurrencyCard';
import { ChatMessage } from './components/ChatMessage';
import { SimpleCard } from './components/SimpleCard';
import { Sidebar } from './components/Sidebar';
import BitCoin from './assets/images/Bitcoin.png';
import Binance from './assets/images/coin.png';
import ETHImge from './assets/images/ETH.png';
import Tether from './assets/images/tether.png';
import Cagezinho from './assets/images/1Ellipse 48.png';
import Varti from './assets/images/Ellipse 48.png'
import Ellen from './assets/images/Ellipse 481.png';
import Search from './assets/images/Search.png'
import sendImg from './assets/images/Vector2.png'
import timerImg from './assets/images/timer.png'
import iconSolana from './assets/images/Icon Solana.png'
import WifiIcpn from './assets/images/wifi.png'
import RightArrow from './assets/images/right-arrow.png'
import LeftArrow from './assets/images/left-arrow.png'
import silyicon from './assets/images/smilyicon.png'
import ImageParty from './assets/images/image 1.png'
import { Chart } from './components/Chart';
import { Slider } from './components/Slider';


function App() {
  // const { height, width } = useWindowDimensions();

  const [windowWidth, setWindowWidth] = useState(5)

  


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

  const [chatMsg, setChatMsg] = useState([
    {
      name: "Varti Branco",
      time: "14:20",
      msg: "Hello All",
      image: Varti,
      type: "text"
    },
    {
      name: "Ellen Rocha",
      time: "14:21",
      msg: "You never replied back what happen?",
      image: Ellen,
      type: "text"
    },
    {
      name: "Cagezinho",
      time: "14:22",
      msg: "😂😂😂😂😂😂",
      image: Cagezinho,
      type: "text"
    },
    {
      name: "Varti Branco",
      time: "14:25",
      msg: "I see rich people 🤑",
      image: Varti,
      type: "text"
    },
    {
      name: "Ellen Rocha",
      time: "14:27",
      msg: "I wan to start my new real life",
      image: Ellen,
      type: "text"
    },
    {
      name: "Ellen Rocha",
      time: "14:30",
      msg: "😂😂😂😂😂😂",
      image: Ellen,
      type: "text"
    },
    {
      name: "Cagezinho",
      time: "14:22",
      msg: ImageParty,
      image: Cagezinho,
      type: "image"
    },
    {
      name: "Varti Branco",
      time: "14:25",
      msg: "Good Luck",
      image: Varti,
      type: "text"
    },
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
            <div className="mt-4 section-2 p-3 position-relative">
                <Slider />
            </div>
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
        <Col sm={12} md={2} lg={2} className="chatscreen p-0">
          <Sidebar chatMsg={chatMsg}/>
        </Col>
      </Row>
    </div>
  )
}

export default App
