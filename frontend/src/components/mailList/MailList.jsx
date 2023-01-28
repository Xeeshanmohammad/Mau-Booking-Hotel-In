import "./MailList.css"

import React from 'react'

function MailList() {
  return (
    <div className="mailList">
        <h1 className="mailTitle">Save time, Save money!</h1>
        <span className="mailDesc">Sign up and we'll send best deals to you</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
        </div>

    </div>
  )
}

export default MailList