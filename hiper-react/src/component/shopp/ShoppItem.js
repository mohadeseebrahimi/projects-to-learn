function ShoppItem(props){
    return(
        
        <div className="box">
            <div className="box-img">
                <img  src={props.shopimage} alt=""/>
            </div>
            <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
            </div>
            <h2>{props.shoptitle}</h2>
            <span>{props.shopprice}</span>
            <a href="#" className="btn">Order Now</a>
        </div>
       
    )

}

export default ShoppItem;