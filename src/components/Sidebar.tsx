import { Card, Row, Col, Button, Form, FormControl, InputGroup } from "react-bootstrap"
import silyicon from '../assets/images/smilyicon.png'
import sendImg from '../assets/images/Vector2.png'
import { ChatMessage } from "./ChatMessage"

interface Props {
  chatMsg: any
}

export const Sidebar: React.FC<Props> = ({ chatMsg }): JSX.Element => {
    return(
        <>
          <div className="p-3" style={{ overflow: "auto" }}>
            {chatMsg.map((item: any, index: number) => (
                <ChatMessage item={item} />
            ))}
          </div>
          <Form className="d-flex position-fixed chat-form">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                Search
            </Form.Label>
            <InputGroup className="mb-2 position-relative">
                <FormControl id="inlineFormInputGroup" placeholder="Search" />
                {/* <InputGroup.Text><img src={Search} alt="search" /></InputGroup.Text> */}
                <img src={silyicon} className="position-absolute searchicon" />
            </InputGroup>
            <Button variant='outline-primary'><img src={sendImg} /></Button>
          </Form>
        </>
    )
}