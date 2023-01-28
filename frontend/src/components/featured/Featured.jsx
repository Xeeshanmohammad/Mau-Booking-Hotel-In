import React from 'react'
import './Featured.css'
function Featured() {
  return (
    <div className="featured">
      <div className="featureItem">
        <img src="https://content3.jdmagicbox.com/comp/mau/d5/9999px547.x547.190205095401.c6d5/catalogue/hotel-shahjahan-mau-0wcjezgdhy.jpg" alt="auto" width="400" height="300" className='featuredImg'/>
        <div className="featureTitle">
          <h2>HOTEL SHAHJAHAN </h2>
          <p>SAEEDI ROAD MAU</p>
        </div>
      </div>
      <div className="featureItem">
        <img src="https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1538634774/Hotel/00139750/FRONT_VIEW_Todx3l.jpg" alt="auto" width="400" height="300" />
        <div className="featureTitle">
          <h2> HOTEL GEETANJALI</h2>
          <p>MAU</p>
        </div>
      </div>
      <div className="featureItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="auto" width="400" height="300" />
        <div className="featureTitle">
          <h2> HOTEL ADIL</h2>
          <p>SINDHI COLONY MAU</p>
        </div>
      </div>
      <div className="featureItem">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBlWpDCcc6i1y_yRIdk_AAIV_iL5NzcfBjEQ&usqp=CAU" alt="auto" width="450" height="300" />
        <div className="featureTitle">
          <h2>HOTEL SANGAM </h2>
          <p>RESHMI GALI, NEAR BATA MAU</p>
          
        </div>
      </div>
    </div>
  )
}

export default Featured
