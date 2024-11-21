import './Home.css'
const Nave = ()=> {
return(
    <nav>
                <div className="logo"> 
                    <img src="\images\brand_logo.png" alt="logo" />
                </div>
                <div className="tabs">
                    <ul>
                    <li><a href="#">MENU</a></li>
                    <li><a href="#">LOCATION</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACT</a></li>
                    </ul>
                </div>
                <div className="btn">
                    <button className='login'>Login</button>
                </div>
            </nav>
)
}
export default Nave