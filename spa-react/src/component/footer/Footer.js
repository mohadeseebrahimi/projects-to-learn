import { Container, Col, Row } from "react-bootstrap";
import logo1 from '../../assets/images/demo.png'

import './Footer.css'

function Footer(){
    return(
        <footer>
            <Container>
                <Row>
                    <Col>
                    <h2>بهترین ها ما را انتخاب میکنند</h2>
                    <p>جهت پشتیبانی تلفنی و یا حضوری به نمایندگان رسمی منطقه خود مراجعه نمایند.</p>
                    </Col>
                    <Col style={{textAlign : 'left'}}>
                    <img src={logo1}/>
                    </Col>                   
                </Row>
            </Container>
        </footer>

    )
}

export default Footer;