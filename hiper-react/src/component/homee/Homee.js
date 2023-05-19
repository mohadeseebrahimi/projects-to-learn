import Carousel from 'react-bootstrap/Carousel';
import dress1 from '../../assets/image/rakht.png';
import dress2 from '../../assets/image/r o s i e.jpg';
import dress3 from '../../assets/image/orange.jpg';
import './Homee.css'
import { Container, Row, Col } from 'react-bootstrap';




function Home() {
  return (

    <Container className='container1'>
      <Row className='align-items-center  my-5 px-5'>
        <Col lg={6}>
        <div id='home' className='home'>
          <div className='home-text'>
          <p style={{textAlign : 'justify'}}>WELCOME TO <br></br>
          <h1 className='title'>Lindex Clothes</h1><br></br>
          <h3>Free Clothes Is A<br></br>Tab Away</h3></p>
          <button  className='btn1'>join now</button>
        </div>
      </div>
        </Col>

        <Col>
        <Carousel lg={6} className='my-5'>
          <Carousel.Item>
            <img 
             
             src={dress1}
             alt="First slide"
           />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          
          src={dress2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          
          src={dress3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
        </Col>
      </Row>
    </Container>

    
    
 )
  }

export default Home;
