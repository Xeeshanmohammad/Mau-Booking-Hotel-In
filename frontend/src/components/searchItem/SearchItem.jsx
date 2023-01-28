import React from 'react'
import "./SearchItem.css"

const SearchItem = () => {
  return (
   <div className="searchItem">
    <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="sItemImage" />
    <div className="searchDescrip">
        <h1 className="searchTitle">Tower Street Apartments</h1>
        <span className="searchDistance">500m from center</span>
        <span className="searchTaxi">Free Airport Taxi</span>
        <span className="searchSubTitle">Studio Apartment with Air Conditioning</span>
        <san className="searchfeature">Entire studio • 1 bathroom • 21m² 1 full bed</san>
        <span className="searchCancelOp">Free cancellation </span>
        <span className="searchCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
    </div>
    <div className="searchDetails">
        <div className="searchRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="searchDetailTexts">
          <span className="searchPrice">$112</span>
          <span className="searchTaxOp">Includes taxes and fees</span>
          <button className="searchCheckButton">See availability</button>
        </div>
        </div>
   </div>
  )
}

export default SearchItem
