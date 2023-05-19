import { Container, Row , Col } from "react-bootstrap";
import MyNavbar from "../../component/navbar/Navbar";
import progImage from "../../assets/images/feeling.svg"
import CourseItem from "../../component/course/CourseItem";
import Footer from "../../component/footer/Footer";
import { useState } from "react";
import {courseData} from "../../data";

function Home(){

    const[courses , setcourses] = useState(courseData)
    return(
        <>
        <MyNavbar/>
        <Container>
            <Row className=" my-5 align-items-center">
                <Col lg='6'>
                   <h1>شرکت نرم افزار پاسارگاد</h1>
                   <p style={{textAlign:'justify'}}>اولین تولید و عرضه کنندگان سیستم های کنترل حضور و غیاب پرسنل در کشور و فعالیت در زمینه طراحی و تولید سیستم های کنترلی شامل سخت افزار و نرم افزارهای مربوطه برطرف نمودن هرگونه مشکل نرم افزاری در اسرع وقت پس از اعلام و مراجعه کارشناسان جهت رفع اشکال
                    ارائه نسخه اصلاح جدید
                    اعزام نیرو به محل مشتری ظرف مدت 4 ساعت کاری پس از درخواست
                    راهنمایی و رفع اشکال از طریق تلفن و خدمات اینترنتی
                    سرکشی ماهیانه پرسنل جهت بررسی وضعیت سیستم
                    تامین کلیه قطعات سخت افزاری دستگاه کارتزنی بدون دریافت هزینه (به استثناء سنسور اثر انگشت)
                    آموزش یک دوره کامل سخت افزار و نرم افزار به افراد معرفی شده در قرارداد
                    جابجایی نرم افزار یا محل کارتزنی در طول مدت قرارداد
                    تحویل دستگاه تعمیری ارسالی به شرکت در همان روز یا تحویل دستگاه بجای آن</p>              
                </Col>

                <Col lg='6' className="py-4">
                <img src={progImage} className="img-fluid"/>
                </Col>
            </Row>

            <Row className="my-5">
                <h2 className="py-4">آنچه ما را متمایز میسازد</h2>

                {courses.map( course => (
                    <Col key={course.id} className="py-3" md={6} lg={4} xl={3}>
                     <CourseItem {...course}/>
                    </Col>
                ))}
           
            </Row>
        </Container>
        <Footer/>
        </>

    )
}

export default Home;