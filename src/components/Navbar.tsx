import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, InputGroup, Dropdown, Badge } from "react-bootstrap"
import UserImage from '../assets/images/noel 1.png' 
import BellImage from '../assets/images/Arrow - Down 5.png' 
import Logo from '../assets/images/Hypothese.png'
import Search from '../assets/images/Search.png'

export const NavbarMenu: React.FC = (): JSX.Element => {
    return(
    <Navbar expand="lg" className="navigation-menu">
    <Container fluid>
        <Navbar.Brand href="#" className="w-15">
            <img src={Logo} alt="Logo" className="w-100"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0 w-50 justify-content-evenly"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link href="#" active>Dashboard</Nav.Link>
            <Nav.Link href="#action2">Exchange</Nav.Link>
            <Nav.Link href="#action3">Wallte</Nav.Link>
            <Nav.Link href="#action4">Market</Nav.Link>
        </Nav>
        <Form className="d-flex searchbox me-5">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                Search
            </Form.Label>
            <InputGroup className="mb-2 position-relative">
                <FormControl id="inlineFormInputGroup" placeholder="Search" />
                {/* <InputGroup.Text><img src={Search} alt="search" /></InputGroup.Text> */}
                <img src={Search} className="position-absolute searchicon"/>
            </InputGroup>
        </Form>
        </Navbar.Collapse>

        <Button variant="default" className="me-3">
            <img src={BellImage} alt="Bell" /> 
            <Badge bg="secondary">&nbsp;</Badge>
            <span className="visually-hidden">unread messages</span>
        </Button>

        <Dropdown className="d-inline ms-2 profile-menu">
            <Dropdown.Toggle id="dropdown-autoclose-true">
                Noel <img src={UserImage} alt="Profile" style={{borderRadius: "50px", width:"40px", height: "40px"}}/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </Container>
    </Navbar>
    )
}