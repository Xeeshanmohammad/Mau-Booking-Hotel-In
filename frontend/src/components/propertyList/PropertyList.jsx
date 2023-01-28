import React from 'react'
import "./PropertyList.css"

function PropertyList() {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=" alt="" className="pListImage" />
            <div className="pListTitle">
                <h2>Hotels</h2>
                <p>233 Hotel</p>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" alt="" className="pListImage" />
            <div className="pListTitle">
                <h2>Apartments</h2>
                <p>201 Apartment</p>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg" alt="" className="pListImage" />
            <div className="pListTitle">
                <h2>Villas</h2>
                <p>301 Villas</p>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg" alt="" className="pListImage" />
            <div className="pListTitle">
                <h2>Resorts</h2>
                <p>150 Resort</p>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg" alt="" className="pListImage" />
            <div className="pListTitle">
                <h2>Cabins</h2>
                <p>195 Cabin</p>
            </div>
        </div>
    </div>
  )
}

export default PropertyList
