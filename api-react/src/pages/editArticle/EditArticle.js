import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyNavbar from "../../component/navbar/MyNavbar";
import {Form , Button } from "react-bootstrap"
import Swal from "sweetalert2";

function EditArticle(){

    const [articleData , setArticleData] = useState({})
    const articleId = useParams().articleId;

    useEffect(()=>{
        axios.get(`http://localhost:5000/articles/${articleId}`)
        .then(response=>setArticleData(response.data))
    }, [])

    const editArticleHandler = ()=>{
        axios.put(`http://localhost:5000/articles/${articleId}` , articleData)
        Swal.fire({
            title : 'ویرایش شد',
            timer : '1500',
            timerProgressBar : true,
            showConfirmButton : false
        })

    }

    const formHandler = (e)=>{
        setArticleData({...articleData, [e.target.name] : e.target.value})

    }
    return(
        <>
        <MyNavbar/>
        <div className="formContainer">
        <Form>
         <Form.Group className="mb-3">
           <Form.Label>عنوان</Form.Label>
           <Form.Control value={articleData.title} name="title" onChange={formHandler} type="text" placeholder="onvan vared konid" />
          </Form.Group>

          <Form.Group className="mb-3">
           <Form.Label>توضیح</Form.Label>
           <Form.Control value={articleData.desc} name="desc" onChange={formHandler}  type="text" placeholder="onvan vared konid" />
          </Form.Group>

          <Form.Group className="mb-3">
           <Form.Label>نویسنده</Form.Label>
           <Form.Control value={articleData.writer} name="writer" onChange={formHandler}  type="text" placeholder="onvan vared konid" />
          </Form.Group>

          <Form.Group className="mb-3">
           <Form.Label>موضوع</Form.Label>
           <Form.Control value={articleData.category} name="category" onChange={formHandler}  type="text" placeholder="onvan vared konid" />
          </Form.Group>

          <Form.Group className="mb-3">
           <Form.Label>عکس</Form.Label>
           <Form.Control value={articleData.image} name="image" onChange={formHandler}  type="text" placeholder="onvan vared konid" />
          </Form.Group>

          <Form.Group className="mb-3">
           <Form.Label>زمان</Form.Label>
           <Form.Control value={articleData.readingTime} name="readingTime" onChange={formHandler}  type="number" placeholder="onvan vared konid" />
          </Form.Group>

     
      <Button onClick={editArticleHandler} variant="primary" type="button">
       ویرایش مقاله
      </Button>
   </Form>
        </div>
        
       </>
    )
}

export default EditArticle;