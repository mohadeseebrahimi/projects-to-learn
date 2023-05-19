import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Link, useNavigate, useParams } from "react-router-dom";
import MyNavbar from "../../component/navbar/MyNavbar";
import { Container, Row , Col, Button } from "react-bootstrap";
import {BsPencilSquare} from "react-icons/bs"
import { BiTimeFive , BiCategoryAlt } from "react-icons/bi";
import {MdDelete , MdOutlineEditCalendar} from "react-icons/md";
import Swal from "sweetalert2";
import './Article.css'

function Article(){

    const articleId = useParams().articleId
    const [articleData , setArticleData] = useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:5000/articles/${articleId}`)
        .then(response => setArticleData(response.data))

    }, [])

    

    const deleteArticleHandler = (id)=>{
        Swal.fire({
            title: 'مطمعنی؟',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'بله حذف کن',
            cancelButtonText:'خیر'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title : 'ایجاد شد',
                icon : 'success'
             })
             axios.delete(`http://localhost:5000/articles/${id}`)
             navigate('/')
            }
          })

       

    }


    return(
        <>
          <MyNavbar/>
          <Container>
            <Row style={{marginTop : '70px'}}>
                <Col lg={4}>
                    <div className="articleCardContainer">
                        <div className="cardHeader">
                            <img src={articleData.image}/>
                            <h4>{articleData.title}</h4>
                        </div>

                        <div className="cardBody">
                            <p>
                                <BsPencilSquare size='25px'/>
                                نویسنده : <b>{articleData.writer}</b>
                            </p>
                            <p>
                                <BiTimeFive size='25px'/>
                                زمان : <b>{articleData.readingTime} دقیقه</b>
                            </p>
                            <p>
                                <BiCategoryAlt size='25px'/>
                                موضوع : <b>{articleData.category}</b>
                            </p>
                        </div>

                        <div className="cardFooter">
                            <Button onClick={()=>deleteArticleHandler(articleId)} variant="outline-danger"><MdDelete size='25px'/>حذف</Button>
                            <Link to={`/edit-article/${articleId}`}>
                            <Button variant="outline-primary"><MdOutlineEditCalendar size='25px'/>ویرایش</Button>
                            </Link>

                        </div>


                    </div>

                </Col>

                <Col lg={8}>
                 <p>Opera مرورگر اپرا برای کاربری‌ های عمومی اینترنت نظیر نمایش وبسایت‌ها، دریافت و ارسال نامه‌های الکترونیکی، مدیریت ارتباطات، گفتگوی برخط آی‌ آرسی، بارگذاری از طریق پروتکل بیت‌ تورنت و خواندن فیدهای وب مورد استفاده قرار می‌گیرد. اپرا برای رایانه‌های شخصی، تلفن‌های همراه و تبلت‌ها به طور رایگان عرضه می‌گردد. اپرا به صورت یک پروژه تحقیقاتی در شرکت تله‌نور، بزرگترین شرکت ارتباطی نروژی، پا به عرصه وجود گذاشت. اجزای اصلی اپرا عبارتند از مرور بر پایه‌ها تب‌ها، امکانات کوچک و بزرگنمایی صفحات، تنوع اشکال نشانگر موس و یک بخش مدیریت بارگذاری یکپارچه‌است. از نظر امنیتی اپرا دارای یک محافظ داخلی در مقابل حملات فیشینگ و برنامه‌های موسوم به بدافزار (Malware) است، همچنین دارای توانایی حفظ امنیت در هنگام مرور وبسایت‌ ها و حذف اطلاعات شخصی همچون کوکی است.</p>
                 <p>مجموعه ای از ابزارهای کاربردی سیستم به منظور ثبات، افزابش سرعت، تعمیر و محافظت از کامپیوتر شما می باشد. Glary Utilities به شما اجازه حذف فایل های زائد، کلید های رجیستری نامعتبر و تمامی ردپاهای به جا مانده از وبگردی های شما را می دهد. بوسیله این نرم افزار شما همچنین می توانید مدیریت و پاک سازی مرورگر، آنالیز فضای استفاده شده هارد دیسک و شناسایی فایل های تکراری بر روی سیستم را انجام دهید. از این گذشته این نرم افزار دارای آیتم هایی برای بهینه سازی حافظه، پیدا کردن، ثابت کردن، حذف میانبرهای نامعتبر ویندوز، مدیریت برنامه هایی که در هنگام بوت شدن سیستم شروع به کار می نماید و عزل کردن برنامه ها می باشد.Opera مرورگر اپرا برای کاربری‌ های عمومی اینترنت نظیر نمایش وبسایت‌ها، دریافت و ارسال نامه‌های الکترونیکی، مدیریت ارتباطات، گفتگوی برخط آی‌ آرسی، بارگذاری از طریق پروتکل بیت‌ تورنت و خواندن فیدهای وب مورد استفاده قرار می‌گیرد. اپرا برای رایانه‌های شخصی، تلفن‌های همراه و تبلت‌ها به طور رایگان عرضه می‌گردد. اپرا به صورت یک پروژه تحقیقاتی در شرکت تله‌نور، بزرگترین شرکت ارتباطی نروژی، پا به عرصه وجود گذاشت. اجزای اصلی اپرا عبارتند از مرور بر پایه‌ها تب‌ها، امکانات کوچک و بزرگنمایی صفحات، تنوع اشکال نشانگر موس و یک بخش مدیریت بارگذاری یکپارچه‌است. از نظر امنیتی اپرا دارای یک محافظ داخلی در مقابل حملات فیشینگ و برنامه‌های موسوم به بدافزار (Malware) است، همچنین دارای توانایی حفظ امنیت در هنگام مرور وبسایت‌ ها و حذف اطلاعات شخصی همچون کوکی است.</p>
                </Col>

            </Row>
          </Container>
        </>
    )
}

export default Article;