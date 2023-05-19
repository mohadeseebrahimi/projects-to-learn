import './About.css'
import aboutimage from '../../assets/image/mod2.jpg'

function About(){
    return(
        <section className="about" id="about">
    <div className="about-img">
        <img src={aboutimage} alt=""/>
    </div>

    <div className="about-text">
        <h2>50 years of serving communities</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui saepe blanditiis odio eum ducimus dolorem, beatae explicabo vero voluptatum cumque!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, illo ipsum eos molestiae veritatis vel magni ullam id corporis esse.</p>
        <a href="#" className="btn">Learn More</a>
    </div>
</section>
    )
}

    export default About;