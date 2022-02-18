import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap"
import { Carousel } from '@trendyol-js/react-carousel';
import { SimpleCard } from "./SimpleCard"
import BitCoin from '../assets/images/Bitcoin.png';
import Binance from '../assets/images/coin.png';
import ETHImge from '../assets/images/ETH.png';
import Tether from '../assets/images/tether.png';
import WifiIcpn from '../assets/images/wifi.png'
import timerImg from '../assets/images/timer.png'
import RightArrow from '../assets/images/right-arrow.png'
import LeftArrow from '../assets/images/left-arrow.png'

export const Slider: React.FC = (): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState(5)
  const [bnbusdt, setBnbusdt] = useState([
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
    },
    {
      name: "Ethereum",
      shortname: "ETH",
      price: '5000',
      image: ETHImge,
      color: '#FA2256',
      srno: 5,
    },
    {
      name: "Tether",
      shortname: "USDT",
      price: '2000',
      image: Tether,
      color: '#00C6EB',
      srno: 6,
    },
    {
      name: "Binance Coin",
      shortname: "BTC",
      price: '5000',
      image: Binance,
      color: '#FA2256',
      srno: 7,
    }
  ])

  const setWidth = () => {
    const { innerWidth: width, innerHeight: height } = window;
    // const data = useWindowDimensions();
    if(width > 768) {
      setWindowWidth(5)
    } else {
      setWindowWidth(1)
    }
  }
  window.addEventListener('resize', setWidth)

  
  useEffect(() => {
    setWidth()
  },[])

  return(
      <>
      <Row>
        <Col sm={12} md={4} lg={4} className="BNBUSDT-title">
          <h5 className="text-white ms-3">BNBUSDT $381.470</h5>
        </Col> 
        <Col sm={12} md={4} lg={4} className="text-center wifi-icon">
          <img src={WifiIcpn} className="w-8"/>  
        </Col> 
        <Col sm={12} md={4} lg={4} className="text-end timerdiv">
          <span className="time">03:40</span>
          <span className="text-white ms-1 minute">5m</span>
          <img src={timerImg} className="w-5 ms-2"/>
        </Col> 
      </Row> 
      <div className="mt-2 w-100">
          <Carousel show={windowWidth} responsive={true} slide={1} infinite={true} swiping={true} rightArrow={<img src={RightArrow} className="right-arrow-slider"/>} leftArrow={<img src={LeftArrow} className="left-arrow-slider"/>}>
          {bnbusdt.map((item: any, index: number) => (
              <div key={index}>
              <SimpleCard currency={item}/>
              </div>
          ))}
          </Carousel>
      </div>
      </>
  )
}