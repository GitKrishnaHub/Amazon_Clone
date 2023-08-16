import React from 'react'
import {bannerImgOne,bannerImgTwo,bannerImgThree,bannerImgFour,bannerImgFive} from '../../assets/index';



function Banner() {
  return (
    <div id="carouselExampleInterval" className="carousel slide w-full" data-bs-ride="carousel">
  <div className="carousel-inner w-full h-full ">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src={bannerImgOne} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={bannerImgTwo} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={bannerImgThree} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={bannerImgFour} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={bannerImgFive} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon  " aria-hidden="true"></span>  
    <span className="visually-hidden">Next</span>
  </button>
</div>


    
  )
}

export default Banner
