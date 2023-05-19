import { Outlet, Route, Routes } from "react-router-dom";
import MyNavbar from "../../component/navbar/Navbar";
import { Link } from "react-router-dom";
import './Article.css'

function Article(){
    return(
        <div className="articleWrapper">
        <MyNavbar/>
        <h1>مقالات</h1>
        <hr></hr>
        <div className="btnContainer">
            <Link to='php' className="linkBtn">محصولات</Link>
            <Link to='js' className="linkBtn">نمایندگان</Link>
            <Link to='react' className="linkBtn">خدمات</Link>

        </div>
        <hr></hr>

        <Outlet/>

        </div>

    )
}

export default Article;