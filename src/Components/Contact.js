import React, {Component} from "react";
import {Fade, Slide} from "react-reveal";
import Toggle from "./Toggle";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.address.phone;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Связаться с нами</span>
              </h1>
            </div>
            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <Toggle title="Процесс покупки">
                <div className="answer">
                  <p>Скинуть нам ссылку корзины с товаром в ватсап, скинуть чек об оплате на ватсап и ждете посылку</p>
                </div>
              </Toggle>
              <Toggle title="Когда оплачитвать за доставку">
                <div className="answer">
                  <p>За доставку оплачиваете после того, как товар отправлен. Мы, при получении вашего товара, его взвешиваем и считаем точную сумму за доставку.</p>
                </div>
              </Toggle>
              <Toggle title="С какими онлайн-магазинами вы работаете">
                <div className="answer">
                  <p>Если вы не нашли онлайн-магазин, где хотели бы совершить покупку, то свяжитесь с нами по ватсап. Мы решим этот вопрос в вашу пользу</p>
                </div>
              </Toggle>
              <Toggle title="Возможно ли отменить заказ">
                <div className="answer">
                  <p>Заказ можно отменить в течние 24 часа, так как некоторые онлайн-магазины отправляют товар в ускоренные сроки и чтобы отменить их заказ нам придется самим оплачивать доставку, что является экономически нерентабельно для нашей компании</p>
                </div>
              </Toggle>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Адрес:</h4>
                <p className="address">
                  {name}
                  <br />
                  {street} <br />
                  {city}, {zip} {state} <br />
                  {phone}
                </p>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;