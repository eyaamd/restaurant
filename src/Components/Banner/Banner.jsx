import React from 'react'
import './Banner.css'
import banner_1 from '../../assets/banner1.webp'
import banner_2 from '../../assets/banner2.webp'
const Banner = () => {
  return (
    <>
    
    <section className="banner">
        <div className="banner-content">
          
            <div className="banner-box">
                <div className="banner-img">
                    <img src={banner_1}alt="" />
                    <div className="banner-in">
                        <h5>Fone Store</h5>
                        <h3>Delicious Foods</h3>
                        <a href="#" className="b-btnn"> Shop Now</a>
                    </div>
                </div>
            </div>



            <div className="banner-box">
                <div className="banner-img">
                    <img src={banner_2} alt="" />
                    <div className="banner-in">
                        <h5>Fone Store</h5>
                        <h3>Delicious Foods</h3>
                        <a href="#" className="b-btnn"> Shop Now</a>
                    </div>
                </div>
            </div>





        </div>
    </section>


    </>
  )
}

export default Banner