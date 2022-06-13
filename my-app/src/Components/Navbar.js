import React from "react"
import Nav from "../img/nav.png"

export default function Navbar (){
    return(
      <nav>
         
         <div className="logo-info">
             <img className="nav-img" src={Nav} alt="logo"/>
             <h1 className="ReactF">ReactFacts</h1>
        </div>
         <div className="info">React Course-Project 1</div>
      </nav>
    )
}