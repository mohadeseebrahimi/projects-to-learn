import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-3 " fixed="top" >
          <Container fluid>
            
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Fashion
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='off'>
                <Nav id='nav' className="justify-content-start flex-grow-1 pe-3 mx-4">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#shop">Shop</Nav.Link>
                  <Nav.Link href="#delivery">delivery</Nav.Link>
                  <Nav.Link href="#app">App</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#contact" >Contact</Nav.Link>
                  
                  

                  
               
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button id='btn-search' className='btn-search' variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
