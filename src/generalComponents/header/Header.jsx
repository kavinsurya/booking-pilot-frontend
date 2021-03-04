import React from 'react'
import "./Header.css"


export function Header(props) {


  return (
    <div>
      <div className="header-body">
        <header className="header">
          <img
            className="img"
            srcSet="https://image.freepik.com/free-vector/cute-astronaut-with-popcorn-cartoon-vector-icon-illustration-science-food-icon_138676-1979.jpg"
            height="55px"
            width="75px"
            alt=""

          />
          <div className="menuDiv">
            <div>
              <a href="/" className="logo">
                Booking Pilot
              </a>
              <input className="menu-btn" type="checkbox" id="menu-btn" />
              <label className="menu-icon" htmlFor="menu-btn">
                <span className="navicon"></span>
              </label>
              <ul className="menu">
                <li>
                  <a href="/TheatreList">THEATRES</a>
                </li>

                <li>
                  <a href="/movies">MOVIES</a>
                </li>
                <li>
                  <a href="/contact">CONTACT US </a>
                </li>
                <li>

                  <div>
                    <a href="/login">LOGIN</a>
                  </div>
                </li>
              </ul>
            </div>    </div>
        </header>
      </div>
    </div>
  )
}


