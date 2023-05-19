import { useParams } from "react-router-dom";
import MyNavbar from "../../component/navbar/Navbar";
import {courseData} from '../../data'
import { Container, Row , Col } from "react-bootstrap";

function Course(){

    const courseId =useParams().courseId
    const courseInfo = courseData.find(course => course.id == courseId)
    console.log(courseInfo)
    return(
        <>
        <MyNavbar/>
        <Container>
            <Row className="align-items-center">
                <Col md={5}>
                  <img style={{width : '80%'}} src={courseInfo.img}/>

                </Col>
                <Col className="my-4" md={7}>
                 <h2 style={{fontFamily : 'Lalezar'}}>{courseInfo.title}</h2>
                 <p>نام کارفرما:{courseInfo.teacher}</p>
                 <p><b>{courseInfo.text}</b></p>
                 <p style={{textAlign : 'justify'}}>مهم ترین عامل موثر در حفظ امنیت دارایی‌های اطلاعاتی و نیز پیشگیری از اختلال عملکرد سرویسهای سازمانی، واکنش  هماهنگ و یکپارچه راهکارهای حفاظتی می باشد. راهکارهای حفاظتی علم و صنعت ترکیبی هماهنگ از محصولات و خدمات ویژه منطبق با استانداردهای امنیت فناوری اطلاعات بوده که علاوه بر کاهش هزینه های اجرایی و نگهداری، امکانات امنیتی فراگیر را در اختیار شما قرار می دهد.
                 مهمترین هدف ما ارائه فناوریهای نوین حفاظتی و نیز برترین محصولات بین‌المللی به همراه خدمات پشتیبانی با کیفیت و استاندارد می باشد. برای تحقق این هدف، محصولات دفاعی برتر توسط تیم تحقیق و توسعه ما مورد بررسی قرار گرفته و بهترین محصولات بر اساس پارامترهایی مانند سازگاری، یکپارچگی و نیز توانایی، برای ارائه به مشتریان در سبد محصولات قرار گرفته </p> 
                </Col>
            </Row>
        </Container>
        </>

    )
}

export default Course;