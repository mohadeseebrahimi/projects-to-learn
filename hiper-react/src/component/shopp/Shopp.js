import './Shopp.css'
import ShoppItem from "./ShoppItem";
import img1 from "../../assets/image/pinkbag.png"
import img2 from "../../assets/image/bagg2.png"
import img3 from "../../assets/image/pinkbag.png"


function Shopp(){

    let shops = [
        {
            shopimage : img1,
            shoptitle : 'pink bag1',
            shopprice : '$ 12.4',

        },
        {
            shopimage : img2,
            shoptitle : 'orange bag2',
            shopprice : '$ 10.4',

        },
        {
            shopimage : img3,
            shoptitle : 'pink bag3',
            shopprice : '$ 15.4',

        },

    ]





    return(
        <section className="shop" id="shop">
    <div className="heading">
        <span>Shop Now</span>
        <h1>Shop Ware</h1>
    </div>
    <div className="shop-container">
        <ShoppItem {...shops[0]}/>
        <ShoppItem {...shops[1]}/>
        <ShoppItem {...shops[2]}/>



    </div>
</section>
    )
}

export default Shopp;


