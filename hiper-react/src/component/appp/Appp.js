import './Appp.css'
import appimage from '../../assets/image/online.png'

function Appp(){
    return(
        <section className="app" id="app">
    <div className="heading">
        <span>Our App</span>
        <h1>Download App</h1>
    </div>

    <div className="container">
        
        <div className="app-text">
            <h2>Fall into an easier routine</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui saepe blanditiis odio eum ducimus dolorem, beatae explicabo vero voluptatum cumque!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, illo ipsum eos molestiae veritatis vel magni ullam id corporis esse.</p>
            <a href="#" className="btn">Get App</a>
        </div>
        <div className="app-img">
            <img src={appimage} alt=""/>
        </div>
    </div>
</section>
    )
}

export default Appp