import { Card, Row, Col } from "react-bootstrap"
import ArrowUP from "../assets/images/Arrow - Up 3.png"
import ArrowDonwnCircle from "../assets/images/down-arroe.png"
import ArrowUpCircle from "../assets/images/uparrow.png"
import WifiIcpn from '../assets/images/wifi.png'
import refresh from '../assets/images/refresh.png'

interface Props {
  currency: any
}

export const SimpleCard: React.FC<Props> = ({currency}): JSX.Element => {
    return(
    <div className={`section2-card ${currency.srno == 3 ? 'top-border-custom' : 'bottom-border-custom'}`}>
        <p className="text-uppercase" style={{color: "#7D8396"}}>
            {currency.srno <= 2 && (
                 <b><span className="">EXPIRED</span></b>
            )}
            {currency.srno === 3 && (
                 <b><img src={WifiIcpn} className="w-15"/> <span className="text-white ms-2">Live</span></b>
            )}
            {currency.srno > 3 && (
                 <b><img src={refresh} className="w-10"/> <span className="ms-2">Refresh</span></b>
            )}
        </p>
        <div className="position-relative">
            <div className={` d-flex justify-content-between mb-3 ${(currency.srno == 3) ? "payout-active" : "payout"}`} style={{color: "#7D8396"}}>
                <p className={`m-0 align-self-center ms-3 ${(currency.srno == 3) ? "text-white" : ""}`}>1.45x Payout</p>
                <img src={ArrowUpCircle} />
            </div>
            <div className="payout-gray-katki" style={{background: currency.srno == 3 ? '#016C75' : '#161314' }}/>
        </div>
        <Row>
            <Col xs={6} sm={6} md={6} lg={6}>
                <span style={{color: "#D43259"}}>$0.130</span>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
                <span style={{color: "#5D6588"}}>Last Price</span>
                <h5 className="text-white red-text-shodow">$298.954</h5>
            </Col>
        </Row>
        <Row>
            <Col xs={6} sm={6} md={6} lg={6}>
                <span style={{color: "#5D6588"}}>Locked Price</span>
                <h5 className="text-white blue-text-shodow">$298.954</h5>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
                <span style={{color: "#5D6588"}}>Price Pool</span>
                <h5 className="text-white red-text-shodow">16.328BNB</h5>
            </Col>
        </Row>
        <div className="w-100 text-right-webkit payout-red-parent position-relative">
            <div className="payout-red d-flex mb-3 mt-3" style={{color: "#7D8396"}}>
                <img src={ArrowDonwnCircle} />
                <p className="m-0 text-white align-self-center ms-3">1.45x Payout</p>
            </div>
            <div className="payout-red-katki"/>
        </div>

    </div>
    )
}