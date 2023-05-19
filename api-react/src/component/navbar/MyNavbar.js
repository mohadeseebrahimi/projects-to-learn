import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import './MyNavbar.css'



function MyNavbar(){
      const expand = 'md'
    return(
        <Navbar style={{backgroundColor:'lightgray'}} expand={expand} className="mb-3">
        <Container>
          <Navbar.Brand style={{fontFamily:'Lalezar', fontSize:'25px'}} href="#">مقاله ها</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                مقاله ها
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink to='/' className='nav-link'>صفحه اصلی</NavLink>
                <NavLink to='/add-article' className='nav-link'>مقالات</NavLink>
                <NavLink to='/about' className='nav-link'>درباره ما</NavLink>
                
              </Nav>
            </Offcanvas.Body>
            
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    )
}
export default MyNavbar;