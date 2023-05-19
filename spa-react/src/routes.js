import PrivateRoute from "./component/PrivateRoute";
import About from "./pages/about/About";
import Article from "./pages/article/Article";
import Course from "./pages/course/Course";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Panel from "./pages/panel/Panel";
import Setting from "./pages/Setting";


const routes = [
    {path : '/' , element : <Home/>},
    {path : '/about' , element : <About/>},
    {path : '/article/*' , element : <Article/> , children :[
      {path:"php" , element : <h2>سیستم رستورانی با توجه به آنكه پرسنل سازمان جهت استفاده از رستوران از يارانه استفاده مي نمايند براي جلوگيري از سوء استفاده و صرفه جويي و اعمال كنترل و مديريت دقيق تر,مكانيزه نمودن رستوران ها مطرح شده و مورد توجه قرارگرفته است همچنين عمليات مالي و كنترل سريع و دقيق پيمانكاران نيز دليل ديگري براي مكانيزه شدن فرايند مي باشد,كه طبق تجربه در سازمان هايي كه ازاین سيستم استفاده كرده اند ابزار بسيار موثري در اين خصوص بوده است</h2>},
      {path:"js", element : <h2>تعريف انواع متنوع مشخصات عضويت و مشخص نمودن بازه تاريخي اعتبار آنها و تعيين قيمت در بازه تاريخي تعريف شده.امکان تعریف انواع تقویمهای عضویت</h2>},
      {path:"react" , element : <h2>اگر برخی از مدیران مجموعه شما در مواقع خاص به کامپیوتر و نرم افزار دسترسی ندارند، این سرویس ابزار مناسبی است تا وقایع پراهمیت سیستم را از طریق تلفن همراه وي به اطلاعش برسانید. کافی است واقعه مورد نظر و شماره تلفن همراه مدیر را به سرویس اعلام نمایید.</h2>},
    ]},
    {path : '/login' , element : <Login/>},
    {path : '/panel' , element : <PrivateRoute><Panel/></PrivateRoute>},
    {path : '/setting' , element : <PrivateRoute><Setting/></PrivateRoute>},
    {path : '/course/:courseId' , element : <Course/>},
]

export default routes