import React from 'react'
import "./Footer.css"

import { FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export function Footer() {
    
    return (
        <div>
          <div className="footer text-center">
            <div className="inner-footer">
              <div className="footer-items">
                <h1>Booking Pilot</h1>
                <p>Hurry up to book the tickets for your favourite movies</p>
              </div>
    
              <div className="footer-items">
                <h3>Quick Links</h3>
    
                <ul className="ul">
                  <a className="footer-anchor" href="/">
                    <li className="footer-li">Home</li>
                  </a>
                  <a className="footer-anchor" href="/movies">
                    <li className="footer-li">Movies</li>
                  </a>
                  <a className="footer-anchor" href="/Theatres">
                    <li className="footer-li">Theatres</li>
                  </a>
                  <a className="footer-anchor" href="/contactUS">
                    <li className="footer-li">Contact Us</li>
                  </a>
                </ul>
              </div>
    
              <div className="footer-items">
                <h3>Contact us</h3>
    
                <ul className="ul">
                  <li className="footer-li">
                    <FaPhoneAlt className="footer_liIcon" /> +91-9080689810
                  </li>
                  <li className="footer-li">
                    <FiMail className="footer_liIcon" />
                    contact.bookingpilot@gmail.com
                  </li>
                </ul>
              </div>
            </div>
    
            <div className="footer-bottom">
              Copyright &copy; Booking Pilot 2020.
            </div>
          </div>
        </div>
      );
    };





