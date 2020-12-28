import { React } from "react";
import "./header.css";

const Header = () => {
  let role = localStorage.getItem("userRole");
  let logged = localStorage.getItem("loginStatus");
  console.log(role);
  console.log(logged);

  function clearData() {
    localStorage.clear();
    debugger
  }


  return (
    <div className="header-body">
      <header className="header">
        <img
          className="img"
          src="https://image.freepik.com/free-vector/cute-astronaut-with-popcorn-cartoon-vector-icon-illustration-science-food-icon_138676-1979.jpg"
          height="60px"
          width="75px"
          alt=""
          srcSet=""
        />
        <div className="menuDiv">
          {role === "ADMIN" ? (
            <div>
              <a href="/HomepageAdmin" className="logo">
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
                  {(logged !== "true" ? (
                    <div>
                      <a href="/login">LOGIN</a>
                    </div>
                  ) : (
                      <div>
                        <a href="/" onClick={clearData}>
                          LOGOUT
                      </a>
                      </div>
                    ))}
                </li>
              </ul>
            </div>
          ) : role === "Agent" ? (
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
                  <a href="/contact">CONTACT</a>
                </li>
                <li>
                  {(logged !== "true" ? (
                    <div>
                      <a href="/login">LOGIN</a>
                    </div>
                  ) : (
                      <div>
                        <a href="/" onClick={clearData}>
                          LOGOUT
                      </a>
                      </div>
                    ))}
                </li>
              </ul>
            </div>
          ) : (
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
                      <a href="/movies">MOVIES</a>
                    </li>

                    <li>
                      <a href="/contact">CONTACT</a>
                    </li>
                    <li>
                      {(logged !== "true" ? (
                        <div>
                          <a href="/login">LOGIN</a>
                        </div>
                      ) : (
                          <div>
                            <a href="/" onClick={clearData}>
                              LOGOUT
                      </a>
                          </div>
                        ))}
                    </li>
                  </ul>
                </div>
              )}
        </div>
      </header>
    </div>
  );
};

export default Header;
