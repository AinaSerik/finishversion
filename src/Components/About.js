import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Logo Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>О нас</h2>
              <p>{bio}</p>
              <p><strong>Почему нас выбирают</strong></p>
              <li>Никаких наценок на товар</li>
              <li>Работаем с оригиналом</li>
              <li>Доставляем заказ по всему миру</li>
              <li>Персональный подход, рассматриваем сотрудничество</li>
              <li>Представительство в Алмате, возможность хранения товара до 30 дней</li>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
