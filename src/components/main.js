import React, { Component } from "react";
//import the testimonials
import Articles from "./articles";
import Services from "./services";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <header>
          <nav>
            <ul>
              <li>LOGO</li>
              <li id="menu">
                <div id="nav-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">PRENDRE RDV</a>
              </li>
              <li>
                <a href="#">SERVICES</a>
              </li>
              <li>
                <a href="#">ARTCLES</a>
              </li>
              <li>
                <a href="#">QUESTIONS REPONSES</a>
              </li>
            </ul>
          </nav>
          <div className="header-data">
            <h1>Lorem Ipsum.</h1>
            <p>Integer tincidunt tempor libero in condimentum.</p>
          </div>
        </header>

        <Services />
        <Articles />

        {/* <section className="dual-card">
          <div>
            <p className="title">Cras sollicitudin turpis</p>
            <p>
              Phasellus cursus dictum tortor vel imperdiet. Nunc at lacus
              sapien. Etiam ipsum quam, tincidunt ut lobortis et, finibus vitae
              dui. Vestibulum accumsan magna a metus vehicula, sit amet lobortis
              lectus finibus. Integer dapibus, libero sed suscipit egestas, sem
              magna porta nibh, in lobortis mi ipsum scelerisque turpis.
            </p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1506703248799-a1b1896290e8?auto=format&fit=crop&w=634&q=80" />
          </div>
        </section> */}

        {/* <section className="img-section">
          <p>Image section</p>
        </section>

        <section className="imgs-bar">
          <img src="https://images.unsplash.com/photo-1496284045406-d3e0b918d7ba?auto=format&fit=crop&w=2134&q=80" />
          <img src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=634&q=80" />
          <img src="https://images.unsplash.com/photo-1504420379316-1a01ae921844?auto=format&fit=crop&w=634&q=80" />
          <img src="https://images.unsplash.com/photo-1496979149951-4fd28cf221e7?auto=format&fit=crop&w=634&q=80" />
        </section> */}

        <footer>
          <div className="data">
            <ul>
              <li>
                <p className="title">LOGO</p>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </div>
          <div className="media">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitch" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default Main;
