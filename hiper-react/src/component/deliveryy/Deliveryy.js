import './Deliveryy.css'
import delimage from '../../assets/image/order.jpg'

function Deliveryy(){
    return(
        <section className="delivery" id="delivery">
    <div className="heading">
        <span>Get Now</span>
        <h1>Easy Shopping</h1>
    </div>

    <div className="container">
        <div className="delivery-img">
            <img src={delimage} alt=""/>
        </div>
        <div className="delivery-text">
            <h2>Today deserve delivery</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui saepe blanditiis odio eum ducimus dolorem, beatae explicabo vero voluptatum cumque!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, illo ipsum eos molestiae veritatis vel magni ullam id corporis esse.</p>
            <a href="#" className="btn">Order Now</a>
        </div>
    </div>
</section>
    )
}

export default Deliveryy;
