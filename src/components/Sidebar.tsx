import { useState } from "react"
import { Button, Form, FormControl, InputGroup } from "react-bootstrap"
import { ChatMessage } from "./ChatMessage"
import silyicon from '../assets/images/smilyicon.png'
import sendImg from '../assets/images/Vector2.png'
import Cagezinho from '../assets/images/1Ellipse 48.png';
import Varti from '../assets/images/Ellipse 48.png'
import Ellen from '../assets/images/Ellipse 481.png'
import ImageParty from '../assets/images/image 1.png'

export const Sidebar: React.FC = (): JSX.Element => {
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

  return(
    <>
      <div className="p-3" style={{ overflow: "auto" }}>
        {chatMsg.map((item: any, index: number) => (
            <ChatMessage item={item} key={index}/>
        ))}
      </div>
      <Form className="d-flex position-fixed chat-form">
        <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
            Search
        </Form.Label>
        <InputGroup className="mb-2 position-relative">
            <FormControl id="inlineFormInputGroup" placeholder="Search" />
            <img src={silyicon} className="position-absolute searchicon" />
        </InputGroup>
        <Button variant='outline-primary'><img src={sendImg} /></Button>
      </Form>
    </>
  )
}