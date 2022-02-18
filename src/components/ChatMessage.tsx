import { Card, Row, Col } from "react-bootstrap"
import StarImg from '../assets/images/Vector.png'

interface Props {
    item: any
}

export const ChatMessage: React.FC<Props> = ({ item }): JSX.Element => {
    return(
        <Row className="chatbox mb-2">
            <Col xs={3} sm={3} md={3} lg={3} className="position-relative" style={{height: "94px"}}>
                <img src={item.image} alt="user" style={{borderRadius: "50px", width:"60px", height: "60px"}}/>
                <img src={StarImg} alt="star" className="position-absolute start-image"/>
            </Col>
            <Col xs={8} sm={8} md={8} lg={8}>
                <h5 className="name">{ item.name }<span>{item.time}</span></h5>
                <p className="message">{item.type === 'text' ? item.msg : <img src={item.msg}/>}</p>
            </Col>
        </Row>
    )
}