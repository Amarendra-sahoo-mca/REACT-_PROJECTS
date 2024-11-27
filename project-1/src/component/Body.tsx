import './Home.css'
const Body = ()=>{
return(
    <div className="content">
        <div className="text">
            <div className="header">YOUR FEET DESERVE &nbsp; THE BEST</div>
            <div className="footer">
                <div className="desc"><p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p></div>
                <div className="buttons">
                <button className="login shop_now">shop Now</button>
                <button className='shop_now'>category</button>
                </div>
                <div className='info'>Also Available On</div>
                <div className="app_icon">
                <img src="public\images\flipkart.png" alt="" />
                <img src="public\images\amazon.png" alt="" />
                </div>
            </div>
        </div>
        <div className="images">
            <img src="public\images\shoe_image.png" alt="" />
        </div>
    </div>
)
}
export default Body