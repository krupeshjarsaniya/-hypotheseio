import { Card, Row, Col } from "react-bootstrap"
import { AreaChart } from "./AreaChart"
import ArrowUP from "../assets/images/Arrow - Up 3.png"
import ArrowDown from "../assets/images/Arrow - Down 3.png"
import RightArrowCirlce from "../assets/images/rightcircle.png"

interface Props {
  currency: any
}

export const CurrencyCard: React.FC<Props> = ({currency}): JSX.Element => {
    return(
    <Card className="currency-card">
      <Card.Body>
        <Row className="mt-m8">
          <Col xs={3} sm={3} md={3} lg={3} className="text-center align-self-center">
            <img src={currency.image} alt="aaa" style={{borderRadius: "50px", width:"40px", height: "40px"}}/>
          </Col>
          <Col xs={9} sm={9} md={9} lg={9}>
            <AreaChart color={currency.color}/>
            <h5 className={`d-flex justify-content-${currency.name === 'Binance Coin' ? 'between': 'end'} mt-2`} style={{color: currency.color}}>
              {currency.name === 'Binance Coin' &&(<img src={RightArrowCirlce} className="w-10 " style={{marginRight: "32%"}}/>)}
              <div>
                <img src={currency.name === 'Bitcoin' || currency.name === 'Tether' ? ArrowUP : ArrowDown} className="me-2"/>2.11%
              </div>
            </h5>
          </Col>
        </Row>
        <Row className="mt-2 justify-content-around">
          <Col sm={8} md={8} lg={8}>
            <p className="p-0 m-0 name">{currency.name}</p>
            <h4 className="p-0 m-0 text-white">USD {currency.price}</h4>
          </Col>
          <Col sm={4} md={4} lg={4} className="text-end align-self-end">
            <p className="p-0 m-0 shortname">{currency.shortname}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    )
}