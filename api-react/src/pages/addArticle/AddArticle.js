import MyNavbar from "../../component/navbar/MyNavbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddArticle.css'
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

function AddArticle(){

    const [formData , setFormData] = useState({});

    const resetFormData = ()=>{
        setFormData({
            title : '',
            desc : '',
            writer : '',
            category : '',
            image : '',
            readingTime : ''
        })
    }


    const addarticleHandler = ()=>{

        axios.post('http://localhost:5000/articles' , formData)
         .then(response =>{
            if(response.status === 201){
                Swal.fire({
                    title : 'sucsess',
                    timer : 1500,
                    timerProgressBar : true,
                })
            }
         })
         .catch(error=>{
            Swal.fire({
                title : 'No sucsess',
                timer : 1500,
                icon : 'error',
                timerProgressBar : true,
            })
         })

         resetFormData()
        
    }

    const formHandler = (e)=>{

        setFormData({...formData, [e.target.name] : e.target.value})


    }



    return(
        <>
         <MyNavbar/>
         <div className="formContainer">
         <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان</Form.Label>
            <Form.Control value={formData.title} name="title" onChange={formHandler} type="text" placeholder="عنوان را وارد کنید" />
           </Form.Group>

           <Form.Group className="mb-3">
            <Form.Label>توضیح</Form.Label>
            
            <Form.Control value={formData.desc} name="desc" onChange={formHandler}  type="text" placeholder="توضیحات" />
           </Form.Group>

           <Form.Group className="mb-3">
            <Form.Label>نویسنده</Form.Label>
            <Form.Control value={formData.writer} name="writer" onChange={formHandler}  type="text" placeholder="نام نویسنده" />
           </Form.Group>

           <Form.Group className="mb-3">
            <Form.Label>موضوع</Form.Label>
            <Form.Control value={formData.category} name="category" onChange={formHandler}  type="text" placeholder="دسته بندی" />
           </Form.Group>

           <Form.Group className="mb-3">
            <Form.Label>عکس</Form.Label>
            <Form.Control value={formData.image} name="image" onChange={formHandler}  type="text" placeholder="بارگذاری عکس" />
           </Form.Group>

           <Form.Group className="mb-3">
            <Form.Label>زمان</Form.Label>
            <Form.Control value={formData.readingTime} name="readingTime" onChange={formHandler}  type="number" placeholder="مدت زمان" />
           </Form.Group>

      
       <Button onClick={addarticleHandler} variant="primary" type="button">
        ساخت مقاله
       </Button>
    </Form>
         </div>
         
        </>
    )
}

export default  AddArticle;