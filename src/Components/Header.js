import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                <strong>Главная</strong>
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                <strong>О нас</strong>
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                <strong>Услуги</strong>
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                <strong>Заказ</strong>
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                <strong>Контакты</strong>
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href="https://instagram.com/ainaserikusa" target="a_blank" 
                rel="noopener noreferrer" 
                className="button btn instagram-btn">
                <i className="fa fa-instagram"></i>Instagram
                </a>
                <a href="https://wa.me/77013617044"
                target="a_blank"
                rel="noopener noreferrer"
                className="button btn whatsapp-btn">
                  <i className="fa fa-phone"></i>WhatsApp
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
